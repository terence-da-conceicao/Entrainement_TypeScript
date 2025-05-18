type Character = {
   name: string;
   life: number;
   attack: number;
   defense: number;
};
type Stats = Omit<Character, 'name'>;
type Equipment = Omit<Partial<Stats>, 'life'> & { price: number };
type WithMagic<T> = T & {
   magic: number;
}

// ====================

type Pet = Character;
type MagicalPet = WithMagic<Pet>;

type Hero = Character & {
   pets?: Array<Pet>;
   equipments?: Array<Equipment>;
};

type Magician = WithMagic<Hero>;

const babyDragon: Pet = {
   name: 'Typeon',
   life: 50,
   attack: 10,
   defense: 20,
};

const babyLicorn: MagicalPet = {
   name: 'Typemoor',
   life: 80,
   attack: 5,
   defense: 30,
   magic: 50,
};

const smallArmor: Equipment = {
   price: 30,
   attack: 2,
   defense: 5,
};

const smallSword: Equipment = {
   price: 20,
   attack: 5,
};

const smallShield: Equipment = {
   price: 15,
   defense: 10,
};

const smallMagicalWand: WithMagic<Equipment> = {
   price: 50,
   attack: 4,
   magic: 10,
};

const myWarriorHero: Hero = {
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

const myMagicienHero: Magician = {
   name: 'TSoren',
   life: 150,
   attack: 20,
   defense: 40,
   equipments: [smallMagicalWand],
   magic: 200,
};