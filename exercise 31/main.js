


 


async function listStudent() 
{  

try{
    console.log(" student list")
    const response = await fetch(`https://jsonplaceholder.typicode.com/users `)

    if (!response.ok) {

throw new  Error(`http error! status `)

    }

    const data = await response.json()

  console.log(data)

}catch(error) {

    console.log("error is cored")
    
}

    
}
listStudent()




