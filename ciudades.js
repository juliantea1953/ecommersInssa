


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
var kit;

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
  validarDelivery = document.getElementById("delivery").value
kit = document.getElementById("kit").value
console.log("kit", kit);
  

  if (validarDelivery === "Domicilio") {
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
        "description": "Compra de " + sku + " "+ kit + " por medio de INSSA Prime",
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
  else{
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
        "description": "Compra de " + sku + " " + kit + "por medio de INSSA Prime",
        "single_use": true,
        "collect_shipping": false,
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
 


}
var stock = 14 
async function generarQr() {


cantidadProducto = document.getElementById("num-product").value

stockTotal = stock - cantidadProducto
stock = stockTotal
  console.log("asssssssssssssssssssssssssssssssss",stock);
  document.getElementById("stock").innerHTML = "Cantidad en stock "+stockTotal+""
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

function clearParamDescrproveedor() {
  // Description
  descriptionBoxproveedor.style.display = "none";
}

function describeSelectproveedor() {
  descriptionBoxproveedor.style.display = "block";
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
    var precioNeto = 4250000 * cantidadProducto;

    var tasa = 19;
    var iva = (precioNeto * tasa) / 100;

    var porcentajeFuente = 2.5;
    var reteFuente = (precioNeto * porcentajeFuente) / 100;

    envioNeto = document.getElementById("subtotalText").innerHTML =
      "$4,250,000.00";
    envioNeto2 = document.getElementById("subtotal").innerHTML =
      "$4,250,000.00";
    envioNombre = document.getElementById("nombre").innerHTML = "Cafetera Bari";
    envioIva = document.getElementById("iva").innerHTML = "$807,500.00";
    envioTotal = document.getElementById("total").innerHTML =
      "$5,057,500.00";

    totalwompiP = document.getElementById("totalWompi").value = 5057500 * 100;
    wompiapi();

    break;

  case "paris":
    var precioNeto = 6216000 * cantidadProducto;
    var tasa = 19;
    var iva = (precioNeto * tasa) / 100;

    var porcentajeFuente = 2.5;
    var reteFuente = (precioNeto * porcentajeFuente) / 100;

    envioNeto = document.getElementById("subtotalText").innerHTML =
      "$6,216,000.00";
    envioNeto2 = document.getElementById("subtotal").innerHTML =
      "$6,216,000.00";
    envioNombre = document.getElementById("nombre").innerHTML = "Cafetera Paris";
    envioIva = document.getElementById("iva").innerHTML = "$752,400.00";
    envioTotal = document.getElementById("total").innerHTML =
      "$7,397,040.00";

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
      "$3,205,000.00";
    envioNeto2 = document.getElementById("subtotal").innerHTML =
      "$3,205,000.00";
    envioNombre = document.getElementById("nombre").innerHTML = "Cafetera Turin";
    envioIva = document.getElementById("iva").innerHTML = "$608,950.00";
    envioTotal = document.getElementById("total").innerHTML =
      "$3,813,950.00";

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
      "$2,779,000.00";
    envioNeto2 = document.getElementById("subtotal").innerHTML =
      "$2,779,000.00";
    envioNombre = document.getElementById("nombre").innerHTML = "Dispensadora de jugos Berna 12 litros";
    envioIva = document.getElementById("iva").innerHTML = "$528,010.00";
    envioTotal = document.getElementById("total").innerHTML =
      "$3,307,010.00";

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
      "$3,016,000.00";
    envioNeto2 = document.getElementById("subtotal").innerHTML =
      "$3,016,000.00";
    envioNombre = document.getElementById("nombre").innerHTML = "Dispensadora de jugos Berna 20 litros";
    envioIva = document.getElementById("iva").innerHTML = "$573,40.00";
    envioTotal = document.getElementById("total").innerHTML =
      "$3,589,040.00";
      
    totalwompiP = document.getElementById("totalWompi").value = 3589040 * 100;
    

    wompiapi();
    break;


  default:
    break;
}

async function funct(cantidadProducto, precioNeto, iva, flete, reteika, reteFuente) {



  var totalPrecioNeto = precioNeto * cantidadProducto;
  totalIva = iva * cantidadProducto;
  totalFlete = flete * cantidadProducto;
  reteika = ((precioNeto * reteika)/1000) * cantidadProducto;
  reteFuente = reteFuente * cantidadProducto;
  indescuento = (reteFuente + Number(reteika));
  total = totalPrecioNeto + totalIva + totalFlete - indescuento;
  tatalWompi = total * 100;

  console.log("ica func", reteika);
  console.log("neto", precioNeto);

    envioTotalWompii = document.getElementById("totalWompi").value = tatalWompi;
    envioTotalWompiii = document.getElementById("totalWompi").innerHTML = tatalWompi;

  envioNeto = document.getElementById("subtotal");
  const formateadoNeto = totalPrecioNeto.toLocaleString("en-CO", {
    style: "currency",
    currency: "USD",
  });
  envioNeto.innerHTML = formateadoNeto;

  envioIva = document.getElementById("iva");
  const formateadoIva = totalIva.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  envioIva.innerHTML = formateadoIva;

  var envioFlete = document.getElementById("flete");
  var formateadoFlete = totalFlete.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  envioFlete.innerHTML = formateadoFlete;

  var envioica = document.getElementById("reteica");
  var formateadoica = Number(reteika).toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  envioica.innerHTML = formateadoica;

  var envioFuente = document.getElementById("retefuente");
  var formateadoFuente = (reteFuente).toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  envioFuente.innerHTML = formateadoFuente;

  var envioDescuento = document.getElementById("descuento");
  var formateadoDescuento = indescuento.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  envioDescuento.innerHTML = formateadoDescuento;

  var envioTotal = document.getElementById("total");
  const formateadoTotal = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
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

  if (document.getElementById("Checkproveedor").checked) {

    
    console.log("asdasda", ciudadDelivery);
    console.log("sucursal", ciudadSucursal);

    if (ciudadDelivery === "Escoja una opción" ) {
     
      
      if (ciudadSucursal === "Escoja una opción") {
        document.getElementById("textImgProve").innerHTML = ""
        document.getElementById("imgProve").src=""
            document.getElementById("textProv").innerHTML = ""
            document.getElementById("kit").value = ""
      }
      
      else{
       
       
        switch (ciudadSucursal) {
          case "Medellín" :
            document.getElementById("textImgProve").innerHTML = "* Prueba de concepto, definir si incluir precio o enrutar al sitio del aliado."
            document.getElementById("imgProve").src="images/bari/proveedorMedellin.jpeg"
         document.getElementById("textProv").innerHTML = "• Especificación de productos aliado Medellín 'Shaddai Insumos'"
         document.getElementById("kit").value = "+ kit de proveedor"
            break;
    
            case "Bogotá Dc":
              document.getElementById("textImgProve").innerHTML = "* Prueba de concepto, definir si incluir precio o enrutar al sitio del aliado."
              document.getElementById("imgProve").src="images/bari/proveedorBogota.png"
              document.getElementById("textProv").innerHTML = "• Especificación de productos aliado Bogotá 'Capuccino al paso'"
              document.getElementById("kit").value = "+ kit de proveedor"
              break
    
              case "Cali":
                document.getElementById("textImgProve").innerHTML = "* Prueba de concepto, definir si incluir precio o enrutar al sitio del aliado."
                document.getElementById("imgProve").src="images/bari/proveedosCali.jpeg"
                document.getElementById("textProv").innerHTML = "• Especificación de aliado Cali 'Arabica Insumos'"
                document.getElementById("kit").value = "+ kit de proveedor"
                break
        
          default:
            document.getElementById("textImgProve").innerHTML = ""
            document.getElementById("imgProve").src=""
            document.getElementById("textProv").innerHTML = ""
            document.getElementById("kit").value = ""
    
            break;
        }
      }
    }
    else{
      document.getElementById("textImgProve").innerHTML = ""
      document.getElementById("imgProve").src=""
            document.getElementById("textProv").innerHTML = ""
            document.getElementById("kit").value = ""
      switch (ciudadDelivery) {
        case "Medellín" :
          document.getElementById("textImgProve").innerHTML = "* Prueba de concepto, definir si incluir precio o enrutar al sitio del aliado."
          document.getElementById("imgProve").src="images/bari/proveedorMedellin.jpeg"
          document.getElementById("textProv").innerHTML = "• Especificación de productos proveedor Medellín"
       document.getElementById("kit").value = "+ kit de proveedor"
          break;
  
          case "Bogotá Dc":
            document.getElementById("textImgProve").innerHTML = "* Prueba de concepto, definir si incluir precio o enrutar al sitio del aliado."
            document.getElementById("imgProve").src="images/bari/proveedorBogota.png"
            document.getElementById("textProv").innerHTML = "• Especificación de productos proveedor Bogotá"
            document.getElementById("kit").value = "+ kit de proveedor"
            break
  
            case "Cali":
              document.getElementById("textImgProve").innerHTML = "* Prueba de concepto, definir si incluir precio o enrutar al sitio del aliado."
              document.getElementById("imgProve").src="images/bari/proveedosCali.jpeg"
              document.getElementById("textProv").innerHTML = "• Especificación de productos proveedor Cali"
              document.getElementById("kit").value = "+ kit de proveedor"
              break
      
        default:
          document.getElementById("textImgProve").innerHTML = ""
          document.getElementById("imgProve").src=""
          document.getElementById("textProv").innerHTML = ""
          document.getElementById("kit").value = ""
  
          break;
      }
    }
    
  }
  else{
    document.getElementById("textImgProve").innerHTML = ""
    document.getElementById("imgProve").src=""
    document.getElementById("textProv").innerHTML = ""
    document.getElementById("kit").value = ""

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
          document.getElementById("cproveedor").style.display = ""
          document.getElementById("ciudadSucursal").selectedIndex = "0";
          document.getElementById("select2-ciudadSucursal-container").innerHTML = "Escoja una opción"
  
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
          document.getElementById("cproveedor").style.display = ""
          document.getElementById("cproveedor").style.display = ""
  
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
          document.getElementById("cproveedor").style.display = ""
          document.getElementById("ciudadSucursal").selectedIndex = "0";
          document.getElementById("select2-ciudadSucursal-container").innerHTML = "Escoja una opción"

  
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
          document.getElementById("cproveedor").style.display = ""
  
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
          document.getElementById("cproveedor").style.display = ""
 


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
          document.getElementById("cproveedor").style.display = ""

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

  if (selectCiudad === "Bogota") {
    x = 11.04
    reteika = x
    document.getElementById("ica").value = reteika
    
  }

  if (selectCiudad === "Cali") {
    x = 7.7
    reteika = x
    document.getElementById("ica").value = reteika
    
  }

  `if (selectCiudad != "Bogotá Dc" && selectCiudad != "Cali") {

    alerta.innerHTML = "• Sin ica"
    alerta.style.color = "red"
    Swal.fire({
      title: "Titulo:",
      text: "Mensaje de ciudad sin ica",
      icon: "info",
    
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ok",
    })
  }`

  setTimeout(cambios, 3);

  descriptionBoxMunicipios.style.display = "none";
  /*   cDelivery.style.display = ""; */
}

function ShowSelectedDelivery() {
  descriptionBoxDelivery.style.display = "none";
  setTimeout(cambios, 3);
}

function ShowSelectedCiudadDelivery() {
  selectCiudad = document.getElementById("municipios").value

  var alerta = document.getElementById("alertaIca")

  if (selectCiudad === "Bogota") {
    x = 11.04
    reteika = x
    document.getElementById("ica").value = reteika
    
  }

  if (selectCiudad === "Cali") {
    x = 7.7
    reteika = x
    document.getElementById("ica").value = reteika
    
  }
  
  ciudadDelivery = document.getElementById("ciudadDelivery").value
  var alerta = document.getElementById("alertaDelivery")
  if (ciudadDelivery == "Otra") {

    alerta.innerHTML = "• Sin delivery"
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


