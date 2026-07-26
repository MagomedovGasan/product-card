//задание №3

const showWeather = (city, temp) => {
  console.log(`Сейчас в ${city} - ${temp} градусов по Цельсию`);
}
showWeather("Москве", 20);

//задание №4

const countSpeedOfLight = 299792458
const showSpeedOfLight = (speed) => {
if (speed > countSpeedOfLight ) {
  console.log("Сверхсветовая скорость");
} else if (speed === countSpeedOfLight) {
  console.log("Скорость света");
} else{
  console.log("Субсветовая скорость");
}
}
showSpeedOfLight(299792458)
showSpeedOfLight(299792434)
showSpeedOfLight(299792499)

//Задание №5

const getProduct = "phone"
const showPrice = 20000
const showBudget = (currentBudget) => {
if(currentBudget > showPrice) {
  console.log(`${getProduct} приобретен. Спасибо за покупку`);
} else{
  const count = showPrice - currentBudget
  console.log(`Вам не хватает ${count}, пополните баланс`);
}
}
showBudget(18000);

//задание №6

const tv = 'lg'
const cost = 15000
const qwerty = (accept) => {
if(accept > cost) {
  console.log(`Товар ${tv} успешно приобретен`)
} else{
  console.log('Недостаточно средств!')
}
}
qwerty(20000)

//задание №7

const number = 3412
const string = "good"
let big = "213"