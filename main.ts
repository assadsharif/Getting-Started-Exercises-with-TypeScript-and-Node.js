// 1: Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personName: string = "Eric";
console.log(`Hello ${personName}, would you like to learn some Python today?`);

// 2: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let person_name: string = "Asad Sharif";

// lowercase
console.log("lowercase:", person_name.toLowerCase());

// upperCase
console.log("uppercase:", person_name.toUpperCase());

// Titile Case
console.log(
  "titlecase:",
  person_name.replace(/\b\w/g, (c) => c.toUpperCase())
);

// 4: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

let quote: string =
  "A person who never made a mistake never tried anything new.";
let author: string = "Albert Einstein";

console.log(`${author} once said, "${quote}"`);

// 5: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famous_person: string = "Albert Einstein";
let message: string = `${famous_person} once said, "${quote}"`;
console.log(message);

// 6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let nameWithWhitespace = "\t \n Asad Sharif \n \t";
console.log("Name with whitespace:");
console.log(nameWithWhitespace);

let strippedName = nameWithWhitespace.trim();
console.log("\nStripped name:");
console.log(strippedName);

// 7: Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

let additionResult = 5 + 3;
console.log("Addition: " + additionResult);

let subtractionResult = 10 - 2;
console.log("Subtraction: " + subtractionResult);

let multiplicationResult = 4 * 2;
console.log("Multiplication: " + multiplicationResult);

let divisionResult = 16 / 2;
console.log("Division: " + divisionResult);

// 8: You should create four lines that look like this:
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

// 9: Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let favoriteNumber = 7;

let message = "My favorite number is: " + favoriteNumber;

console.log(message);

// 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// Program 1:
// Author: Asad Sharif
// Date: February 16, 2024

console.log(5 + 3); // Prints: 8
console.log(10 - 2); // Prints: 8
console.log(4 * 2); // Prints: 8
console.log(16 / 2); // Prints: 8

// Program 2:
// Author: Asad Sharif
// Date: February 16, 2024
let favorite_Number = 7;
let message_one = "My favorite number is: " + favorite_Number;
console.log(message_one); // Prints: My favorite number is: 7

// 11: Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let names = ["Ahmed", "Asif", "Zeeshan", "Hafiz"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
// 12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let names = ["Ahmed", "Asif", "Zeeshan", "Hafiz"];
for (let i = 0; i < names.length; i++) {
  console.log("Hello, " + names[i] + "! How are you today?");
}

// 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transportation = ["car", "motorcycle", "cycle", "byke"];
for (let i = 0; i < transportation.length; i++) {
  console.log("I would like to own a " + transportation[i] + ".");
}

// 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guestList = ["Ahmed", "Asif", "Zeeshan"];

for (let i = 0; i < guestList.length; i++) {
  console.log(
    "Dear " +
      guestList[i] +
      ", you are cordially invited to dinner at my place. I would be honored to have your company."
  );
}
// 15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let guestList = ["ahmed", "Asif", "Zeeshan"];

console.log("Original Guest List:");
for (let i = 0; i < guestList.length; i++) {
  console.log(guestList[i]);
}
let indexToRemove = 1;
let newGuest = "Hafiz";
guestList.splice(indexToRemove, 1, newGuest);

console.log("\nUpdated Guest List:");
for (let i = 0; i < guestList.length; i++) {
  console.log(guestList[i]);
}

console.log("\nInvitations sent out:");
for (let i = 0; i < guestList.length; i++) {
  console.log(
    "Dear " +
      guestList[i] +
      ", you are cordially invited to dinner at my place. I would be honored to have your company."
  );
}
// 16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

let guestList = ["Asif", "Ahmed", "Zeeshan"];

console.log("Original Guest List:");
for (let i = 0; i < guestList.length; i++) {
  console.log(guestList[i]);
}

let indexToRemove = 1;
let newGuest = "Hafiz";
let cancelledGuest = guestList.splice(indexToRemove, 1, newGuest)[0];
console.log("\nUpdated Guest List:");
for (let i = 0; i < guestList.length; i++) {
  console.log(guestList[i]);
}

