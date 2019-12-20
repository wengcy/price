let util = {
	getNowFormatDate: function() {
		var date = new Date();
	   var seperator1 = "-";
	   var seperator2 = ":";
	   var month = date.getMonth() + 1;
	   var strDate = date.getDate();
	   var hours = date.getHours();
	   var minutes = date.getMinutes();
	   var seconds = date.getSeconds();
	   
	   if (month >= 1 && month <= 9) {
	       month = "0" + month;
	   }
	   if (strDate >= 0 && strDate <= 9) {
	       strDate = "0" + strDate;
	   }

	   if (hours >= 1 && hours <= 9) {
			hours = "0" + hours;
		}

		if (minutes >= 0 && minutes <= 9) {
			minutes = "0" + minutes;
		}

		if (seconds >= 0 && seconds <= 9) {
			seconds = "0" + seconds;
		}

	   var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
	           + " " + hours + seperator2 + minutes + seperator2 + seconds;
	   return currentdate;
	},
	/**
	 * 获取下一个月
	 *
	 * @date 格式为yyyy-mm-dd的日期，如：2014-01-25
	 */        
    getNextMonth:function(date) {
		var arr = date.split('-');
		var year = arr[0]; //获取当前日期的年份
		var month = arr[1]; //获取当前日期的月份
		var day = arr[2]; //获取当前日期的日
		var days = new Date(year, month, 0);
		days = days.getDate(); //获取当前日期中的月的天数
		var year2 = year;
		var month2 = parseInt(month) + 1;
		if (month2 == 13) {
			year2 = parseInt(year2) + 1;
			month2 = 1;
		}
		var day2 = day;
		var days2 = new Date(year2, month2, 0);
		days2 = days2.getDate();
		if (day2 > days2) {
			day2 = days2;
		}
		if (month2 < 10) {
			month2 = '0' + month2;
		}
	
		var t2 = year2 + '-' + month2 + '-' + day2;
		return t2;
	}
}

module.exports = util;