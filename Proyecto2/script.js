
//Declaracion de variables para card 1

let name1 = document.getElementById("name1")
let album1 = document.getElementById("album1")
let song1 = document.getElementById("song1")

let nameAnswer1 = document.getElementById("nameAnswer1")
let albumAnswer1 = document.getElementById("albumAnswer1")
let songAnswer1 = document.getElementById("songAnswer1")

//Declaracion de variables para card 2

let name2 = document.getElementById("name2")
let album2 = document.getElementById("album2")
let song2 = document.getElementById("song2")

let nameAnswer2 = document.getElementById("nameAnswer2")
let albumAnswer2 = document.getElementById("albumAnswer2")
let songAnswer2 = document.getElementById("songAnswer2")

//Declaracion de variables para card 3


let name3 = document.getElementById("name3")
let album3 = document.getElementById("album3")
let song3 = document.getElementById("song3")

let nameAnswer3 = document.getElementById("nameAnswer3")
let albumAnswer3 = document.getElementById("albumAnswer3")
let songAnswer3 = document.getElementById("songAnswer3")

//Declaracion del boton clear 

let btnClear = document.getElementById("btnClear")

name1.addEventListener("click", function(){
    let nameUser1 = prompt("Digita el nombre de esta banda")
    nameAnswer1.innerText = nameUser1
})

album1.addEventListener("click", function(){
    let albumUser1 = prompt("Digita el nombre de su primer album")
    albumAnswer1.innerText = albumUser1
})

song1.addEventListener("click", function(){
    let songUser1 = prompt("Digita el nombre de alguna cancion que conozcas")
    songAnswer1.innerText = songUser1
})



name2.addEventListener("click", function(){
    let nameUser2 = prompt("Digita el nombre de esta banda")
    nameAnswer2.innerText = nameUser2
})

album2.addEventListener("click", function(){
    let albumUser2 = prompt("Digita el nombre de su primer album")
    albumAnswer2.innerText = albumUser2
})

song2.addEventListener("click", function(){
    let songUser2 = prompt("Digita el nombre de alguna cancion que conozcas")
    songAnswer2.innerText = songUser2
})

name3.addEventListener("click", function(){
    let nameUser3 = prompt("Digita el nombre de esta banda")
    nameAnswer3.innerText = nameUser3
})

album3.addEventListener("click", function(){
    let albumUser3 = prompt("Digita el nombre de su primer album")
    albumAnswer3.innerText = albumUser3
})

song3.addEventListener("click", function(){
    let songUser3 = prompt("Digita el nombre de alguna cancion que conozcas")
    songAnswer3.innerText = songUser3
})

btnClear.addEventListener("click", function(){

//limpio card 1
    nameAnswer1.innerText=" "
    albumAnswer1.innerText= " "
    songAnswer1.innerText = " "

// Limpio card 2
    nameAnswer2.innerText=" "
    albumAnswer2.innerText= " "
    songAnswer2.innerText = " "
    
// Limpio card 3    
    nameAnswer3.innerText=" "
    albumAnswer3.innerText= " "
    songAnswer3.innerText = " "

})