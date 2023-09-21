// sort method
//ascii table
//char: ascii value

//sort 5,9,1200,400,3000------5,9,400,1200,3000.  change the array
const numbers=[5,9,1200,400,3000]
numbers.sort((a,b) => {
    return a-b
})
console.log(numbers) 
// sort in number 
// 1200,410  ----positive value means 410,1200 use
// 410,1200 ------negative value use as 410,1200.
 // ----1200,3000,400,5,9due to read as string
 //{0:48,1:49......}


const usernames=["harshit","mohit","sumit","abcd","Sumit"]
usernames.sort()
console.log(usernames)

const products=[
    {productid:1,productname:"mobile", price:12000},
    {productid:2,productname:"tv", price:25000},
    {productid:3,productname:"laptop", price:45000},
    {productid:4,productname:"iphone", price:70000},
    {productid:5,productname:"ipad", price:120000},
]
 const lowtohigh= products.slice(0).sort((a,b)=>{
    return a.price - b.price
 },0)
 console.log(lowtohigh)

 const hightolow= products.slice(0).sort((a,b)=>{
    return b.price - a.price
 },0)
 console.log(hightolow)

















