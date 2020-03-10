Number.prototype.round = (place) => {
  if(isNaN(this)) return "Input is not a number.";
  let rand = this/place;
  let rand2 = Math.round(rand);
  return rand2*place;
}

let num = 1723;
let num2 = 4826;

console.log(num.round(100), num.round(1000), num2.round(10), num2.round(1000));
/* Expected output:
1700
2000
4830
5000 */
