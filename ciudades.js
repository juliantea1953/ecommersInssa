


var producto = document.getElementById("producto").value;
console.log(producto);

var cantidadProducto = document.getElementById("num-product").value;
var cantidadProducto = parseInt(cantidadProducto);


var municipios = document.getElementById("CMunicipios");

var ciudadDelivery = document.getElementById("ciudadDelivery").value;
var ciudadAgente = document.getElementById("municipios").value;

var subTotalProducto = precioNeto + iva;

var descuento = document.getElementById("divDescuento");
var descuentoIca = document.getElementById("divDescuentoIca");
var descuentoFuente = document.getElementById("divDescuentoFuente");
var total;


new QRious({
  element: document.getElementById("codigo"),
  value: total, // La URL o el texto
  size: 250,
  backgroundAlpha: 100, // 0 para fondo transparente
  foreground: "black", // Color del QR
  level: "H", // Puede ser L,M,Q y H (L es el de menor nivel, H el mayor)
  mime: "images/logoInssa.png"
}); 

async function wompiapi() {
  totalwompi = document.getElementById("totalWompi").value
  sku = document.getElementById("nombre").innerHTML
  tot = parseInt(totalwompi) 
  var settings = await {
    "url": "https://sandbox.wompi.co/v1/payment_links",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Authorization": "Bearer prv_test_WDfNEEXbSwMctMtIvaoqCNUOYekfBE7p",
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({
      "name": sku,
      "description": "Compra de " + sku + " por medio de INSSA Prime",
      "single_use": true,
      "collect_shipping": true,
      "collect_customer_legal_id": false,
      "amount_in_cents": tot,
      "currency": "COP",
      "sku": sku,
      "redirect_url": "https://api.whatsapp.com/send?phone=573102242724&text=Hola%2C%20hice%20una%20compra%20por%20INSSA%20Prime%2C%20quisiera%20confirmar%20mis%20datos."
    }),
  };
  
  $.ajax(settings).done(function (response) {
    console.log("response",response.data.id);
var id = response.data.id;
var raiz = "https://checkout.wompi.co/l/"
var url = raiz + id
/* console.log("link", url); */

var envioUrl = document.getElementById("link").value = url
var envioHrefQr = document.getElementById("aQr").href = url
var envioHrefPago = document.getElementById("linkPago").href = url
var envioHrefPago = document.getElementById("linkPago").innerHTML = url



/* console.log("envioUrlValue", envioUrl, envioHrefQr); */


return new Promise((resolve, reject) => {
  
  setTimeout(()=>{
/*     console.log("Cargando datos...."); */
    resolve (response);

    new QRious({
      element: document.getElementById("codigo"),
      value: url, // La URL o el texto
      size: 250,
      backgroundAlpha: 0, // 0 para fondo transparente
      foreground: "black", // Color del QR
      level: "H", // Puede ser L,M,Q y H (L es el de menor nivel, H el mayor)
    }); 
  }, 000)
  
});

/* location.href = raiz + id; */




  });


}

async function generarQr() {
var url = document.getElementById("linkPago").innerHTML
window.open(url, '_blank');

/* location.href = url; */

}

function clearParamDescrAgente() {
  // Description
  descriptionBoxAgente.style.display = "none";
}

function describeSelectParamAgente() {
  descriptionBoxAgente.style.display = "block";
}

function clearParamDescrDepart() {
  // Description
  descriptionBoxMunicipios.style.display = "none";
}

function describeSelectParamDepart() {
  descriptionBoxMunicipios.style.display = "block";
}

function clearParamDescrDelivery() {
  // Description
  descriptionBoxDelivery.style.display = "none";
}

function describeSelectParamDelivery() {
  descriptionBoxDelivery.style.display = "block";
}

function clearParamDescrCiudadDelivery() {
  // Description
  descriptionBoxCiudadDelivery.style.display = "none";
}

function describeSelectCiudadDelivery() {
  descriptionBoxCiudadDelivery.style.display = "block";
}

function clearParamDescrCiudadSucursal() {
  // Description
  descriptionBoxCiudadSucursal.style.display = "none";
}

function describeSelectCiudadSucursal() {
  descriptionBoxCiudadSucursal.style.display = "block";
}



