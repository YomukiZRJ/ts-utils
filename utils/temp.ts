class Person{
  name: string
  age: number
  constructor (name: string, age: number) {
    this.name = name
    this.age = age
  }

  sayHi () {
    console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`)
  }
}

class Miao extends Person{
  sex: string
  boyFriend: Person[]
  constructor (name: string, age: number) {
    super(name, age)
    this.sex = '小姐姐'
    this.boyFriend = []
  }

  addBoyFriend (name: string, age: number) {
    this.boyFriend.push(new Person(name, age))
  }

  showMyBoyFriend () {
    console.log('Let my boyfriends introduce themselves')
    this.boyFriend.forEach((item) => {
      item.sayHi()
    })
  }
}

const miao = new Miao('Miao', 18)
miao.addBoyFriend('Jack', 20)
miao.addBoyFriend('Tom', 21)
miao.addBoyFriend('Tony', 10)
miao.showMyBoyFriend()
