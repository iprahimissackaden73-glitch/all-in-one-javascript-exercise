

const list = document.querySelector(`.list`)




function kudar(){
const kudar = document.createElement(`li`)
kudar.textContent ="fathi"

list.appendChild(kudar)


}

function remove(){
if(list.lastChild){ 

list.removeChild(list.lastChild)
}
else{
    alert("finished")
}

}  