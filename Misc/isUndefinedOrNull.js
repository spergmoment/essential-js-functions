let isUndefinedOrNull = (obj) => {
  if(!obj) return true;
  return false;
}
console.log(isUndefinedOrNull(2))
console.log(isUndefinedOrNull("h"))
console.log(isUndefinedOrNull())
console.log(isUndefinedOrNull(0))
console.log(isUndefinedOrNull(""))
console.log(isUndefinedOrNull(undefined))
console.log(isUndefinedOrNull(null))
console.log(isUndefinedOrNull("hey" - 89))
/* Expected output:
false
false
true
true
true
true
true
false */
