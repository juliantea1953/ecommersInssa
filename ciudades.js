import {variablesCiudad} from "./departamentos"

var producto = document.getElementById("producto").value;

var cantidadProducto = document.getElementById("num-product").value;
var cantidadProducto = parseInt(cantidadProducto);

/* var selectCiudad = document.getElementById("municipios").value; */

var municipios = document.getElementById("CMunicipios");

var ciudadDelivery = document.getElementById("ciudadDelivery").value;


var subTotalProducto = precioNeto + iva;

var descuento = document.getElementById("divDescuento");
var total;


function clearParamDescrAgente( ) {
  // Description
  descriptionBoxAgente.style.display = "none";
 
}   


function describeSelectParamAgente( ) {

  descriptionBoxAgente.style.display = "block";
}  




function clearParamDescrDepart( ) {
  // Description
  descriptionBoxMunicipios.style.display = "none";
 
}   


function describeSelectParamDepart( ) {

  descriptionBoxMunicipios.style.display = "block";
}  



function clearParamDescrDelivery( ) {
  // Description
  descriptionBoxDelivery.style.display = "none";
 
}   


function describeSelectParamDelivery( ) {

  descriptionBoxDelivery.style.display = "block";
} 



function clearParamDescrCiudadDelivery( ) {
  // Description
  descriptionBoxCiudadDelivery.style.display = "none";
 
}   


function describeSelectCiudadDelivery( ) {

  descriptionBoxCiudadDelivery.style.display = "block";
} 

function clearParamDescrCiudadSucursal( ) {
  // Description
  descriptionBoxCiudadSucursal.style.display = "none";
 
}   


function describeSelectCiudadSucursal( ) {

  descriptionBoxCiudadSucursal.style.display = "block";
} 







switch (producto) {
  case "bari":
    var precioNeto = 3960000 * cantidadProducto;

    var tasa = 19;
    var iva = (precioNeto * tasa) / 100;

    var porcentajeFuente = 2.5;
    var retefuente = (precioNeto * porcentajeFuente) / 100;

    envioNeto = document.getElementById("subtotalText").innerHTML =
      "COL 3,960,000,00";
    envioNeto2 = document.getElementById("subtotal").innerHTML =
      "COL 3,960,000,00";
    envioNombre = document.getElementById("nombre").innerHTML = "Cafetera Bari";
    envioIva = document.getElementById("iva").innerHTML = "COL 752,400.00";
    envioTotal = document.getElementById("total").innerHTML = "COL 4,712,400.00";


    break;

  case "paris":
    var precioNeto = 8341000 * cantidadProducto;
    var tasa = 19;
    var iva = (precioNeto * tasa) / 100;
    var porcentajeFuente = 2.5;
    var retefuente = (precioNeto * porcentajeFuente) / 100;

    break;

  case "turin":
    var precioNeto = 3205000 * cantidadProducto;

    break;

  case "berna12L":
    var precioNeto = 2779000 * cantidadProducto;

    break;

  case "berna20L":
    var precioNeto = 3016000 * cantidadProducto;

    break;

  default:
    break;
}

function funct(cantidadProducto, precioNeto, iva, flete, reteika, retefuente) {
  var totalPrecioNeto = precioNeto * cantidadProducto;
  totalIva = iva * cantidadProducto;
  totalFlete = flete * cantidadProducto;
  indescuento = retefuente + reteika;
  total = totalPrecioNeto + totalIva + totalFlete - indescuento;



  envioNeto = document.getElementById("subtotal");
  const formateadoNeto = totalPrecioNeto.toLocaleString("en", {
    style: "currency",
    currency: "COL",
  });
  envioNeto.innerHTML = formateadoNeto;

  envioIva = document.getElementById("iva");
  const formateadoIva = totalIva.toLocaleString("en", {
    style: "currency",
    currency: "COL",
  });
  envioIva.innerHTML = formateadoIva;

  var envioFlete = document.getElementById("flete");
  var formateadoFlete = totalFlete.toLocaleString("en", {
    style: "currency",
    currency: "COL",
  });
  envioFlete.innerHTML = formateadoFlete;

  var envioDescuento = document.getElementById("descuento");
  var formateadoDescuento = indescuento.toLocaleString("en", {
    style: "currency",
    currency: "COL",
  });
  envioDescuento.innerHTML = formateadoDescuento;

  var envioTotal = document.getElementById("total");
  const formateadoTotal = total.toLocaleString("en", {
    style: "currency",
    currency: "COL",
  });
  envioTotal.innerHTML = formateadoTotal;
}

function mensaje() {
  Swal.fire({
    title: "El valor total es:",
    text: total,
    icon: "info",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "confirmar",
    cancelButtonText: "cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
    }
  });
}

