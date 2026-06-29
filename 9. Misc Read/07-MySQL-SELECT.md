# SELECT
        
## _`DISTINCT`_
            
> ```
> SELECT DISTINCT CITY FROM tbl_person;
> ```
> _Returns all distinct values from the city column._
> 
> ```
> SELECT DISTINCT CITY, NAME FROM tbl_person;
> ```
> _Returns all distinct values from the combination of `CITY` and `NAME` from the table._

&nbsp;

## _`WHERE` clause with OPERATORS AND WILDCARDS_

> ### _Equality_
> ```
> SELECT * FROM tbl_person WHERE CITY = 'london';
> SELECT * FROM tbl_person WHERE CITY <> 'london'; 
> SELECT * FROM tbl_person WHERE CITY != 'london';
> ```

> ### _`LIKE` and `NOT LIKE`_
> _Following wildcards are used with LIKE and NOT LIKE_
> 
> - `%` : a placeholder or a substitute for some characters.
> 
> - `_` : specifies exactly one character.
> 
> ```
> SELECT * FROM tbl_person WHERE CITY LIKE 'M%'
> ```
> _Returns rows having city starting with letter 'M'._
> 
> ```
> SELECT * FROM tbl_person WHERE EMAIL NOT LIKE '%@%';
> ```
> _Returns rows having email not having the letter '@'._
> 
> ```
> SELECT * FROM tbl_person WHERE CITY LIKE '_@_.com';
> ``` 
> _Returns all records with email in this format - a@a.com_


> ### _`IN` and `BETWEEN`_
> ```
> SELECT * FROM tbl_person WHERE CITY IN ('Mumbai', 'Singapore', 'Tokyo');
> ```
> 
> ```
> SELECT * FROM tbl_person WHERE age NOT BETWEEN 18 AND 25;
> ```
> _The `BETWEEN` operator in MySQL is **inclusive**. (both the start and the end value in the search results are included)._

&nbsp;

## _`ORDER BY`_
> ```
> SELECT * FROM tbl_person ORDER BY name;
> ```
> _Retrieves records in ascending order of names (BY DEFAULT ASC)._
> 
> ```
> SELECT * FROM tbl_person ORDER BY name desc; 
> ```
> _Retrieves records in descending order of names._

&nbsp;

## _`LIMIT`_
> ```
> SELECT * FROM tbl_person Limit 10;
> ```
> _Returns first 10 records from the result set._
> 
> _However, if you do not use an `ORDER BY` clause, the order of those rows is undefined and unpredictable._
> 
> _Hence it is adivisable to use `ORDER BY` along with `LIMIT` when you want to get rows matching the order of the data. e.g. highest/lowest salary etc._
>
> _Example: Get Highest Salary_
> ```
> SELECT * FROM tbl_employee ORDER BY salary DESC LIMIT 1;
> ```

> We can also provide offset in LIMIT. 
> 
> ```
> -- Syntax : LIMIT (Offset first, then Limit)
> SELECT * FROM tbl_person ORDER BY id LIMIT 10, 5;
> ```
> _Retrieves exactly 5 rows from `tbl_person` after skipping the first 10 rows, sorted by `id`._

## _`OFFSET`_
> ```
> SELECT column FROM table LIMIT 5 OFFSET 10;
> ```
> _This works exactly same as the previous example i.e. `LIMIT 10,5`._

&nbsp;

## `GROUP BY`

> It is used to group a selected set of rows into a set of summary rows by the values or one or more columns or expressions.
> 
> **It is always used with an aggregate function _e.g. SUM, MIN, MAX, COUNT etc_.**
     
> ```
> select SUM(salary) from tbl_employee;
> ```
> _Aggregation function - Total salary._
> 
> ```
> select MIN(salary) from tbl_employee;
> ```
> _Aggregation function - Minimum salary._

> _Example: Get city wise total salaries paid to employees._
>
> ```
> select city, sum(salary) AS totalSalary from tbl_employee group by city;
> ```
> _When grouping by a field **`(city)`**, it should also be present in select clause `(select city...)`._

### Grouping by multiple columns:
```
select
    city,
    gender,
    sum(salary) AS totalSalary
from tbl_employee
group by
    city,
    gender
order by
    city;
```

### Using multiple aggregate functions:
```
select
    city,
    gender,
    sum(salary) AS totalSalary ,
    count(id) AS totalEmpoyees
from tbl_employee
group by
    city,
    gender
order by
    city;
```

### `HAVING` - _filtering the groups:_
_HAVING HAS TO COME AFTER THE GROUP BY CLAUSE._
```
select
    ...
from tbl_employee
group by
    ...
HAVING gender = 'male'
order by
    city;
```

> ### Difference between `WHERE` and `HAVING`:
> 
> `WHERE`
> - Filters rows before aggregation(GROUPING)
> - Can be used with `SELECT`, `INSERT`, `UPDATE` and `DELETE` statements.
> - aggregate functions cannot be used in the `WHERE` clause _(unless it is a subquery contained in a having clause)._
> 
>     ```
>     select * from tblEmployees where SUM(salary) > 15000; 
>     -- Error Code: 1111. Invalid use of group function
>     ```
>
>
> `HAVING`
> - Filters groups after aggregation(GROUPING) is performed.
> - Can only be used with `SELECT`.
> - aggregate functions can only be used in `HAVING` clause.
>     
>     e.g.
>     ```
>     select ... from tbl_employee  group by ... HAVING SUM(salary) > 15000
>     ```

&nbsp;

