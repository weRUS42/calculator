let currentOperation = document.getElementById("currentOperation");
let pastOperation = document.getElementById("pastOperation");
let arr = [];
let operator = "";

let clear = document.getElementById("clear");


let calculator = {
    add(a,b) {
        operator = "";
        pastOperation.innerText = "";
        currentOperation.innerText = a+b;
        return;
    },
    subtract(a,b) {
        operator = "";
        pastOperation.innerText = "";
        currentOperation.innerText = a-b;
        return;
    },
    multiply(a,b) {
        return a*b;
    },
    divide(a,b) {
        return a/b;
    },
    clear(e) {
        if(e.target.id == clear.id) {
            currentOperation.innerText = "";
            pastOperation.innerText = "";
            operator = "";
        }
    }
}
// document.addEventListener("keyup", (e) => {
//     if(!isNaN(+e.key)) {
//         currentOperation.innerText += e.key;
//     } else if (e.key == "+" || e.key == "-" ||e.key == "*" ||e.key == "/") {
//         pastOperation.innerText +=currentOperation.innerText + e.key;
//         currentOperation.innerText = "";
//     }
// })

document.addEventListener("keyup", (e) => {
    if(Number.isInteger(+e.key)) {
        currentOperation.innerText += e.key;
    } else if((e.key == "+","-","/","*") && (operator == "")) {
        // console.log(e.target);
        operator = e.key;
        pastOperation.innerText = currentOperation.innerText;
        currentOperation.innerText = "";
    } else if(currentOperation.innerText != "") {
        switch(operator) {
            case "+":
                calculator.add(+pastOperation.innerText,+currentOperation.innerText);
                break;
            case "-":
                calculator.subtract(+pastOperation.innerText,+currentOperation.innerText);
                break;
        }
    }
})

document.addEventListener("click", (e) => {
    // console.log(e.target.dataset.value == 1);
    if(Number.isInteger(+e.target.dataset.value)) {
        currentOperation.innerText += e.target.dataset.value;
    } else if((e.target.dataset.value == "+","-","/","*") && (operator == "")) {
        // console.log(e.target);
        operator = e.target.dataset.value;
        pastOperation.innerText = currentOperation.innerText;
        currentOperation.innerText = "";
    } else if(currentOperation.innerText != "") {
        switch(operator) {
            case "+":
                calculator.add(+pastOperation.innerText,+currentOperation.innerText);
                break;
            case "-":
                calculator.subtract(+pastOperation.innerText,+currentOperation.innerText);
                break;
        }
    }
})

document.addEventListener("click", calculator.clear)

// document.addEventListener("keyup", (e) => {
//     console.log(e.key == "*");
// })