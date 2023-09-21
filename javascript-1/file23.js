// using const for create array
const fruit1=["apple","mango"]
fruit1.push("banana")
//fruit1=["grapes","pineapple"]   // not change in const case ; use mostly  const cases 99% for not change.
console.log(fruit1)// const push due to heap memory 

// while loop in array
let i=0;
while(i<fruit1.length){
    console.log(fruit1[i])
    i++
}

// for of loop in array ---- array name in plural and with singular name of loop(mostly use )
const fruits=["apple","banana","grapes","item1","item2","item3"]
for(let fruit of fruits){
    console.log(fruit)
}

// for in loop in array ----  array rarely use.
for(let index in fruits){
    console.log(index)
    console.log(fruits[index])
}