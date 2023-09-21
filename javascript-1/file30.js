// call, invoke ,run same....
// function expression

// function singhappybirthday() {
//     console.log("happy Birthday to you......")
// }
const singhappybirthday =function(){ // fucntion expression
    console.log("Happy Birthday to you.......")
}
singhappybirthday()

 const sum= function(num1,num2,num3) { // function epressions
    return num1 + num2 + num3
}
const answer= sum(4,5,10)
console.log(answer)

// is even input= 1number, output :true,false
function iseven(num){
    if(num%2===0){
        return true
    }else{
        return false
    }
}
console.log(iseven(4))
// input :string
// output:first character

function firstchar(string){
    return string[0]
}
console.log(firstchar("abc"))

//input array and target is number
//output index of taret in array

function findtarget(array,target){
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