function selectRadioB() {
  if (document.getElementById("cc").checked) {
    agente.style.display = "none"
    CMunicipios.style.display = "none";
    reteFuente = 0;
    document.getElementById("CheckAgente").checked = false;

  /*   var selectPersona = document.getElementById("persona") */
/*   document.getElementById("persona").selectedIndex = "0"; */
  document.getElementById("municipios").selectedIndex = "0";
/*   document.getElementById("select2-persona-container").innerHTML = "Escoja una opción" */
  document.getElementById("select2-municipios-container").innerHTML = "Escoja una opción"
/*   $(".js-select3").each(function () {
    $(this).select2({
      minimumResultsForSearch: 20,
      dropdownParent: $(this).next('.dropDownSelect2')

    });
  }) */

    cambios()
  


  } else {
    if (document.getElementById("nit").checked) {
      agente.style.display = ""
    }

  }
}



switch (producto) {
  case "bari":
    var precioNeto = 3960000 * cantidadProducto;

    var tasa = 19;
    var iva = (precioNeto * tasa) / 100;

    var porcentajeFuente = 2.5;
    var reteFuente = (precioNeto * porcentajeFuente) / 100;

    envioNeto = document.getElementById("subtotalText").innerHTML =
      "COP 3,960,000.00";
    envioNeto2 = document.getElementById("subtotal").innerHTML =
      "COP 3,960,000.00";
    envioNombre = document.getElementById("nombre").innerHTML = "Cafetera Bari";
    envioIva = document.getElementById("iva").innerHTML = "COP 752,400.00";
    envioTotal = document.getElementById("total").innerHTML =
      "COP 4,712,400.00";

    totalwompiP = document.getElementById("totalWompi").value = 4712400 * 100;
    wompiapi();

    break;

  case "paris":
    var precioNeto = 6216000 * cantidadProducto;
    var tasa = 19;
    var iva = (precioNeto * tasa) / 100;

    var porcentajeFuente = 2.5;
    var reteFuente = (precioNeto * porcentajeFuente) / 100;

    envioNeto = document.getElementById("subtotalText").innerHTML =
      "COP 6,216,000.00";
    envioNeto2 = document.getElementById("subtotal").innerHTML =
      "COP 6,216,000.00";
    envioNombre = document.getElementById("nombre").innerHTML = "Cafetera Paris";
    envioIva = document.getElementById("iva").innerHTML = "COP 752,400.00";
    envioTotal = document.getElementById("total").innerHTML =
      "COP 7,397,040.00";

      totalwompiP = document.getElementById("totalWompi").value = 7397040 * 100;

      wompiapi();

    break;

  case "turin":
    var precioNeto = 3205000 * cantidadProducto;
    var tasa = 19;
    var iva = (precioNeto * tasa) / 100;

    var porcentajeFuente = 2.5;
    var reteFuente = (precioNeto * porcentajeFuente) / 100;

    envioNeto = document.getElementById("subtotalText").innerHTML =
      "COP 3,205,000.00";
    envioNeto2 = document.getElementById("subtotal").innerHTML =
      "COP 3,205,000.00";
    envioNombre = document.getElementById("nombre").innerHTML = "Cafetera Turin";
    envioIva = document.getElementById("iva").innerHTML = "COP 608,950.00";
    envioTotal = document.getElementById("total").innerHTML =
      "COP 3,813,950.00";

      totalwompiP = document.getElementById("totalWompi").value = 3813950 * 100;

      wompiapi();
    break;

  case "berna12L":
    var precioNeto = 2779000 * cantidadProducto;
    var tasa = 19;
    var iva = (precioNeto * tasa) / 100;

    var porcentajeFuente = 2.5;
    var reteFuente = (precioNeto * porcentajeFuente) / 100;

    envioNeto = document.getElementById("subtotalText").innerHTML =
      "COP 2,779,000.00";
    envioNeto2 = document.getElementById("subtotal").innerHTML =
      "COP 2,779,000.00";
    envioNombre = document.getElementById("nombre").innerHTML = "Dispensadora de jugos Berna 12 litros";
    envioIva = document.getElementById("iva").innerHTML = "COP 528,010.00";
    envioTotal = document.getElementById("total").innerHTML =
      "COP 3,307,010.00";

      totalwompiP = document.getElementById("totalWompi").value = 3307010 * 100;

      wompiapi();
    break;

  case "berna20L":
    var precioNeto = 3016000 * cantidadProducto;
    var tasa = 19;
    var iva = (precioNeto * tasa) / 100;

    var porcentajeFuente = 2.5;
    var reteFuente = (precioNeto * porcentajeFuente) / 100;

    envioNeto = document.getElementById("subtotalText").innerHTML =
      "COP 3,016,000.00";
    envioNeto2 = document.getElementById("subtotal").innerHTML =
      "COP 3,016,000.00";
    envioNombre = document.getElementById("nombre").innerHTML = "Dispensadora de jugos Berna 20 litros";
    envioIva = document.getElementById("iva").innerHTML = "COP 573,40.00";
    envioTotal = document.getElementById("total").innerHTML =
      "COP 3,589,040.00";
      
    totalwompiP = document.getElementById("totalWompi").value = 3589040 * 100;
    

    wompiapi();
    break;


  default:
    break;
}

