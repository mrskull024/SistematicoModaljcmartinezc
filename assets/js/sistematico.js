//variable para obtener el modal
var modal = document.getElementById("modalBody");
//variable para obtener el boton que invoca el modal
var btnModal = document.getElementById("btnModalBody");
//variable para obtener el span de cerrar del modal
var span = document.getElementsByClassName("close")[0];

var cedula = document.getElementById("cedula");
var nombres = document.getElementById("nombres");
var apellidos = document.getElementById("apellidos");
var numHijos = document.getElementById("hijos");
var profesiones = document.getElementById("profesiones").value;
var options = document.getElementsByTagName("option");
var tablaDatos = document.getElementById("tablaRegistros");

//funcion para abrir el modal
btnModal.onclick = function(){
    modal.style.display = "block";
    clearDataInForm();
}

//funcion para cerrar el modal
span.onclick = function(){
    modal.style.display = "none";
}

//funcion para cerrar el modal si se da click fuera del area del modal
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}

//funciones para limpiar los datos del modal
function clearDataInForm(){
    cedula.value = '';
    nombres.value = '';
    apellidos.value = '';
    clearSexValue("radioSx");
    numHijos.value = '';
    profesiones.value = '';
}

function clearSexValue(radioBtn){
    let radio = document.getElementsByName(radioBtn);
    for (let i=0, length = radio.length; i<length; i++){
        radio[i].checked = false;
    }
    return;
}