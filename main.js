
// Question 1
console.log('');
console.log('************Question #1*****************');
console.log('');
let cars = ['Ford', 'Dodge', 'GMC', "BMW"];

console.log('The length of the cars array is: ', cars.length);

// Question 2
console.log('');
console.log('************Question #2*****************');
console.log('');
let moreCars = ['Toyota', 'Nissan','Buick','Honda'];

//console.log('The length of the moreCars array is: ', moreCars.length);

let totalCars = cars.concat(moreCars);

console.log('Listing our the new array called totalCars: ', totalCars);

// Question 3
console.log('');
console.log('************Question #3*****************');
console.log('');

console.log('The index position of "Honda" in the array totalCars is: ', totalCars.indexOf('Honda'));
console.log('The last index of "Ford" in the array totalCars is: ', totalCars.lastIndexOf('Ford'));

// Question 4
console.log('');
console.log('************Question #4*****************');
console.log('');

let stringOfCars = totalCars.join();
console.log('This is the string called stringOfCars :', stringOfCars);

// Question 5
console.log('');
console.log('************Question #5*****************');
console.log('');

let carsFromString = stringOfCars.split();
console.log('This is a array made from stringOfCars using no argument: ', carsFromString);
console.log('The length of carsFromString using no argument is: ', carsFromString.length);

let carsFromStringArg = stringOfCars.split(",");
console.log('This is a array made from stringOfCars using the argument ",": ', carsFromStringArg);
console.log('The length of carsFromStringArg using "," as a argument is: ', carsFromStringArg.length);

// Question 6
console.log('');
console.log('************Question #6*****************');
console.log('');

let carsInReverse = totalCars.reverse();
console.log('This is the array totalCars in reverse: ', carsInReverse);

// Question 7
console.log('');
console.log('************Question #7*****************');
console.log('');

console.log('This is carsInReverse sorted: ',carsInReverse.sort());
console.log('I predict the "BMW" will be in index position 0: ',carsInReverse.indexOf('BMW'));

// Question 8
console.log('');
console.log('************Question #8*****************');
console.log('');

const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird'];
let reptiles = pets.slice(4,6);
console.log('The new array reptiles is: ', reptiles);
console.log('This is the pets array after running the ".slice()" method: ', pets);
console.log("The array pets is not changed because the '.slice()' method does not modify the original array");

// Question 9
console.log('');
console.log('************Question #9*****************');
console.log('');

let removedReptiles = pets.splice(4,2);
console.log('The new array removedReptiles is: ', removedReptiles);
console.log('This is the pets array after running the ".splice()" method: ', pets);
console.log("The array pets is now changed because the '.splice()' method modifies the original array");
pets.splice(4,0, "hamster" );
console.log('This is the pets array after adding hamster to index position 4: ', pets);
console.log('I had to change this the position 4 after I got to question 13');
console.log(' I missunderstood and thought it was asking to put it in index position 3')

// Question 10
console.log('');
console.log('************Question #10*****************');
console.log('');

let removedPet = pets.pop();
console.log('This is the removedPet attay: ', removedPet);
console.log('This is the pet attay after running the pop mothod: ', pets);

// Question 11
console.log('');
console.log('************Question #11*****************');
console.log('');

pets.push(removedPet);
console.log('This is the pets array after .push() removedPet to the end: ', pets);

// Question 12
console.log('');
console.log('************Question #12*****************');
console.log('');

pets.shift();
console.log('This is the pets array after running the .shift() method: ', pets);

// Question 13
console.log('');
console.log('************Question #13*****************');
console.log('');

pets.unshift('turtle');
console.log('This the the pets array after running the .unshift method with the argument turtle: ', pets);

// Question 14
console.log('');
console.log('************Question #14*****************');
console.log('');

const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];

const addTwo = (num,index, arr) => {
    arr[index]=num + 2;
    // num = num +2; 
    console.log('Each of these numbers is the numbers in the numbers array plus 2: ', num);
}
numbers.forEach(addTwo);
console.log(numbers);






