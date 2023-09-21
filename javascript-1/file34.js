// lexical scope
// const myvar="value1" same work as global value
function myapp(){
    const myvar="value1"
    function myfunc(){
        const myvar="value59" // take local >>>> then glovbal first otherwise global value
        console.log("inside myfunc",myvar)
    }
    console.log(myvar)
    myfunc()
}
myapp()