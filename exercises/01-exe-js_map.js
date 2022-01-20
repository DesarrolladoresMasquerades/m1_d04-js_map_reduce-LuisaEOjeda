// ONLY USE THE .map() METHOD FOR THIS EXERCISE


// Exercise 1: Capitalize each element of the array - the whole word:
const fruits = ['pineapple', 'orange', 'mango'];

let uppercaseFruits = fruits.map((string) => {
  return string.toUpperCase()
})


console.log(uppercaseFruits)

// Answer should be  ['PINEALLPLE', 'ORANGE', 'MANGO'];


// Exercise 2: Capitalize the first letter of every city. 
const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city']

let uppercaseCities  = cities.map((string) =>{
   return string.charAt(0).toUpperCase() + string.slice(1);
})

console.log(uppercaseCities)

// Answer should be 
// [ 'Miami', 'Barcelona', 'Madrid', 'Amsterdam', 'Berlin', 'Sao paulo', 'Lisbon', 'Mexico city', 'Paris' ]

// Exercise  3: Create an array with only the names of the restaurants 
// Note: Be careful here. Info is an object with a key called 'cities' which is an array
 
const info = {
    cities : [
      {name: 'Mirazur', owner : 'Gustavo'},
      {name: 'Noma', owner : 'Jorge'},
      {name: 'Gaggan', owner : 'Alvaro'},
      {name: 'Geranium', owner : 'Gustavo'},
      {name: 'Arpège', owner : 'Luis'},    
   ]  
}


const getRestaurantsNames = (arr) => {
   return arr.cities.map(x=> x.name)
}

let restaurantsNames = getRestaurantsNames(info)
console.log(restaurantsNames)

// Answer should be [ 'Mirazur', 'Noma', 'Gaggan', 'Geranium', 'Arpège']