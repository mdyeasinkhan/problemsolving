// 1. Write a JavaScript Function to calculate the multiplication and division of two numbers.

function multiplyBy(num1,num2){
    console.log(num1 * num2);
}
multiplyBy(40,39);

function divideBy(num1,num2){
    console.log(num1 / num2);
}
divideBy(33,56);

// 2. Write a JavaScript program to convert temperatures from Celsius to Fahrenheit or Vice Versa (Fahrenheit to Celsius).

function cToF(celsius){
    var cTemp = celsius;
    var cToFahr = cTemp * 9 / 5 + 32;
    var message = cTemp+'\xB0C is' + cToFahr + '\xB0F.';
        console.log(message);
}
function fToC(fahrenheit){
    var fTemp = (fahrenheit);
    var fToCel = (fTemp - 32) * 5 / 9;
    var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
}
cToF(50);
fToC(45);

// 3. Write a JavaScript function to check from two given integers, whether one is positive and another one is negative. 

function positive_negative(x,y){
    if((x < 0 && y > 0) || x > 0 && y < 0){
        return true;
    }else{
        return false;
    }
}

console.log(positive_negative(2,2));
console.log(positive_negative(-2,2));
console.log(positive_negative(2,-2));
console.log(positive_negative(-2,-2));

// 4. Write a JavaScript function to check whether the number is positive or negative.

function positiveOrnegative(number){
    if(number < 0){
        console.log(number + ' is negetive');
    }else{
        console.log(number + ' is positive');
    }
}
positiveOrnegative(3);
positiveOrnegative(-3);

// 5. Write a JavaScript program to remove a character at the specified position of a given string and return a new string

let userNames = ["Eshad", "Shakib", "Ashik", "Robin", "Alamgir"];
userNames["1"] = "Rakib";
console.log(userNames);

// 6. Write a JavaScript function to reverse a given string.

function reverseNow(){
    let fruits = ["Apple", "Apricot", "Banana", "Cherry", "Coconut"];
    fruits.reverse();
    console.log(fruits)
}
reverseNow();

// 7. Create Three objects with at least 4 properties and 2 methods in them. 
// First Object
    let car = {
        name : 'GT',
        maker : 'BMW',
        color: 'Blue',
        engine : '1998cc'
    }
    console.log(car);
// Second Object
    const coder = {
        isStudying : false,
        printIntroduction: function(){
            console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
        }
    };

    const me = Object.create(coder);
    me.name = 'Yeasin';
    me.isStudying = true;
    me.printIntroduction();
    

    // Third Object

    const myHonda = {
        color: 'red',
        wheels: 4,
        cylinders: 4,
        size: 2.2
    }
    console.log(myHonda);

// 8. swap the values between two variables

var a = 20;
var b = 30;
// var temp = a;

// a = b;
// b = temp;
// console.log(`value of a = ${a}, value of b = ${b}`)
[a,b] = [b,a]
console.log(`value of a = ${a}, value of b = ${b}`)

// 9. Find the largest of 3 numbers

var num1 = 20;
var num2 = 50;
var num3 = 40;

if(num1 >= num2 && num1 >= num3){
    console.log("number 1 is greater")
}else if(num2 >= num1 && num2 >= num3){
    console.log("number 2 is greater")
}else{
    console.log("number 3 is greater")
}


// 10. Reverse a string 


var text = "Md Yeasin";
var split = text.split("");
var reverse = split.reverse();
console.log(reverse.join("")); 


// 11. sum of all numbers in an array

var numbers = [12,34,55,66,34,23,43,53]
var sum = 0;
for (let i = 0; i < numbers.length; i++){
    sum += numbers[i]
  
}
console.log(sum)

// 12 Find the largest element in an array

var numbers = [12,40,53,35, 35,45,93,4];
var largest = numbers[0];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > largest){
        largest = numbers[i]
    }
}
console.log(largest)



// 13 Remove duplicate item from an array

function getUnique(array){
    var uniqueArray = [];

    // Loop through array values
    for(var value of array){
        if(uniqueArray.indexOf(value) === -1){
            uniqueArray.push(value);
        }
    }
    return uniqueArray;
}

var names = ["Khaled", "Shakib", "Kamal", "Rohij", "Kamal", "Kamal", "Kamal", "Eshad"];
var uniqueNames = getUnique(names);
console.log(uniqueNames);