console.log("\nInvitations sent out:");
for (let i = 0; i < guestList.length; i++) {
  console.log(
    "Dear " +
      guestList[i] +
      ", you are cordially invited to dinner at my place. I would be honored to have your company."
  );
}
console.log(
  "\nUnfortunately, " + cancelledGuest + " can't make it to the dinner."
);

console.log("\nSecond round of invitations sent out:");
for (let i = 0; i < guestList.length; i++) {
  console.log(
    "Dear " +
      guestList[i] +
      ", you are cordially invited to dinner at my place. I would be honored to have your company."
  );
}
console.log("\nGreat news! I found a bigger dinner table.");

guestList.unshift("Isaac Newton");
guestList.splice(Math.floor(guestList.length / 2), 0, "Galileo Galilei");
guestList.push("Hafiz");

console.log("\nFinal Guest List:");
for (let i = 0; i < guestList.length; i++) {
  console.log(guestList[i]);
}

console.log("\nNew invitations sent out:");
for (let i = 0; i < guestList.length; i++) {
  console.log(
    "Dear " +
      guestList[i] +
      ", you are cordially invited to dinner at my place. I would be honored to have your company."
  );
}
// 17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

let guestList = ["Asif", "Ahmed", "Zeeshan", "Anwar", "Zaheer", "Kamran"];

console.log(
  "Unfortunately, the new dinner table won’t arrive in time for the dinner. We can only invite two people for dinner."
);

while (guestList.length > 2) {
  let removedGuest = guestList.pop();
  console.log(
    "Sorry, " +
      removedGuest +
      ", we won't be able to invite you to dinner this time."
  );
}

for (let i = 0; i < guestList.length; i++) {
  console.log(
    "Dear " +
      guestList[i] +
      ", you're still invited to dinner. We're looking forward to seeing you!"
  );
}

guestList.pop();
guestList.pop();

console.log("Final guest list:", guestList);
// 18: Seeing the World: Think of at least five places in the world you’d like to visit.

let placesToVisit = ["Pakistan", "Italy", "Australia", "Canada", "Brazil"];

console.log("Original order:");
console.log(placesToVisit);

console.log("\nAlphabetical order (without modifying original list):");
console.log([...placesToVisit].sort());

console.log("\nOriginal array is still in its original order:");
console.log(placesToVisit);

console.log("\nReverse alphabetical order (without modifying original list):");
console.log([...placesToVisit].sort().reverse());

console.log("\nOriginal array is still in its original order:");
console.log(placesToVisit);

console.log("\nReversed order:");
placesToVisit.reverse();
console.log(placesToVisit);

console.log("\nBack to original order:");
placesToVisit.reverse();
console.log(placesToVisit);

console.log("\nSorted in alphabetical order:");
placesToVisit.sort();
console.log(placesToVisit);

console.log("\nSorted in reverse alphabetical order:");
placesToVisit.sort().reverse();
console.log(placesToVisit);
// 19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guestList = ["Asif", "Ahmed", "Zeeshan", "Anwar", "Zaheer", "Kamran"];

console.log("Number of people invited to dinner: " + guestList.length);

console.log(
  "\nUnfortunately, the new dinner table won’t arrive in time for the dinner. We can only invite two people for dinner."
);

while (guestList.length > 2) {
  let removedGuest = guestList.pop();
  console.log(
    "Sorry, " +
      removedGuest +
      ", we won't be able to invite you to dinner this time."
  );
}

for (let i = 0; i < guestList.length; i++) {
  console.log(
    "\nDear " +
      guestList[i] +
      ", you're still invited to dinner. We're looking forward to seeing you!"
  );
}

console.log("\nNumber of people still invited to dinner: " + guestList.length);
// 20: Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let mountains = ["Mount Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];

console.log("List of mountains:");
console.log(mountains);

