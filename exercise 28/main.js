


// promise exercise 



function fetchUserdata(){

 return new Promise(( passed, fail)=>{


setTimeout(()=>{

let pass = true;

if (pass){
passed("you passed")
 

}else {
fail(" you fail ")
}

},2000)



 })


}
fetchUserdata()

// .then((data)=>{


//     console.log(" you passed")
// })
// .catch((err)=>{

// console.log(" you faild")

// })


async function displayuserdate() {
    
try{
    const user = await fetchUserdata()
    console.log( user)

} catch (err){
    console.log (err)


}

}
displayuserdate()



