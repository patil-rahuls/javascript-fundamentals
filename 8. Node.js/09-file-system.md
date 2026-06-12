## File System

The `fs` module is used to interact with the `file system`.

It does not need to be installed because it is part of the `Node.js core` and can simply be imported.

> Example 1: Read a file `synchronously`

```javascript
import fs from "fs";

try {
  const fileData = fs.readFileSync("2_npm.md", "utf8");

  console.log(fileData);
} catch (err) {
  console.error(err);
}
```

> Example 2: Write content to a file `synchronously`

```javascript
import fs from "fs";

try {
  fs.writeFileSync("copyFile.txt", "some dummy data", "utf8");
  // Replaces the entire file content
} catch (err) {
  console.error(err);
}
```

> Example 3: Append content to a file `synchronously`

```javascript
import fs from "fs";

try {
  fs.appendFileSync("copyFile.txt", "\n\text at end", "utf8");
} catch (err) {
  console.error(err);
}
```

> Example 4: Create & Remove directories `synchronously`

```javascript
import fs from "fs";

try {
  fs.mkdirSync("docs");

  // fs.mkdir('docs/abc/1'); // wont work.

  fs.mkdirSync("docs/abc/1", { recursive: true });

  fs.rmDirSync("docs");
  // error. docs is not an empty directory

  // We need to manually delete the inner directories.
  fs.rmdirSync("docs/abc/1");
  fs.rmdirSync("docs/abc");
  fs.rmdirSync("docs");
} catch (err) {
  console.error(err);
}
```

> Example 5: Read a file `asynchronously`

```javascript
import fs from "fs/promises";

try {
  const data = await fs.readFile("2_npm.md");

  console.log(Buffer.from(data));
} catch (error) {
  console.error("there was an error:", error.message);
}
```

> Example 6: Delete a file `asynchronously`

```javascript
import { unlink } from "fs/promises";

try {
  await unlink("/tmp/hello");

  console.log("successfully deleted /tmp/hello");
} catch (error) {
  console.error("there was an error:", error.message);
}
```

---
---

<!-- PAGINATION_START -->

**Parent:** [Node.js](../8.%20Node.js/)
  
**Previous:** ← [Node.js > Child Process](./08-child-process.md)

**Next:** → [Node.js > HTTP](10-http.md)

<!-- PAGINATION_END -->
