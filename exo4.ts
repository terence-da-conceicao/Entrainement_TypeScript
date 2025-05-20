const chien : Animal = { 
    name : "chien", 
    life:50, 
    attack:50, 
    defense: 50 
};

const bebeLicorne1 : AvecMagie<Animal> = { 
    name : "bébé Licorne", 
    life: 50, 
    attack: 50, 
    defense: 50, 
    magic: 50 
};

const bebeLicorne2 : AnimalMagique = { 
    name : "bébé Licorne", 
    life: 50, 
    attack: 50, 
    defense: 50, 
    magic: 50 
};


const LukeSkywalker : Magicien = { 
    name: "Luke", 
    life : 50, 
    attack: 50, 
    defense: 50,
    magic: 50 
};

const épée : Equipement = { 
    name: "épée", 
    attack : 50, 
    defense: 50, 
    price : 50 
};

const roiArthur : Heros = { 
    name : "Roi Arthur", 
    life: 50,
    attack : 50,
    defense: 50,
    équipement : épée 
}


const herosAvecUnChien : AvecAnimal<string> = { 
    name: "héroschien", 
    life: 50, 
    attack: 50, 
    defense: 50, 
    animal: "roiArthur" 
};



const Rufus : MonChien<string> = {
	name: "Rufus",
	age: 8,
	color: "rouge"
}




type Mesures = Array<number>;

const mesMesures : Mesures = [12, 45, 56];


type League = Array<Heros>;
const laLigueDesHéros : League = [
    {
        name: "Batman", 
        life: 50,
        attack: 50,
        defense: 50,
        équipement: {
            name: "Cape", 
            attack: 50,
            defense: 50,
            price: 50
        } 
    },
     roiArthur,
    {
        name: "Zorro",
        life: 50,
        attack: 50,
        defense: 50,
        équipement: épée
    }
]