async function ciudades() {

    var selectPersona = document.getElementById("persona").value;
    var selectCiudad = document.getElementById("municipios").value;
    var ciudadDelivery = document.getElementById("delivery").value;

    console.log("asd",selectCiudad );
    console.log("ica", variablesCiudad);

   
  /*   var producto = document.getElementById("producto").value; */

  /*   switch (producto) {
    case "bari":
      var precioNeto = 3960000 * cantidadProducto;

      break;

    case "paris":
      var precioNeto = 8341000 * cantidadProducto;

      break;

    case "turin":
      var precioNeto = 3205000 * cantidadProducto;

      break;

    case "berna12L":
      var precioNeto = 2779000 * cantidadProducto;

      break;

    case "berna20L":
      var precioNeto = 3016000 * cantidadProducto;

      break;

    default:
      break;
  } */

  switch (selectCiudad) {
    case "Bogotá":
      /*       switch (producto) {
        case "bari":
          var flete = 57800 * cantidadProducto;

          break;

        case "paris":

          var flete = 103000 * cantidadProducto;

          break;

        case "turin":

          var flete = 43000 * cantidadProducto;

          break;

        case "berna12L":

          var flete = 39500 * cantidadProducto;

          break;

        case "berna20L":

          var flete = 52000 * cantidadProducto;

          break;

        default:
          break;
      } */

      if (selectPersona == "Persona jurídica") {
        var porcentaReteika = 2;
        var reteika = (precioNeto * porcentaReteika) / 100;

        var inDescuento = reteika + retefuente;

        funct(cantidadProducto, precioNeto, iva, flete, reteika, retefuente);


        console.log("inDescuento", inDescuento);
        console.log("reteika", reteika);
        console.log("retefuente", retefuente);



        /*         var porcentaReteika = 2;
        var reteika = (precioNeto * porcentaReteika) / 100;

        var subTotalProducto = precioNeto + iva;
        var inDescuento = reteika + retefuente;

        envioDescuento = document.getElementById("descuento");
        const formateadoDescuento = inDescuento.toLocaleString("en", {
          style: "currency",
          currency: "COL",
        });
        envioDescuento.innerHTML = formateadoDescuento;

        envioNeto = document.getElementById("subtotal");
        const formateadoNeto = precioNeto.toLocaleString("en", {
          style: "currency",
          currency: "COL",
        });
        envioNeto.innerHTML = formateadoNeto;

        envioIva = document.getElementById("iva");
        const formateadoIva = iva.toLocaleString("en", {
          style: "currency",
          currency: "COL",
        });
        envioIva.innerHTML = formateadoIva;

        var envioFlete = document.getElementById("flete");
        const formateadoFlete = total.toLocaleString("en", {
          style: "currency",
          currency: "COL",
        });
        envioFlete.innerHTML = formateadoFlete;

        total = subTotalProducto + flete - inDescuento;

        var envioTotal = document.getElementById("total");
        const formateadoTotal = total.toLocaleString("en", {
          style: "currency",
          currency: "COL",
        });
        envioTotal.innerHTML = formateadoTotal;

        var envioWompi = document.getElementById("f1t1");
        envioWompi.value = total; */
      } else {
        
        var porcentaReteika = 0;
        var reteika = (precioNeto * porcentaReteika) / 100;


        /* console.log("cantipro", cantidadProducto, precioNeto); */
        funct(cantidadProducto, precioNeto, iva, flete, reteika, retefuente);
        /* console.log(precioNeto);
        console.log(cantidadProducto);

        totalPrecioNeto = precioNeto * cantidadProducto;
        console.log(totalPrecioNeto);

        var porcentaReteika = 0;
        var reteika = (precioNeto * porcentaReteika) / 100;

        var subTotalProducto = precioNeto + iva;
        var inDescuento = 0;

        envioDescuento = document.getElementById("descuento");
        const formateadoDescuento = inDescuento.toLocaleString("en", {
          style: "currency",
          currency: "COL",
        });
        envioDescuento.innerHTML = formateadoDescuento;

        envioNeto = document.getElementById("subtotal");
        const formateadoNeto = precioNeto.toLocaleString("en", {
          style: "currency",
          currency: "COL",
        });
        envioNeto.innerHTML = formateadoNeto;

        var envioFlete = document.getElementById("flete");
        var formateadoFlete = flete.toLocaleString("en", {
          style: "currency",
          currency: "COL",
        });
        envioFlete.innerHTML = formateadoFlete;

        envioIva = document.getElementById("iva");
        const formateadoIva = iva.toLocaleString("en", {
          style: "currency",
          currency: "COL",
        });
        envioIva.innerHTML = formateadoIva;

        total = subTotalProducto + flete - inDescuento;

        var envioTotal = document.getElementById("total");
        const formateadoTotal = total.toLocaleString("en", {
          style: "currency",
          currency: "COL",
        });
        envioTotal.innerHTML = formateadoTotal;

        var envioWompi = document.getElementById("f1t1");
        envioWompi.value = total; */

      }

      break;

    default:
      var flete = 0;

      var cantidadProducto = document.getElementById("num-product").value;

      if (selectPersona == "Persona jurídica") {

        var porcentaReteika = 0;
        var reteika = (precioNeto * porcentaReteika) / 100;
        var retefuente = 0;

        /* console.log("cantipro", cantidadProducto, precioNeto); */
        funct(cantidadProducto, precioNeto, iva, flete, reteika, retefuente);
/*         var porcentaReteika = 2;
        var reteika = (precioNeto * porcentaReteika) / 100;

        var subTotalProducto = precioNeto + iva;
        var inDescuento = reteika + retefuente;

        envioDescuento = document.getElementById("descuento");
        const formateadoDescuento = inDescuento.toLocaleString("en", {
          style: "currency",
          currency: "COL",
        });
        envioDescuento.innerHTML = formateadoDescuento;

        envioNeto = document.getElementById("subtotal");
        const formateadoNeto = precioNeto.toLocaleString("en", {
          style: "currency",
          currency: "COL",
        });
        envioNeto.innerHTML = formateadoNeto;

        envioIva = document.getElementById("iva");
        const formateadoIva = iva.toLocaleString("en", {
          style: "currency",
          currency: "COL",
        });
        envioIva.innerHTML = formateadoIva;

        var envioFlete = document.getElementById("flete");
        const formateadoFlete = total.toLocaleString("en", {
          style: "currency",
          currency: "COL",
        });
        envioFlete.innerHTML = formateadoFlete;

        total = subTotalProducto + flete - inDescuento;

        var envioTotal = document.getElementById("total");
        const formateadoTotal = total.toLocaleString("en", {
          style: "currency",
          currency: "COL",
        });
        envioTotal.innerHTML = formateadoTotal;

        var envioWompi = document.getElementById("f1t1");
        envioWompi.value = total; */
      } else {
        var porcentaReteika = 0;
        var reteika = (precioNeto * porcentaReteika) / 100;
        var retefuente = 0;
        console.log("ninguno");
        /* console.log("cantipro", cantidadProducto, precioNeto); */
        funct(cantidadProducto, precioNeto, iva, flete, reteika, retefuente);
      }

      break;
  }

  if (selectPersona == "Si") {
    municipios.style.display = "";
    descuento.style.display = "";
  } else {
    municipios.style.display = "none";
    descuento.style.display = "none";
    cDelivery.style.display = ""
  }



  if (ciudadDelivery == "Domicilio") {
    cCiudadDelivery.style.display = "";
    cCiudadSucursal.style.display = "none";
  }
  if (ciudadDelivery == "fisico") {
    cCiudadSucursal.style.display = "";
    cCiudadDelivery.style.display = "none";
  }
  else{
    
    

  }
}

