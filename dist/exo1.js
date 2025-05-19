"use strict";
// Créer un magasin d'instruments, avec ses rayons, et aussi un magasin de partitions
const Josh = { name: "Josh", job: "vendeur de guitares" };
const Bill = { name: "Bill", job: "vendeur de percussions" };
const GuitaresShop = {
    name: "Magasin de Guitares",
    owner: Josh,
    specialization: "Guitare",
    sections: ["Guitares Classiques", "Guitares Folk"]
};
const PercusShop = {
    name: "Magasin de percussions",
    owner: Bill,
    specialization: "Percus",
};
//Ici, Fleurs est un type générique qui n'existe pas. On peut le remplacer par T. Cela signifie que ce type 
// sera rensiegné plus tard. En fait, ce n'ets pas un type, mais un paramètre de type.
//Les deux doivent avoir le même nom, pour référer au même type.
// En gros, là on dit "Je vais utiliser un type qui s'papelle Fleurs pour ce shop, mais je ne l'ai aps encore déclaré. Mais il servira à indiquer la spécialization."
//Si je met autre chose, là, il va me demander ce qu'ets ce type.
//En gros, mettre un truc entre chevron permet de dire que ce n'ets pas un type encore défini.
// type Shop<Fleurs> = {
//     specialization : Fleurs;
// }
/* Ne pas réutiliser le paramètre de type entre chevrons dans le corps de la déclaration du type, ça ne sert à rien. TS ne va pas faire d'erreur, mais cela
rend inutilement le code lourd et pas cohérent.



type Shop<T> = {
    specialization: T;
}
    signifie qu'on créer un type générique nommé Shop, et T est un paramètre qu'on définira plus tard.


    T est une variable de Type. En gros, on a la variable, mais pas encore sa valeur. Elle ets vide.
    Sa nature est une variable de type,
sa fonction est un paramètre de type.*/ 
