class Item{
    constructor(name,weight,rarity){
        this.name = name
        this.weight = weight
        this.rarity = rarity
    }
    getInfo() {
        return `Item: ${this.name}, Weight: ${this.weight}kg, Rarity: ${this.rarity}`;
    }
}
let sword = new Item("Steel Sword", 3.5, "rare");
console.log(sword.getInfo());
sword.weight = 4.0
console.log(sword.weight);



class Weapon extends Item{
    constructor( name,weight,rarity ,damage , durability){
        super(name,weight,rarity)
        this.damage = damage
        this.durability = durability
    }
    use(){
        if(this.durability >0){
            this.durability -= 10
        }
    }
    repair(){
        this.durability = 100
    }
}
let bow = new Weapon("Longbow", 2.0, "uncommon", 15, 100);
console.log(bow.getInfo());
bow.use();
console.log(bow.durability);
bow.repair();
console.log(bow.durability);

let axe = new Weapon("Battle Axe", 4.5, "legendary", 25, 60);
axe.use();  
console.log(axe.durability);  
axe.repair();  
console.log(axe.durability);  