class Drink {
  #temperature
  constructor(name, size, price, temperature){
    if(new.target === Drink){
      throw new Error(`Ошибка`);
    }
    this.name = name
    this.size = size
    this.price = price
    this.#temperature = temperature
  }
  getInfo(){
    console.log(`${this.name} ${this.size} ${this.price}`)
  }
  getTemp(){
    console.log(`${this.#temperature}`)
  }
  setTemp(newTemp){
    this.#temperature = newTemp
  }
  #makeDrink(){
    console.log(`Напиток ${this.name} успешно приготовлен!`)
  }
  serveDrink(){
    this.#makeDrink()
    console.log(`Ваш напиток ${this.name} размером ${this.size} подан! С вас ${this.price} рублей.»`)
  }
}


class Lemonad extends Drink{
  constructor(name, size, price, temperature, flavor, hasIce){
    super(name, size, price, temperature,)
    this.flavor = flavor
    this.hasIce = hasIce
  }
  chooseFlavor(){
    console.log(`Вы выбрали ${this.flavor} вкус напитка`)
  }
  checkIce(){
    if(this.hasIce){
      console.log(`Вы выбрали наличие льда`)
    } else{
      console.log(`Льда нет`)
    }
  }
}

class Coffee extends Drink{
  constructor(name, size, price, temperature, milkType, syrup){
    super(name, size, price, temperature)
    this.milkType = milkType
    this.syrup = syrup
  }
  addMilk(){
    console.log(`Вы выбрали ${this.milkType} молоко`)
  }
  addSyrup(){
    console.log(`Вы выбрали ${this.syrup} сироп`)
  }
}

class Tea extends Drink{
  constructor(name, size, price, temperature, brewTime, withSugar){
    super(name, size, price, temperature)
    this.brewTime = brewTime
    this.withSugar = withSugar
  }
  checkSugar(){
    if(this.withSugar){
      console.log(`Вы добавили сахар в чай`)
    } else {
      console.log(`Чай подается без сахара`)
    }
  }
  steepTea(){
    console.log(`Чай заваривается... Пожалуйста, подождите ${this.brewTime} минут`)
  }
}


class Cafe {
  constructor(name, location){
    this.name = name
    this.location = location
  }
  getInfoAboutCafe(){
    console.log(`Добро пожаловать в кафе "${this.name}" находящийся по адресу ${this.location}`)
  }
  orderDrink(drink){
    drink.serveDrink()
  }
}

const myCafe = new Cafe("Звёздный Кофе", "ул. Пушкина, дом 10");
myCafe.getInfoAboutCafe()

const morningCoffee = new Coffee("Капучино", "Medium", 250, 80, "Овсяное", "Карамельный");
myCafe.orderDrink(morningCoffee)
const summerLemonade = new Lemonad("Мохито", "Large", 300, 5, "Мятный", true);
summerLemonade.getInfo()
myCafe.orderDrink(summerLemonade)