//kilometer to miles
//We know that 1 kilometer is equal to 0.621371 miles.

// miles = kilometers * 0.621371

// let km = 2;
// let factor = 0.621371;
// let mile = km*factor
// console.log(mile)

//Convert Celsius to Fahrenheit
// fahrenheit = celsius * 1.8 + 32

// let celcius = 55;
// factor = 32
// let f = celcius * 1.8 + factor
// console.log(f)

//area of triangle;
// If you know the base and height of a triangle, you can find the area using the formula:

// area = (base * height) / 2

// Example 2: Area When All Sides are Known
// s = (a+b+c)/2
// area = √(s(s-a)*(s-b)*(s-c))

let side1 = 3;
let side2 = 4;
let side3 = 5;

let s = (side1+side2+side3)/2;
let area_of_triangle = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3))
console.log(area_of_triangle)