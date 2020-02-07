let groceryList = ['bananas', 'milk'];


function addToShoppingCart(Item) {
    groceryList.push(Item);
    if(groceryList.length>3){
     groceryList.shift(groceryList);

    }
    return `You bought `+groceryList+" !";
}

console.log(addToShoppingCart("onion"));
console.log(addToShoppingCart("cheese"));
console.log(addToShoppingCart("parsley")); 