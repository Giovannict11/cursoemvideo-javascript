function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = data.getHours()
msg.innerHTML=`agora são ${hora} horas`
if (hora>= 4 && hora<=12){
img.src= "fotomanha.png"
document.body.style.background = '#ecdace'
}else if(hora>12 && hora <18){
img.src="fototarde.png"
document.body.style.background= '#be5b17'
}else{
img.src="fotonoite.png"
document.body.style.background='#3e354d'
}



}