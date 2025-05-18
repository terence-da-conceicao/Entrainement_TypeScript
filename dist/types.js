// MagicalPet : 
// type WithMagic<Pet> = {
//     magic: Pet{
//         name: 100,
//         life: 100,
//         attack: 100,
//         defense: 100,
//     }
// }

// type WithMagic<Equipment> = {
//     magic: Equipment{
//         life: 100,
//         attack: 100,
//         defense: 100,
//     }
// }


// //Pet est un alias de Character parce qu'il 
// //le double, il récupère toutes ses propriétés

// type MagicalPet = Pet & { magic: 100 };
// type MagicalPet = {
//     name : 100,
//     life: 100,
//     attack: 100,
//     defense: 100,
//     magic: 100,
// }
// //Ici c'est un Pet étendu