/* HAVING OUTPUT ON CONSOLE

console.log('amma ki jai')
*/


/* 2. VALUES AND VARIABLES IN JS

var myName='shawn hahha'
console.log(myName)
*/


/* 3. PRIMITIVE DATA TYPES IN JS

console.log(typeof(myName))     //String
var myAge=26
console.log(typeof(myAge))      //number
var flag=true
console.log(typeof(flag))       //boolean
var myGender
console.log(typeof(myGender))   //undefined

//bug
var myUseless=null
console.log(myUseless)
console.log(typeof(myUseless))  //null

//NaN : Not a Number
console.log("sam"-"sammy")
    //NaN is a property of the global object, in other words it is a variable in global scope
    //also can be used to check if a variable  is a number or not using 'isNaN'
*/


/* 4. EXPRESSIONS AND OPERATORS

// Arithematic operators
console.log(2+2)
console.log(2-3)
console.log(20/5)
console.log(8*8)
console.log(8%3)

// Post increment/decrement
var num=5
var newNum=num++
console.log(num)
console.log(newNum)

// Prefix increment/decrement
var num1=5
var newNum1=++num1
console.log(num1)
console.log(newNum1)

//Bonus 
console.log(3**5)   //power operator i.e. 3*3*3*3*3

// the == checks for the value without checking its data type
console.log(4=='4')
// the === checks for the value as well as its data type
console.log(4==='4')
*/


/*5. CONTROL STATEMENT AND LOOPS

//if-else
var year=2023
if(year%4===0){
    if(year%100===0){
        if(year%400===0)
        console.log("Leap Year")
        else 
        console.log("Non-Leap Year")
    }
    else
    console.log("Leap Year")
}
else
console.log("Non-Leap Year")

    //ternary operator i.e. shorter version of if-else
    // variablename = (condition) ? value1:value2
    var age=16
    console.log(age>=18 ? "eligible":"not-eligible")

//switch statement
var area='circle'

switch(area){
    case 'circle': console.log("Area of the circle is 'PI*r**2'")
    break
    case 'rectangle': console.log("Area of the rectangle is 'length*breadth'")
    break
    case 'triangle': console.log("Area of the triangle is '(1/2)*length*breadth'")
    break
    default: console.log("bhakkkkk")
}

//while loop
console.log("while loop: ")
var num=0
while(num<10){
    console.log(num)
    num++
}

//do-while loop
console.log("do-while loop: ")
var num1=0;
do{
    console.log(num1);
    num1++;
} while(num1<10);

//for loop
console.log("for loop: ")
for(var i=0;i<10;i++){
    console.log(i)
}

console.log("Print table for a given number: ")
var tabelOf=8
for(var i=1;i<=10;i++){
    console.log(i*tabelOf)
}
*/


/*6. FUNCTIONS IN JS

var a=4;
var b=6;

function sum(){                         //defining a function 
    var total=a+b;
    console.log(total);
}
sum();                                  //calling a function

function product(x,y){                  //passing parameters
    var total=x*y;
    console.log(total);
}
product(2,3);                           //passing arguments
product(4,2);

//Function Expression                   passing functions into variable
function sum1(x,y){
    return x+y;
}

var funExp=sum1(20,30);
console.log("the sum is:" + funExp);

//Anonymous Funcitons                   where u dont have to name a function but directly create a function in function-expression
var funcExp=function(x,y){
    return x*y;
}

var p1=funcExp(10,20);
var p2=funcExp(120,24);

console.log("product of two num is: "+p1);
*/

 
/*//MODERN JS

HISTORY:
JS was CREATED in 1996
JS was submitted to ECMA International for standardisation which results in ECMAScript in 1997
JS was decided to switch to annual update releases of ECMASript in 2015

ECMASript 2015/ES6 update:
//a.LET and CONST
//b.TEMPLATE STRINGS
//c.DEFAULT ARGUMENTS
//d.ARROW FUNCTIONS
//e.DESTRUCTURING
//f.OBJECT PROPERTIES
//g.REST OPERATORS
//h.SPREAD OPERATORS


/* a. VAR vs LET vs CONST
//VAR can be updated and accessed inside function scope


var heading='instant';
console.log(heading);
var heading ='coding';                      //var can be updated
console.log(heading);

function biodata(){
    var myFirstName='Rajjo';
    console.log(myFirstName);
    if(true){
        var myLastName='Rani';
        console.log('inner '+myFirstName);
        console.log('inner '+myLastName);        
    }
    console.log('outer '+myLastName);
}

biodata();


//LET can be updated but can't be accessed outside block scope


function biodata(){
    let myFirstName='Rajjo';
    console.log(myFirstName);
    if(true){
        let myLastName='Rani';
        console.log('inner '+myFirstName);
        console.log('inner '+myLastName);        
    }
    console.log('outer '+myLastName);
}

biodata();


//CONST neither be updated nor be accessed outside block scope


const heading='instant';
console.log(heading);
const heading ='coding';                      //const can't be updated
console.log(heading);

function biodata(){
    const myFirstName='Rajjo';
    console.log(myFirstName);
    if(true){
        const myLastName='Rani';
        console.log('inner '+myFirstName);
        console.log('inner '+myLastName);        
    }
    console.log('outer '+myLastName);
}

biodata();

*/
/* b.TEMPLATE STRING (TEMPLATE LITERALS)
// ` blah blah blah ${value/operations} blah blah blah `

let num=4;
for(let i=1;i<=10;i++){
    console.log(`${num}*${i}=${num*i}`);
}
*/

