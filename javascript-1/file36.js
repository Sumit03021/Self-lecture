// rest parameter

function myfunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}
myfunc(3,4,5,6,7,8,9)

function addall(...numbers){
    let total=0;
    for(let number of numbers){
        total+=number
    }
    return total
}
const ans= addall(2,3,4,5,6,7,8,8,1,4,6)
console.log(ans)