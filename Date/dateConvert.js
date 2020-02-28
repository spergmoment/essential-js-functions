class ComversionError extends TypeError {
  constructor(err, obj, ...params) {
    super(...params);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ConversionError);
    }

    this.name = 'ConversionError from { Date() }';
    this.message = err;
    this.error = "Input constructor " + obj.constructor.toString() + " does not match constructor Date";
  }
}
Date.prototype.convert = function() {
    let months = [
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
    let weeks = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
  ];
    let time = this;
    if(time.constructor.toString().indexOf("Date") > -1) 
      throw new DateConvertError("The input is not a date.", time);
    let yr = time.getFullYear();
    let mon = time.getMonth();
    mon = months[mon];
    let day = time.getDate();
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let week = time.getDay();
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
let date = new Date();
console.log(date.convert());
