// objects destructuring
const band={
    bandName:"sumit",
    famousSong:"starway",
    year:1968,
    anothersong:"kashmir"
}
let bandname=band.bandName
bandname="queen"
const famoussong=band.famousSong
console.log(bandname,famoussong)

const {bandName, famousSong,...rest}=band; // by default formed that type variable that stored in objects
console.log(bandName,famousSong)
console.log(rest)