
export interface Passenger{

    name: string;
    children?: string[]; 

}

const passenger1: Passenger = {
    name: 'Alvaro',

}
const passenger2: Passenger = {
    name: 'Alejandro',
    children: ['Fernanda', 'Elias']
}

const printChildren = (Passenger: Passenger )=> {
    
    const howManyCHildren = Passenger.children?.length || 0; 
    
    console.log (Passenger.name, howManyCHildren); 
}

printChildren(passenger1); 
printChildren(passenger2); 