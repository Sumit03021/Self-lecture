// filter method ---- only true and false and return true values only
 const numbers=[1,2,3,4,5,6,7,8]
 const evennumber=numbers.filter((number)=>{
 return number%2===0
 })
 console.log(evennumber)


 // reduce method
const nums=[1,2,3,4,5,6]
// aim: sum of all nums in array
nums.reduce((accumulator,currentvalue)=>{
 return accumulator + currentvalue
})
// accumulator currentvalue return
// 1             2           3
// 3             3           6
// 6             4           10  accumulator as initial value and current as next value

const usercart=[
    {productid:1,productname:"mobile", price:12000},
    {productid:2,productname:"tv", price:25000},
    {productid:3,productname:"laptop", price:45000},
    {productid:4,productname:"iphone", price:70000},
    {productid:5,productname:"ipad", price:120000},
]
 const usersum= usercart.reduce((totalprice,currentproduct)=>{
    return totalprice + currentproduct.price
 },0)
 console.log(usersum)













