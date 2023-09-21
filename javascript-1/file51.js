// clone using object.assign
// memory
const obj={
    key1:"value1",
    key2:"value2"
}
const obj2={...obj} // one way of clone
console.log(obj2)
 
// other way  clone   also part in OOPs
const obj3=Object.assign({},obj)
obj.key3 ="value3"
console.log(obj)
console.log(obj3)






























