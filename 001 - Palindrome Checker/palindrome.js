// This is a script from a palindrome checker, in freeCodeCamp; has been turned on a website checker.

function palindrome() {
  var verify = [];
  
    
// Variables from HTML
    
  var str = document.getElementById("palind").value;
    
   
// Ignore symbols and replace it, looking only at letters/numbers
    
  var pieces = str
    .toLowerCase()
    .replaceAll("-", "")
    .replaceAll("_", "")
    .replaceAll('/', "")
    .replaceAll("(", ")")
    .replaceAll(".", '')
    .replaceAll(",", "")
    .replaceAll(" ",'')
    .split('')
    
    
// For loop verify if has symmetry in the letters
    
  for (let i = 0; i < pieces.length; i++) {
    if (pieces[0 + i] == pieces[(pieces.length - 1) - i]) {
      verify.push(true);
    } else {
      verify.push(false);
    } 
  }

    
// Conditional replies
  
  if (!verify.includes(false) && pieces.length > 1) {
    return alert("Yes, this is a palindrome!");
  }
  if (verify.includes(false)) {
    return alert("Nope, this isn't a palindrome!");
  }
  else {
    return alert("Invalid entry");
  }
}
