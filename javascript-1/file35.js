// block scope vs function scope
// let and const are block scope work in block access only
// var is function scopes
{
    let firstname="sumit"
    console.log(firstname)
}
console.log(firstname) // undefined ---let const
{
    const firstname="mohit"
    console.log(firstname)
}
{
    var firstname="sumit"
}
console.log(firstname)

function sumtwo(a,b=0){ // if onlyone value given
    return a+b
}
const ans=sumtwo(4)
console.log(ans)

function sums(a,b){ // if only one value given
    if(typeof b==="undefined"){
        b = 0
    }
    return a+b
}
const sum=sums(4)
console.log(sum)