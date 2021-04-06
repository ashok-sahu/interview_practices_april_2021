//JavaScript Variable Scope
/*
In JavaScript, a variable has two types of scope:
1.Global Scope
2.Local Scope

Global Scope

A variable declared at the top of a program or outside of a function is considered a global scope variable.

Let's see an example of a global scope variable.

// program to print a text 
let a = "hello";

function greet () {
    console.log(a);
}

greet(); // hello

The value of a global variable can be changed inside a function. For example,

// program to show the change in global variable
let a = "hello";

function greet() {
    a = 3;
}

// before the function call
console.log(a);

//after the function call
greet();
console.log(a); // 3

Note: It is a good practice to avoid using global variables because the value of a global variable can change in different areas in the program. It can introduce unknown results in the program.

In JavaScript, a variable can also be used without declaring it. If a variable is used without declaring it, that variable automatically becomes a global variable.

For example,

function greet() {
    a = "hello"
}

greet();

console.log(a); // hello
Note: In JavaScript, there is "strict mode"; in which a variable cannot be used without declaring it. 


Local Scope
A variable can also have a local scope, i.e it can only be accessed within a function.

Example 1: Local Scope Variable
// program showing local scope of a variable
let a = "hello";

function greet() {
    let b = "World"
    console.log(a + b);
}

greet();
console.log(a + b); // error

let is Block Scoped
The let keyword is block-scoped (variable can be accessed only in the immediate block).

Example 2: block-scoped Variable
// program showing block-scoped concept
// global variable
let a = 'Hello';

function greet() {

    // local variable
    let b = 'World';

    console.log(a + ' ' + b);

    if (b == 'World') {

        // block-scoped variable
        let c = 'hello';

        console.log(a + ' ' + b + ' ' + c);
    }

    // variable x cannot be accessed here
    console.log(a + ' ' + b + ' ' + c);
}

greet();
Note: In JavaScript, var is function scoped and let is block-scoped. If you try to use var c = 'hello'; inside the if statement in the above program, the whole program works, as c is treated as a local variable.

*/