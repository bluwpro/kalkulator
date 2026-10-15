const displayOutput = document.QuerySelector ('.display')
const button = document . QuerySelectorAll ('button')
const specialOperators = ['%','=','+','-','/','*']
let outPut = ' '
const calculate = (btnValue) => {
  if (btnValue ==='='&& output !==' ') {
    outPut = eval(output.replace('%','/100'))
  }else if(btnValue === 'AC') {
    outPut=' '
  }else if (btnValue === 'DEL') {
    outPut = output.toString().slice (0,-1)
  }else{
    if(outPut === ' ' && specialOperators.include(btnValue))return
    output+=btnValue
  }
  displayOutput.value = Output
}
buttons.forEach (button => {
  button.addEventListener('click', (e) => calculate (e.target.dataset.value))
})
