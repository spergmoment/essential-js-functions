function toRandomCase(str) {
  if(typeof str !== typeof "h") return;
  let strArr=str.split("");
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
console.log(toRandomCase("hello"))
