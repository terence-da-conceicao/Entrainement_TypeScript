//on a un type Personnage
type Personnage = {
   name: string;
   life: number;
   attack: number;
   defense: number;
};

//on a un alias de Personnage, Animal. Animal a les mêmes propriétés que Personnage.
type Animal = Personnage;

//on a un type qui sert juste à rajouter de la magie à un type déjà existant. On mettra le type qu'on veut à la place de T.
type AvecMagie<T> = T & { magic : number };
const bebeLicorne1 : AvecMagie<Animal> = { name : "bébé Licorne", life: 50, attack: 50, defense: 50, magic: 50 };

//On peut aussi, si on doit réutiliser le type AvecMagie pluiseurs fois, créer un type qui englobe les propriétés de AvecMagie.
type AnimalMagique = AvecMagie<Animal>;
const bebeLicorne2 : AnimalMagique = { name : "bébé Licorne", life: 50, attack: 50, defense: 50, magic: 50 };


//On fait pareil pour créer un humain avec des pouvoirs
type Magicien = AvecMagie<Personnage>;
const LukeSkywalker : Magicien = { name: "Luke", life : 50, attack: 50, defense: 50, magic: 50 };

//Si on veut créer un équipement, on peut récupérer les statistiques de Personnage, ça sera utile. Mais on n'a pas besoin de a propriété "life".
type Equipement = Omit<Personnage, "life"> & { price: number };
const épée : Equipement = { name: "épée", attack : 50, defense: 50, price : 50 };

//On peut créer un type héros, qui possederait une épée.
type Heros = Personnage & { équipement : Equipement };
const roiArthur : Heros = { 
    name : "Roi Arthur", 
    life: 50,
    attack : 50,
    defense: 50,
    équipement : épée 
}