/* c. DEFAULT PARAMETERS
// set any of the value inside function paramters

function mult(a,b=5){
    return a*b;
}
console.log(mult(3));
*/

/* d. ARROW FUNCTIONS (FAT ARROW FUCNTIONS)
// varName=()=>{function block};

    const sum=()=>{
    let a=4,b=5;
    let sum=a+b;
    return console.log(`sum is ${sum}`);
}

sum();


//can be written as:
const sum=()=>{console.log(`sum is ${4+5}`)};
sum();
*/

/* e. DESTRUCTURING
// Array Destructuring
    const myBioData = ['Rajjo', 'Rani', 24];
    
    //instead of writing let myFname=myBioData[0]; ,etc
    let [myFname, myLname, myAge]=myBioData;
    console.log(myAge);

    //we can also add values to it
    let [myFname2, myLname2, myAge2, myCourse='JS']=myBioData;
    console.log(myCourse);

//Object Destructuring
    myData = {
        first : 'Rajjo',
        last :  'Rani',
        age : 26  
    }
    let{first,last,age,course='JS'} = myData;
    console.log(age);
    console.log(course);
*/  

/* f. Object Properties
let myName1 = 'Rajjo';
const myBio1 = {
    myName1 : 'hello champak!',
    myAge1 : 'is my age'
}
console.log(myBio1);

let myName2 = 'Rajjo';
const myBio2 = {
    [myName2] : 'hello champak!',       //add dynamic value using []
    [20+6] : 'is my age'
}
console.log(myBio2);

*/

// g. Spread Operator
/*
const color = ['red','green','yellow','blue'];

const myColors = [...color, 'white', 'pink'];

console.log(color);
console.log(myColors);
*/


