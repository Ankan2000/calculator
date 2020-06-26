class Calculator{
    constructor(currentResText, previousResText){
        this.currentResText = currentResText;
        this.previousResText = previousResText;
        this.clear();
    }
    clear(){
        this.currentRes = '';
        this.previousRes = '';
        this.operator = null;
    }
    del(){
        this.currentRes = this.currentRes.toString().slice(0, -1);
    }
    appendNum(num){
        if(num == '.'){
            if(this.currentRes.toString().includes('.'))
            return;
        }
        this.currentRes = this.currentRes.toString() + num;
    }
    
    getOperator(operator){
        if(this.operator != null) this.compute();
        if(this.currentRes == '') return;
        this.operator = operator;
        this.previousRes = this.currentRes;
        this.currentRes = '';
    }
    
    compute(){
        let res;
        const current = parseFloat(this.currentRes);
        const prev = parseFloat(this.previousRes);
        if(isNaN(prev) || isNaN(current)) return;
        switch(this.operator){
            case '+':
                res = add(prev, current);
                break;
            case '-':
                res = subtract(prev, current);
                break;
            case '*':
                res = prev * current;
                break;
            case '/':
                res = prev / current;
                break;
        }
        this.currentRes = res;
        this.operator = null;
    }
//todo fix this function
    /*
this functon is currently not working --->
    showComma(num){
        let temp='';
        const str = num.toString();
        const len = str.length;
        for(let i = len-1; i>=0; i=i-3){
            console.log(temp = str.slice(i,(i-3)) + ',' + temp);
        }
        return temp;
    }
*/
    display(){
        this.currentResText.innerText = setComma(this.currentRes);
        if(this.operator != null)
            this.previousResText.innerText = setComma(this.previousRes) + ` ${this.operator}`;
        else
            this.previousResText.innerHTML = '';
    }
}

const numButtons = document.querySelectorAll(".numButtons");
const operators = document.querySelectorAll(".operator");
const currentResText = document.querySelector(".currentResult");
const previousResText = document.querySelector(".previousResult");
const allClear = document.querySelector(".allClear");
const deleteNum = document.querySelector(".deleteNum");
const equals = document.querySelector(".equals");

const calculator = new Calculator(currentResText, previousResText);

const append = (number) => calculator.appendNum(number);
const operation = (operator) => calculator.getOperator(operator);
const calculate = () => calculator.compute();
const clear = () => calculator.clear();
const del = () => calculator.del();
const show = () => calculator.display();

numButtons.forEach(button => {
    button.addEventListener("click", () => {
        append(button.innerHTML);
        /* innerText is same as innerHTML */
        show();
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        operation(operator.innerHTML);
        show();
    });
});

equals.addEventListener('click', () => {
    calculate();
    show();
});

allClear.addEventListener("click", () => {
    clear();
    show();
});

deleteNum.addEventListener("click", () => {
    del();
    show();
});

document.addEventListener('keydown', e => {
    const key = e.key;
    const code = e.keyCode || e.which;
    numButtons.forEach(button => {
        if(key == button.innerHTML){
            append(key);
        }
    });
    operators.forEach(operator => {
        if(key == operator.innerHTML){
            operation(key);
        }
    });
    if(code == 27){
        clear();
    }
    
    if(code == 8 || code == 46){
        del();
    }

    if(key == '=' || code == 13){
        calculate();
    }

    show();
});

function countDecimalDigits(number) {
    let numString = number.toString();
    let index = numString.indexOf('.');
    if (index !== -1) {
        return numString.slice(index + 1).length;
    } else {
        return 0;
    }
}

function add(num1, num2) {
    let baseTenMultiplier = Math.pow(10, Math.max(countDecimalDigits(num1), countDecimalDigits(num2)));
    return (num1 * baseTenMultiplier + num2 * baseTenMultiplier)
        / baseTenMultiplier;
}

function subtract(num1, num2) {
    let baseTenMultiplier = Math.pow(10, Math.max(countDecimalDigits(num1), countDecimalDigits(num2)));
    return (num1 * baseTenMultiplier - num2 * baseTenMultiplier)
        / baseTenMultiplier;
}
function setComma(num) {
    let numString = num.toString(), newString="";
    let length = numString.length;

    if (numString.indexOf('.') !== -1)
        length = numString.indexOf('.');

    for (let i = length - 1; i >= 0; i = i - 3){
        if (i<2) {
            newString = numString.slice(0, i + 1) + "," + newString; 
        }
        else {
            newString = numString.slice((i - 2), (i + 1)) + "," + newString;
        }
    }
    return newString.slice(0, newString.length - 1) + numString.slice(length);
}
// module.exports = { countDecimalDigits, add, subtract };