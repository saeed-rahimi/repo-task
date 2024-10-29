"use strict"
const  cartItems=[
    {name :"Shoes" ,quantity:2 ,price :75},
    {name:"Hat" ,price : 20},
    {name:"Socks" ,quantity:3},
  
]


cartItems.forEach(item => {

    const { 
        name, 
        quantity = 1, 
        price = 10 
    } = {
        name: item.name,
        quantity: item.quantity ?? 1,
        price: item.price ?? 10
    };
    
 
    const totalCost = quantity * price;
    
    
    console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}, Total Cost: ${totalCost}`);
});
