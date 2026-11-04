/*
    ===== Código de TypeScript =====
*/

interface superhéroe {
    name: string;
    age: number;
    DIRECCIÓN: Address;
    showAddress: () => string;
}

interface Address{
        street: string;
        country: string;
        city: string;

} 


const  superhéroe : superhéroe  =  {
    name : 'Spiderman' ,
    age : 30 ,
    DIRECCIÓN : {
        street : 'Calle Principal' ,
        country : 'EE. UU.' ,
        city : 'NY'
    } ,
    showAddress ( )  {
        return this.name +  ', '  +  this.DIRECCIÓN.city  +  ', '  +  this.DIRECCIÓN.country ;
    }
}


const  address  =  superhéroe.showAddress ( ) ;​​
console.log ( address ) ;​​  




export  { } ;