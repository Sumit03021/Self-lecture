// some method ----- atleast one number satisfy result give true and false

const products=[
    {productid:1,productname:"mobile", price:12000},
    {productid:2,productname:"tv", price:25000},
    {productid:3,productname:"laptop", price:45000},
    {productid:4,productname:"iphone", price:70000},
    {productid:5,productname:"ipad", price:120000},
]

const ans= products.some((product) => product.price >100000)
console.log(ans)