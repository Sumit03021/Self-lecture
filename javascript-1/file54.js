// this and window are same in javascript
// call apply bind
const user1={
    firstname:"harsh",
    age:18,
    about:function(hobby,musician){
 console.log(this.firstname,this.age,hobby,musician)
    }
}
 const user2={
 firstname:"sumit",
 age:23
 }
 // use function without adding about into user2 by calling
user1.about.call(user2,"guiter","sushant")

// apply----- apply and call same
function about(hobby,musician){
    console.log(this.firstname,this.age,hobby,musician)
}

const user3={
    firstname:"sumit",
    age:23
}

const user4={
firstname:"sumit",
age:23
}

const user5={
firstname:"sumit",
age:23
}

const user6={
firstname:"sumit",
age:23
}
about.apply(user3,["guiter","sushnat"])

// bind ----return the function
const func=about.bind(user3,"gutiar","bach")
func()
 // this function is taken fucntion from surrounding in arrow functions
 // this fucntion call if bind and apply properly.