// 21: They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let country1 = {
  name: "USA",
  capital: "Washington D.C.",
  population: 331000000,
  language: "English",
};
let country2 = {
  name: "China",
  capital: "Beijing",
  population: 1441000000,
  language: "Mandarin",
};
let country3 = {
  name: "Pakistan",
  capital: "Islamabad",
  population: 1100000,
  language: "Urdu",
};
console.log("Information about different countries:");
console.log(country1);
console.log(country2);
console.log(country3);
// 22: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let fruits = ["apple", "banana", "orange"];

// This will cause an error
console.log(fruits[3]); // Error: Index out of bounds

console.log(fruits[2]); // Correctly accesses the third element, "orange"
// 23: Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car = "subaru";

// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == "subaru"); // This should evaluate to True

// Test 2
console.log("\nIs car == 'honda'? I predict False.");
console.log(car == "honda"); // This should evaluate to False

// Test 3
console.log("\nIs car != 'toyota'? I predict True.");
console.log(car != "toyota"); // This should evaluate to True

// Test 4
console.log("\nIs car === 'subaru'? I predict True.");
console.log(car === "subaru"); // This should evaluate to True

// Test 5
console.log("\nIs car !== 'subaru'? I predict False.");
console.log(car !== "subaru"); // This should evaluate to False

// Test 6
console.log("\nIs car !== 'honda'? I predict True.");
console.log(car !== "honda"); // This should evaluate to True

// Test 7
console.log("\nIs car.includes('su')? I predict True.");
console.log(car.includes("su")); // This should evaluate to True

// Test 8
console.log("\nIs car.startsWith('su')? I predict True.");
console.log(car.startsWith("su")); // This should evaluate to True

// Test 9
console.log("\nIs car.length == 6? I predict False.");
console.log(car.length == 6); // This should evaluate to False

// Test 10
console.log("\nIs car.toUpperCase() == 'SUBARU'? I predict True.");
console.log(car.toUpperCase() == "SUBARU"); // This should evaluate to True
// 24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// Tests for equality and inequality with strings
console.log("Equality and inequality with strings:");
console.log("apple" == "apple"); // True
console.log("apple" != "orange"); // True
console.log("apple" == "orange"); // False
console.log("apple" != "apple"); // False

// Tests using the lower case function
console.log("\nLowercase function:");
console.log("HELLO".toLowerCase() == "hello"); // True
console.log("HeLLo".toLowerCase() == "hello"); // True
console.log("HELLO".toLowerCase() != "hello"); // False
console.log("HeLLo".toLowerCase() != "hello"); // False

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("\nNumerical tests:");
console.log(5 == 5); // True
console.log(5 != 10); // True
console.log(10 > 5); // True
console.log(10 < 5); // False
console.log(5 >= 5); // True
console.log(5 <= 10); // True

// Tests using "and" and "or" operators
console.log("\nLogical operators:");
console.log(true && true); // True
console.log(true && false); // False
console.log(true || false); // True
console.log(false || false); // False

// Test whether an item is in an array
console.log("\nTest whether an item is in an array:");
let fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("banana")); // True
console.log(fruits.includes("grape")); // False

// Test whether an item is not in an array
console.log("\nTest whether an item is not in an array:");
console.log(!fruits.includes("grape")); // True
console.log(!fruits.includes("banana")); // False
//25: Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// Passing version (alien's color is green):
let alien_color = "green";

// Check if the alien's color is green
if (alien_color === "green") {
  console.log("Congratulations! You just earned 5 points.");
}
//  Failing version (alien's color is not green):

let alien_color_yellow = "yellow"; // or 'red'

// Check if the alien's color is green
if (alien_color === "green") {
  console.log("Congratulations! You just earned 5 points.");
}
//26: Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// Version where alien's color is green (if block runs):
let alien_color = "green";

// Check if the alien's color is green
if (alien_color === "green") {
  console.log(
    "Congratulations! You just earned 5 points for shooting the green alien."
  );
} else {
  console.log(
    "Congratulations! You just earned 10 points for shooting the alien."
  );
}
// Version where alien's color is not green (else block runs):

let alien_color_yellow = "yellow"; // or 'red'

// Check if the alien's color is green
if (alien_color === "green") {
  console.log(
    "Congratulations! You just earned 5 points for shooting the green alien."
  );
} else {
  console.log(
    "Congratulations! You just earned 10 points for shooting the alien."
  );
}
// 27: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain
// Version where the alien is green (player earns 5 points):

