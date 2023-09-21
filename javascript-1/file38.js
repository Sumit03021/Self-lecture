// callback function
function myfunc2(name){
     console.log("inside the myfunc2")
     console.log(`my name is ${name}`)
}
function myfunc(callback){
    console.log("inside the myfunc")
    callback("sumit")
}
myfunc(myfunc2)