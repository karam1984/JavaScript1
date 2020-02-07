function validateCard(cardNumber){

    if( isNaN(cardNumber)) 
    {
            console.log("invalid characters");
            return;
    }

    let sameNumbers = true;              
    for(let i =0;i<cardNumber.length  -1 ;i++){ 
        if(cardNumber.charAt(i) != cardNumber.charAt(i+1)){
            sameNumbers = false;
            break;
        }
    }
    if(sameNumbers){
        console.log("All numbers are the same ");
        return;
    }

    let sum = 0 ; //sum less than 16
    for(let i =0;i<cardNumber.length  ;i++){
        sum = sum + parseInt(cardNumber.charAt(i))
    }
    if(sum < 16){
        console.log("Sum is less than 16 ");
        return; 
    }


    if(parseInt(cardNumber.charAt(cardNumber.length-1)) % 2 != 0 )//odd final number
    {
        console.log(  "The card number is odd ");
    }
    

    
}
validateCard('a92332119c011112')
validateCard('4444444444444444')
validateCard('1111111111111110')
validateCard('6666666666666661')
