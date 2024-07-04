
//     const inputSlider = document.querySelector(".slider");
//     const lengthDisplay = document.querySelector("[data-dataLength]");
//     const passwordDisplay = document.querySelector("[data-passwordDisplay]");
//     const copyBtn = document.querySelector("[data-copy]");
//     const copyMsg = document.querySelector("[data-copyMsg]");
//     const upperCaseCheck = document.querySelector("#uppercase");
//     const lowerCaseCheck = document.querySelector("#lowercase");
//     const numbersCheck = document.querySelector("#numbers");
//     const symbolsCheck = document.querySelector("#symbols");
//     const indicator = document.querySelector("[data-indicator]");
//     const generateBtn = document.querySelector(".generateButton");
//     const allCheckBox = document.querySelectorAll("input[type=checkbox]");
//     const symbols = '~!@#$%^&*()_+-={}[]|\:;" <>,./?';

//     let password = "";
//     let passwordLength = 10;
//     let checkCount = 0;
//     handleSlider();
    

//     // Function to set the password length
//     function handleSlider() {
//         inputSlider.value = passwordLength;
//         lengthDisplay.innerText = passwordLength;
//     }

//     // Function to handle strength indicator
//     function setIndicator(color) {
//         indicator.style.backgroundColor = color;
//     }

//     function getRndInteger(min,max){
//         return  Math.floor( Math.random()*(max-min) + min);
//     }

//     function getRandomNumber(){
//         return getRndInteger(0,9);
//     }
//     function getRandomUpperCase(){
//         return String.fromCharCode( getRndInteger(65,90));
//     }
//     function getRandomLowerCase(){
//         return String.fromCharCode( getRndInteger(97,123));
//     }
//     function generateSymbol(){
//         const randNum = getRndInteger(0,symbols.length);
//         return symbols.charAt[randNum];
//     }

//     function calcStrength(){
//         let hasUpper = false;
//         let hasLower = false;
//         let hasNum  = false;
//         let hasSym = false;
//         if(upperCaseCheck.checked) hasUpper = true;
//         if(lowerCaseCheck.checked) hasLower = true;
//         if(numbersCheck.checked) hasNum = true;
//         if(symbolsCheck.checked) hasSym = true;

//         if(hasUpper && hasLower && (hasNum || hasSym) && passwordLength >=8){
//             setIndicator("#0f0");
//         }
//         else if((hasLower || hasUpper) &&(hasNum || hasSym) && passwordLength>=6){
//             setIndicator("#ff0");

//         }
//         else{
//             setIndicator("#f00");
//         }

//     }
    
   
//     async function copyContent(){
//         try{
//         await navigator.clipboard.writeText(passwordDisplay.value);
//         copyMsg.textContent = "copied";
//     }
//     catch(e){
//         copyMsg.textContent = "failed";
//     }
//     copyMsg.classList.add("active");

//     setTimeout(() => {copyMsg.classList.remove("active");},2000);
// }
   
   
// function shufflePassword(array){
//     //fisher yates method
//     for(let i = array.length - 1; i>0 ; i--){

//         const j = Math.floor(Math.random() * (i+1));
//         const temp = array[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
//     let str = "";
//     array.forEach((el) => {str += el});
//     return str;

// }

// function handleChanges(){

//     checkCount = 0;
//     allCheckBox.forEach( (checkbox) => {
//         if(checkbox.checked) checkCount++;
//     });

//     //special case
//     if(passwordLength < checkCount){
//         passwordLength = checkCount;
//         handleSlider();
//     }
//    }

//    allCheckBox.forEach( (checkbox) => {
//     addEventListener('click', handleChanges);
//    })

//     inputSlider.addEventListener('input',(e) => {passwordLength = e.target.value;
//     handleSlider();});

//     copyBtn.addEventListener('click', () => {
//         if(passwordDisplay.value) copyContent();
//     });

//     generateBtn.addEventListener('click' , () => {
//         // none of the check box are selected
//         if(checkCount <= 0) return ;

//         if(passwordLength < checkCount){
//             passwordLength = checkCount;
//             handleSlider();
//         }

//         //lets find the new password

//         //remove old password
//         password = "";

