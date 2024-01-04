//--------------------------------------------------------------------------------------------------------------------//
                                        // JAVASCRIPT NOTES \\
//--------------------------------------------------------------------------------------------------------------------//



//--------------------------------------------------------------------------------------------------------------------//
                                        // DATA TYPES \\
                                        // Primitive \\
//--------------------------------------------------------------------------------------------------------------------//

//NUMBER
let num = 42;
let floatNum = 3.14;

//STRING
let text = 'Hello, World!';

// BOOLEAN
let isTrue = true;
let isFalse = false;

// UNDEF
let undefinedVar;

//NULL
let nullValue = null;

//SYMBOL (ECM6)
let symbol = Symbol('unique');

// VARIABLES        // auto detects type in declaration
var oldVar = 'I am a variable'; // Has function scope, old
let modernVar = 'I am a variable with block scope'; // has block scope
const pi = 3.14; // declares cosntant, cant be reassigned

//--------------------------------------------------------------------------------------------------------------------//
                                            // OPERATORS \\
//--------------------------------------------------------------------------------------------------------------------//

// arithemtic operators ( +, -, *, /, % )
let sum = 10 + 5; // etc

//Comparison operators ( ==, ===, !=, >, <, >=, <= )
let isEqual = (5 ==='5'); // false

//logical operators [ &&, (and), ||(or), ! (not) ]
let isTrue = true && false; // false

//Assignment operators ( =, +=, -=, /= )
let x = 10;
x += 5; // x is now 15

//--------------------------------------------------------------------------------------------------------------------//
                                        // Control Flow \\
//--------------------------------------------------------------------------------------------------------------------//

//conditionals ( if, else if, else, switch case )

let number = 42;
if (number > 50) {
    console.log('Number is greater than 50');
} else if (number < 50) {
    console.log('Number is less than 50');
} else {
    console.log("Number is 50");
}

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("It's the start of the week");
        break;
    case "Tuesday":
        console.log("It's the second day");
        break;
    case "Wednesday":
        console.log("It's the middle of the week");
        break;
    case "Thursday":
        console.log("It's almost Friday");
        break;
    case "Friday":
        console.log("It's finally Friday!");
        break;
    default:
        console.log("It's the weekend");
}


//Loops ( For, While, Do-While )
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

let count = 0;

do {
    console.log("Count: " + count);
    count++;
} while (count < 5);

//Falsey

if (false) {                            //FALSE
    // This block will not be executed
}

let undefinedValue;                     //UNDEFINED VALUE
if (undefinedValue) {
    // This block will not be executed
}

let nullValue = null;              // NULL
if (nullValue) {
    // This block will not be executed
}

let zero = 0;                   // 0
if (zero) {
    // This block will not be executed
}

let notANumber = NaN;           // NaN
if (notANumber) {
    // This block will not be executed
}

let emptyString = '';               // Empty String
if (emptyString) {
    // This block will not be executed
}


//--------------------------------------------------------------------------------------------------------------------//
                                            // FUNCTIONS/METHODS \\
//--------------------------------------------------------------------------------------------------------------------//

// FUNCTION
function add(a, b) {        //DECLARATION
    return a + b;
}
let result = add(3, 5); // INVOCATION


// METHOD
let car = {         // DECLARATION
    brand: 'Toyota',
    model: 'Camry',
    start: function() {
        console.log('Engine started');      // INVOCATION
    }
};
car.start();

// Adding a method to an object dynamically
car.stop = function() {
    console.log('Car stopped');
};

car.stop();

// KEY DIFFERENCES

// functions and methods differ in association invocation and declaration

// Key Differences:
// Association:
//
// Function: Independent, not associated with any object.
// Method: Associated with an object; it is a property of that object.
// Invocation:
//
// Function: Called by its name followed by parentheses.
// Method: Called on an object using dot notation.
// Declaration:
//
// Function: Can be declared anywhere in the code.
// Method: Defined as a property within an object literal or added to an object dynamically.

//--------------------------------------------------------------------------------------------------------------------//
                                        // OBJECTS AND ARRAYS \\
//--------------------------------------------------------------------------------------------------------------------//

//Object
let person = {      // objects store in key value pairs
    name: 'John',
    age: 30,
    isStudent: false
};

//Array
let colors = ['red', 'green', 'blue'];  //

//--------------------------------------------------------------------------------------------------------------------//
                                        // DOM MANIPULATION \\
//--------------------------------------------------------------------------------------------------------------------//

//Accessing elements
let elementById = document.getElementById('myElementId');   // get element By ID
let elementsByClass = document.getElementsByClassName('myClassName');
let elementsByTag = document.getElementsByTagName('div');
let element = document.querySelector('#myElementId .myClassName');

//Modifying Content
element.innerHTML = 'New content';
element.textContent = 'Text content';
element.setAttribute('data-custom', 'value');

//Styling Elements
element.style.color = 'red';
element.style.fontSize = '16px';

//Creating and Appending Elements
let newElement = document.createElement('div'); // create element
parentElement.appendChild(newElement);      // appendChild

//Event Handling
element.addEventListener('click', function() {      // add EventListener
    console.log('Element clicked!');
});

// Get an element by ID
let element = document.getElementById('myElement');

// Change its content
element.innerHTML = 'New content';

// Add a class
element.classList.add('newClass');

//--------------------------------------------------------------------------------------------------------------------//
                                    // ASYNC JAVASCRIPT \\
//--------------------------------------------------------------------------------------------------------------------//
function fetchData() {              // OBSOLETE HOWEVER NOTABLE
    return new Promise((resolve, reject) => {
        // Async operation
        if (/* operation is successful */) {
            resolve(data);
        } else {
            reject(error);
        }
    });
}

async function fetchData() {        // CURRENT STANDARD
    try {
        let data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}




