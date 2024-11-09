//////////////////////////////////////////////////////////////
// DATA STRUCTURES - MAPS - METHODS forEach() ////////////////
//////////////////////////////////////////////////////////////

// Maps are high performance key - value paired data structure.
// In Objects keys can only be strings (without quotes), but in Maps, keys can be any type.
// More here : https://dmitripavlutin.com/maps-vs-plain-objects-javascript/

// forEach() takes 3 parameters.
// current_item, current_index, and entire map
const currencies = new Map([
    ['USD' , 'US Dollars'],
    ['EUR' , 'Euros'],
    ['INR' , 'INDIAN Rupees']
]);

currencies.forEach(function( val , key , map ){
    console.log(`${key} : ${val}`);
});
// USD : US Dollars
// EUR : Euros
// INR : INDIAN Rupees

// Disadvantage:
// break and continue does not work! So if you need to break out of the loop, then use the ordinary for-of loop.
