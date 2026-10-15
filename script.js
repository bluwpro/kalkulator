const displayOutput = document.querySelector('.display');
const buttons = document.querySelectorAll('button'); // Diperbaiki dari 'button' ke 'buttons'
const specialOperators = ['%', '=', '+', '-', '/', '*'];
let outPut = '';

const calculate = (btnValue) => {
  if (btnValue === '=' && outPut !== '') {
    try {
      
      outPut = eval(outPut.replace(/%/g, '/100'));
    } catch (error) {
      outPut = 'Error';
    }
  } else if (btnValue === 'AC') {
    outPut = '';
  } else if (btnValue === 'DEL') {
    outPut = outPut.toString().slice(0, -1);
  } else {
   
    if (outPut === '' && specialOperators.includes(btnValue)) return;
    outPut += btnValue;
  }
  

  displayOutput.value = outPut;
};

buttons.forEach(button => {
  button.addEventListener('click', (e) => calculate(e.target.dataset.value));
});
