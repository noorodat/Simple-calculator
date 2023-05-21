/*

Start Calculator

*/

// Get Header
let calcHeader = document.querySelector(".header");


// Get Calculations
let dot = document.querySelector(".calculations .dot");

let ac = document.querySelector(".calculations .make-zero");

let equal = document.querySelector(".calculations .equal");

let calculations = document.querySelectorAll(".calculations .calc");


// Get Numbers
let numbers = document.querySelectorAll(".calculations div .number");


// Click Number Function
function clickNumber() {
    
    numbers.forEach( num => {

        num.onclick = function () {

            if(calcHeader.textContent === "0") {    
                calcHeader.textContent = "";
            }

            calcHeader.textContent += num.textContent;
        }
        

    });

}

// Click calculations function
function clickCalc() {

        calculations.forEach( calc => {

            calc.onclick = function () {  

                if(calcHeader.textContent.length === 1 && calcHeader.textContent.indexOf(0) === 0) {
                    return false;
                }

                else {
                    calcHeader.textContent += calc.textContent;
                }

            }
            
    
        });

        

}

// Make calculations Function

function makeCalc() {

    equal.onclick = function () {

        if(calcHeader.textContent.length === 1 && calcHeader.textContent.indexOf(0) === 0) {
            return false;
        }
        else {
            let result = eval(calcHeader.textContent);
            calcHeader.textContent = result;
        }
    }

}

function makeZero() {

    ac.onclick = function() {
        calcHeader.textContent = "0";
    }

}


clickNumber();
clickCalc();
makeCalc();
makeZero();
