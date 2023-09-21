// methods
// function inside objects
const person={
    firstname:"sumit",
    age:8,
    about: function(){
        console.log(`person name is ${this.firstname} and age is ${this.age}`)
    }
}
// this is object and extrsact value from person itself.
person.about()


// who is calling is called as object from this word use

function personinfo(){
    console.log(`person name is ${this.firstname} and age is ${this.age}`)
}
const person1={
    firstname:"harsh",
    age:81,
    about: personinfo
}
const person2={
    firstname:"mohit",
    age:18,
    about: personinfo
}
const person3={
    firstname:"nitish",
    age:28,
    about: personinfo
}
const person4={
    firstname:"sumit",
    age:38,
    about: personinfo
}
person1.about()
person2.about()
person3.about()
person4.about()