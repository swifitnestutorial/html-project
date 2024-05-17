
/*

 var array = [1,2,3,4,5,];

 function mapper (num) {
    return num = 2;
 }
 var result = array.map(mapper);

 var result = array.map(num) =>{
    return num = 2;
 }); 
 console.log(result);

********************************************************************* class*******************************************************************
 class restaurantmanager{
    //data values
 }
 restaurantlist = [
    {name: "kfc", location: "Rajiv chauk", city: "delhi"},
    {name: "subway", location: "bkc", city: "mumbai"},
    {name: "domino", location: "m g road", city: "banglore"},
 ];

 //functionality
printallnames(){
    this.restaurantlist.forEach(element => {
       console.log(js.city); 
    });
}
let obj = new restaurantmanager();
obj.printallnames();

********************************************************var let and const*********************************************************************

    var array = [1,2,3,4,5,];

 function mapper (num) {
    return num = 2;
 }
 var result = array.map(mapper);

 var result = array.map(num) =>{
    return num = 2;
 }); 
 console.log(result);

    *******************************************************scopping in js*********************************************************************

var num =80; //outer scope

function printmymessage(sandy){
    console.log(sandy);
}

function externalmessage(){
    var num5 = 50;
    alert ("welcome from outeside !!");
    //
    {
        console.log(num5);

        let num6 = 60;
        console.log(num6);  //60

        const num7 = 70;
        console.log(num7);  //70

        var num9 = 90;
        console.log(num9);  //90

    }
    // console.log(num); //block scope,uncaught referenceerror: num6 is not defined
    //cconsole.log(num); //block scope,uncaught referenceerror: num7 is not defined
    console.log(num5);  //50

    console.log(num8);
    console.log(num9);//

    let swaroop ="wellcome to class !!";
    printmymessage(swarrop);
}

function changeMyCompany(){
    //get hold of the element
let element  = document.getElementById("myDiv");

//change the content of the element
element.innerHTML = "welcome to Facebook !!";

//console log
console.log("I changed my company");

//alert the data
//alert("welcome to the new company !!");

//change content of a web page 
document.write("I think, you got a very good package !!");
}

function askForInput() {
let userName = window.prompt("what is your good name ? ");
let element = document.getElementById("username");
element.innerHTML = userName;
}

function deleteThePost() {
    let elements = document.getElementsByClassName("btnClass");

    let confirm = window.confirm("are you sure your want to delete ? ");
    let element = document.getElementById("username");

    if (confirm) {
        element.innerHTML = "Post deleted";
    } else{
        element.innerHTML = "Post Not deleted"; 
    }
}

******************************************************advance scopping concepts***************************************************************

    var num =80; //outer scope

function printmymessage(sandy){
    console.log(sandy);
}

function externalmessage(){
    var num5 = 50;
    alert ("welcome from outeside !!");
    //
    {
        console.log(num5);

        let num6 = 60;
        console.log(num6);  //60

        const num7 = 70;
        console.log(num7);  //70

        var num9 = 90;
        console.log(num9);  //90

    }
    // console.log(num); //block scope,uncaught referenceerror: num6 is not defined
    //cconsole.log(num); //block scope,uncaught referenceerror: num7 is not defined
    console.log(num5);  //50

    console.log(num8);
    console.log(num9);//

    let swaroop ="wellcome to class !!";
    printmymessage(swarrop);
}

function changeMyCompany(){
    //get hold of the element
let element  = document.getElementById("myDiv");

//change the content of the element
element.innerHTML = "welcome to Facebook !!";

//console log
console.log("I changed my company");

//alert the data
//alert("welcome to the new company !!");

//change content of a web page 
document.write("I think, you got a very good package !!");
}

function askForInput() {
let userName = window.prompt("what is your good name ? ");
let element = document.getElementById("username");
element.innerHTML = userName;
}

function deleteThePost() {
    let elements = document.getElementsByClassName("btnClass");

    let confirm = window.confirm("are you sure your want to delete ? ");
    let element = document.getElementById("username");

    if (confirm) {
        element.innerHTML = "Post deleted";
    } else{
        element.innerHTML = "Post Not deleted"; 
    }
}

***************************************************javascript es6*****************************************************************************

    Es6: introduction in 2015

    ES: ECMA script
    ECMA: european computer manufactirer,s association
        -> this agency manages the js staderds and rules

    1997-2015: ES%
    2015: ES6,ES2015 = ES% + lot of new features

    (1) let and const
    (2) arrow function
    (3) classes along with this keyword
    (4) default params
    (5) template string
    (6) promises
    (7) spreade operator, rest operator and object destructing
    (8) modules

***********************************************************operators and statements***********************************************************

**********************************************************dom manipulation********************************************************************

*********************************************************arrays and operators*****************************************************************

*************************************************************data types in js ****************************************************************

    (1) primitive datatypes
        - number (digits,integer,float,decimal)
        - string (char,varchar,string)
        - boolean (true:1, false:0)
    (2) reference datatype
        - array: contigous location of memory holding the data
        - function(classes)
        - objects
    (3) other data types
        -undefined: variable whose values is not defined
        -null: empty objects

***********************************************************data types in js*******************************************************************
    // var numDT1 = 20;
    // console.log(typeof numDT1); // number

    // var numDT2 = 20.455;
    // console.log(typeof numDT2); // number

    // var strDT1 = "A";
    // console.log(typeof strDT1); // string

    // var strDT2 = "Abhishek";
    // console.log(type strDT2); // string

    // var boolDT1 = true;
    // console.log(typeof boolDT1); // boolean

    // var boolDT2 = false;
    // console.log(typeof boolDT2); // boolean

    // var undDT1 = undefined;
    // console.log(typeof undDT1); // undefined

    // var nullDT1 = null;
    // console.log(typeof nullDT1); // object

    // var name; // undefined

****************************************************operators in javascript*******************************************************************
    1) arithmetic operators
    a.  +   : adds numbers
    b.  -   : substracts numbers
    c.  *   : multiplication numbers
    d.  /   : divides two numbers
    e.  %   : it gives the remainder of a division operators numbers
    f.  increment
         1.  post increment
         2.  pre increment
    g.  decrement
         1.post decrement
         2.pre decrement
    2) assigment operators
         a. = used to assighn a value
         b. concise way of representation
    3) comparison operators
         a. == it compares the data value on both sides and not the data types
         b. === it commpare the data value on both sides as well as the data type
         c. check rest in PPT
    4) logical operators
         a. &&| it checks the condition on both sides, if both are true, then it returns true
         b. || it checks the condition on both sides, if either one of them is true , then it returns true 
         c. !  it gives you a negation / inversion of the value

*********************************************************classes in js ***********************************************************************

    class <name_of_class> {
        // data membars
        //functionalities
    }

    e.g.

    class restaurentManager{
        //data values
        restaurantList = [
        {name: "kfc", location: "rajiv choek", city: "delhi"},
        {name: "subway", location: "bkc", city: "mumbai"},
        {name: "domino's", location: "mg road", city: "banglore"},
        ];

        //functionality
        printAllNames(){
            this.restaurentlist.forEach((pinky) =>{
                console.log(pinky.name);
            });
        }
    }
    let obj = new restaurentManager();
    obj.printAllNames();



*************************************************************** class*************************************************************************
 class restaurantmanager{
    //data values
 }
 restaurantlist = [
    {name: "kfc", location: "Rajiv chauk", city: "delhi"},
    {name: "subway", location: "bkc", city: "mumbai"},
    {name: "domino", location: "m g road", city: "banglore"},
 ];

 //functionality
printallnames(){
    this.restaurantlist.forEach(element => {
       console.log(js.city); 
    });
}
let obj = new restaurantmanager();
obj.printallnames();

***********************************************************advanced js************************************************************************

**********************************************************advanced concepts*******************************************************************
    
******************************************************* assighnment operator :****************************************************************

                var x = 10;
                var y = 20;

                x = x + 1; // 11
                x += 1;  // 12

                y = y - 1; // 19
                y - = 1;  // 18

                x = x * 2;  // 20 
                x *= 2;   // 40

                //comparisons operators

                // var num1 = 10;
                // var num2 = "10";

                // if (num1 == num2){
                //      console.log('both are equal');
                // } else {
                // console.log('NOT equal');
                // }

                // if (num1 === num2) {
                //      console.log('both are equal');
                // } else {
                //      console.log('Not equal');
                //}

                //var num3 = 10;
                // var num4 = '10';

                // if (num3 != num4) {
                //      console.log("Not Equal")
                // } else {
                //      console.log("Equal");
                // }

                // if (num3 !== num4) {
                //      console.log("Not Equal")
                // } else {
                //      console.log("Equal");
                // }

                // var num1 = 20;
                // var num2 = 20;

                // if (num1  <= num2) {
                //      console.log("Not Equal")
                // } else {
                //      console.log("Equal");
                // }
                .
                }

                 if 1(condition) {
                    // statememnt in if block
                    if (condition) {
                        // statement in if block
                    } else {
                        // statement in else block
                    } else {
                        // statement in else block
                    }
                    (condition) ? (condition) ? (statement in if block) : (statement in else block ) : (statement in else block)
                 }


*********************************************************classes in java script***************************************************************
                 ES5 - no classes in js
                 ES6 - js introduced classes 

                 this  - keyword is used to refer to the class

                  class <name_of_class >n{
                   // data member
                   //functionalities
                   }
                   //without constructor function
                   class myClass {
                    name = "rahul";
                    rollNo = 21;
                    subject = [
                    "maths",
                    "s.st.",
                    "science",
                    " english",
                    "hindi"
                    ];
                    //functionalities

                    printName(){
                        console.log(this.name);
                    }

                    addsubject(subject){
                        this.subjects.push(subject);
                        this.printName();
                    }
                    
                    getAllsubjects(){
                        return this.subjects;
                    }
                 }

                 var myobj = new myClass();
                 console.log(myobj.name);
                 console.log(myobj.rollNO);
                 console.log(myobj.subject);
                 console.log(myobj.addsubject("React"));
                 console.log(myobj.getAllsubjects());


****************************************************with constructor function*****************************************************************
                 class my Class {
                    // data members
                    name "amit";
                    rollNo = 31;
                    subject = [
                        "maths",
                        "s.st",
                        "sceince",
                        "english",
                        "hindi"
                        ];
                    
                        //functionalities
                        
                        constructor(_name, _rollNo){
                            this.name = _name;
                            this.rollNo = _rollNo;   
                        }
                        printName(){
                        console.log(this.name);

                        addsubject(subject){
                        this.subject.push(subject);
                        this.printName();
                    }

                        getAllsubject(){
                            return this.subjects;
                        }
                    }
                    
                    var myobj = new myClass("amit",31);
                    console.log(myobj2.name);
                    console.log(myobj2.rollNO);
                    console.log(myobj.subject);
                    console.log(myobj.addsubject("React"));
                    console.log(myobj.getAllsubject());

***************************************************************d o m *************************************************************************
                    DOM: document object model
                        -> made up of model
                        -> every element is called a node 
                        -> it follows a tree structure

            doccuments
                    -> root / html
                    -> head
                        -> style
                        -> script
                        -> title
                        -> meta
                        -> link
            -> body
                -> div
                     -> div
                        -> content (side)
                     -> div 
                        -> content (div1)
                     -> div
                        -> content(div2)
                     -> div
                        -> content (div3)

****************************************************************strings***********************************************************************
    var string1 = "wellcome to javascript tutorial";

    var string1 = "wellcome to javascript tutorial";

    var string1 = "wellcome to javascript tutorial";

    cosole.log(str3);
    console.log(typeof str3);

    //concatinate 2 strings

    var str4 = str1 + str2;
    console.log(str4);

    var str5 = "welcome" + " " + // " uncaught syntax : unvalid or unexpected token" " to" + " " + " " "to the tutorial !";
    console.log(str5);

    


************************************************************string function ******************************************************************
    //string function 

    var str9 = 'welcome_to_tutorial';

    console.log(str9.length); // 20

    console.log(str9.slice(3,7)); //'come' is a new string returned

    console.log(str9.concat("again")); // 'welcome_tutorial_agian'

    console.log(str9.lastindexof('9')); // 15

    console.log(str9.split('_')); // ["welcome", "to", "tutorial", "0"]

    console.log(str9.substr(3,7)); //"come_to"

    console.log(str9.substring(3,7)); // "come"

    var str10 = "zome string";

    str10.replace('s','z'); // "zome string"
    str10.replaceAll('s','z'); // "zome string"
                 

************************************************************negetive index********************************************************************

    console.log(str9.slice(-3,7)); // " "

    console.log(str9.substr(-3,7)); // "ial"

    console.log(str9.substring(-3,7)); // "welcome"

*********************************************************output statement in js **************************************************************
    1) console.log();
    2) doccument.write();
    3) window.alert() / alert();

************************************************************ input statement in js ***********************************************************
    1) window.confirm : will ask for a boolean (tell me yes or no )
    2) window.prompt : user can enter free text (user can give discriptive inputs)

*************************************************************arrays statement in js **********************************************************

    array 1: is a contiguous memory location holding some data. datatype of the data may be diffrenet in each of the 

    var array1 = []; // empty array
    var array2 = [
        1,// number
        "javascript", //string
        2,// Number
        3,// Number
        null,// null
        undefined,// undefined
        6,// Number
        "Class",// string]

    array in js are zero based indexed.

    var array3 = ["A","B","C","D"]
    |   |   |   |   0   1   2   3

    array3[0];// first element of array

    /// length
    array3.length; // gives the length of the array, 4
    array3[array3.length-1];// last element of the array

    /// push
    array3.push(1); // add item in the end of an array.["A","B","c","D",1]

    /// pop
    array3.pop(); // remove an item from the end of an array, ["A","B","c","d"]

    /// ushift

    array3.unshift(0); // add item in the start of an array, [0,"A","B","C","D"]

    /// filter

    var array4 = [1,2,3,4,5,6,7,8,9,10];

    function filterEven(item) {
        console.log(item);
        return item % 2 == 0;
    }

    var evenNumbers = array4.filter(filterEven);

    var array5= [1,23,true,"abc"];

    function filterNumber(item){
        console.log(item);
        return typeof item == 'number' || typeof item == 'string';
    }
    var numbersonly = array5.filter5.filter(filterNumber);
    console.log(array5);
    console.log(numbersOnly);

    /// filter 

    var array = [1,2,3,4,5,6,7,8,9,10];

    function filterEven(item){
        console.log(item);
        return item % 2 == 0;
    }

    var evenNumbers = array4.filter(filterEven);

    console.log(evenNumbers);

    /// filter

    var array6 = [1,2,3,4,5,6,7,8];

    function multiplyNumber (item){
        return item = 10;
    }
    var resultArray6 = array6.map(multiplyNumber);
    console.log(array6);
    console.log(resultarray6);

    ----------------------------------------------------

    var array = [1,2,3,4,5];
    function mapper(num) {
        return num = 2;
    }
    var result = array.map(mapper);

    var result = array.map((num) =>{
        return num = 2;
    })

    /// find 

    var array = ["a","b","javascript",1,4,true,null,undefined,{},[]];

    function search(item) {
        return item == 'javascript';
    }
    var findResult = array10.find(search);

    console.log(findResult);

    /// concat

    var array7 = ['a','b','c'];

    var array8 = [1,2,3];

    var array9 = [true,false,true];

    array7 = array7.concat(array8,array9);

    console.log(array7);

    /// slice

    var array11 = ["a","b","DiGi",1,4,true,null,undefined,{},[]];

    var resultSlice = array.Slice{2,5};

    console.log(resultSlice);

    /// sort

    var array12 = [3,6,1,78,23,43,56,111,431,8,0];
    function sortMyArray(a,b){
        return a - b;
    }
                                                06/05/2024
*************************************************aply function********************************************************************************
'use strict'
this.num = 10;

const sum = (...ParamsArray) => {
    let res = 0;
    for (let i =0; i < ParamsArray.length; i++){
        res += ParamsArray[i]
    }
    return this.num + res;
}

var arrayofParams = [20,30,40,50,60,70];
var result = sum.apply(this,arrayofParams);

console.log(result);

************************************************ bind function *******************************************************************************

// bind gives us another function wich me can execute later

'use strict'

this.table = "House Table";

const clean = function(name,name2,name3) {
    console.log('${this.table} cleaned by ${name}, ${name2}, and ${name3} !!');
}

clean.call(this, "ritvi","adesh","rakesh"); // you get an imidiate output, clean function will be immidiatly executed

var myBindFunction = clean.bind(this,"ritvi"); // you dont get an immediate output here, clean function will not be executed immediately

myBindFunction("Adesh","Rakesh"); // clean function will be executed and you get the output


****************************************asynce and await**************************************************************************************

async and await are extensions of promises in JavaScript, introduced in ES2017 (ES8). They provide a more concise and synchronous-like syntax for writing asynchronous code, making it easier to work with promises. Here's how they work:

async Function:

The async keyword is used to define a function as asynchronous.

An async function always returns a promise. If the function returns a value, the promise will be resolved with that value. If the function throws an exception, the promise will be rejected with the thrown value.

Inside an async function, you can use the await keyword to pause the execution of the function until a promise is resolved.

javascript

async function myAsyncFunction() {

// Asynchronous tasks

const result = await somePromiseFunction();

return result;

}

await Expression:

The await keyword can only be used inside an async function.

It waits for the promise to be resolved and returns the resolved value. If the promise is rejected, it throws an error, which can be caught using a try...catch block or by chaining a .catch() handler to the promise.

While waiting for the promise to resolve, the execution of the async function is paused, but other code outside the async function continues to execute.

javascript

async function fetchData() {

try {

const data = await fetch('https://api.example.com/data');

const json = await data.json();

console.log(json);

} catch (error) {

console.error('Error fetching data:', error);

}

}

Error Handling:

Inside an async function, you can use try...catch blocks to handle errors.

If an error occurs in an awaited promise, it will be caught by the nearest catch block or propagated up to the calling function's catch block if not handled within the async function.

Parallel Execution:

async functions can be used with other asynchronous constructs like Promise.all() to execute multiple asynchronous tasks concurrently.

javascript

async function fetchMultiple() {

const [result1, result2] = await Promise.all([

somePromiseFunction1(),

somePromiseFunction2()

]);

return [result1, result2];

}

async and await greatly simplify asynchronous code compared to using raw promises or callback functions. They make asynchronous code look and behave more like synchronous code, which improves readability and maintainability.

*****************************************************promisses 13/05/2024 ********************************************************************

// promisses means an assurance

let prom = new promise (function(resolve,reject) {
    // you can make an API call
    // schedule some lines off code 
    // eg. axios () // use to react
});

prom.then (function(result){
}).catch (function(error){
});

...
...

...
...

// states of promise
a. resolved -> when you get a success
b. rejected -> when you get an error
c. pending  -> when you are waiting for the response to come



let prom = new promise (function(resolve,reject){
// 1. we can make on API call
// 2. we can schedule a code execution console.log("promise is in pending state")
setTimeout() => {

    // console.log("promise is resolved")
    // resolve ("education");;

    console.log ("promise is rejected")
    reject (null);
},3000);
});

prom.then (function(result){
    console.log("succes value;" + result);
}).catch (function(error){
    console.log("error value :" + error);
});

********************************************************async and await 13/05/2024************************************************************

async function and (){

    let prom = new promise (function(resolve,reject){
// 1.we can make on API call
// 2.we can schedule a code execution

console.log("promise is in pending satate ")
setTimeout(() =>

// console.log("promise is resolved")
// resolve ("education");
    console.log("promise is rejected")
    reject (null);
    },3000);
} );

let response =  await prom;

return resopnse ;
}

abc().then(function(result){
    console.log("succes value:" + result);
)}.catch(function(error){
    console.log("error value;" + error);
});

*/
