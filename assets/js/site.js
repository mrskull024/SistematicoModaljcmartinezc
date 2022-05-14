var cedula = document.getElementById("cedula");
var nombres = document.getElementById("nombres");
var apellidos = document.getElementById("apellidos");
var numHijos = document.getElementById("hijos");
var profesiones = document.getElementById("profesiones").value;
var options = document.getElementsByTagName("option");
var tablaDatos = document.getElementById("tablaRegistros");

function quitarGuion(){
    let Ced = cedula.value;
    console.log(Ced);
    let valor = Ced.replace(/-/g, "");
    console.log(valor);
    cedula.value=valor;
}

function getSexValue(radioBtn){
    let radio = document.getElementsByName(radioBtn);
    let selectedOp = "";
    for (let i=0, length = radio.length; i<length; i++){
        if(radio[i].checked){
            selectedOp = radio[i].value;
            break;
        }
    }
    return selectedOp;
}

function validarHijos(){
    if(numHijos.value>10){
        if(confirm('¿El número de hijos es correcto?')){
            console.log("ok");
        }
        else{
            numHijos.value="";
            console.log("tiene 10 o mas hijos");
        }
    }
}

function insertarData(){
    if(cedula.value == "" || nombres.value == "" || apellidos.value== "" || numHijos.value== "")
    {
        alert("Favor Complete todos los campos ya que son requeridos")
    }
    else{
        if(numHijos.value > 10){
            if(confirm('¿El número de hijos es correcto?')){
                let tbl = tablaDatos.insertRow(1);
                let data1 = tbl.insertCell(0);
                let data2 = tbl.insertCell(1);
                let data3 = tbl.insertCell(2);
                let data4 = tbl.insertCell(3);
                let data5 = tbl.insertCell(4);
                let data6 = tbl.insertCell(5);
                let dataAct = tbl.insertCell(6);
        
                data1.innerHTML = cedula.value;
                data2.innerHTML = nombres.value
                data3.innerHTML = apellidos.value;
                data4.innerHTML = getSexValue("radioSx");
                data5.innerHTML = numHijos.value;
                let profSelOp = document.getElementById("profesiones").value;
                //options[select.value-1].innerHTML
                data6.innerHTML = profSelOp;
        
                let btnActions = "<button name='EditBtn' onclick='ShowModal(this)'><img src='assets/img/pen.svg'></button>";
                btnActions = btnActions.concat("&nbsp;").concat("<button name='DelBtn' onclick='deleteData(this)'><img src='assets/img/trash.svg'></button>");
                dataAct.innerHTML = btnActions;
        
                let hideModal = document.getElementById("modalBody");
                hideModal.style.display = "none";
            }
            else{
                alert("Accion Rechazada")
            }
        }
        else{
            let tbl = tablaDatos.insertRow(1);
            let data1 = tbl.insertCell(0);
            let data2 = tbl.insertCell(1);
            let data3 = tbl.insertCell(2);
            let data4 = tbl.insertCell(3);
            let data5 = tbl.insertCell(4);
            let data6 = tbl.insertCell(5);
            let dataAct = tbl.insertCell(6);

            data1.innerHTML = cedula.value;
            data2.innerHTML = nombres.value
            data3.innerHTML = apellidos.value;
            data4.innerHTML = getSexValue("radioSx");
            data5.innerHTML = numHijos.value;
            let profSelOp = document.getElementById("profesiones").value;
            //options[select.value-1].innerHTML
            data6.innerHTML = profSelOp;

            let btnActions = "<button name='EditBtn' onclick='ShowModal(this)'><img src='assets/img/pen.svg'></button>";
            btnActions = btnActions.concat("&nbsp;").concat("<button name='DelBtn' onclick='deleteData(this)'><img src='assets/img/trash.svg'></button>");
            dataAct.innerHTML = btnActions;

            let hideModal = document.getElementById("modalBody");
            hideModal.style.display = "none";
        }         
    }
            
}