async function funct(cantidadProducto, precioNeto, iva, flete, reteika, reteFuente) {

  console.log("ica func", reteika);

  var totalPrecioNeto = precioNeto * cantidadProducto;
  totalIva = iva * cantidadProducto;
  totalFlete = flete * cantidadProducto;
  reteika = reteika * cantidadProducto;
  reteFuente = reteFuente * cantidadProducto;
  indescuento = (reteFuente + Number(reteika))* cantidadProducto;
  total = totalPrecioNeto + totalIva + totalFlete - indescuento;
  tatalWompi = total * 100;

    envioTotalWompii = document.getElementById("totalWompi").value = tatalWompi;
    envioTotalWompiii = document.getElementById("totalWompi").innerHTML = tatalWompi;

  envioNeto = document.getElementById("subtotal");
  const formateadoNeto = totalPrecioNeto.toLocaleString("en", {
    style: "currency",
    currency: "COP",
  });
  envioNeto.innerHTML = formateadoNeto;

  envioIva = document.getElementById("iva");
  const formateadoIva = totalIva.toLocaleString("en", {
    style: "currency",
    currency: "COP",
  });
  envioIva.innerHTML = formateadoIva;

  var envioFlete = document.getElementById("flete");
  var formateadoFlete = totalFlete.toLocaleString("en", {
    style: "currency",
    currency: "COP",
  });
  envioFlete.innerHTML = formateadoFlete;

  var envioica = document.getElementById("reteica");
  var formateadoica = Number(reteika).toLocaleString("en", {
    style: "currency",
    currency: "COP",
  });
  envioica.innerHTML = formateadoica;

  var envioFuente = document.getElementById("retefuente");
  var formateadoFuente = (reteFuente).toLocaleString("en", {
    style: "currency",
    currency: "COP",
  });
  envioFuente.innerHTML = formateadoFuente;

  var envioDescuento = document.getElementById("descuento");
  var formateadoDescuento = indescuento.toLocaleString("en", {
    style: "currency",
    currency: "COP",
  });
  envioDescuento.innerHTML = formateadoDescuento;

  var envioTotal = document.getElementById("total");
  const formateadoTotal = total.toLocaleString("en", {
    style: "currency",
    currency: "COP",
  });
  envioTotal.innerHTML = formateadoTotal;

  
  await wompiapi();
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
      var wompi = document.getElementById("wompi");
      var botonpagar = document.getElementById("botonpagar");
      wompi.style.display = "";
      botonpagar.style.display = "none";
    }
  });
}



