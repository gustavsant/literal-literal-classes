class Person {
  constructor(classs, str, dex, int) {
    this.classs = classs
    this.str = str
    this.dex = dex
    this.int = int
  }
}
class Human extends Person {
  constructor(classs, str, dex, int) {
    super(classs, str * 1.6, dex * 1.6, int * 1.6)
  }
}

class Elf extends Person {
  constructor(classs, str, dex, int) {
    super(classs, str * 0.8, dex * 1.7, int * 2)
  }
}

class Orc extends Person {
  constructor(classs, str, dex, int) {
    super(classs, str * 2, dex * 0.8, int * 0)
  }
}

const Wizard = new Elf('Wizard', 10, 20, 70)

const Warrior = new Orc('Warrior', 80, 10, 10)

const Archer = new Human('Archer', 20, 60, 20)

let wiz = document.querySelector('.wizard')
let wizStats = document.createElement('p')
wizStats.innerText = `Inteligencia do mago: ${Wizard.int}`
wiz.appendChild(wizStats)
let war = document.querySelector('.warrior')
let arc = document.querySelector('.archer')
