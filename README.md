# UUID to Date Converter

A simple JavaScript function to convert **UUIDv1** timestamps into human-readable dates. This function extracts the timestamp from a UUIDv1 and converts it into a standard date format.

### **Example Usage**
```js
console.log(UUID_to_Date('8bf1aeb8-6b5b-11e4-95c0-001dba68c1f2').toLocaleString());
// Expected output: "11/13/2014, 9:06:06 PM" (depends on locale)
```

### **How It Works**
1. Extracts the timestamp from the **first 60 bits** of a UUIDv1.
2. Reorders the parts to match the **correct timestamp format**.
3. Converts it from **100-nanosecond intervals since 1582-10-15** to a standard **Unix timestamp**.
4. Returns a **JavaScript Date object**.
