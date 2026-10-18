class Car {
  constructor(brand, color, hp){
    this.brand = brand
    this.color = color
    this.hp = hp
  }
  start(){
    console.log(`${this.brand} have ${this.color} color and have ${this.hp} hp`)
  }
}

const mers = new Car('Gls', 'black', 239)
mers.start()

class ElectrickCar extends Car{
  constructor(brand, color, hp, battery){
    super(brand, color, hp)
    this.battery = battery
  }
  electrick(){
    console.log(`${this.brand} have ${this.color} color , have ${this.hp} hp and have ${this.battery}%`)
  }
}
const tesla = new ElectrickCar('tesla', 'white', 873, 96)
tesla.electrick()


class Store{
  constructor(vegatables, fruits){
    this.a = vegatables
    this.b = fruits
  }
  use(){
    if(this.a === 'tomato'){
      console.log(`${this.a} = useful`)
    } else{
      console.log(`${this.b} = unuseful`)
    }
  }
}
const tge = new Store('tomato', 'orange')
tge.use()