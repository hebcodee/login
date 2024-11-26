const input = document.querySelector(".login-input")
const button = document.querySelector(".login-button")
const form = document.querySelector(".login-form")
const personagem = document.getElementById("personagem");
var imgFeminino1 = "feminino1.png";
var imgFeminino2 = "feminino2.png";
var imgMasculino1 = "masculino1.png";
var imgMasculino2 = "masculino2.png";
let imagens = [imgMasculino1, imgFeminino1, imgMasculino2, imgFeminino2];
let indiceAtual = 0

function trocar(){
    personagem.src = imagens[indiceAtual];

    // Incrementa o índice de forma cíclica
    indiceAtual = (indiceAtual + 1) % imagens.length;
}

const validateInput = ({ target }) => {
    if(target.value.length > 2){
        button.removeAttribute("disabled")
    }else{
        button.setAttribute("disabled", "")
    }
}

const handleSubmit = (event) => {
    event.preventDefault()
    
    localStorage.setItem("jogador", input.value)

    if (personagem.src.includes("masculino1.png")) {
        localStorage.setItem("personagem", "masculino1");
    } else if(personagem.src.includes("masculino2.png")){
        localStorage.setItem("personagem", "masculino2")
    } 
    else if(personagem.src.includes("feminino1.png")){
        localStorage.setItem("personagem", "feminino1")
    } 
    else{
        localStorage.setItem("personagem", "feminino2");
    }
    // window.location = "./mapa/mapa.html"
}

input.addEventListener('input', validateInput)
form.addEventListener("submit", handleSubmit)