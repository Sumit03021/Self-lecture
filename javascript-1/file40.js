// important array methods
// foreach
//map
//filter
//reduce

const numbers = [1,2,3,4,5]

function mulby2(number,index){
    console.log(`index is ${index}`)
    console.log(`${number}*2 = ${number*2}`)
}
for(let i=0; i<numbers.length;i++){
       mulby2(numbers[i],i)
}
console.log(" ")
numbers.forEach(mulby2) // work same output like loop
 console.log(" ")

 numbers.forEach(function(number,index){
    console.log(`index is ${index} and number is ${number}`)
 })

const users=[
    {firstname:"sumit",age:23,gender:"male"},
    {firstname:"harsh",age:37,gender:"male"},
    {firstname:"ayush",age:24,gender:"male"},
    {firstname:"mohit",age:24,gender:"male"},
    {firstname:"komal",age:20,gender:"female"},
    {firstname:"sam",age:26,gender:"male"},
]
users.forEach((user) => {
    console.log(user.firstname)
})


















