// Class code examples

const myName = "Desarrolladores masquerados"

function cappuccino(){
    const myName = "Marco"
    // this is a block
    return myName
}

// console.log( cappuccino().toUpperCase() )

function printGreeting( goahgiad ){ // this is equivalent of a let declaration 
    console.log(goahgiad)
}

const studentsnames = ["Santiago", "Luisa", "Alejandro", "Stan"]

for( const student of studentsnames){  // This is equivakent to for(let i ==; ....)
   console.log("returnfrom printGreeting() : " , printGreeting(student))
}


function myAwesomeFunction(cappuccino, anotherName){ // let cappuccino is an implicit definition
 console.log(cappuccino)
 console.log(anotherName) // antotherName is not defined
}

myAwesomeFunction("ciccio", "", "carlos")


function sideEffects(anyVariable){
    anyVariable.pop()
    anyVariable.push("You have been destroied!")
    return anyVariable
}

const myParameter = ["What a nice day"]

console.log( myParameter === sideEffects(myParameter) )
console.log( myParameter )

// You can delcare with an "expression"
const declareAFunction = function(){ console.log("Funciton decalred with an epression")}

// You can delcare with an "arrow"
const declareAFunction = () => { console.log("Funciton decalred with an epression")}