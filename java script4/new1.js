var num = 10;
var num1="10";
console.log(num==num1); 


var num = "100";
var num1 = "10";
console.log(typeof num);
console.log(typeof num1);
console.log(num==num1);
console.log(num===num1); 

var num = "100";
var num1 = 10;
console.log(typeof num);
console.log(typeof num1);
console.log(num==num1);
console.log(num===num1);

let num2 = 20;
console.log(num2);
num2 = 25; // NO Error
console.log(num2); 

/********************* Datatypes in JS ************************/

//Datatype: type of data a variable can hold


(1) Primitive Datatype

- number (digits, integer, float, decimal)

- string (char, varchar, string)

- boolean (true:1, false:0)

(2) Reference Datatype -

//- array: contigous locations of memory holding the data

- function (classes)

- object

(3) other Data types

//- undefined: variable whose value is not defined

- null: empty object

var a = 10; console.log(a--);//post-decrement console.log(--a);//pre-decrement

/********************* Operators in JS ************************/

/*(1) Arithmetic Operators

a. + : adds numbers

b. - : subtracts numbers

c. * : multiplies numbers

d. / : divides two numbers

e. % : it gives the remainder of a division operation

g. increment

i. post increment

ii. pre increment

h. decrement

i. post decrement

ii. pre decrement

(2) Assigment Operators

a. = used to assign a value

b. concise way of representation

(3) Comparison Operators

a. == it compares the data value on both sides and NOT the data types

b. === it compares the data value on both sides as well as the data types

c. check rest in PPT

(4) Logical Operators

a. && it checks the condition on both sides, if both are true, Then it returns true

b. || it checks the condition on both sides, if either one of them is true, Then it returns true

c. ! it gives you a negation / inversion of the value*/


/*******************************************/
var num = "100";
 var num1 = "100";
  console.log(typeof num);
   console.log(typeof num1);
    console.log(num==num1);
     console.log(num===num1);
/*************************Var, Let, and Const************/

/*--------------------- var ------------------------------------*/

console.log(num1); // undefined - Hoisting
var num1 = 10;
console.log(num1);
num1 = 15; // NO Error
console.log(num1);
/*
(1) access the variable before initialization, no Error
(2) Can re-assign the values(mutable)
(3) It has a functional scope
*/

/*------------------- let ---------------------------------------------*/

/* console.log(num2); */// Uncaught ReferenceError: Cannot access 'num2' before initialization
let num2 = 20;
console.log(num2);
num2 = 25; // NO Error
console.log(num2);
/*
(1) Cannot access the variable before initialization, ERROR
(2) Can re-assign the values(mutable)
(3) has a block scope */

/*------------------- const ------------------------------------------------*/

/* console.log(num3); */ // Uncaught ReferenceError: Cannot access 'num3' before initialization
const num3 = 30;
console.log(num3);
num3 = 35; // Uncaught TypeError: Assignment to constant variable
console.log(num3);
/*
(1) Cannot access the variable before initialization, ERROR
(2) CAN-NOT re-assign values(immutable)
(3) has a block scope
*/