/* 7. ARRAYS IN JS 
// in arrays Fat Arrow functions syntax will be:  variableName=arrayName.methodUsed((currentValue, currentIndex, sourceArray) => {function block});

// Traversing Array

let myFriends=['ayush','kutta','kamina','hehe'];        //declaring an array, can store different data-types
console.log(myFriends[2]);

console.log(myFriends.length);                          //finding length of array

    // for-in loop    
    console.log('for-in loop: ');                           
    for (let elements in myFriends){                    //gives the index number
        console.log(myFriends[elements]);
    }

    // for-of loop
    console.log('for-of loop: ');
    for (let elements of myFriends){                    //gives the value at index
        console.log(elements);
    }

    // for-each loop
    console.log('for-each loop: ');                     //once started, will not terminate till end
    myFriends.forEach(function(element, index, array){
        console.log(element);
    });
        //also can be written as: 
        console.log('using fat arrow: ');
        myFriends.forEach((element,index,array)=>{
            console.log((element));
        }); 

// Searching and Filter in Array
let myFriendsName=['kutta','kamina','hehe','kutta','sammy'];

        //Searching
        //indexOf()
        console.log(myFriendsName.indexOf('kutta'));            //this will print the least index of element
        console.log(myFriendsName.indexOf('kutta',2));          //this will print the least index of element after the given index

        //lastIndexOf()
        console.log(myFriendsName.lastIndexOf('kutta'));        //this will print the greatest index of element
        console.log(myFriendsName.lastIndexOf('kutta',2));      //this will print the greatest index of element before the given index

        //includes()
        console.log(myFriendsName.includes('kutta'));           //this will check the value and return boolean type 
        console.log(myFriendsName.includes('kutta',4));         //this will check the value after given index and return boolean type 

        //Filtering
        //splice()          //splice(starting index, deleting number of elements after staring index, elements to add);
        myFriendsName.splice(3,0,"jass");
        console.log(myFriendsName);             //adding new element

        myFriendsName.splice(4,1,'kutti');
        console.log(myFriendsName);             //removing one element and adding another

        myFriendsName.splice(myFriendsName.indexOf('hehe'),1,'HEHE');
        console.log(myFriendsName);             //updating element 

//map(), filter(), reduce()     //most important
        //map
        //syntax: map(currentValue, currentIndex, sourceArray) => {function block}

        let array=[1,4,9,16,25];
        let newArr=array.map((currElem,index,arr)=>{
            return currElem>22;
        })
        console.log(array);
        console.log(newArr);
        
            //it can be used as
           let newArr1=array.map((currElem,index,array)=>{
               return `index no = ${index} and the value is ${currElem} of array ${array}`;
            })
            console.log(array);
            console.log(newArr1);

        Difference between map() and forEach() is:
        1. returning value: map() returns new array whereas forEach() returns undefined .
        2. ability to chain: map() is chainable, we can attach reduce(), sort(), filter() and so on whereas forEach don't do chaining. 

        //filter()
        //syntax: filter(currentValue, currentIndex, sourceArray) => {function block}
        let array=[1,4,9,16,25];
        let newArr2=array.filter((currElem,index,array)=>{
            return currElem>22;
        })
        console.log(array);
        console.log(newArr2);

        //Practice:
        // 1. Find square root of each element of array

        let arr1 =[25,36,49,64,81];

        let arrSqr=arr1.map((currElem)=>{
            return Math.sqrt(currElem);
        })
        console.log(arr1);
        console.log(arrSqr);

        // 2. Mutliply each element by 2 and return only those elements which are greater than 10

        let arr2=[2,3,4,6,8];

        let arr2Mult = arr2.map((currElem) => {
            return currElem * 2;
        }).filter((currElem) => {
            return currElem > 10;
        })
        console.log(arr2);
        console.log(arr2Mult);

        //reduce()   //reducing 2D, 3D arrays to 1D or in simple we reduce to single element
        //syntax: reduce(accumulator,currentValue, currentIndex, sourceArray) currentValue, currentIndex, sourceArray) => {function block}
         
        let newArr3 = [5,6,2];

        let sum=newArr3.reduce((accumulator, currElem, index, arr) => {
            debugger;
            return accumulator += currElem;
        })
        console.log(sum);

        //Practice 
        // Mutliply each element by 2 and return only those elements which are greater than 10 and calculate the sum of them

        let arr3=[2,3,4,6,8];

        let arr3Mult = arr3.map((currElem) => {
            return currElem * 2;
        }).filter((currElem) => {
            return currElem > 10;
        }).reduce((accumulator,currElem) => {
            return accumulator += currElem;
        });
        console.log(arr3);
        console.log(arr3Mult);

        //bonus if we want a new number to perform operations on a array we do:

        let arr4=[2,3,4,6,8];

        let newArr4 = [5,6,2];

        let sum2=newArr4.reduce((accumulator, currElem, index, arr) => {
            debugger;
            return accumulator += currElem;
        },4)
        console.log(sum2);

        //flattening the array
        const zone = [['zone1','zone2'],
        ['zone3','zone4'],
        ['zone5','zone6'],
        ['zone7','zone8']];

        const newZone=zone.reduce((accum,currElem) => {
            return accum.concat(currElem);
        });

        console.log(newZone);
            //but u can't flat sub-arrays. 
    
*/

/* 8. STRINGS IN JS
//Escape Character: writing special characters using 'content' or "content" or \cotent\

//Finding a String in a String:
    //indexOf()     returns -1 if not found
    //lastIndexOf()     returns -1 if not found

//Finding sor a String in a String
    //search()      returns starting index of the finding string

//Extracting String Parts
    //slice(start,end)      returns extracted part in new String
    //substring(start,end)  returns same as slice but dot accept negative index
    //substr(start,length)  returns same and returns nothing on negative index
        //substr(negative value) returns from last index
    //replace()     replaces only the first match 

//Extracting String Characters
    //charAt(position)      returns single character
    //charCodeAt(position)  returns UNICODE value of that character
    //Property access[]  i.e. str[index]   returns value at index

//Some useful methods
    //toUpperCase()
    //toLowerCase()
    //concat()
    //trim()            removes white spaces from both sides of string but not in-between
    //split             convert string into array
        //split(",")    split on commas
        //split(" ")    split on spaces
        //split("|")    split on bar
    */


