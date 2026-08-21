// Task№ 7

import { comments } from "./comments.js"
const checkCom = comments.filter(comment => comment.email.includes('.com') )
console.log(checkCom)


// task № 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numbersArray = numbers.filter(number => number >= 5)
console.log(numbersArray)

// Task№ 3
const cars = ["Bmw", "Ford", "Toyota", "Opel", "Lada"]
const hasFord = cars.includes("Ford")
console.log(hasFord);

// Task№ 4

function reverseArray(array) {
  return [...array].reverse();
}
const reversedNumbers = reverseArray(numbersArray);
console.log(reversedNumbers);

const reversedAppliances = reverseArray( cars);
console.log(reversedAppliances)

// Task№ 8

const changeComments = comments.map(comment => {
   const copyOfComments = {...comment}
   if (comment.id <= 5){
  console.log(copyOfComments.postId = 2);
   } else {
  console.log(copyOfComments.postId = 1);
}
 return copyOfComments
});
console.log(changeComments);
//  Task№ 9

const onlyIdAndName = comments.map(comment => {
  return {
  id: comment.id,
  name: comment.name
}});
console.log(onlyIdAndName);

// Task№ 10

const setLength = comments.map(comment => {
  const newComment = {...comment}
  newComment.isInvalid = newComment.body.length > 180
  return newComment
});
console.log(setLength);

// Task№ 11

const addEmail = comments.reduce((result, comment ) => {
  result.push(comment.email);
  return result
},[]);
  console.log(addEmail);



const outEmail = comments.map(comment => {
  return comment.email
});
console.log(outEmail);

// Task№ 12

 const newSymbol = outEmail.join(', ')
 console.log(newSymbol);

 const withoutSymbol = outEmail.toString()
 console.log(withoutSymbol);

 const celcia = [0, 10, 20, 30]
 const a = celcia.map(celc => celc * 1.8 + 32)
 console.log(celcia)