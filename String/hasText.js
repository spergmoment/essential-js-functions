function hasText(txt, check) {
  if(txt.indexOf(check)===-1) {
    return false;
  } else {
    return true;
  }
}
hasText("Hello how are you?", "how are");
hasText("Hello how are you?", "I'm good");
/* Expected output:
true
false 
*/
