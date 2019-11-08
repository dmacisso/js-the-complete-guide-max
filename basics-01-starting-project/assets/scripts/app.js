const defaultResult = 0;

let currentResult = defaultResult;

function add() {
  //This function processes only global variables no return statement needed.
  currentResult = currentResult + userInput.value; 
  outputResult(currentResult, '');
}

addBtn.addEventListener('click', add)

