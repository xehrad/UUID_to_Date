const UUID_to_Date = (function() {
    const GREGORIAN_OFFSET = 122192928000000000;

	// convert '11111111-2222-#333-4444-555555555555' to '333222211111111'
    function get_time_int(uuid_str) {
        if (!uuid_str) return null;
        const uuid_parts = uuid_str.split('-');
        const time_str = uuid_parts[2].substring(1) + uuid_parts[1] + uuid_parts[0];
        return parseInt(time_str, 16);
    }

    return function(uuid_str) {
        if (!uuid_str) return null;
        const timestamp = get_time_int(uuid_str);
        if (!timestamp) return null;
        const unixTimestamp = Math.floor((timestamp - GREGORIAN_OFFSET) / 10000);
        return new Date(unixTimestamp);
    };
})();