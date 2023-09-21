// optional chaining

const user= {
    firstname:"harshit",
    address:{ housenumber:"112344"}
}
//? use if value not exist then value give as undefined.
console.log(user?.firstname)
console.log(user?.address?.housenumber)