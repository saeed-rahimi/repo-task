"use strict "
const products=[
    {name:"Book" , price:20},
    {name:"pen" , price :null},
    {name:"Notebook" , price:undefined},
    {name:"Backpack"}
]


products.forEach(product => {
    const price = product.price ?? 50; 
    console.log(`Name: ${product.name}, Price: ${price}`);
});
