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