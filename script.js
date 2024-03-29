
console.log(`1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.`)
let ages =[3,9,23,64,2,8,28,93]
console.log(ages)

console.log(`a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.`)
console.log(ages[0]-ages.pop());


console.log(`b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).`)
ages.push(110);
console.log(ages[0]-ages.pop());


console.log(`c. Use a loop to iterate through the array and calculate the average age.`)



console.log(`2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.`)

const names= [`Sam`,`Tommy`,`Tim`,`Sally`,`Buck`,`Bob`]
console.log(names);

console.log(`a. Use a loop to iterate through the array and calculate the average number of letters per name.`)




console.log(`b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.`)
let nameConc = names.concat
console.log(nameConc)

console.log(`3. How do you access the last element of any array?`)
const sports=[`football`,`basketball`,`soccer`]
let lastSport= sports[sports.length-1];
console.log(lastSport)

console.log(`4. How do you access the first element of any array?`)
//using array from question 3 above
let firstSport= sports[0];
console.log(firstSport)

console.log(`5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.`)
let nameLengths=names.length
console.log(nameLengths)
for (let i=0; i<names; i++){
    console.log(i);
}

console.log(`6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.`)


console.log(`7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').`)
let myFunction= (word,n)=> word*n;
word= 'hello'
n=3

console.log(myFunction);

console.log(`8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.`)
let fullName = ['firstName', 'lastName'];
console.log('firstName'+' '+'lastName');


console.log(`9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.`)


console.log(`10. Write a function that takes an array of numbers and returns the average of all the elements in the array.`)
/*
const numbers = array(1,2,3,4,5)
let sum = 0
for (let i = 0; i < numbers;i++) sum += a[i];
return parseFloat(sum/n);

doesnt work
*/
console.log(`11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.`)


console.log(`12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`)


console.log(`13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.`)


console.log(``)