/* 9. Date and Time 
    //new Date():       
    let currDate = new Date();
    console.log(currDate);

    console.log(new Date());                    //returns in GMT
    console.log(new Date().toLocaleString());   //returns in IST
    console.log(new Date().toString());         //returns in IST with proper details
    console.log(Date.now());                    //returns how much milliseconds elapsed since 1st january 1970 00:00:00 UTC

    //getting individual dates
    console.log(currDate.getFullYear());
    console.log(currDate.getMonth());
    console.log(currDate.getDate());
    console.log(currDate.getDay());

    //setting individual dates (all in milliseconds )
    console.log(currDate.setFullYear(2022,10,5));
    console.log(currDate.setMonth(10));
    console.log(currDate.setDate(5));

    //getting individual time
    console.log(currDate.getTime());
    console.log(currDate.getHours());
    console.log(currDate.getMinutes());
    console.log(currDate.getSeconds());
    console.log(currDate.getMilliseconds());
    
    //setting individual time
    console.log(currDate.setTime(5));
    console.log(currDate.setHours(5));
    console.log(currDate.setMinutes(5));
    console.log(currDate.setSeconds(5));
    console.log(currDate.setMilliseconds(5));

    //bonus
    console.log(currDate.toLocaleDateString());
    console.log(currDate.toLocaleTimeString());
 */
        
    
/* 10. Math Object 
    let num=99.856;
    console.log(Math.PI);
    console.log(Math.round(num));
    console.log(Math.pow(2,3));
    console.log(Math.sqrt(9));
    console.log(Math.abs(-55));         //return always positive
    console.log(Math.ceil(num));        //return the nearest integer after decimal but always the greater one
    console.log(Math.floor(num));       //return the nearest integer after decimal but always the lower one
    console.log(Math.min(0,48,398331,737,193848,139));
    console.log(Math.max(0,48,398331,737,193848,139));
    console.log(Math.random());         //return any random no within 0 and 1
    console.log(Math.random()*10);      //return any random no within 0 and 9
    console.log(Math.trunc(num));       //return the integer value by removing after decimal regardless of positive or negative
*/


/*  11. DOM, BOM, WINDOW OBJECT

// Window vs Document 
    //Window is the main container/global oject and entire browser operations can be part of window object 
    //DOM is the child of window object

// DOM vs BOM
    //DOM is Document Object Model which deals with the document, HTML elements themselves
        //e.g. document.body.style.background = "red";
    //BOM is Browser Object Model which deals with browser components aside from the document like history, location, navigator
        alert(location.href);        //shows current URL
        if(confirm("Want to visit GitHub ? ")){
            location.href = "https://github.com";       //redirect to the given path
        } 

//DOM Navigation
    document.documentElement        //returns te root element of document
    document.head
    document.body
    document.body.childNodes        //also includes tab, enter and whitespacess
    document.children               //returns regular elements without any text nodes    
    document.childNodes.length
    document.hasChildNodes()        //return boolean
    document.body.parentNode
    document.body.nextElementSibling
    document.body.firstElementChild

//How to search the Elements and updating them
    //we can directly write
    document.getELementbyId('heading').innerHTML = 'welcome to insomnia';
    
    //by taking reference of ID, heading is the object here
    const headingChange = document.getElementById('heading');       //search for element
    headingChange.innerHTML = 'welcome to thapa';               //update the content of element

    //by taking class name
    console.log(document.getElementsByClassName('para'));

    //by taking directly tag name
    console.log(document.getElementsByTagName('p'));

    //by taking name 
    console.log(document.getElementsByName('gender')); 
    
    //bonus
        //document.querySelector()      same use as previous methods but returns the first matching value
        document.querySelector('#heading').innerHTML = "i changed again";       //for ID
        document.querySelector('.para').innerHTML = "i changed again";      //for class
        document.querySelector('p').innerHTML = "i changed again";      //for direct tags

        //document.querySelectorAll()      same use as previous methods but returns all the elements
        document.querySelectorAll('#heading').innerHTML = "i changed again";       //for ID
        document.querySelectorAll('.para').innerHTML = "i changed again";      //for class
        document.querySelectorAll('p').innerHTML = "i changed again";      //for direct tags
 */


