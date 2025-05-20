type Personnage = {
   name: string;
   life: number;
   attack: number;
   defense: number;
};

type Animal = Personnage;

type AvecMagie<T> = T & { 
    magic : number 
};

type AnimalMagique = AvecMagie<Animal>;

type Magicien = AvecMagie<Personnage>;

type Equipement = Omit<Personnage, "life"> & { 
    price: number 
};

type Heros = Personnage & { 
    équipement : Equipement 
};

type AvecAnimal<T> = Personnage & { 
    animal : T 
};

type MonChien<T> = {
	name: string;
	age: number;
	color : T;
}

type Couleurs = {
	premièreCouleur: string;
	deuxièmeCouleur: string;
	troisièmeCouleur: string;
}
