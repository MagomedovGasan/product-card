// function sayHi(qwe){
//   console.log(`Hello `)
// }
// sayHi('Gasan')

// const sayHi2 = (name) => {
//   console.log(`Hello ${name}`)
// }
// sayHi2("Gasan")



// let temp = 20
// if (temp > 20){
//   console.log("Hot!")
// }else if ( temp === 20) {
// console.log ("отличная температура")
// }else{
//   console.log("cold")
// }



// let age = 18
// let hasPasport = true
// if(age>=18){
//   if (!hasPasport){
//     console.log("Доступ разрешен")
//   }else{
//     console.log("Возраст совпадает, но нет паспорта")
//   }
// }else{
//   console.log("Доступ запрещен")
// }


// тернарный оператор
// const age = 18
// let acces = age>=18 ? "доступ разрешен" : "доступ запрещен"
// console.log(acces)




//задание №3

let showWeather = (city, temp) => {
  console.log(`Сейчас в ${city} ${temp} градусов по цельсию`);
}
showWeather("Москве", 20);



//задание №4

const showSpeedOfLight = (speed) => {
if (speed > 299792458 ) {
  console.log("Сверхсветовая скорость");
}else if(speed === 299792458) {
  console.log("Скорость света");
} else{
  console.log("Субсветовая скорость");
}
}
showSpeedOfLight(299792458)
showSpeedOfLight(299792434)
showSpeedOfLight(299792499)



//Задание №5

const product = "phone"
const price = 20000
const budget = (currentBudget) => {
if(currentBudget > price) {
  console.log(`${product} приобретен. Спасибо за покупку`);
} else{
  const count = price - currentBudget
  console.log(`Вам не хватает ${count} , пополните баланс`);
}
}
budget(16000);