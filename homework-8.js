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
const carsData = {
  carMake: "BMW",
  color: "black",
  year: "2020",
  transmission: "automatic"
}
carsData.owner = personData.name 
console.log(carsData)

//Task №5
const showSpeed = () =>{
  if ('maxSpeed' in carsData){
  return;
  }
  carsData.maxSpeed = 180
}
showSpeed(carsData)

//Task №6
const getObject = (key, value) =>{
  console.log(carsData['color'])
}
getObject(carsData, 'color')

//Task №7
const a = ['apple', 'cheese', 'bread']
console.log(a)

//Task №8
const b = [
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
b.push({
  movie: "Spider Man",
  releaseDate: 2002,
  director: "Sam Raimi"
})
 console.log(b)

 //Task №9
 const c = [
  {
    movie: "Terminator",
    releaseDate: 1984,
    director: 'James Cameron',
  }
]
const v = [...b, ...c]
// console.log([...b, ...c])

//Task №10
function checkRarity(arr) {
  return arr.map(item => {
    return {
      ...item, 
      isRare: item.releaseDate > 2000 
    };
  });
}


const updatedList = checkRarity(v);
console.log(updatedList);