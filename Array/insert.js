Array.prototype.insert = (el, index) => {
  return this.splice(index, 0, el);
}

const arr = [
  'Hello', 
  'Hi'
];
arr.insert('Hey', 1);
console.log(arr);
/* Expected output:
['Hello', 'Hey', 'Hi'] */
