export interface Passenger{

    name: string;
    children?: string[]; 

}

const pasenger1: Passenger = {
    name: 'Alavaro',

}
const pasenger2: Passenger = {
    name: 'Alejandro',
    children: ['Fernanda', 'Elias']
}