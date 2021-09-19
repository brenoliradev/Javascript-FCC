function palindrome() {
  const verify = [];
    
// Variables from HTML
  let str = document.getElementById("palind").value;

  const formCheck = document.getElementById('content');
formCheck.addEventListener('submit', function(e) {
    e.preventDefault();
});
    
   
// Ignore these specific symbols and replace it, looking only at letters/numbers
  let pieces = str
  .toLowerCase()
  .replaceAll("-", "")
  .replaceAll("_", "")
  .replaceAll('/', "")
  .replaceAll("(", ")")
  .replaceAll(".", '')
  .replaceAll(",", "")
  .replaceAll("!", "")
  .replaceAll(":", "")
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
