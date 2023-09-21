// for loop
let total=0
for(let i=0; i<=20;i++){
  total+=i
}
console.log(total)

for(let i=0; i<=10;i++){
    if(i===4){
        break// discontinue loop
    }
    console.log(i)
}
for(let i=0; i<=10;i++){
    if(i===4){
     continue // miss that number from loop
    }
    console.log(i)
}