
interface Greetable {
    name: string;
}

interface Printable {
    print(): void;
}

class User implements Greetable, Printable{
    // name: string;
    // age: number;
    constructor(public name: string, public age: number) {
      // this.name = name;
      // this.age = age;
    }
    print() {
        console.log(this.name);
    }
}

class Admin extends User {
    constructor(name: string, age: number ,private permissions: string[]) {
        super(name, age);
    }
}

const user = new User('Max', 30);
console.log(user.name);

const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = <HTMLInputElement> document.getElementById('num2');
const buttonElement = document.querySelector('button') as HTMLButtonElement;

function add(a: number,b: number) {
    return a+b;
}
//TYPE ALIAS with union types:
type PrintMode = 'console' | 'alert';

//Enums:
enum OutputMode {
    CONSOLE,
    ALERT
};


interface CalculationContainer {
    res: number;
    print(): void;
}
//UNION AND TYPES
function printResult(result: string | number, printMode: OutputMode): void {
    if (printMode === OutputMode.CONSOLE) {
        console.log(result)
    }else if (printMode === OutputMode.ALERT) {
        alert(result);
    }
    // console.log(result);
}

// type CalculationResults = {res: number, print: () => void } [];
type CalculationResults = CalculationContainer[];

let results:  CalculationResults = [];
const names = ['Max'];

buttonElement.addEventListener('click', () => {
    const num1 = +num1Input.value;
    const num2 = +num2Input.value;
    const result = add(num1, num2);
    const resultContainer = {
        res: result,
        print()  {
            console.log(this.res);
        }
    };

  results.push(resultContainer);
  // results[0].print;
  // printResult(results);
    printResult(result, OutputMode.CONSOLE);
    printResult(result, OutputMode.ALERT);
});
