function random(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
 }
function giveCompliment(name){
   let compliment =[ 'awesome','smart','impeccable','perfect','great','courageous' 
                   ,'strong','wonderful','fabulous','astonishing'];
  
  let s1 = "you are "+compliment[random(0,9 )]+" "+name
  console.log(s1)
  return s1 
 }
giveCompliment("karam")
giveCompliment("karam")
giveCompliment("karam")
       
