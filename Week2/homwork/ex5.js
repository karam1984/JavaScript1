let drinkTray =[]
const drinkTypes = ["cola", "lemonade", "water"];
for (var i = 0; i < 5; i++){ 
    if (i<=1){
        drinkTray.push(drinkTypes[0])
    }
   if (i>=2 && i<=3){
        drinkTray.push(drinkTypes[1])
    } 
    if (i>=4){
        drinkTray.push(drinkTypes[2])
    } 
}

console.log(drinkTray)
console.log('')

let hey = 'Hey guys, I brought a '
for(drink of drinkTray){
    hey = hey + drink+' '
}
console.log(hey);