async function cambios(selectPersona) {
  


/*   var selectPersona = document.getElementById("persona").value; */
  var municipios = document.getElementById("CMunicipios")
  var selectCiudad = document.getElementById("municipios").value;
  var ciudadDelivery = document.getElementById("ciudadDelivery").value;
  var delivery = document.getElementById("delivery").value;
  var cantidadProducto = document.getElementById("num-product").value;
  var ciudadSucursal = document.getElementById("ciudadSucursal").value;
  var botonMas = document.getElementById("mas")
  var botonMenos = document.getElementById("menos")

 


  if (cantidadProducto >= 2) {
    botonMas.disabled = true;
  }
  else{
    botonMas.disabled = false;

  }
  if (cantidadProducto <= 1) {
    botonMenos.disabled = true;
  }
  else{
    botonMenos.disabled = false;

  }

  if (document.getElementById("CheckAgente").checked) {
    console.log("hace check");
    municipios.style.display = "";
    CMunicipios.style.display = "";
    descuento.style.display = "";
    descuentoIca.style.display = "";
    descuentoFuente.style.display = "";
    var porcentajeFuente = 2.5;
    var reteFuente = (precioNeto * porcentajeFuente) / 100;
    ciudadAgente = document.getElementById("municipios").value
    delivery = document.getElementById("delivery").value
    document.getElementById("reteica").innerHTML = 0


    if (ciudadAgente == "Escoja una opción") {
      console.log("ciudadAgente",ciudadAgente);
      var ica = 0;
      var flete = 0;
      var reteika = 0;
      console.log("ica",reteika);


      switch (delivery) {
        case "Escoja una opción":
          console.log("delivery",delivery);
          cCiudadDelivery.style.display = "none";
          cCiudadSucursal.style.display = "none";
          funct(cantidadProducto, precioNeto, iva, flete, reteika, reteFuente);
          break;
  
        case "Domicilio":
          console.log("delivery",delivery);
          var delivery = document.getElementById("delivery").value;
          cCiudadDelivery.style.display = "";
          cCiudadSucursal.style.display = "none";
  
          if (ciudadDelivery == "Escoja una opción") {
            console.log("ciudadDelivery",ciudadDelivery);
            funct(
              cantidadProducto,
              precioNeto,
              iva,
              flete,
              reteika,
              reteFuente
            );
          } else {
            console.log("ciudadDelivery",ciudadDelivery);
  
            var ciudadDelivery =
              document.getElementById("ciudadDelivery").value;   
            var flete = document.getElementById("fleteI").value;
            funct(
              cantidadProducto,
              precioNeto,
              iva,
              flete,
              reteika,
              reteFuente
            );
          }
  
          break;
  
        case "fisico":
          var ciudadSucursal =
            document.getElementById("ciudadSucursal").value;  
          document.getElementById("ciudadDelivery").selectedIndex = "0";
          document.getElementById("select2-ciudadDelivery-container").innerHTML = "Escoja una opción"
          console.log("delivery",delivery);
          cCiudadDelivery.style.display = "none";
          cCiudadSucursal.style.display = "";
          console.log("flete",flete);
          flete = 0;
  
          if (ciudadSucursal == "Escoja una opción") {
            console.log("ciudadSucursal",ciudadSucursal);
            funct(
              cantidadProducto,
              precioNeto,
              iva,
              flete,
              reteika,
              reteFuente
            );
          } else {
            console.log("ciudadSucursal",ciudadSucursal);
  
            var ciudadSucursal =
            document.getElementById("ciudadSucursal").value;   
            var flete = 0
            funct(
              cantidadProducto,
              precioNeto,
              iva,
              flete,
              reteika,
              reteFuente
            );
          }
  
          break;
      }

    } else {
      console.log("ciudadAgente",ciudadAgente);
      var delivery = document.getElementById("delivery").value;
      var reteika = document.getElementById("ica").value;
      var flete = 0;

      switch (delivery) {
        case "Escoja una opción":
          console.log("delivery",delivery);
          cCiudadDelivery.style.display = "none";
          cCiudadSucursal.style.display = "none";
          funct(cantidadProducto, precioNeto, iva, flete, reteika, reteFuente);
          break;
  
        case "Domicilio":
          console.log("delivery",delivery);
          var delivery = document.getElementById("delivery").value;
          cCiudadDelivery.style.display = "";
          cCiudadSucursal.style.display = "none";
  
          if (ciudadDelivery == "Escoja una opción") {
            console.log("ciudadDelivery",ciudadDelivery);
            funct(
              cantidadProducto,
              precioNeto,
              iva,
              flete,
              reteika,
              reteFuente
            );
          } else {
            console.log("ciudadDelivery",ciudadDelivery);
  
            var ciudadDelivery =
              document.getElementById("ciudadDelivery").value;   
            var flete = document.getElementById("fleteI").value;
            funct(
              cantidadProducto,
              precioNeto,
              iva,
              flete,
              reteika,
              reteFuente
            );
          }
  
          break;
  
        case "fisico":
          var ciudadSucursal =
            document.getElementById("ciudadSucursal").value;  
          document.getElementById("ciudadDelivery").selectedIndex = "0";
          document.getElementById("select2-ciudadDelivery-container").innerHTML = "Escoja una opción"
          console.log("delivery",delivery);
          cCiudadDelivery.style.display = "none";
          cCiudadSucursal.style.display = "";
          console.log("flete",flete);
          flete = 0;
  
          if (ciudadSucursal == "Escoja una opción") {
            console.log("ciudadSucursal",ciudadSucursal);
            funct(
              cantidadProducto,
              precioNeto,
              iva,
              flete,
              reteika,
              reteFuente
            );
          } else {
            cCiudadDelivery.style.display = "";
            cCiudadSucursal.style.display = "none";
            document.getElementById("ciudadSucursal").selectedIndex = "0";
            document.getElementById("select2-ciudadSucursal-container").innerHTML = "Escoja una opción"
            console.log("ciudadSucursal",ciudadSucursal);
  
            var ciudadSucursal =
            document.getElementById("ciudadSucursal").value;   
            var flete = 0
            funct(
              cantidadProducto,
              precioNeto,
              iva,
              flete,
              reteika,
              reteFuente
            );
          }
  
          break;
      }

    }



    
  } else {

    console.log("no Hace check");

    CMunicipios.style.display = "none";
    

    document.getElementById("municipios").selectedIndex = "0";
    document.getElementById("select2-municipios-container").innerHTML = "Escoja una opción"
      var reteika = 0;
      descuento.style.display = "none";
      descuentoIca.style.display = "none";
      descuentoFuente.style.display = "none";
      switch (delivery) {
        case "Escoja una opción":
          var ica = 0;
          var flete = 0;
          var reteFuente = 0;
          var reteika = 0;
          cCiudadDelivery.style.display = "none";
          cCiudadSucursal.style.display = "none";
          funct(cantidadProducto, precioNeto, iva, flete, reteika, reteFuente);
          break;

        case "Domicilio":
          document.getElementById("ciudadSucursal").selectedIndex = "0";
          document.getElementById("select2-ciudadSucursal-container").innerHTML = "Escoja una opción"
          var delivery = document.getElementById("delivery").value;
          cCiudadDelivery.style.display = "";
          cCiudadSucursal.style.display = "none";

          if (ciudadDelivery == "Escoja una opción") {
            var ica = 0;
            var flete = 0;
            var reteFuente = 0;
            var reteika = 0;
            funct(
              cantidadProducto,
              precioNeto,
              iva,
              flete,
              reteika,
              reteFuente
            );
          } else {
            var ciudadDelivery =
              document.getElementById("ciudadDelivery").value;
            var ica = 0;
            var reteika = 0;
            var reteFuente = 0;
            var flete = document.getElementById("fleteI").value;
            funct(
              cantidadProducto,
              precioNeto,
              iva,
              flete,
              reteika,
              reteFuente
            );
          }

          break;

        case "fisico":
          document.getElementById("ciudadDelivery").selectedIndex = "0";
          document.getElementById("select2-ciudadDelivery-container").innerHTML = "Escoja una opción"
          var delivery = document.getElementById("delivery").value;
          cCiudadDelivery.style.display = "none";
          cCiudadSucursal.style.display = "";

          if (ciudadSucursal == "Escoja una opción") {
            var ica = 0;
            var flete = 0;
            var reteFuente = 0;
    
            var reteika = 0;
            funct(
              cantidadProducto,
              precioNeto,
              iva,
              flete,
              reteika,
              reteFuente
            );
          } else {
            var ciudadDelivery =
              document.getElementById("ciudadDelivery").value;
            var ica = 0;
            var reteika = 0;
            var reteFuente = 0;
            var flete = 0;
            funct(
              cantidadProducto,
              precioNeto,
              iva,
              flete,
              reteika,
              reteFuente
            );
          }

          break;
      }
  }

}

