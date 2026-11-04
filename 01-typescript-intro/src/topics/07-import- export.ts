
 import { taxCalculation, type Product }  from './06-functions-destructuring';

const shoppingCart: Product []= [
{
    description: 'iphone 1',
    price: 1500
},
{
    description: 'iphone 2',
    price: 2500
},
{
    description: 'iphone 3',
    price: 3500
}]; 

//TAX= 0.15
const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});
console.log('Total 2:', total);
console.log('Tax 2:', tax);
