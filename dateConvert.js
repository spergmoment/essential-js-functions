class DateConvertError extends TypeError {
  constructor(err, obj, ...params) {
    super(...params);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DateConvertError);
    }

    this.name = 'DateConvertError';
    this.message = err;
    this.error = "Input constructor is type " + typeof obj + ". Expected constructor Date";
  }
}
function dateConvert(x) {
    var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
    var weeks = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
  ];
    var time = x;
    if(!(time instanceof Date)) throw new DateConvertError("The input is not a date.", time);
    var yr = time.getFullYear();
    var mon = time.getMonth();
    mon = months[mon];
    var day = time.getDate();
    var hr = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var week = time.getDay();
    week = weeks[week];
    if (hr < 10) {
        hr = "0" + hr.toString().charAt(0);
    }
    if (min < 10) {
        min = "0" + min.toString().charAt(0);
    }
    if (sec < 10) {
        sec = "0" + sec.toString().charAt(0);
    }
    return week + ", " + mon + " " + day + ", " + yr + ", at " + hr + ":" + min + ":" + sec;
}
