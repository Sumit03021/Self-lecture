//find method ------ find of string length  run till first occurences only.
const arr=["harsh","cat","dog","lion"]
const ans=arr.find((string) => string.length===3)
 console.log(ans)

 const usercarts=[
    {productid:1,productname:"mobile", price:12000},
    {productid:2,productname:"tv", price:25000},
    {productid:3,productname:"laptop", price:45000},
    {productid:4,productname:"iphone", price:70000},
    {productid:5,productname:"ipad", price:120000},
]
const answer= usercarts.find((usercart) => {
    return usercart.productid===3
})
console.log(answer)
























