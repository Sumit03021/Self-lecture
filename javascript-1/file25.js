// objects reference type
// array are good but not sufficient
//for real world data
//objects are store key value pairs / not store index
const person={ 
    name:"sumit",
    age:22,
    hobbies: ["guiter","sleep","music"]
}
console.log(person)

// access data from objects
console.log(person.name)
console.log(person.age)
console.log(person.hobbies)
console.log(person["name"]) // also use due to space cannot undefined into it

person.gender="male" // also adding by person["gender"]
console.log(person)
// key adding and identify
const key="email"
person[key] = "sumit@gmail.com"
console.log(person)