## `JOINS`

_Joins are used along with `FROM` to connect multiple tables._

_We use `ON` and/or `USING` clause to specify the join points._

&nbsp;

### Inner Join _(Pivot)_
```
SELECT 
    customers.name, 
    orders.product, 
    orders.amount
FROM orders
INNER JOIN customers 
ON orders.customer_id = customers.id;
```
>_`USING` - Used when both the columns you are joining on share the exact same name in both tables._
> 
> ```
> SELECT 
>     orders.order_id, 
>     customers.name 
> FROM orders 
> INNER JOIN customers 
> USING (customer_id); -- Both tables must have a 'customer_id' column
> ```

_Filtering the result sets with Inner Joins:_

_We can simply use the WHERE clause or write the conditions directly in the ON condition._
```
SELECT 
    * 
FROM users u 
INNER JOIN orders o 
    ON u.id = o.user_id 
WHERE o.status = 'Completed';
```
OR 
```
SELECT 
    * 
FROM users u 
INNER JOIN orders o 
    ON u.id = o.user_id 
    AND o.status = 'Completed';
```

&nbsp;

### Outer Joins -> _left, right, and full_

Outer Joins prioritize one table completely and keep its rows even if the other table has no matching data.

_If no match is found in the secondary table, its columns are filled with `NULL`._

```
SELECT * 
FROM Table_A        -- <-- All Rows
LEFT JOIN Table_B 
  ON Table_A.id = Table_B.id;
```

```
SELECT * 
FROM Table_A        
RIGHT JOIN Table_B  -- <-- All Rows
  ON Table_A.id = Table_B.id;
```

Performance: Outer joins can be slower than inner joins because MySQL cannot discard unmatched rows early in the execution process; it must preserve them and generate NULL placeholders.

_Filtering the result sets with Inner Joins:_

_For Outer Joins, the placement of the condition changes the fundamental logic of your query._

```
SELECT 
    u.name, o.order_id, o.status 
FROM users u 
LEFT JOIN orders o 
    ON u.id = o.user_id 
WHERE o.status = 'Completed';
```

_By adding a WHERE clause to the result set of LEFT JOIN, it will act like an INNER JOIN._

&nbsp;

### Cross Join _(Cartesian Product)_

**_Doesn't have an `ON` clause._**

I used cross joins to get products grid combining all possible Sizes and Colors for an item.

> Example: 
>
> Table 1: sizes 
>
> | size_name |
> |:--- |
> | Small | 
> | Medium | 
> | Large | 
> ||
> 
> &nbsp;
> 
> Table 2: colors
>
> | color_name |
> |:--- |
> | Red | 
> | Blue | 
> ||
>
> ```
> SELECT s.size_name, c.color_name
> FROM sizes s
> CROSS JOIN colors c;
> 
> ```
> 
> _The Output Result (All 6 Combinations)_
> | size_name | color_name | 
> | :--- | :--- |
> | Small | Red | 
> | Small | Blue | 
> | Medium | Red | 
> | Medium | Blue | 
> | Large | Red | 
> | Large | Blue |
> |||

&nbsp;

### Self Join

Used when a table references data in itself. 

Joining a table with itself.

It can be an Inner, Outer or Cross Join based on how we join it.
       
> Example: _an Employee table may have a manager_id column that points to the employee(row) of the same table._
>
> ```
> SELECT A.name as EMPLOYEE, B.name as Manager
> FROM tbl1 A
> JOIN tbl1 B
> ON A.id = B.manager_id;
> ```
>
> ```
> SELECT A.name as EMPLOYEE, B.name as Manager
> FROM tbl1 A
> LEFT JOIN tbl1 B
> ON A.id = B.manager_id;
> ```

&nbsp;

## `CASE WHEN ... THEN`

> _Syntax :_
> ```
> SELECT
>     CASE WHEN 
>         <EXPRESSION> 
>     THEN <REQD. VALUE> 
>     ELSE <DEFAULT VALUE>
>     END
> FROM ...
> ```
_From the previous example of Employee - Manager self join:_
```
SELECT
    A.name as EMPLOYEE,
    CASE 
        WHEN 
            B.name IS NULL 
        THEN 
            'No Manager' 
        ELSE 
            B.name
    END as Manager,
FROM tbl1 A
LEFT JOIN tbl1 B
ON A.id = B.manager_id
```

&nbsp;

## `UNION` & `UNION ALL`
       
- UNION - Combines result set of two or more queries.

    ```
    SELECT * FROM tbl_india_customers
    UNION
    SELECT * FROM tbl_US_customers
    ```
    _Removes DUPICATES and sorts the result._

- UNION ALL

    ```
    SELECT * FROM tbl_india_customers
    UNION ALL
    SELECT * FROM tbl_US_customers
    ```
    _Gets all rows including the DUPICATES._

**_IMP - for UNION and UNION ALL to work, the number, datatypes, and the order of the columns in both SELECT stmt should be same._**

> ### DIFFERENCES -
> - UNION removes duplicate rows whereas, UNION ALL doesn't.
>
> - UNION has to perform distinct sort to remove duplicates, which makes it less faster than UNION ALL.

&nbsp;

**_IMP - ORDER BY should be only at the end of SELECT stmts of UNION chain._**

```
SELECT * FROM tbl_india_customers
UNION
SELECT * FROM tbl_US_customers
ORDER BY ....
```

**_UNION combines the rows from the tables, WHEREAS, JOIN retrieves the data based on the logical relationship between the tables._**

---
