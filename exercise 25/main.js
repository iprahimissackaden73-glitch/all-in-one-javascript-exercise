





// spread operator




let id=[1,2,3,]
let id1 =[ ...id,4,5,6]
console.log(id1)





// rest operater

function multiply(...multiply){

return multiply.reduce((mulpile, number) => mulpile* number,1); 

}




console.log(multiply(2,3,4,5,6))