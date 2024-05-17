/*  *****************************this keyword*******************************************

in javascript , the this keyword refers to context within which a function 
is executed it,s value is determine by how a function 
is called and it can behave diffrentially depending on 
whether the function is called in global scop as a method 
of an object with the new keywords or using explicit binding 
function like call 

// global context 
in the global context ( outside of any functional), this reffer to 
the global object ,which is window in web browsers and global in node.js

// console.log ( this === window ); // true in a browser envirment 
function context 

// in regular function ( non - arrow function ) called in non-strict
 node , this refers to the global object by default in strict node . it will be undefined

function my function () {
    console.log (this);
}

my function (); // refers to window / global object mwthod context;

when a function is called as a method of an object , this refers to the object that owns the methos.

const obj = {
    name : 'join',
    greet : function () {
        console.log('hello,{this.name}!');
    }
}

obj.greet(); // refers to obj

console.log(this.session) // hoisting

this.session = 'javascript';

console.log (this.session);
console.log (session);

* this keyword revers to the current context

console.log (this.session) // hoisting

this.session = 'javascript' ; // global  context

this.room = {
    session : 'react'
}
console.log (this.session);
console.log (session);
console.log (this.room.session);
console.log (room.session)

*************************************30/04/2024********************************************
this.session = "javascript";

this.room = {
session : "React",
};
var classroom = {
session : "mean/mern",
}
console.log(this.session);
console.log(this.session);
console.log(this.room);
console.log(this.room.session);
console.log(room.session);

console.log (classroom.session);
console.log (this.classroom.session);

*******************************************stack***********************************
this.session = "javascript";

const stack = function () {
console.log (this.session);
}

stack ();

**********************************02/05/2024************************************
const test = {
prop: 42,
func: function (){
return this.prop;
},
};
console.log (test.func());

this.session = "javascript";

this.room = {
session : "react",
subject :function(){
console.log('${this.session}');
//console.log('${session}')
}
};

let clasroom = {
session: "mean/mern",
subject: function(){
console.log('${this.session}')
//console.log('${session}')
}
}

this.room.subject();
classroom.subject();

********************************** " use strict" continued ********************************
//'use strict'

this.table = "House table";

const clean = function () {
    console.log ('${this.Table} cleaned !!');
}

clean (); // error


********************************** use call functiopn ************************************
    if you can atach aq context while calling the function 
a.  you need not to assign the context to local variables
b.  you can reuse the same function in various diff contexts

'use strict'

this.Table = "house Table" ;

const clean = function () {
    console.log ('${this.Table} cleaned !!');
}

clean (); // error

clean.call (this); // "house Table cleaned !!"

let obj = {
    Table: "obj Table"
}

clean.call (obj) ; "obj Table cleaned !!";

******************************************passing params in call function **********************************
'use strict'

this.Table = "house Table";

const clean = function (name, name2, mam3)
{cosole.log('${this.table} cleaned by ${name} ${name2} {$name3} !!);
}

//clean (); // error

clean.call (this,"ritvi","adesh","pankaj");

let obj = {
    Table: "obj Table"
}
clean.call (obj,"rijyug","dass","swapnil");
 */
