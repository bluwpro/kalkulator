const displayOutput = document.QuerySelector ('.display')
const button = document . QuerySelectorAll ('button')
const specialOperators = ['%','=','+','-','/','*']
let outPut = ' '
const calculate = (btnValue) => {
  if (btnValue ==='='&& outPut !==' ') {
    outPut = eval(outPut.replace('%','/100'))
  }else if(btnValue === 'AC') {
    outPut=' '
  }else if (btnValue === 'DEL') {
    outPut = outPut.toString().slice (0,-1)
  }else{
    if(outPut === ' ' && specialOperators.include(btnValue))return
    outPut+=btnValue
  }
  displayOutput.value = OutPut
}
buttons.forEach (button => {
  button.addEventListener('click', (e) => calculate (e.target.dataset.value))
})
