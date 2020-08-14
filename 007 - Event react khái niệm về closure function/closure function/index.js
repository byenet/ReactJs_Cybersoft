// closure function la ky thuat viet ham long trong ham

function main(message) {
    return function demo() {
        alert(message);
    }
}

// main("Hello huy")();
const funcDemo = main('Hello huy');
funcDemo();


// -------------------------------------

let message2 = "hello huy 2";

function main2() {
    return function demo() {
        alert(message2);
    };
}

// main("Hello huy")();
const funcDemo2 = main2();
funcDemo2();


// ------------------------------------- 
document.getElementById('btn').onclick = funcDemo2;