// Class code examples

const names =  ["Marco", "Carlos", "Carol"]

const capitalise = (string)=>{
    return string.toUpperCase()
}

const allCaps = names.map( capitalise ) //  ["Marco", "Carlos", "Carol"].map()

console.log(
    names,
    allCaps
    )

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// const someCallbackFunction = ()=> {}
const double = numbers.map( (element)=> { return element * 2} ) // numbers.map ( someCallbackFunction )

console.log(double)

const students = [
    {name: 'Rafa', color: 'Blue', age: 12},
    {name: 'Elise', color: 'Pink', age: 21},
    {name: 'Bodei', color: 'Yellow', age: 31},
    {name: 'Jorge', color: 'Red', age: 11}
    ]

const greetings = students.map( (student)=> {
    return `Hello ${student.name}, you are ${student.age} years old and your fav color is ${student.color}`
} )

greetings.forEach( (el)=>console.log(el) )

console.log(
    ["Marco", "Carlos", "Carol"]
    .map(() => {})
    .length
)

numbers
.map ((student) => {
    if (student.age > 20)
    return `Your age is ${student.age}`
})

.filter ((student) => {
    return student < 13
})
.sort ((std1, std2) => {
return std1 - std2
})




