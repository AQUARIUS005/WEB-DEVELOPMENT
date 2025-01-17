//you have a choice to declare a type or else typescript would automatically allote the type for variable declarations
var x = 1000;
console.log(x);
//OR
var y = 20;
//let y: number given by ts compiler itself
console.log(y);
//primitive types(number, string,boolean,array)
//ARRAYS
//arrays in typescript can store more than 2 datatype values
//array data types would be declared itself if we don't declare it explicitly
var arr1 = [1, 2, 3, "sameer"];
//arrays can even store JSON data types and gives the structures of JSON files that are used
var arr2 = [1, 2, 3, { name: "sameer", class: "json" }];
//we can declare two or more data types in an array explicitly
var arr3 = [1, 2, 3, "sameer"];
//we can even declare JSON data types in arrays explicitly and give the structure 
var arr4 = [1, 2, 3, { name: "abc" }];
console.log(arr1, arr2, arr3, arr4);
//TUPLES
//tuples are declared in typescript and they are declared same as arrays but with a different structure
//data types of values inside a tuple are declared beforehand for each and every value inside the tuple
//it is immutable and we cannot remove or add new values inside tuples after decalration
var tuple1 = [1, "sameer"];
var tuple11 = [1, 2, 3, "hello"];
//we can declare two or more data types in a tuple explicitly
var tuple2 = [1, "sameer", true];
//we can even declare JSON data types in tuples explicitly and give the structure
var tuple3 = [1, { name: "sameer" }, 'sameer'];
console.log(tuple1[0]); //1
console.log(tuple2); //[1,"sameer",true]
//ENUMS OR ENUMERATION
//looks similar to a JSON object but with some properties and differences
//we can declare enums in typescript and they are declared with the keyword enum
//The primary datatypes of enums in numbers
//but we can declare any datatype based values in enums
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "UP";
    Direction1["Down"] = "DOWN";
    Direction1["Left"] = "LEFT";
    Direction1["Right"] = "RIGHT";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up); // "UP"
