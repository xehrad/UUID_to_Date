UUID1 to Javascript Date
============

## API:
* UUID_to_Date.get_date_obj(`UUID`)
* UUID_to_Date.get_time_int(`UUID`)

## Example:

```javascript
var date_obj = UUID_to_Date.get_date_obj( '8bf1aeb8-6b5b-11e4-95c0-001dba68c1f2' );
    date_obj.toLocaleString( ); //   '11/13/2014, 9:06:06 PM'
```

