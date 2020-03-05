Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
}

let arr = [
  'Hello',
  'Hi',
  'Hey'
];

console.log(arr.random());
/* Possible outputs:
Hello
Hi
Hey */
