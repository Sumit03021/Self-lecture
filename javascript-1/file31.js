// arrow functions-----mostly used in reacts.js
 const song= () => { // remove function word and use ()=>{}
    console.log("Happy Birthday to you ....")
 }
 song()
 const sum= (num1,num2,num3) =>{ 
    return num1 + num2 + num3
}
const answer= sum(4,5,10)
console.log(answer)

// is even input= 1number, output :true,false
const iseven =   num => { // if use single input then we can remove ()
    if(num%2===0){
        return true
    }else{
        return false
    }
}
console.log(iseven(4))
// input :string
// output:first character

const firstchar= string  =>  {
    return string[0]
}
console.log(firstchar("abc"))

//input array and target is number
//output index of taret in array

const findtarget=(array,target) => {
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return i
        }
    }
    return -1
}
const arr=[1,2,3,45,64,34]
const ans=findtarget(arr,64)
console.log(ans)