let alien_color = "green";

// Check the color of the alien and print a message accordingly
if (alien_color === "green") {
  console.log(
    "Congratulations! You just earned 5 points for shooting the green alien."
  );
} else if (alien_color === "yellow") {
  console.log(
    "Congratulations! You just earned 10 points for shooting the yellow alien."
  );
} else if (alien_color === "red") {
  console.log(
    "Congratulations! You just earned 15 points for shooting the red alien."
  );
}
// Version where the alien is yellow (player earns 10 points):

let alien_color = "yellow";

// Check the color of the alien and print a message accordingly
if (alien_color === "green") {
  console.log(
    "Congratulations! You just earned 5 points for shooting the green alien."
  );
} else if (alien_color === "yellow") {
  console.log(
    "Congratulations! You just earned 10 points for shooting the yellow alien."
  );
} else if (alien_color === "red") {
  console.log(
    "Congratulations! You just earned 15 points for shooting the red alien."
  );
}
// Version where the alien is red (player earns 15 points):

let alien_color = "red";

// Check the color of the alien and print a message accordingly
if (alien_color === "green") {
  console.log(
    "Congratulations! You just earned 5 points for shooting the green alien."
  );
} else if (alien_color === "yellow") {
  console.log(
    "Congratulations! You just earned 10 points for shooting the yellow alien."
  );
} else if (alien_color === "red") {
  console.log(
    "Congratulations! You just earned 15 points for shooting the red alien."
  );
}
// 28: Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
let age = 25;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
  console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
  console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
  console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}
// 29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
let favorite_fruits = ["apple", "banana", "orange"];

if (favorite_fruits.includes("banana")) {
  console.log("You really like bananas!");
}

if (favorite_fruits.includes("apple")) {
  console.log("You really like apples!");
}

if (favorite_fruits.includes("grape")) {
  console.log("You really like grapes!");
}

if (favorite_fruits.includes("orange")) {
  console.log("You really like oranges!");
}

if (favorite_fruits.includes("kiwi")) {
  console.log("You really like kiwis!");
}
// 30: Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
let usernames = ["admin", "john", "emma", "alex", "sophia"];

for (let i = 0; i < usernames.length; i++) {
  if (usernames[i] === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log("Hello " + usernames[i] + ", thank you for logging in again.");
  }
}
// 31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

let usernames = ["Ahmed", "Asif", "Zeeshan", "Hafiz", "Sophia"];

if (usernames.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(
        "Hello " + usernames[i] + ", thank you for logging in again."
      );
    }
  }
}
// 32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
let current_users = ["john", "emma", "alex", "sophia", "mike"];
let new_users = ["emily", "mike", "sarah", "john", "nick"];
let current_users_lower = current_users.map((user) => user.toLowerCase());

for (let i = 0; i < new_users.length; i++) {
  // Convert the current new user to lowercase for case-insensitive comparison
  let new_user_lower = new_users[i].toLowerCase();

  if (current_users_lower.includes(new_user_lower)) {
    console.log(
      "Sorry, " +
        new_users[i] +
        " is not available. Please enter a new username."
    );
  } else {
    console.log("Congratulations, " + new_users[i] + " is available!");
  }
}
// 33: Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 1) {
    console.log(numbers[i] + "st");
  } else if (numbers[i] === 2) {
    console.log(numbers[i] + "nd");
  } else if (numbers[i] === 3) {
    console.log(numbers[i] + "rd");
  } else {
    console.log(numbers[i] + "th");
  }
}
// 34: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

let pizzas: string[] = ["pepperoni", "margherita", "bbq chicken"];

console.log("Pizza Menu:");
for (let i = 0; i < pizzas.length; i++) {
  console.log(pizzas[i]);
}

console.log("\nPizza Preferences:");
for (let i = 0; i < pizzas.length; i++) {
  console.log("I like " + pizzas[i] + " pizza.");
}

console.log("\nI really love pizza!");
// Array of animals
let animals: string[] = ["dog", "cat", "rabbit"];

