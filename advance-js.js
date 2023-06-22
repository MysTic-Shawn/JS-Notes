/* // Event Propagation

// Event Bubbling(by default)
    The event is first captured and handled by the innermost element and then propagated to outer elements. 

// Event Capturing
    The event is first captured by outer most element and propagated to the inner elements.

// example:
        const parentId = document.getElementById('parentId');
        const childId = document.getElementById('childId');

        const parentCall() => {
            alert('Parent is called');

        }

        const childCall() => {
            alert('Child is called');
        
        }


        // this is for bubbling
        parentId.addEventListener('click' , parentCall);
        childId.addEventListener('click' , childCall);

        // this is for capturing
        parentId.addEventListener('click' , parentCall , true);
        childId.addEventListener('click' , childCall , true);

        *bonus: event.stopPropagation(); used to stop moving to another element while propagating*

*/


/* // Higher Order Function and CallBack Function

const add = (a,b) =>{
    return a+b;
}

const sub = (a,b) =>{
    return Math.abs(a-b);
}

const mult = (a,b) => {
    return a*b;
}

const divide = (a,b) => {
    return a/b;
}

const calculator = (n1, n2, operator) => {
    return operator(n1,n2);
}

console.log(calculator(2,3,add));

// here calculator is HIGHER ORDER FUCNTION which means it can pass other functions as an argument
// here operator is an CALLBACK FUNCTION which means it is a funciton which can pass to other functions as an argyment

*/


/* // Function Currying 

// Currying is a technique of evaluating function with multiple arguments, into sequence of funciton with single argument.

function sum(num1) {
    return function(num2) {
        return function(num3) {
            console.log(num1+num2+num3);

        }   
    }
}

sum(2)(3)(4); 

//also can be written with arrow function as below:

    const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3);
    sum(2)(3)(4);

*/


/* // JSON (Java Script Object Notation)  is like XML
// JSON stores data as 'key-value' pair where key has be written in double courts("") cuz JSON reads all it's data as a String format

// converting JS object into JSON string we use 'JSON.stringify'

    var my_object = {key1 : "some value", key2 : true, key3 : 5};
    var object_as_string = JSON.stringify(my_object);
    
// converting JSON string into JS object we use 'JSON.parse'

    var string_as_object = JSON.parse(object_as_string);
    
*/ 


/*



*/