const boton = document.querySelector("#menos");
var cantidadProducto = document.getElementById("num-product").value;
boton.addEventListener("click", function (evento) {
  var identificadorTiempoDeEspera = setTimeout(cambios, 3);
});

const boton2 = document.querySelector("#mas");
var cantidadProducto = document.getElementById("num-product").value;

boton2.addEventListener("click", function (evento) {
  var identificadorTiempoDeEspera = setTimeout(cambios, 3);
});

function ShowSelectAgente() {
  descriptionBoxAgente.style.display = "none";
  setTimeout(cambios, 3);
}

function ShowSelectedMunicipios() {
  selectCiudad = document.getElementById("municipios").value
  var alerta = document.getElementById("alertaIca")
  if (selectCiudad == "Otra") {

    alerta.innerHTML = "• pailas ica"
    alerta.style.color = "red"
    Swal.fire({
      title: "Titulo:",
      text: "Mensaje de ciudad sin ica",
      icon: "info",
    
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ok",
    })
  }

  setTimeout(cambios, 3);

  descriptionBoxMunicipios.style.display = "none";
  /*   cDelivery.style.display = ""; */
}

function ShowSelectedDelivery() {
  descriptionBoxDelivery.style.display = "none";
  setTimeout(cambios, 3);
}

function ShowSelectedCiudadDelivery() {
  ciudadDelivery = document.getElementById("ciudadDelivery").value
  var alerta = document.getElementById("alertaDelivery")
  if (ciudadDelivery == "Otra") {

    alerta.innerHTML = "• pailas delivery"
    alerta.style.color = "red"
    Swal.fire({
      title: "Titulo :",
      text: "Mensaje de ciudad sin domicilio",
      icon: "info",
    
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ok",
    })
  }

  descriptionBoxCiudadDelivery.style.display = "none";
  setTimeout(cambios, 3);
}

function ShowSelectedCiudadSucursal() {
  descriptionBoxCiudadSucursal.style.display = "none";
  setTimeout(cambios, 3);
}


