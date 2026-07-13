//изменяем цвет всех карточек
const productCards = document.querySelectorAll('.card');
const changeColorAllButton = document.querySelector('#Change-card-for-all-color-button');
const greenColor = '#00FF00';
const blueColor = '#0000FF'
changeColorAllButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColor)
});


//изменяем цвет первой карточки

const firstProductCard = document.querySelector('.card');
const changeColorFirstCardButton = document.querySelector('#Change-first-card-color-button');
changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColor
});


//открываем гугл

const openGoogleButton = document.querySelector('#open-google');
openGoogleButton.addEventListener('click',  () => {
  window.open('https://google.com')
});


//выводим сообщение в консоль

const outputLogButton = document.querySelector('#output-console-log');
outputLogButton.addEventListener('click',() => outputConsoleLog ("ДЗ№6")

)
function outputConsoleLog(message){
  alert(message)
  console.log(message)
}


//добавил наведение на заголовок

const title = document.querySelector('.productTitle');

title.addEventListener('mouseover', () => {
  console.log(title.textContent)
  });


  //кнопка меняющая цвет при нажатии

const toggleButton = document.querySelector('#btn-toggle'); 
const heading = document.querySelector('.productTitle'); 

toggleButton.addEventListener('click', () => {
    heading.classList.toggle('red-text'); 
});