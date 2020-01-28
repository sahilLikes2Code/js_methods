// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods


// Find largest number in numbers
numbers.reduce((a,b) => Math.max(a,b));

// Find longest string in strings
strings.reduce((a,b) => a.length > b.length ? a :b);

// Find all the even numbers
numbers.filter( a => a % 2 ==0)

// Find all the odd numbers
numbers.filter( a => a % 2 ==0)

// Find all the words that contain 'is' use string method 'includes'
console.log(strings.filter(a => a.includes("is")));

// Find all the words that contain 'is' use string method 'indexOf'
var result = strings.filter(function(a) {
	if( a.indexOf("is") != -1 )
	 return  a;
}
);
console.log(result);

// Check if all the numbers in numbers array are divisible by three use array method (every)
var result = numbers.every( (a)=> a % 3 == 0);
console.log(result);

//  Sort Array from smallest to largest
var result = numbers.sort( (a, b)=>  a-b);
console.log(result);

// Remove the last word in strings
var result = strings.map( a => a.slice(0, -1));
console.log(result);

// Add a new word in the array
strings.push("hey");

// Remove the first word in the array
strings.shift(0);

// Place a new word at the start of the array use (upshift)
strings.unshift("hello");

// Make a subset of numbers array [18,9,7,11]
var result = numbers.slice(3, 7);
console.log(result);

// Make a subset of strings array ['a','collection']
var result = strings.slice(2, 4);
console.log(result);

// Replace 12 & 18 with 1221 and 1881

// Replace words with string in strings array
strings.splice(strings.indexOf("words"), 1, "strings")

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'
var arr = (customers.filter(function(v, i) {
	if(customers[i].firstname[0] == "J" )
	return customers[i];

}));

console.log(arr);

// Create new array with firstname and lastname
var arr = [];
customers.filter(function(v,i) {
 arr.push(customers[i].firstname);
 arr.push(customers[i].lastname);
});
console.log(arr);

// Sort the array created above alphabetically
console.log(arr.sort());