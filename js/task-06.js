let inputText = document.getElementById("validation-input");

inputText.addEventListener('blur', checkText);

function checkText(){
  inputText = this.value.trim();

  if (inputText.length === 6){
    inputText.id = "validation-input.valid";
  };
};
