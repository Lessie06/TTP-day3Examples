/*rest and spread operators
    rest(...)
    spread(...)

    rest

*/
// the following function multiplies numbers passed in the parameter
function multiply(parameter, anotherParameter,... args){  //rest operator
    // body 
    console.log(args);
    let product = 1;
    for(let i in args){
        product = product * args[i];
    }
    console.log(product);
}
multiply(2,4);
multiply(1,2,3,4,5);

/*  spread operator
    it takes the array and spreads it into individual parts 
*/
function sum(x, y, z){
    return  x + y + z;

}

const numbers = [10,20,30];
console.log(sum(...numbers)); //Spread operator 10,20,30

/* myFunction(...iterableObject)
*/

/* id can only be used once
    class can be used multiple times
*/

let t = document.getElementById("myDog");
// console.log(t);
let t1 = document.getElementsByClassName("dogs")
// console.log(t1);
// console.log(Array.isArray(t1));

let t2 = document.getElementsByTagName("h1");
// console.log(t2);

/* We can also use querySelector, querySelectorAll
    searching using CSS selectors
    1.Class selector
    2.id selector
    3.element selector
*/

// The querySelector will return only the first element that matches
// the CSS selector specified.
let t3 = document.querySelector(".dogs");
// console.log(t3);

// querySelectorAll. This returns all elements that matches a specified CSS selector.
let t4 = document.querySelectorAll(".dogs");
/* the Array.from(object) returns an array objects from the given object
*/
let arrayT4 = Array.from(t4);
// console.log(arrayT4);

let arrayT4B= [...t4];
// console.log(arrayT4B);

let x = document.getElementById("mainBody").previousElementSibling;
console.log(x);

let x1 = document.getElementById("mainBody");
x1.style.backgroundColor= "yellow";

let newParagraph = document.createElement("p");
newParagraph.innerHTML = "This is our new paragraph."
document.body.appendChild(newParagraph);

/*  JS Events
    syntax for addEventListener
    document.addEventListener(event, function, useCapture);
    event: this specifies the name of the event
    function: this specifies the function that should run when the
    event occurs.
    The first and second parameters are required. You must provide
    the event and function.

    useCapture: boolean value that specifies whether the event should
    be executed in the capturing and bubbling phase.


*/
document.getElementById("myDog").addEventListener("click",test);

function test(){
    alert("today");
}
document.getElementById("myFriend").addEventListener("click", function(){
    test1("Scruffy");
});
function test1(name1){
    alert("today " + name1)
}

document.getElementById("myForm").addEventListener("submit", function(event){
     /*we want to get a value that has been submitted from the form
    */
//    the following line gets a value from the input field.
    let username = document.getElementById("username").value;
    // console.log(username.length);
    // username = username.trim();
    if(username == "" || username.length == 0){
        alert("please enter a valid username");
        document.getElementById("username").style.border = "red";
    }
    else{
        document.getElementById("username").style.backgroundColor = "white";

    }
    let confirmPassword = document.getElementById("confirmpassword").value;
    let password = document.getElementById("password").value;

    password = password.trim();
    confirmPassword = confirmPassword.trim();

    if (password !== confirmPassword){
        document.getElementById("password").style.border = " thick solid red";
        document.getElementById("confirmpassword").style.border = "thick solid red";
        alert("The passwords you entered do not match.")
    }
    else{
        document.getElementById("password").style.border = " 1px solid gray";
        document.getElementById("confirmpassword").style.border = "1px solid gray"

    }


    alert(username);
    event.preventDefault();

   
});

