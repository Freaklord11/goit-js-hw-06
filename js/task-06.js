function validateInput(){
 let input = document.getElementById("validation-input");
  var expectedLenght = parseInt(input.getAttribute("data-lenght"));
  var enteredLegnth = input.value.length;

if (enteredLength === expectedLength){
  input.classList.remove("invalid");
  input.classLest.add("valid");
}
  else{
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
