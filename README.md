UUID1 to Javascript Date
============

## API:
* UUID_to_Date.uuid__to__date_obj(`_UUID_`)

## Example:

```javascript
var date = UUID_to_Date.uuid__to__date_obj( '8bf1aeb8-6b5b-11e4-95c0-001dba68c1f2' );
console.log( date.toLocaleString( ) ); // -> "11/13/2014, 9:06:06 PM"
console.log( date.getFullYear( ) );    // -> "2014"
```

