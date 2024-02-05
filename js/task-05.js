document.getElementById('name-input').addEventListener('input', function () {
    var inputValue = this.value;
    var nameOutput = document.getElementById('name-output');

    if (inputValue === "") {
        nameOutput.innerText = "Anonymous";
    } else {
        nameOutput.innerText = inputValue;
    }
});