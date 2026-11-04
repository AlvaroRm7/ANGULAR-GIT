

function classDecorator<T extends{new (...args:any[]): [] }>(
    constructor: T
   
){
    return class extends constructor{
        newProperty ='sdfgfgddgf';
        hello = 'dsfsdf'; 
    }
    
}

//@classDecorator
export class SuperClass {
    public myProperty: string = 'Abc123'; 
    print () {
        console.log('decoratores'); 
    }
}; 

console.log( SuperClass); 

const myClass = new SuperClass();
console.log(myClass);  


/*Creacion de decoradores "Normalmente vamos 
 a usar los ya existentes, nunca vamos a crearlos*/