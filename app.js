
//The purpose of this Lab is to get a solid understanding of the .filter() and .map() advanced array methods.
//These methods will be used extensively on future projects


//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 15,
        "name": "Pho",
        "cuisine": "Vietnamese",
        "servings": 4,
        "ingredients": ["beef", "ginger"]
    },
]

//Example function
//IMPORTANT: Take the time to step through this example function with a breakpoint until you could explain what is going on to someone else before starting this lab.

// function filterExample(){
//     //Debug tip: Use a console.log(el) inside the filter function to get a visualization of what el represents and see all its properties! This helps you to know what you can access with dot notation inside the filter. Do this every time you use a .filter or else you are working in the dark!
//     let results;
//     results = dishes.filter(function(el){
//         console.log("el inside filterExample's filter: ", el)
//         if(el.cuisine === "Mexican"){
//             return true;
//         }
//         else{
//             return false;
//         }})

//     return results;
// }

// let mexicanFood = filterExample();
// console.log('mexicanFood from filterExample', mexicanFood)

//Reminder: Do not move on to problem one until understand the example completely!!
//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter

function problemOne(){
    return dishes.filter(function(dish){
        if(dish.cuisine == "Vegetarian"){
            return true
        }
    })
}

console.log("Vegetarian dishes : ", problemOne())

//2. Create a function that will prompt the user to enter a cuisine type and then return all dishes that match that type
//Filter

function problemTwo(filterBy){
    return dishes.filter(function(dish){
        if(dish.cuisine == filterBy){
            return true
        }
    })
}

let userDish = prompt("What dishes would you like to see?")
console.log(`${userDish} dishes : `, problemTwo(userDish))

//3. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter

function problemThree(){
    return dishes.filter(function(dish){
        if(dish.cuisine == "Italian" && dish.servings > 5){
            return true
        }
    })
}

console.log("Italian dishes with serving size more than 5 : ", problemThree())

//4. Create a function that will return only dishes whose id number matches their serving count.
//Filter

function problemFour(){
    return dishes.filter(function(dish){
        if(dish.id == dish.servings){
            return true
        }
    })
}

console.log("Dish id equal Dish servings : ", problemFour())

//5. Create a function that will return only dishes whose serving count is even.
//Filter

function problemFive(){
    return dishes.filter(function(dish){
        if(dish.servings %2 == 0){
            return true
        }
    })
}

console.log("Dishes with even serving counts : ", problemFive())

//6. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Double Hint: Research 'javascript does array include item'
//Filter

function problemSix(){
    return dishes.filter(function(dish){
        return dish.ingredients.includes("chickpea")
    })
}

console.log("Dishes that have chickpeas : ", problemSix())

//7. Create a function that will prompt the user to type the name of one ingredient. Then use a filter to find all the dishes whose ingredients array INCLUDES that ingredient. Return the new array.
//Filter

function problemSeven(ingredient){
    return dishes.filter(function(dish){
        return dish.ingredients.includes(ingredient)
    })
}

userIngredient = prompt("What ingredient do you want to see in your dish?")
console.log(`${userIngredient} dishes : `, problemSeven(userIngredient))

//8a. Create a function that will return an array of the string cuisine types. Ie, ["Italian", "Italian", "Mexican", ...]
//Map

function problemEightA(){
    return dishes.map(function(dish){
        return dish.cuisine
    })
}

console.log("Dish cuisines : ", problemEightA())

//9. Create a function that will return an array of strings, with the cuisine type appended to the start of the dish's name. Ie, ["Italian Pizza", "Italian Spaghetti", ...]
//Map

function problemNine(){
    return dishes.map(function(dish){
        return dish.cuisine + " " + dish.name
    })
}

console.log("Dish cuisines and name : ", problemNine())

//10. Create a function that will use advanced array methods on the 'dishes' array and return the result ["Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"]

function problemTen(customDishArray){
    return customDishArray.map(function(dish){
        return dish.cuisine + " " + dish.name
    })
}

console.log("Dish cuisines and name that you chose : ", problemTen(problemTwo(userDish)))

//BONUS

//8b. Use the filter method to eliminate duplicate from problem 8a.

function problemEightB(){
    return problemEightA().filter(function(value, index, array){
        return array.indexOf(value) === index
    })
}

console.log("All cuisine available : ", problemEightB())

//11. Create a function that will return dishes whose ingredients array INCLUDES "tomato" OR "cheese".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter

function problemEleven(){
    return dishes.filter(function(dish){
        return dish.ingredients.includes("tomato") || dish.ingredients.includes("cheese")
    })
}

console.log("Dishes that have tomato or cheese : ", problemEleven())

//12. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.

function problemTwelve(){
    return dishes.map(function(dish){
        return dish.servings
    }).reduce(function(total, servings){
        return total + servings
    })
}

console.log("Total serving size of all dishes : ", problemTwelve())

//13. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.

function problemThirteen(){
    let allCuisine = problemEightA()
    let exclude = problemEightB().map(function(cuisine){
        return {name:cuisine, count: allCuisine.filter(function(dishCuisine){
            if(dishCuisine == cuisine)
                return true
        }).length}
    }).filter(function(cuisine){
        if(cuisine.count <= 1){
            return true
        }
    }).map(function(cuisineName){
        return cuisineName.name
    })

    return dishes.filter(function(dish){
        return !exclude.includes(dish.cuisine)
    })
}

console.log("Dishs with more than one cuisine type : ", problemThirteen())