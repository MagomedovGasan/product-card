import {productsCatalog} from "./card.js"

function getQuantity () {
  const userInput = prompt("Сколько карточек отобразить? От 1 до 5")
  const quantity = Number(userInput)
  console.log(Number.isNaN(quantity))
  if (isNaN(quantity) || quantity < 1 || quantity > 5){
    alert("Введите правильное число")
    return getQuantity ()
}
  return quantity
}

// reduce

const nameDescription = productsCatalog.reduce((acc, product) => {
  const obj = {
    [product.name]: product.description
  }
  acc.push(obj)
  return acc
}, [])
console.log(nameDescription)

function renderCards (quantity) {
  const productTemplate = document.querySelector("#product-template");
  const productList = document.querySelector(".product-list");
  productsCatalog.slice(0, quantity).forEach(product => {
    const productClone = productTemplate.content.cloneNode(true);
    productClone.querySelector("img").src = product.image
    productClone.querySelector("img").alt = product.alt || product.name
    productClone.querySelector(".card__label").textContent = product.label
    productClone.querySelector(".card__title").textContent = product.name
    productClone.querySelector(".card__description").textContent = product.description
    productClone.querySelector(".price span").textContent = `${product.price} ${product.currency}`

  const componentList = productClone.querySelector(".component__list")
  product.compound.forEach(component => {
    const li = document.createElement("li")
    li.textContent = component
    componentList.appendChild(li)
  })
  productList.appendChild(productClone);
})
}
const currentQuantity = getQuantity(); 
renderCards(currentQuantity);