/* 12. HTML Events 

// An HTML event can be something the browser does, or something a user does
    // HTML web page has finished loading
    // HTML input field was changed
    // HTML button was clicked

//Section 1: ways of writing function
    // 1st way is normal defining onclick in HTML code

    // 2nd way is calling a function 
    const callingFunction = () => {
        alert('most common way of writing a function');
    }

    //3rd way is getting by ID
    const thirdWay = document.getElementById('thirdWay');
    thirdWay.onclick = function() {
        alert('most common way of writing function again');
    }

    //4th way is by Event Listener
    const fourthWay = document.querySelector('#fourthWay');
    fourthWay.addEventListener('click', () => {
        alert('i love this way of writing')
    })

    //difference between 3rd(onclick) and 4th(addEventListener) is 4th way can be called multiple times without overwriting whereas
    //3rd way will overwrite the function

//Section 2: What is Event Object
    //Event object is the parent object of sub-events object
    //eg. MouseEvent, focusEvent, KeyboardEvent etc
    const newWay = document.getElementById('fourthWay');
    
    const checkEvent = () => {
        alert('hum dekh rhe hai event object');
        console.log(event);             // to get all the info about the event , we pass event object
        console.log(event.target);      
        console.log(event.type);
    }

    fourthWay.addEventListener('click',checkEvent);

//Section 3: MouseEvent
    mouseDown()                 //on pressing the mouse and holding
    mouseUp()                   //on releasing the mouse
    mouseenter()                //on hovering over the area
    mouseleave()                //on hovering out of the area

// Section 4: Keyboard Event
    onkeypress();               //on clicking a key
    onkeydown();                //on pressing the key and holding
    onkeyup();                  //on releasing the key

// Section 5: InputEvents in JS
    const iceCreams = document.getElementById('iceCreams');

    iceCreams.addEventListener('change', () => {
        const inputChange = document.getElementById('ice').value;
        const iceCreams = document.getElementById('iceCreams').value;
        const result = document.getElementById('result');

        result.innerHTML = `Mr. ${inputChange} selected ${iceCreams} ice-cream flavour`
    });
*/


/* 13. Timing Events 

setTimeout(function, milliseconds);
//Executes a function, after waiting a specified number of milliseconds

clearTimeout(setTimeout reference);
//cancelling the setTimeout

setInterval(function, milliseconds);
//Same as setTimeout(), but repeats the execution of the function continuously

setTimeout(clearTimeout reference);
//cancelling the setInterval
*/


/* 14. OOPs in JS 

//Object Literals
    //object literals is simply a 'key:value' pair data structure
    //storing variables and functions together in one container is knows as objects

    //creating objects:
        //1st way
        let bioData1 = {
            myName : 'hehehe',
            myAge : 22,
            getData : function(){
                console.log(`my name is ${bioData.myName} and my age is ${bioData.myAge}`);
            }
        }
        console.log(bioData1.myName);

        //2nd way: no need to write functions as well after ES6
        let bioData2 = {
            myName : 'hehehe',
            myAge : 22,
            getData(){
                console.log(`my name is ${bioData.myName} and my age is ${bioData.myAge}`);
            }
        }
        console.log(bioData2.myName);

        //when we want to add object inside an object
        let bioData = {
            myName : {
                realName : 'sammm',
                mobileName : 'sasta wala'
                
            },
            myAge : 22,
            printable(){
                console.log(this.myAge);
            },
            getData(){
                console.log(`my name is ${bioData.myName} and my age is ${bioData.myAge}`);
            }
        }
        console.log(bioData.printable());
        console.log(bioData.myName.realName);

// What is 'this' object?
    //it contain the current context
    //this object can have different values depending upon where it is placed
    
    //example 1
        console.log(this.alert('Jai Ho'));              
        //here 'this' refers to window object

    //example 2
        function myName(){
            cosnole.log(this);
        }
        myName();
        //here again this refers to global window object

    //example 3
        let myName='Sammy';
        function myNames(){
            console.log(this.myName);
        }
        myName();
        //here, 'this' again refers to global window object

    //example 4
    const obj = {
        myAge : 22,
        myName() {
             console.log(this);
        }
    }
    obj.myName();

   
   
    //note: fat arrow function can't be used with 'this' object
*/


/* ES8 Features

//String Padding

    let naam = "Sammy";
    console.log(message);
    console.log(message.padStart(8));               //complete the string with total number of characters and if less then add spaces to the start
    console.log(message.padEnd(8));                 //complete the string with total number of characters and if less then add spaces to the end

//Object.values()

    const myData = {name: 'Sammy', age: 22};
    console.log(Object.values(myData));             //returns array in which the value of an object
    
//Object.Entries()

    const myData = {name: 'Sammy', age: 22};
    console.log(Object.entries(myData));            //returns array with the key value pair of the object

*/


/* ES9 Features

const person1 = {name: 'Sammy', age: 22, degree: 'bhad mein gyi'};
const person2 = {...person1};

console.log(person1);
console.log(person2);

*/

