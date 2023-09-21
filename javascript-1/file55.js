// object oriented programmes
// function (create objects and add key value and return hoga)
// use for multiple user as functions
 const usermethods={
    about: function(){
        return`${this.firtname} is ${this.age} years old`
    },
    is18:function(){
        return this.age>=18
    }
 }
function createuser(firtname,lastname,email,age,address){
    const user= Object.create(usermethods) // __proto__ of usermthods in createuser if anything missing
    user.firtname=firtname
    user.lastname=lastname
    user.email=email
    user.age=age
    user.address=address
    user.about=usermethods.about
    user.is18=usermethods.is18
    return user
}

const user1= createuser("harsh","sharma","harsh@amil.com",19,"house-no:12334")
console.log(user1)
console.log(user1.about())
console.log(user1.is18())

























