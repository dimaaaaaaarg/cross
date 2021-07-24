let container = document.querySelector(".container")
let cross = "cross"
let zero = "zero"
let turn = 0
let char = "cross"
let btnRestart = document.querySelector(".btn1")
let list = ["", "", "", "", "", "", "", "", ""]
let conbs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3 ,6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4 ,8],
    [2, 4, 6]
]

container.addEventListener("click", (event) => {
    let element = event.target
    let node = element.parentNode
    let index = ([...node.children].indexOf(element))
    turn % 2 == false ? char=cross : char=zero
    list[index]=char
    for (let e = 0; e<conbs.length; e++){
        if (list[conbs[e][0]] == char && list[conbs[e][1]]== char && list[conbs[e][2]] == char){
            document.querySelector("span").innerHTML=char
            document.querySelector(".winner").style.opacity="1"
            document.querySelector(".winner").style.color="green"
        }
    }
    if (element.innerText==""){
        element.classList.add(char)
        turn++
    }
})

btnRestart.addEventListener("click", function(){
    let items = document.querySelectorAll(".item")
    items.forEach(element => {
        element.classList.remove("cross")
        element.classList.remove("zero")
    })
    turn=0
    list=["", "", "", "", "", "", "", "", ""]
    document.querySelector(".winner").style.opacity="0"
})



console.log(document.querySelectorAll(".item"))