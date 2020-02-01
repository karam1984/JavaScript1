let MealRecipe = { MealName : "Hummus", Serves : 2,
Ingredients:[ '200g chickpeas','2 tbsp lemon juice' ,'2 garlic cloves, crushed', ]
} ;


for (food in MealRecipe) {
    console.log(food +' : '+ MealRecipe[food])
}