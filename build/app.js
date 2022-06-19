"use strict";
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const buttonElement = document.querySelector('button');
function add(a, b) {
    return a + b;
}
function printResult(result, printMode) {
    if (printMode === 'console') {
        console.log(result);
    }
    else if (printMode === 'alert') {
        alert(result);
    }
    // console.log(result);
}
let results = [];
const names = ['Max'];
buttonElement.addEventListener('click', () => {
    const num1 = +num1Input.value;
    const num2 = +num2Input.value;
    const result = add(num1, num2);
    const resultContainer = {
        res: result,
        print() {
            console.log(this.res);
        }
    };
    results.push(resultContainer);
    // results[0].print;
    // printResult(results);
    printResult(result, 'console');
    printResult(result, 'alert');
});
