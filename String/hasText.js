String.prototype.hasText = function(check) {
  if(this.indexOf(check)===-1) {
    return false;
  } else {
    return true;
  }
}
let c = "Hello how are you?";
console.log(c.hasText("how are"));
console.log(c.hasText("I'm good"));
/* Expected output:
true
false 
*/
