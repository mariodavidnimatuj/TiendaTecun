$(document).ready(function () {

    var aux1 = localStorage.getItem("historial");
    if (aux1 === null) {
        var xd = [];
        localStorage.setItem("historial", JSON.stringify(xd));
    }
    var guard = JSON.parse(localStorage.getItem("historial"));
    console.log(guard);

    for (var a = 0; a < guard.length; a++) {
        var datos = guard[a];
        var prod = datos.productos;
        console.log(prod);

        var plantilla = `<tr>
                   
                    <td>${datos.total}</td>
                    <td>${datos.fecha}</td>
                </tr>`;
        $("#tablah").append(plantilla);
        
      
    }
});

