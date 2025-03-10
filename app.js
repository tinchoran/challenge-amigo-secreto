// Array para almacenar los nombres 
let amigos = [];

function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;
    document.getElementById("amigo").value = "";
    if(amigo){
        amigos.push(amigo)
        actualizarLista()
    }else{
        alert("El campo de entrada está vacío!")
    }
}


const lista = document.getElementById("listaAmigos");

function actualizarLista(){
    
    lista.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        lista.insertAdjacentHTML("beforeend", `<li>${amigos[i]}</li>`)
    }
}