let nombreV = "";
let apellidoV = "";
let edadV = 0;



let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let edad = document.getElementById("edad");

let btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", (e)=> {
    e.preventDefault();

    nombreV = nombre.value;
    apellidoV = apellido.value;
    edadV = edad.value;

    if(nombreV === ""  ){
        alert("ponte vio")
        return;
    }
    if(apellidoV === ""){
        alert("ponte vio")
        return;

    }
    if(edadV === ""){
        return;
    }

    
    console.log("Nombre : "+ nombreV + "y el apellido es: " + apellidoV + "y la edad es de: " +edadV) ; 
    
})