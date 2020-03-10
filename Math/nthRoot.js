Math.nthRoot = (x, root) => {
  return Math.pow(x, 1/root);
}
console.log(Math.nthRoot(4, 9));
/* Expected output:
1.1665290395761165

Do note that this is not 100% accurate 
due to floating point inaccuracies in JS. */
