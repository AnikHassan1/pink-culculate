// function Cals Site Start        ------------>
function caluc() {
    const myramdem = rondom();
    let RandomString = myramdem + '';
    if (RandomString.length === 4) {
        return myramdem;
    }
    else {
        return caluc();
    }
}

function rondom() {
    const rondom = Math.round(Math.random() * 10000)
    return rondom;
}
function inputGetPin(elementId) {
    const pin = caluc();
    const pinfeild = document.getElementById(elementId);
    const pinString = pinfeild.value;
    const pinStringNumber = parseInt(pinString);
    pinfeild.value = pin;
}
// function Cals Site Start  and End     ------------>

document.getElementById('generate-pin').addEventListener('click', function () {
    // const pin=caluc();
    // const pinfeild=document.getElementById('display-pin');
    // const pinString=pinfeild.value;
    // const pinStringNumber=parseInt(pinString);
    // pinfeild.value=pin;
    inputGetPin('display-pin');
})
document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const numberFeild = document.getElementById('typed-numbers');
    const numberValue = numberFeild.value;
    if (isNaN(number)) {
        if (number === 'C') {
            numberFeild.value = '';
        }
        else if (number === '<') {

            const digits = numberValue.split('');
             digits.pop();
             const digit=digits.join('');
             numberFeild.value=digit;
        }
    } else {
        const numberSum = numberValue + number;
        numberFeild.value = numberSum;
    }
})
document.getElementById('verify-pin').addEventListener('click',function(){
    const pinInput=document.getElementById('display-pin');
    const pinInputValue=pinInput.value;

    const currentInput=document.getElementById('typed-numbers');
    const currentInputValue=currentInput.value;
     
    const pinfeilar=document.getElementById('pin-failure');
    const pinSucces=document.getElementById('pin-success');
    if(currentInputValue === pinInputValue ){
        
        pinfeilar.style.display ="none";
        pinSucces.style.display = 'block';
    }else{
        
        pinfeilar.style.display ="block";
        pinSucces.style.display = 'none';
    }
    
})