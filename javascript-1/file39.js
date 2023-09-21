// fucntion returning function
function func(){
    function hello(){
        console.log("hello world")
    }
    return hello
}
const ans = func()
console.log(ans())