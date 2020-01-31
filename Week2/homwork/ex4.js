var books = [
    {title: 'the stranger  ', author: 'albert camus' , alreadyRead: true },
    {title: 'the idiot', author: 'dostoevsky' , alreadyRead: false },
    {title: 'The Alchemist', author: 'Paulo Coelho' , alreadyRead: true }
    
];

for(let i = 0; i < books.length; i++){
    console.log(books[i]);}

console.log('')

books.forEach  (function(obj) {
    console.log(obj.title + " by " +obj.author )
});
console.log('')

for (book of books)
{
    if (book.alreadyRead===true){ console.log( 'You still need to read ' +book.title )   
    } 
    else  { console.log ( 'You already read ' + book.title)
    
    } 
}

  
   