const boton = document.querySelector("#menos");
var cantidadProducto = document.getElementById("num-product").value;
boton.addEventListener("click", function (evento) {
  var identificadorTiempoDeEspera = setTimeout(ciudades, 3);
});

const boton2 = document.querySelector("#mas");
var cantidadProducto = document.getElementById("num-product").value;

boton2.addEventListener("click", function (evento) {
  var identificadorTiempoDeEspera = setTimeout(ciudades, 3);
});

function ShowSelectAgente() {
  descriptionBoxAgente.style.display = "none"

  ciudades();
}

function ShowSelectedMunicipios(){
  ciudades();
  descriptionBoxMunicipios.style.display = "none"
  cDelivery.style.display = ""
}

function ShowSelectedDelivery() {
  descriptionBoxDelivery.style.display = "none"
  ciudades();

  
}

function ShowSelectedCiudadDelivery() {
  descriptionBoxCiudadDelivery.style.display = "none"
  ciudades();

  
}

function ShowSelectedCiudadSucursal() {
  descriptionBoxCiudadSucursal.style.display = "none"
  ciudades();

  
}

function clic() {
  const boton = document.querySelector("#menos");

  boton.addEventListener("click", function (evento) {
    console.log("menos");
    cantidadProducto = document.getElementById("num-product").value;
    cantidadProducto = parseInt(cantidadProducto);
    cantidadProducto = cantidadProducto - 1;
    total = subTotalProducto * cantidadProducto;
    console.log("totalmenos", total);
    console.log("cantmenos", cantidadProducto);
  });

  const boton2 = document.querySelector("#mas");

  boton2.addEventListener("click", function (evento) {
    console.log("mas");
    cantidadProducto = document.getElementById("num-product").value;
    cantidadProducto = parseInt(cantidadProducto);
    cantidadProducto = cantidadProducto + 1;
    total = subTotalProducto * cantidadProducto;
    console.log("totalmas", total);
    console.log("cantmas", cantidadProducto);
  });
}
