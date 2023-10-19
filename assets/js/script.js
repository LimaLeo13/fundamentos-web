//por tag: GetElementByTagName()
//por Id: GetElemntById(
//por Nome: GetElementsByName() 
//por Classe: GetElementsByClassName()
//por Seletor: querySelector()


let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOK = false
let emailOK = false
let assintoOK = false
let mapa = document.querySelector("#mapa")

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3){
      txtNome.innerHTML = "Nome Inválido"
      txtNome.style.color = "red"
    } else {
      txtNome.innerHTML = "Nome Válido"
      txtNome.style.color = "green"
      nomeOK = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 ) {
        txtEmail.innerHTML = "E-mail Inválido"
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOK = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >= 500){
        txtAssunto.innerHTML = "Digite no máximo 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    }else{
        txtAssunto.style.display = "none"
        assuntoOK = true
    }
}

function enviar(){
    if (nomeOK == true && emailOK == true && assuntoOK == true){
        alert ("Formulario enviado!")
    }else{
        alert ("Preencha corretamente!")
    }
}

function mapaZoom(){
   mapa.style.width = '700px'
   mapa.style.height = '500px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}
