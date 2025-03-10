// Agregar los nombres de amigos en un arreglo
let amigos = [];

function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;
    document.getElementById("amigo").value = "";
    if(amigo){
        amigos.push(amigo);
        actualizarLista();
    }else{
        alert("El campo de entrada está vacío!")
    }
}

// Actualizar lista de amigos
const lista = document.getElementById("listaAmigos");

function actualizarLista(){

    lista.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        lista.insertAdjacentHTML("beforeend", `<li>${amigos[i]}</li>`);
    }
};

// Sortear amigos
const resultado = document.getElementById("resultado")

function sortearAmigo(){
    const cantAmigos = amigos.length;
    if(cantAmigos > 0 ){

        const indice =  Math.floor(Math.random() * cantAmigos) 

        const nombreResultado = amigos[indice];

        resultado.insertAdjacentHTML("afterbegin", `<li>${nombreResultado}</li>`)

    } else {
        alert("No hay suficientes amigos!");
    }
}
