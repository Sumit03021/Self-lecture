// spread operators
const array=[..."abcdefg"]
const newarray=[..."1234567890"]
console.log(array)
console.log(newarray)

const obj1={
    key1:"value1",
    key2:"value2"
}
const obj2={
    key3:"value3",
    key4:"value4"
}
const newobj={...obj1,...obj2,key67:"value67"}
console.log(newobj)
const newobject={..."abcde"}
console.log(newobject)