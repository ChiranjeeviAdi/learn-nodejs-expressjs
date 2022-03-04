//Module = encapusaling of code
const john = "john";
const peter = "peter";
const sayHi= (name)=>{
    console.log(`hello ${name}`)
}

sayHi('A')
sayHi('B')
sayHi(john)
console.log(module)

module.exports = {
    john,
    peter
}