// Array para almacenar los nombres 
const amigos = [];

function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;
    document.getElementById("amigo").value = "";
    if(amigo){
        amigos.push(amigo)
    }else{
        alert("El campo de entrada está vacío!")
    }
}


