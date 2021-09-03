window.addEventListener('load', function () {

    let HtmlGenerado="";
    HtmlGenerado+= `

    <label for="PlacaVehiculo">Placa Vehiculo</label>
    <input type="text" id="PlacaVehiculo">

    <label for="NombreConductor">Nombre del Conductor</label>
    <input type="text" id="NombreConductor">

    <label for="EspacioAsignado">Espacio Asignado</label>
    <input type="text" id="EspacioAsignado">

    <label for="NumeroTicket">Numero de ticket</label>
    <input type="text" id="NumeroTicket">

    <label for="FechaSalido">Fecha de Salida</label>
    <input type="text" id="FechaSalido">

    <label for="HoraSalida">Hora de Salida</label>
    <input type="text" id="HoraSalida">

    <label for="NumeroHoras">Numero de Horas</label>
    <input type="text" id="NumeroHoras">

    <label for="CostoHora">Costo por Hora</label>
    <input type="text" id="CostoHora">

    <label for="Total">Total</label>
    <input type="text" id="Total">


    <button id="btnnuevo"> Nuevo</button>
    <button id="btngrabar">Grabar</button>
    <button id="btnmodificar">Modificar</button>
    <button id="btnconsultar">Consultar</button>
    <button id="btneliminar"> Eliminar</button>
    <div id="divcontenido"></div>`;

    htmlCuerpo.innerHTML = HtmlGenerado;


    btnnuevo.addEventListener('click', function (){

        
            PlacaVehiculo.value ='',
            NombreConductor.value='',
            EspacioAsignado.value='',
            NumeroTicket.value='',
            FechaSalido.value='',
            HoraSalida.value='',
            NumeroHoras.value='',
            CostoHora.value='',
            Total.value=''

    });

    btngrabar.addEventListener('click', function () {
        

        let URL = `http://localhost:3000/MicroservicioVihiculos2/Vehiculo`;
        let data = {

            PlacaVehiculo:PlacaVehiculo.value,
            NombreConductor: NombreConductor.value,
            EspacioAsignado: EspacioAsignado.value,
            NumeroTicket:NumeroTicket.value,
            FechaSalido:FechaSalido.value,
            HoraSalida: HoraSalida.value,
            NumeroHoras: NumeroHoras.value,
            CostoHora:CostoHora.value,
            Total:Total.value,
        }

        fetch(URL, {

            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type':'application/json',
            }

        }).then(res=> res.json())
        .then(res2=> console.log(res2))
        .catch(error=> console.error('error', error))
        
    })

    btnmodificar.addEventListener('click', function(){
        
        let URL = `http://localhost:3000/MicroservicioVihiculos2/Vehiculo/${txtid.value}`;
        let data = {

            name: txtname.value,
            username: txtusername.value,
            password: txtpassword.value
        }

        fetch(URL, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }

        }).then(res=> res.json())   
        .catch(error=> console.error('error', error));

    })

    btnconsultar.addEventListener('click', function () {
        fetch(`http://localhost:3000/MicroservicioVihiculos2/Vehiculo/`).then(resultado=>{
        return resultado.json()
    }).then(consulta=>{
        console.log(consulta);
        let tabla= "<table border=1>"
        for(const indiceElemento in consulta)
        {
            tabla+="<tr>";
            const actual =  consulta[indiceElemento];
            tabla+=`<td>${actual.name}</td>`
            tabla+=`<td>${actual.password}</td>`
            tabla+=`<td> <button value='${actual._id}'>${actual.username}</button> </td>`
            tabla+="</tr>"
        }
        tabla+="</table>"
        divcontenido.innerHTML= tabla;

    })

    })

    btneliminar.addEventListener('click', function () {

        let URL = `http://localhost:3000/MicroservicioVihiculos2/Vehiculo/${txtid.value}`;

        fetch(URL, {

            method:'DELETE'

        }).then(res=> res.json())
        .then(res2=> console.log(res2))
        .catch(error=> console.error('error', error));

    })
    
})
