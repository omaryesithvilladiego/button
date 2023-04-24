const esfera = document.querySelector('.esfera')

let fondo = document.querySelector('.background')

let cloud = document.querySelector('.nube')

let stars = document.querySelector('.estrellas')

let fondoestrella = document.querySelector(".fondoEsfera")

let luna = document.querySelector(".luna") 

esfera.addEventListener('click', () => {
    fondo.classList.toggle("black")
    stars.classList.toggle("newStar")
    cloud.classList.toggle("abajo")
    fondoestrella.classList.toggle("right") 
    luna.classList.toggle('center')
    
})