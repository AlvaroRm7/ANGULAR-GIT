

export class Person  {
  
  // 1. Declara las propiedades explícitamente aquí arriba
  public name: string;
  public adress: string;

  // 2. Inicialízalas de forma tradicional en el constructor
  constructor(name: string, adress: string = 'No address') {
    this.name = name;
    this.adress = adress;
  }
}

/* export class Hero extends Person {
    
  public alterEgo: string;
  public realName: string;
  public age?: number;
 

  // 2. Recíbelo en el constructor e inicialízalo con this o super
  constructor(alterEgo: string, realName: string, age?: number) {
    super(realName, 'NEW YORK');
    this.alterEgo = alterEgo;
    this.realName = realName;
    this.age = age;
    
  }

} */


export class Hero { 

  public person: Person;    
 public alterEgo: string;
  public realName: string;
  public age?: number;

 

  // 2. Recíbelo en el constructor e inicialízalo con this o super
  constructor(alterEgo: string, realName: string, age?: number) {
    
    this.alterEgo = alterEgo;
    this.realName = realName;
    this.age = age;
    this.person = new Person(realName);
    
  }

}

//const iroman = new Person('Alvaro', 'Malibu 1080');
//console.log(iroman);
const person = new Person('Pedro', 'isla 1080');
console.log(person);
const spiderman = new Hero('Peter Parker', 'Spiderman', 30);
console.log(spiderman);