// Class code examples

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


const callBack = (oldAccumulator , currentElement) =>{
    newAccumulator = oldAccumulator + currentElement
    return newAccumulator
}

const sum = numbers.reduce (
    callBack,
    100 // Starting the value of the accumulator in the second parameter
)
 
console.log(sum)

// Create an object with reduce that has properties that summarize the content of the students array

const students = [
	{firstName: 'John', lastName: 'Carr', age: 34},
  {firstName: 'Leonardo', lastName: 'Di Vittorio', age: 21},
  {firstName: 'Jessy', lastName: "Mc Scrudge", age: 99},
  {firstName: 'Lisa', lastName: "Parker", age: 22},
  {firstName: 'Marco', lastName: "Santo", age: 48}
]

const countOlder = students.reduce ((count, student)=>{
if (student.age > 30) return count+=1
else return count
},
0
)

console.log(countOlder)

// we are building an array of strings

const classRoster = students.reduce(
(roster, student)=> {
    roster.push(`${student.firstName} ${student.lastName}`)
    return roster
}
,
[]
)

console.log("roster: " , classRoster)