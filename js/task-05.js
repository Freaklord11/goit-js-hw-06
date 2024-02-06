    let inputVal = document.getElementById('name-input').addEventListener('input')
    function input (inputVal) {
    var inputValue = this.value.trim();
    var nameOutput = document.getElementById('name-output');

    if (inputValue === "") {
        nameOutput.innerText = "Anonymous";
    } else {
        nameOutput.innerText = inputValue;
    }
};
