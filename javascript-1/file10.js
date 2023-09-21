//undefined
//null
let firstname;
console.log(typeof firstname) //undefined due to not assign
firstname="sumit"
console.log(typeof firstname)
let myvar=null
console.log(typeof myvar) //called object instead null due to bugs.

//BigInt
let mynum=123
console.log(mynum)
console.log(Number.MAX_SAFE_INTEGER)
let mynumb=BigInt(123345)
let mystr=1223n
let big=mynumb + mystr
console.log(big)