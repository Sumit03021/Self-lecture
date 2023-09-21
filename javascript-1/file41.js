// map method formed new array in new stored
const numbers=[1,2,3,4,5,6,7]

const square= function(number){
    return number*number // for map mmethod  return the function must
}
const sqnumber=numbers.map(square)
console.log(sqnumber)
 const squ= numbers.map((number,index)=>{
   return `index: ${index}, ${number*number}`
 })
 console.log(squ)




























