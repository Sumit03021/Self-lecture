// primitive vs reference datatypes

let num1=6;
let num2=num1;
console.log(num1)
console.log(num2)
num1++;
console.log(num1)
console.log(num2)
// primitive datatype----- stored into stack memory & store separately value

// reference type ---store into heap memory & store in same address.
//arrays
let arr1=["item1","item2"]
let arr2=arr1
console.log(arr1)
console.log(arr2)
arr1.push("item3","item4")
console.log(arr1)
console.log(arr2)
// for array clone
 let arr3=[1,2,3,4,5]
 let arr4=[1,2,3,4,5]
 arr3.push(6,7,8)
 console.log(arr3)
 console.log(arr4)

 // other way clone by using slice method---- 
 let arr5=[1,2,3,4,5,6,7,8]
 let arr6=arr5.slice(0).concat(9,10)
 arr5.push(9,10,11)
 console.log(arr5)
 console.log(arr6)

 //other clone
 let arr8=[1,2,3,4,5,6]
 let arr7=[].concat(arr8)
 console.log(arr7)
 //spread operator ---clone array ------mostly use this type but fast is slice method
 let arr9=[1,2,3,4,5]
 let arr11=[1,2,3,4]
 let arr10=[...arr9,6,7,8]
 console.log(arr10)
 let arr12=[...arr9,...arr11]
 console.log(arr12)