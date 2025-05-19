"use strict";
const babyDragon = {
    name: 'Typeon',
    life: 50,
    attack: 10,
    defense: 20,
};
const babyLicorn = {
    name: 'Typemoor',
    life: 80,
    attack: 5,
    defense: 30,
    magic: 50,
};
const smallArmor = {
    price: 30,
    attack: 2,
    defense: 5,
};
const smallSword = {
    price: 20,
    attack: 5,
};
const smallShield = {
    price: 15,
    defense: 10,
};
const smallMagicalWand = {
    price: 50,
    attack: 4,
    magic: 10,
};
const myWarriorHero = {
    name: 'TSolomon',
    life: 200,
    attack: 30,
    defense: 50,
    pets: [babyDragon, babyLicorn],
    equipments: [
        smallArmor,
        smallSword,
        smallShield,
    ],
};
const myMagicienHero = {
    name: 'TSoren',
    life: 150,
    attack: 20,
    defense: 40,
    equipments: [smallMagicalWand],
    magic: 200,
};
class UserClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, I'm ${this.name}`;
    }
}
