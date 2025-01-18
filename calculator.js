//Alle Elemente hernehmen 

const display = document.getElementById("display");
const numbers = document.querySelectorAll(".zahlen, .numberZero, .komma, .operator, .operatorMultiply");
const clear = document.getElementsByClassName("clear")[0];
const gleich = document.getElementsByClassName("gleich")[0];


//Funktion zum Anzeigen der gedrückten Tasten im unseren Display

const updateDisplay = (buttonValue) => {
    display.value += buttonValue;
};

// Event-Listener für Klick auf Zahlen, Komma und Operatoren

numbers.forEach((numbersElement) => {
    numbersElement.addEventListener("click", ()=>{
        updateDisplay(numbersElement.innerText);
    });
});

//Funktion zum Berechnen des Ausdrucks im Display
const calculatorExpression = () => {
    display.value = eval(display.value);
}

//Event listener für klicks auf unser Gleichheitszeichen

gleich.addEventListener("click", calculatorExpression);

// Funktion für clearen des Displays bei Click

const displayClear = () => {
    display.value = "";
};

// Event Listener für Clear im Display

clear.addEventListener ("click", displayClear);

// BONUS - EventListener für Tastatureingaben

document.addEventListener ("keydown", (event) => {
    const key = event.key;

    if (key==="Enter"){
        calculatorExpression();
    } else if (key === "Escape"){
        displayClear();
    } 
    else if (key === "0"){
    display.value+="0";
    }
    
    else if (key === "1"){
        display.value += "1";
    }

    else if (key === "2"){
        display.value+="2";
    }

    else if (key === "3"){
        display.value+="3";
    }

    else if (key === "4"){
        display.value+="4";
    }

    else if (key === "5"){
        display.value+="5";
    }
    else if (key === "5"){
        display.value+="5";
    }
    else if (key === "6"){
        display.value+="6";
    }
    else if (key === "7"){
        display.value+="7";
    }
    else if (key === "8"){
        display.value+="8";
    }
    else if (key === "9"){
        display.value+="9";
    }
    else if (key === "*"){
        display.value+="*";
    }
    else if (key === "."){
        display.value+=".";
    }
    else if (key === "/"){
        display.value+="/";
    }

    else if (key === "+"){
        display.value+="+";
    }

    else if (key === "-"){
        display.value+="-";
    }

    
})
