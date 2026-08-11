//Task №3
const personData = {
  name: "Gasan",
  lastName: "Magomedov",
  city: "Makhachcala",
  age: 27,
  job: "merchant",
  country: "Russia",
  weight: 83,
}
console.log(personData)

//Task №4
const carData = {
  carMake: "BMW",
  color: "black",
  year: "2020",
  transmission: "automatic"
}
carData.owner = personData 
console.log(carData)

//Task №5
const checkAndAddMaxSpeed = (car) =>{
  if (!('maxSpeed' in car)){
    console.log(car.maxSpeed = 180)
  }
  // carData.maxSpeed = 180
}
checkAndAddMaxSpeed(carData)

//Task №6
const getObject = (obj, key) =>{
  console.log(obj[key])
}
getObject(carData, 'color')
getObject(carData, 'carMake')

//Task №7
const food = ['apple', 'cheese', 'bread']
console.log(food)

//Task №8
const products = [
  {
    nameBook: "The Lord of the Rings", 
    releaseDate: 1954, 
    coverColor: "blue", 
    autor: "Tolkin"
  },
{
  movie: "Harry Potter",
  releaseDate: 2001,
  director: 'Chris Columbus',
},
{
  movie: "Blade",
  releaseDate: 1998,
  director: "Stephen Norrington",
},
]
products.push({
  movie: "Spider Man",
  releaseDate: 2002,
  director: "Sam Raimi"
})
 console.log(products)

 //Task №9
 const film = [
  {
    movie: "Terminator",
    releaseDate: 1984,
    director: 'James Cameron',
  }
]
const productsFilm = [...products, ...film]
// console.log([...products, ...film])

//Task №10
function checkRarity(arr) {
  return arr.map(item => {
    return {
      ...item, 
      isRare: item.releaseDate > 2000 
    };
  });
}

const updatedList = checkRarity(productsFilm);
console.log(updatedList);