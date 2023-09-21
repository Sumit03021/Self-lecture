// maps as objects
// maps is iterable
// objects only have strings and symbols as key called object literals
// map stored data in ordered fashion, store key value pairs(like objects), duplicate key not allowed like objects , and in maps use anything as key.
const person= new Map()
person.set(`firstname`,`harshit`)
person.set(`age`,7)
person.set(1,`one`)
console.log(person)
console.log(person.get(1))
console.log(person.keys())

for(let key of person){
    console.log(key,typeof key)
}

const persons = new Map([[`firstname`,`harshit`], [`age`,7],[1,`one`]])


const person1={
    id:1,
    firstname:"harshit"
}
const person2={
    id:2,
    firstname:"harshita"
}

const userinfo=new Map()
userinfo.set(person1,{age:8,gender:"male"})
userinfo.set(person2,{age:17,gender:"female"})

console.log(person1.id)
console.log(userinfo.get(person1).age)
console.log(userinfo.get(person1).gender)
console.log(userinfo.get(person2).age)
console.log(userinfo.get(person2).gender)
console.log(person1.firstname)
console.log(person2.firstname)



















