let img = document.getElementById('target')
let over = document.getElementById('trigger')

function mouseOnPic(){
    img.src = 'img/picB.jpg'
}
function mouseOffPic(){
    img.src = 'img/picA.jpg'
}

over.onmouseenter = mouseOnPic
over.onmouseleave = mouseOffPic