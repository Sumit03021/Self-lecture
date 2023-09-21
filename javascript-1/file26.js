// how to iterate objects
const person={
    name: "sumit",
    age:22,
    "person hobbies": ["guiter","music","sleep"]
}
// for in loop
// objects,keys
for(let key in person){
    console.log(key)
    console.log(person[key]) // not use person.key ----undefined
    console.log(`${key}:${person[key]}`)
}

console.log(Object.keys(person))
console.log(typeof (Object.keys(person)))
const val=Array.isArray(Object.keys(person))
console.log(val)