//enums are automatically assigned to numeric values if they are not specified
//the first enum value will be used as the starting value and the others would  be incremented from there
//The first value would be assigned as 0 if unassigned
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 0] = "Up";
    Direction2[Direction2["Down"] = 1] = "Down";
    Direction2[Direction2["Left"] = 2] = "Left";
    Direction2[Direction2["Right"] = 3] = "Right"; // 3
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up); // 0
//partial enum assignment
var Status;
(function (Status) {
    Status[Status["Active"] = 1] = "Active";
    Status[Status["Inactive"] = 2] = "Inactive";
    Status[Status["Pending"] = 3] = "Pending"; // 3 (incremented from 2)
})(Status || (Status = {}));
console.log(Status.Inactive); // 2
//combined datatype values based enums
var Mixed;
(function (Mixed) {
    Mixed["Yes"] = "YES";
    Mixed[Mixed["No"] = 0] = "No";
})(Mixed || (Mixed = {}));
console.log(Mixed); //{'0': 'No',Yes = "YES",No = 0}
//If you don’t assign values to string enums, you’ll get a TypeScript error because string enums require explicit values.
var Colors1;
(function (Colors1) {
    Colors1["Red"] = "Red";
    //Green, // Error: Enum member must have an initializer.
    //Blue  // Error: Enum member must have an initializer.
})(Colors1 || (Colors1 = {}));
//To fix the error, you can assign a value to the enum members, like this:
var Colors2;
(function (Colors2) {
    Colors2["Red"] = "Red";
    Colors2["Green"] = "Green";
    Colors2["Blue"] = "Blue";
})(Colors2 || (Colors2 = {}));
//ANY datatype
//The any type in TypeScript allows a variable to hold values of any type. 
//It effectively disables TypeScript's type checking for that variable, making it behave like plain JavaScript.
var data = 5;
console.log("data using any datatype: " + data);
data = "Hello";
console.log("data using any datatype: " + data);
data = true;
console.log("data using any datatype: " + data);
//error messages while performing type related functions would be given at run time of javascript not at compile time of typeScript
data = "Hello";
//console.log(data.toFixed(2)); // No error at compile time, runtime error!
//any allows unrestricted access to any properties or methods, leading to potential runtime errors.
//Implicit any: If TypeScript cannot infer a type and noImplicitAny is disabled, variables default to any.
function add(x, y) {
    return x + y; // x and y are implicitly `any`
}
//UNKNOWN TYPE
//The unknown type in TypeScript is similar to any, but it’s safer.
//The unknown type in TypeScript is a safer alternative to any and represents a value that could be of any type. 
// However, unlike any, you must narrow down the type using type checks before performing operations on it.
//Usecaes are like  When you receive data from an external source (like an API, user input, or dynamic content), its type is uncertain. 
// unknown is useful in this context, as you can first check the type and handle the value accordingly.
var value = "Hello";
//Strict Type Checking
//console.log(value.length); // Error: Object is of type 'unknown'
// Type narrowing with typeof
if (typeof value === "string") {
    console.log(value.length); // Safe, as TypeScript knows it's a string
}
//Type Narrowing
//To access the properties of an unknown type, TypeScript needs to know what type the value is.
//Type narrowing is a way to tell TypeScript what type a value is, so it can safely access the variable.
function processValue(value) {
    if (typeof value === "string") {
        // `value` is now treated as a string inside this block
        console.log(value.toUpperCase());
    }
    else if (typeof value === "number") {
        // `value` is treated as a number inside this block
        console.log(value.toFixed(2));
    }
}
//Cannot be Assigned to Other Types Directly
//The unknown type cannot be assigned to other types directly. It must be narrowed down first.
var value1 = 10;
var num;
//num = value1; // Error: Type 'unknown' is not assignable to type 'number'
// Correct way: Narrow the type first or assert type
if (typeof value === "number") {
    num = value; // Safe assignment
}
//Cannot Be Used in Operations Directly
//The unknown type cannot be used in operations directly. It must be narrowed down first.
var value2 = 10;
//console.log(value2 + 5); // Error: Object is of type 'unknown'
// Correct way: Narrow the type first or assert type
if (typeof value === "number") {
    console.log(value + 5); // Safe operation
}
// null type in TypeScript
// The null type represents the absence of a value or the intentional lack of any object.
// It's used to explicitly denote that a variable has no value assigned.
// Example of `null` type:
var value3 = null; // Explicitly set to null
// Difference between `null` and `undefined`
// `null` represents the intentional absence of a value,
// whereas `undefined` means a variable has been declared but not yet assigned a value.
var a = null; // Intentional no value
var b; // Uninitialized
// Strict Null Checks
// When strictNullChecks is enabled in tsconfig.json, `null` is not assignable to any other types unless explicitly allowed.
//let str: string = null; // Error: Type 'null' is not assignable to type 'string'
// Assigning `null` to Nullable Types
// You can assign `null` to variables whose types explicitly include `null`.
var user = null; // No user found
// Use cases for `null`
// 1. Representing Missing Data
var userInfo = null; // No data available
// 2. Function Returning No Value
function findUser(id) {
    return null; // No user found
}
// 3. Optional Values
var result = null; // Value can be missing
// void type in TypeScript
// The `void` type represents the absence of a return value in functions.
// It is used to define functions that do not return anything.
// Example of `void` type:
function logMessage(message) {
    console.log(message); // No return value
}
// Difference between `void` and `undefined`
// `void` is used to define functions that do not return a value,
// while `undefined` is the actual value that functions return if no return statement is provided.
function example1() {
    // Function that does not return anything
}
function example2() {
    return undefined; // Explicit return of undefined
}
// Can be Used for Variables
// `void` is used to indicate a function that does not return anything.
// You can assign `void` to a function type variable in some cases.
var myFunction = function () { console.log("Hello!"); };
// Use cases for `void`
// 1. Functions That Don’t Return Values
function printMessage(message) {
    console.log(message); // Logs message but doesn't return anything
}
// Type Annotations in TypeScript
// Type annotations explicitly define the type of a variable, function parameter, or return value in TypeScript.
// Variable Type Annotations
var name1 = "John"; // `name` must be a string
var age = 25; // `age` must be a number
var isActive = true; // `isActive` must be a boolean
// Array Type Annotations
var numbers = [1, 2, 3]; // Array of numbers
var strings = ["a", "b", "c"]; // Array of strings
// Object Type Annotations
var person = { name: "Alice", age: 30 };
// Function Type Annotations
function greet(name) {
    return "Hello, " + name; // Function returns a string
}
var add2 = function (x, y) { return x + y; }; // Function type annotation
// Optional Parameters
function greetWithAge(name, age) {
    return "Hello, ".concat(name).concat(age ? ", Age: ".concat(age) : '');
}
// Benefits of Type Annotations
// 1. Catch errors early (compile-time checks)
// 2. Improves readability and understanding of code
// 3. Provides better tooling and autocompletion support
// 4. Makes refactoring safer and easier
// Type Inference in TypeScript
// TypeScript automatically infers the type based on the assigned value.
// Examples:
var name2 = "John"; // inferred as string
var age2 = 25; // inferred as number
var isActive1 = true; // inferred as boolean
// Function return type inference:
function add3(a, b) {
    return a + b; // inferred as number
}
// Array type inference:
var numbers1 = [1, 2, 3]; // inferred as number[]
// When inference doesn't work:
var uninitialized; // inferred as any
// Benefits:
// 1. Reduces code verbosity.
// 2. Maintains type safety.
// 3. Improves IDE support with autocompletion.