// Loop through the array to print a statement about each animal
console.log("Animal Characteristics:");
for (let animal of animals) {
  console.log(`A ${animal} would make a great pet.`);
}

// Print a sentence stating what these animals have in common
console.log("\nAny of these animals would make a great pet!");
// 35: Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animals: string[] = ["dog", "cat", "rabbit"];
console.log("Animal Characteristics:");
for (let animal of animals) {
  console.log(`A ${animal} would make a great pet.`);
}

console.log("\nAny of these animals would make a great pet!");
// 36: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size: string, message: string): void {
  console.log(
    `You have ordered a ${size} T-shirt with the message: "${message}".`
  );
}

make_shirt("large", "I love TypeScript!");
// 37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(
  size: string = "large",
  message: string = "I love TypeScript"
): void {
  console.log(
    `You have ordered a ${size} T-shirt with the message: "${message}".`
  );
}

make_shirt();
make_shirt("medium");

make_shirt("small", "Hello, World!");
// 38: Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city: string, country: string = "USA"): void {
  console.log(`${city} is in ${country}.`);
}

describe_city("Karachi", "Pakistan");
describe_city("New York");
describe_city("London", "United Kingdom");
// 39: City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("New York", "USA"));
console.log(city_country("London", "United Kingdom"));
// 40: Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(
  artist: string,
  title: string,
  tracks?: number
): { artist: string; title: string; tracks?: number } {
  let album: { artist: string; title: string; tracks?: number } = {
    artist: artist,
    title: title,
  };
  if (tracks !== undefined) {
    album.tracks = tracks;
  }
  return album;
}

let album1 = make_album("Artist1", "Album1");
let album2 = make_album("Artist2", "Album2", 12);
let album3 = make_album("Artist3", "Album3");

console.log(album1);
console.log(album2);
console.log(album3);
// 41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians: string[]): void {
  console.log("Magicians:");
  for (let magician of magicians) {
    console.log(magician);
  }
}

let magicians: string[] = ["Asad", "Ahmed", "Asif", "Zeeshan"];

show_magicians(magicians);
// 42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(magicians: string[]): string[] {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = "the Great " + magicians[i];
  }
  return magicians;
}

function show_magicians(magicians: string[]): void {
  console.log("Magicians:");
  for (let magician of magicians) {
    console.log(magician);
  }
}

let magicians: string[] = ["Asad", "Ahmed", "Asif", "Zeeshan"];

magicians = make_great(magicians);

show_magicians(magicians);
// 43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function make_great(magicians: string[]): string[] {
  let greatMagicians: string[] = [];
  for (let magician of magicians) {
    greatMagicians.push("the Great " + magician);
  }
  return greatMagicians;
}

function show_magicians(magicians: string[]): void {
  console.log("Magicians:");
  for (let magician of magicians) {
    console.log(magician);
  }
}

let magicians: string[] = ["Asad", "Ahmed", "Asif", "Zeeshan"];

let greatMagicians: string[] = make_great(magicians.slice());

show_magicians(magicians);

console.log("\n");
show_magicians(greatMagicians);
// 44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function make_sandwich(...items: string[]): void {
  console.log("Sandwich Summary:");
  if (items.length === 0) {
    console.log("You ordered an empty sandwich!");
  } else {
    console.log("You ordered a sandwich with the following items:");
    for (let item of items) {
      console.log("- " + item);
    }
  }
  console.log();
}

make_sandwich("ham", "cheese", "lettuce", "tomato");
make_sandwich("turkey", "bacon", "avocado");
make_sandwich("peanut butter", "jelly");
make_sandwich();
// 45: Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function carInfo(manufacturer, model, ...options) {
  let car = {
    manufacturer: manufacturer,
    model: model,
  };

  for (let i = 0; i < options.length; i += 2) {
    car[options[i]] = options[i + 1];
  }

  return car;
}

let myCar = carInfo(
  "Toyota",
  "Camry",
  "color",
  "blue",
  "year",
  2022,
  "price",
  250000
);

console.log(myCar);
