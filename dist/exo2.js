"use strict";
// type Character = {
//     name: string;
//     life: number;
//     attack: number;
//     defense: number;
// }
// type Pet = Character;
// type Hero = Character & {
//     pet?: Pet;
// };
// const Glodio: Character = { name: "Glodio", life: 65, attack: 800, defense: 270 };
// const Shield: Equipment = { price: 15, defense: 50};
// const Sword: Equipment =  {price: 20, attack: 50};
// const LeMagasinDeGlodio: Armory = { name: "LeMagasinDeGlodio", owner: Glodio,  items: [Sword, Shield] };
// type Shop<ItemType> = {
//     name: string;
//     owner: Character;
//     items: Array<ItemType>;
// };
// type Armory = Shop<Equipment>;
// type Apothecary = Shop<Potion>;
// type PetShop = Shop<Pet>;
// type Equipment = {
//     price: number;
//     attack?: number;
//     defense?: number;
// };
// type Potion = {
//     taste: string;
// };
// function createShop<ItemType>(name: string, owner: Character, items: Array<ItemType>): Shop<ItemType> {
//     return {name, owner, items};
// }
// const armory = createShop<Equipment>('My Armory', { name: 'Bob', life: 100, attack: 100, defense: 100}, []);
// console.log(armory);
// interface Shop<ItemType> {
//     name: string;
//     owner: Character;
//     items: Array<ItemType>;
// };
// //fonction générique qui sert à faire un constructeur pour le type générique Shop
// function createShop<ItemType>(name: string, owner: Character, items: Array<ItemType>): Shop<ItemType> {
//     return {name, owner, items};
// }
// const myArmory: Shop<Equipment> = { name: "myArmory", owner: Glodio, items: [Shield, Sword]}
