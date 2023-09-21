// array destructuring
const myArray=["value1","value2","value3","value4","value5","value6"]
let myvar1=myArray[0]
let myvar2=myArray[1]
let myvar3= myArray[2]
console.log(myvar1)
console.log(myvar2)
console.log(myvar3)

let [Myvar1, ,Myvar2,...mynewarray]=myArray
Myvar1= "value1 changed"
console.log(Myvar1)
console.log(Myvar2)
console.log(mynewarray)

const myarr=["value"]
let [myvar,myvary]=myarr // if missing value then show undefiened 
console.log(myvar)
console.log(myvary)