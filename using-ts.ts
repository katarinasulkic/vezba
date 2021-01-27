const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;
const button = document.querySelector('button')! as HTMLButtonElement;

const add = (a : number, b: number)=> {
    const resulte= a * b;
    return resulte;

}

button.addEventListener("click", function() {
console.log(add(+input1.value, +input2.value))});
console.log('ime');
    

