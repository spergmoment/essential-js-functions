function dateConvert() {
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
    var time = new Date()
    var yr = time.getFullYear();
    var mon = time.getMonth();
    mon = months[mon];
    var day = time.getDate(); // gets the day, e.g 27
    var hr = time.getHours(); // gets the current hour, e.g 9, it is in 24 hour time and formatting it to 12 hour time has bad side effects, like making anything ≥ 10 be 0
    var min = time.getMinutes(); // gets the current minutes, e.g. 12
    var sec = time.getSeconds(); // gets current seconds, e.g. 34
    var week = time.getDay(); // gets day of week, e.g. monday
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
