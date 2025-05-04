let inpi = document.getElementById("inpi")
 function appendNumber(val){
    inpi.value += val
 }
 function resultNumber(){
    inpi.value = eval(inpi.value)
 }
 function cleanNumber(){
    inpi.value = ''
 }