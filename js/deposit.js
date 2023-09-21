function getInputFieldValueByID(inputID){
    const inputField = document.getElementById(inputID);
    const inputValueString = inputField.value;
    const inputFieldValue = parseFloat(inputValueString);
    inputField.value='';
    return inputFieldValue;
}


document.getElementById('btn-deposit').addEventListener('click',function(){
    console.log('deposit button clicked!!')
    const newDepositAmount = getInputFieldValueByID('deposit-field');
})