//         //lets put the stuff mentioned by checkboxes
//         // if(upperCaseCheck.checked){
//         //     password += getRandomUpperCase();
//         // }

//         // if(lowerCaseCheck.checked){
//         //     password += getRandomLowerCase();
//         // }

//         // if(numbersCheck.checked){
//         //     password += getRandomNumber();
//         // }

//         // if(symbolsCheck.checked){
//         //     password += generateSymbol();
//         // }

//         let funcArr =[];

//         if(upperCaseCheck.checked) funcArr.push(getRandomUpperCase);

//         if(lowerCaseCheck.checked) funcArr.push(getRandomLowerCase);

//         if(numbersCheck.checked) funcArr.push(getRndInteger);

//         if(symbolsCheck.checked) funcArr.push(generateSymbol);

//         //compulsory addition

//         for( let i = 0 ; i <funcArr.length;i++){

//             password+=funcArr[i]();
//         }

//         for(let i = 0 ; i < passwordLength-funcArr.length ; i++){

//             let randIndex = getRndInteger(0,funcArr.length);
//             password+= funcArr[randIndex]();
//         }

//         //shuffling the password 
//         password = shufflePassword(Array.from(password));

//         passwordDisplay.value = password;

//         calcStrength();

        

//     });
const inputSlider = document.querySelector(".slider");
const lengthDisplay = document.querySelector("[data-dataLength]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const upperCaseCheck = document.querySelector("#uppercase");
const lowerCaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~!@#$%^&*()_+-={}[]|\:;" <>,./?';

let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();

setIndicator("#ccc");

// Function to set the password length
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    const mini = inputSlider.min;
    const maxi = inputSlider.max;
    inputSlider.style.backgroundSize = ((passwordLength - mini)*100/(maxi - mini)) + "% 100%";
}

// Function to handle strength indicator
function setIndicator(color) {
    indicator.style.backgroundColor = color;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomNumber() {
    return getRndInteger(0, 9);
}

function getRandomUpperCase() {
    return String.fromCharCode(getRndInteger(65, 90));
}

function getRandomLowerCase() {
    return String.fromCharCode(getRndInteger(97, 122));
}

function generateSymbol() {
    const randNum = getRndInteger(0, symbols.length - 1);
    return symbols.charAt(randNum);
}

function calcStrength() {
    let hasUpper = upperCaseCheck.checked;
    let hasLower = lowerCaseCheck.checked;
    let hasNum = numbersCheck.checked;
    let hasSym = symbolsCheck.checked;

    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
        setIndicator("#0f0");
    } else if ((hasLower || hasUpper) && (hasNum || hasSym) && passwordLength >= 6) {
        setIndicator("#ff0");
    } else {
        setIndicator("#f00");
    }
}

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.textContent = "copied";
    } catch (e) {
        copyMsg.textContent = "failed";
    }
    copyMsg.classList.add("active");
    setTimeout(() => { copyMsg.classList.remove("active"); }, 2000);
}

function shufflePassword(password) {
    let arr = password.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr.join('');
}

function handleChanges() {
    checkCount = 0;
    allCheckBox.forEach((checkbox) => {
        if (checkbox.checked) checkCount++;
    });

    //special case
    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener('click', handleChanges);
});

inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
});

copyBtn.addEventListener('click', () => {
    if (passwordDisplay.value) copyContent();
});

generateBtn.addEventListener('click', () => {
    // none of the check box are selected
    if (checkCount <= 0) return;

    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }

    //lets find the new password

    //remove old password
    password = "";

    let funcArr = [];

    if (upperCaseCheck.checked) funcArr.push(getRandomUpperCase);

    if (lowerCaseCheck.checked) funcArr.push(getRandomLowerCase);

    if (numbersCheck.checked) funcArr.push(getRandomNumber);

    if (symbolsCheck.checked) funcArr.push(generateSymbol);

    //compulsory addition

    for (let i = 0; i < funcArr.length; i++) {
        password += funcArr[i]();
    }

    for (let i = 0; i < passwordLength - funcArr.length; i++) {
        let randIndex = getRndInteger(0, funcArr.length - 1);
        password += funcArr[randIndex]();
    }

    //shuffling the password 
    password = shufflePassword(password);

    passwordDisplay.value = password;

    calcStrength();
});



    


