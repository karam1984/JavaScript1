
let cartForParty = {
    beers:1.30, chips:2.20 , cake:0.99 , nuts:3.40 ,cola:2.25
}

function calculateTotalPrice(expenses){
    let all=0;
   for (expense of Object.values(expenses)){
    all=all+expense
   }
return all;
}

console.log(calculateTotalPrice(cartForParty))