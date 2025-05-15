"use strict";
const Glodio = { name: "Glodio", life: 65, attack: 800, defense: 270 };
const Shield = { price: 15, defense: 50 };
const Sword = { price: 20, attack: 50 };
const LeMagasinDeGlodio = { name: "LeMagasinDeGlodio", owner: Glodio, items: [Sword, Shield] };
function createShop(name, owner, items) {
    return { name, owner, items };
}
const armory = createShop('My Armory', { name: 'Bob', life: 100, attack: 100, defense: 100 }, []);
console.log(armory);
