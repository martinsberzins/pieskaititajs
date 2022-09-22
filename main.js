var enterButton = document.getElementById("enter");
enterButton.addEventListener("click", startCounting);
var input = document.getElementById("userinput");
var result = document.getElementById("result");

function inputLength() {
  return input.value.length;
}

function checkIfNumber() {
  return !isNaN(input.value);
}

function startCounting() {
  if (inputLength() > 0 && checkIfNumber()) {
    doTheCounting();
  } else {
    alert("Nepieciešams ievadīt skaitlisku vērtību!");
  }
}

function doTheCounting() {
  const startingValue = result.innerText;
  const endValue = parseInt(startingValue) + parseInt(input.value);
  result.innerText = endValue;
}
