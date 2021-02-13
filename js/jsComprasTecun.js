$(document).ready(function () {
      
     var aux = localStorage.getItem("producto"); 
   if(aux===null){
       var pre=[];
       localStorage.setItem("producto",JSON.stringify(pre));
   }
   var guardado=JSON.parse(localStorage.getItem("producto")); 
   var total=0;
   
   for(var x=0;x<guardado.length;x++){
      
      
       var carrito=guardado[x];
       var precio=carrito.precio.toString().split('Q.');
       var precio1= parseFloat(precio[1]);
       total+=precio1;
      
       var pantilla=`<tr>
               <td> ${carrito.nombre + "-------------"} </td> 
               <td> ${carrito.precio}</td> 
           </tr>`;
        $("#tabla").append(pantilla);
       
      
   }
  
     
    $("#totc").text("Total"+"----------------------"+"Q"+parseFloat(total)+".00");
    
    
     $("#cancelar").click(function(){
         
         cancelar();
     });
     
     var aux = localStorage.getItem("historial");
    if (aux === null) {
        var xd = [];
        localStorage.setItem("historial", JSON.stringify(xd));
    }
    var guard = JSON.parse(localStorage.getItem("historial"));
    
      $("#descontar").click(function(){
      var prod = [];
        for (var i = 0; i < guardado.length; i++) {
            var datos = guardado[i].toString().split(',');
            var el = {"desc": datos[0], "precio": datos[1]};
            prod.push(el);
        }
        
                if (prod.length !== 0) {
            var c = confirm("Desea compra el equipo?");
            if (c) {
                var f = new Date();
                var fecha = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();

                var pago = {
                     "productos": prod, "total": " Q"+ total  , "fecha": fecha
                };

                guard.push(pago);
                localStorage.setItem("historial", JSON.stringify(guard));
                console.log(guard);
                cancelar();
                alert("Compra satisfactoria!");
            }
        } else {
            alert("NO HA SELECCIONADO NINGUN PRODUCTO");
        }
     });
     
     
  var cancelar=  function (){
      $("tr").remove();
      var tb=`<tr>
                   
                    <th>Descripcion</th>
                    <th>Precio</th>
                   
                </tr>`;
        $("#tabla").append(tb);
        var dat=[];
        guardado=dat;
        localStorage.setItem("producto", JSON.stringify(dat));
         total = 0;
         $("#totc").text("Total:"+" "+"Q"+parseFloat(total)+".00");
    };
    
});