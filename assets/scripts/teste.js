const galeria = document.getElementById("imagens-galeria");


console.log("antes de adicioanr imangesn")
console.log(galeria);
console.log("adicionando iamgens")

const imagem = 
document.createElement("img")

imagem.src = ".\assets\img\galeria\2.png"

imagem.alt = "foto fot foto"

imagem.className = "img"
console.log(imagem)

galeria.appendChild(imagem)