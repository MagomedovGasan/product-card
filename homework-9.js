// task № 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newArray1 = numbers.slice(4, 10)
console.log(newArray1)

// Task№ 3
const cars = ["Bmw", "Ford", "Toyota", "Opel", "Lada"]
const hasFord = cars.includes("Ford")
console.log(hasFord)

// Task№ 4

const newArray3 = numbers.reverse()
const newArray4 = cars.reverse()
console.log(newArray3)
console.log(newArray4)

// Task№ 7

import { comments } from "./comments.js"
const newArray5 = comments.filter(comment => comment.email.includes('.com') )
console.log(newArray5)

// Task№ 8

const newArray6 = comments.map(comment => {
 const copyOfComments = {...comment}
 if(comment.id <= 5){
  console.log(copyOfComments.postId = 2)
 }else{
  console.log(copyOfComments.postId = 1)
}
 return copyOfComments
})
 console.log(newArray6)

//  Task№ 9

const newArray7 = comments.map(comment => {
  return{
  id: comment.id,
  name: comment.name
}})
console.log(newArray7)

// Task№ 10

const newArray8 = comments.map(comment => {
  const newComment = {...comment}
  newComment.isInvalid = newComment.body.length > 180
  return newComment
})
console.log(newArray8)

// Task№ 11

const newAray9 = comments.reduce((result, comment ) => {
  result.push(comment.email)
  return result
},[])
  console.log(newAray9)



const newAray10 = comments.map(comment => {
  return comment.email
})
console.log(newAray10)

// Task№ 12

 const newAray11 = newAray10.join(', ')
 console.log(newAray11)

 const newAray12 = newAray10.toString()
 console.log(newAray12)