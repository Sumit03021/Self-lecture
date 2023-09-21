// set is iterable
// store data have no index access , has own methods,unique item allowed (no duplicate item), order is not guaranteed
const number = new Set([1,2,3,4,5,6])
console.log(number)
const num= new Set()
num.add(1)
num.add(2)
num.add(3)
num.add(["item1","item2"]) // add duplicate array but with different address.
num.add(["item1","item2"])
console.log(num)
 if(num.has(1)){
    console.log("1 is present")
 }else{
    console.log("1 is not present")
 }

 for(let item of num){
    console.log(item)
 }

const myArray=[1,2,3,4,4,5,2,6,7]
const uniqueElements= new Set(myArray)
console.log(uniqueElements)
console.log(myArray)
 
let length=0
 for(let element of uniqueElements){
    length++
 }
 console.log(length)
















