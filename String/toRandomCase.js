String.prototype.toRandomCase = function(s) {
let c = new String(this);
  if(typeof c !== typeof this) return "Invalid type.";
  let strArr=this.split("");
  let newStr = "";
  strArr.forEach(s => {
    if(Math.random() > 0.5) {
      newStr += s.toUpperCase();
    } else {
      newStr += s.toLowerCase();
    }
  });
  return newStr;
}
var h = "hi there how are u";
console.log(h.toRandomCase());
