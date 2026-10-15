






async function fetchUserdata () {

console.log("dukaameysi ")
// const data =await fetch( `./data.json`);
const datadukaan =await fetch( `https://jsonplaceholder.typicode.com/users`);

const response = await datadukaan.json()
console.log("response", response)


// console.log("datadukaan", datadukaan.emmail)


    
}
fetchUserdata ();