// fill method
// value,start,end
const arr=new Array(10).fill(0)
console.log(arr)
 const myarr=[1,2,3,4,8,5,6,7]
 myarr.fill(0,2,5) // fill value 0 from 2-5 index of array
    console.log(myarr)

//splice method
//start,delete, insert
const myarray=[1,2,3,3,4,5,6,6,7,8,9]
//delete
 const delarr= myarray.splice(1,1) // from where delet and how many
console.log(delarr)
 // insert
 myarray.splice(1,0,"inserted item")
console.log(myarray)

myarray.splice(1,2,"item1","item2","item3")
console.log(myarray)










