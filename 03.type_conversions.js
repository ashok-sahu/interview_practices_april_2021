/*
The process of converting one data type to another data type is called type conversion. There are two types of type conversion in JavaScript.

1).Implicit Conversion
2).Explicit Conversion

[].JavaScript Implicit Conversion
In certain situations, JavaScript automatically converts one data type to another (to the right type). This is known as implicit conversion.

[].JavaScript Explicit Conversion
You can also convert one data type to another as per your needs. The type conversion that you do manually is known as explicit type conversion.
In JavaScript, explicit type conversions are done using built-in methods.
*/

////////////////1).Implicit Conversion////////////////////////

//implicit convrsion of string
/*
//[].When a number is added to a string, JavaScript converts the number to a string before concatenation.


let result;
result = "1" + 1;//11
console.log(result)
result = "1" + null;//1null
console.log(result);
result = "1" + undefined;//1undefined
console.log(result);
result = "1" + true; //1true
console.log(result);

//.Implicit Conversion to Number
let result;
result = "4" - "2";//2
console.log(result)
result = "4" - 2;//2
console.log(result)
result = "4"/2;//2
console.log(result)
result = "4"*2//8
console.log(result)


//Non-numeric String Results to NaN
let result;
result = "hello" - "world";//NaN
console.log(result);
result = "4" - "world"//NaN
console.log(result);


//Implicit Boolean Conversion to Number
JavaScript considers 0 as false and all non-zero number as true. And, if true is converted to a number, the result is always 1.
let result;
result = 1 + true;//2
console.log(result)
result = 1 + false;//1
console.log(result)
result = "3" - false;//3
console.log(result)
result = "4" - true;//3
console.log(result)
result = 4 - false//4
console.log(result)
result = "str" - false//NaN
console.log(result)


//null Conversion to Number
//null is 0 when used with number
let result;
result = 1+null;//1
console.log(result);
result = 4 - null;//4
console.log(result)

//undefined used with number, boolean or null
//Arithmetic operation of undefined with number, boolean or null gives NaN
let result;
result = 4+undefined;//NaN
console.log(result)
result = 4 - undefined;//NaN
console.log(result)
result = true + undefined//NaN
console.log(result)
result = null + undefined//NaN
console.log(result)


////////////////1).Explicit Conversion////////////////////////

1. Convert to Number Explicitly
//To convert numeric strings and boolean values to numbers, you can use Number()
let result;

// string to number
result = Number('324');
console.log(result); // 324

result = Number('324e-1')  
console.log(result); // 32.4

// boolean to number
result = Number(true);
console.log(result); // 1

result = Number(false);
console.log(result); // 0

// In JavaScript, empty strings and null values return 0. For example,

let result;
result = Number(null);
console.log(result);  // 0

let result = Number(' ')
console.log(result);  // 0

// If a string is an invalid number, the result will be NaN. For example,

let result;
result = Number('hello');
console.log(result); // NaN

result = Number(undefined);
console.log(result); // NaN

result = Number(NaN);
console.log(result); // NaN

// Note: You can also generate numbers from strings using parseInt(), parseFloat(), unary operator + and Math.floor(). For example,

let result;
result = parseInt('20.01');
console.log(result); // 20

2. Convert to String Explicitly
To convert other data types to strings, you can use either String() or toString(). For example,

//number to string
let result;
result = String(324);
console.log(result);  // "324"

result = String(2 + 4);
console.log(result); // "6"

//other data types to string
result = String(null);
console.log(result); // "null"

result = String(undefined);
console.log(result); // "undefined"

result = String(NaN);
console.log(result); // "NaN"

result = String(true);
console.log(result); // "true"

result = String(false);
console.log(result); // "false"

// using toString()
result = (324).toString();
console.log(result); // "324"

result = true.toString();
console.log(result); // "true"
Note: String() takes null and undefined and converts them to string. However, toString() gives error when null are passed.

3. Convert to Boolean Explicitly
To convert other data types to a boolean, you can use Boolean().

In JavaScript, undefined, null, 0, NaN, '' converts to false. For example,


let result;
result = Boolean('');
console.log(result); // false

result = Boolean(0);
console.log(result); // false

result = Boolean(undefined);
console.log(result); // false

result = Boolean(null);
console.log(result); // false

result = Boolean(NaN);
console.log(result); // false
All other values give true. For example,


result = Boolean(324);
console.log(result); // true

result = Boolean('hello');
console.log(result); // true

result = Boolean(' ');
console.log(result); // true


JavaScript Type Conversion Table
The table shows the conversion of different values to String, Number, and Boolean in JavaScript.

Value	String Conversion	Number Conversion	Boolean Conversion
1	        "1"	                    1	            true
0	        "0"	                    0	            false
"1"	        "1"	                    1	            true
"0"	        "0"	                    0	            true
"ten"	    "ten"	                NaN	            true
true	    "true"	                1	            true
false	    "false"	                0	            false
null	    "null"	                0	            false
undefined	"undefined"	            NaN	            false
''	        ""	                    0	            false
' '	        " "	                    0	            true

result = parseFloat('20.01');
console.log(result); // 20.01

result = +'20.01';
console.log(result); // 20.01

result = Math.floor('20.01');
console.log(result); // 20
*/





