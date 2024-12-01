const wallet = document.querySelector(".main_waller-cash")

const main_tap = document.querySelector(".main_tap")

const level_progress = document.querySelector(".level_progress")

const lvl_counter = document.querySelector("#lvl_counter")

const wallet2 = document.querySelector(".main_waller-cash2")

const energy_count = document.querySelector("#energy_count")

const username = document.querySelector("#username")

const create_acc = document.querySelector("#create_acc")

const header_name = document.querySelector(".header_name")
const game_auth = document.querySelector(".game_auth")


const repositoryLink = "https://github.com/Igkka/HamsterCombat.git"

const data = {
name:"",
profit_per_hour:1,
money:0,
profit_per_tap:1,
level:0,
level_progress:0,
energy:1000,

}


function minerPerHour(){
let money_interval = setInterval(function(){
data.money += data.profit_per_hour
wallet.innerHTML = data.money
wallet2.innerHTML = data.money
},1000)


}



function handleTap(e){
data.money += data.profit_per_tap + data.level
wallet.innerHTML = data.money

data.energy -= 1 
energy_count.innerHTML = data.energy




main_tap.style.animation = "taping 0.3s 1"


let img = document.createElement("img")
img.src = "../img/hamster_coin.png"
img.classList.add("tap-money")

let x = e.clientX
let y = e.clientY

main_tap.appendChild(img)

let timeOut = setTimeout(function(){
    img.remove()
},1000)

let time = setTimeout(function(){
    main_tap.style.animation = "none"
    clearInterval(time)
},300)


if(data.level_progress <= 100){
data.level_progress += 1
level_progress.style.width = data.level_progress + "%"


}else{
    data.level_progress = 0
    level_progress.style.width = data.level_progress + "%"
    data.level += 1
    lvl_counter.innerHTML = data.level
    

}



}




function energyRecovery(){
    let interval = setInterval(function(){
        if(data.energy < 1000){
            data.energy += 1
            energy_count.innerHTML = data.energy
            
        }else{
            return
        }
    },2000)
}


function createAccount(e){
    data.name = username.value
    let current_username = document.querySelector("#current_username")
    current_username.innerText = data.name
    game_auth.style.display ="none"
    e.preventDefault()
}


//вызовы ф

minerPerHour()

energyRecovery()
create_acc.addEventListener("click",createAccount)

main_tap.addEventListener("click",handleTap)