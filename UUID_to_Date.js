(function() {
	var GREGORIAN_OFFSET = 122192928000000000;
	this.UUID_to_Date = {
		secs__to__date_obj: function (secs, set_TZO) {
			var date_obj = new Date( 1970, 0, 1 ),
				TZs = set_TZO  ?  date_obj.getTimezoneOffset() * 60  :  0;
			
			date_obj.setSeconds( secs - TZs );
			return date_obj;
		},
		
		uuid__to__time_int: function (uuid_str) {
			// uuid_str like	=>		'11111111-2222-#333-4444-555555555555'
			var uuid_arr = uuid_str.split('-'),
			
				time_str = [
					uuid_arr[2].substring(1),
					uuid_arr[1],
					uuid_arr[0]
				].join('');
				// time_str is convert  '11111111-2222-#333-4444-555555555555'  to  '333222211111111'
			
			return parseInt( time_str, 16 );
		},
		
		uuid__to__date_obj_manual_timezone: function (uuid_str, set_TZO) {
			// uuid_str like	=>		'11111111-2222-#333-4444-555555555555'
			// set_TZO: Boolean	=>		if set True, add client Timezone, you can use 
			var int_time = this.uuid__to__time_int( uuid_str ) - GREGORIAN_OFFSET,
				int_sec_time = Math.floor( int_time/10000000 );
			
			return this.secs__to__date_obj( int_sec_time, set_TZO );
		},
			
		uuid__to__date_obj: function (uuid_str) {
			// uuid_str like	=>		'11111111-2222-#333-4444-555555555555'
			return this.uuid__to__date_obj_manual_timezone( uuid_str, true );
		}
	};
}).call(this);
