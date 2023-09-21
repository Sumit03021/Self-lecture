// arrays means reference type ,ordered collection of items
let fruits=["apple","mango","lemon","grapes"]
let array=[1,2,3,4,5,"apple","koi",null,undefined]// store any type datatypes
console.log(fruits)
console.log(fruits[2])
console.log(array)


//cahnge array index value also ----- array is object in javascripts
fruits[1]="banana"
console.log(fruits)
console.log(typeof fruits)
console.log(Array.isArray(fruits)) // check is it object or array

// add last /array push -----fruits,push("mango") add into array but fruits.push= "mango" push into array not add completely
fruits.push("mango")
console.log(fruits)

// remove last /array pop
fruits.pop();
console.log(fruits)

//array unshift / starting add
fruits.unshift("lichi")
console.log(fruits)

// array shift / starting remove
fruits.shift()
console.log(fruits)


// push and pop fast in performance than shift anf unshift due starting first shift files.