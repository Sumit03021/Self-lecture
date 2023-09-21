// every method
// callback function----true/false(boolean)
// every method ------true/false(boolean)
 const numbers=[2,4,3,5,8,10] // ------check every number in array
  const num= numbers.every((number) => number%2===0)
console.log(num)

const products=[
    {productid:1,productname:"mobile", price:12000},
    {productid:2,productname:"tv", price:25000},
    {productid:3,productname:"laptop", price:45000},
    {productid:4,productname:"iphone", price:70000},
    {productid:5,productname:"ipad", price:120000},
]
 const user= products.every((product) => product.price >10000)
console.log(user)

























