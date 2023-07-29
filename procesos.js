var timePago = new Date(); // estampa de tiempo para generar referencia de pago
var producto = document.getElementById("producto").value; // captura de nombre del producto
let referenciaPago = "InssaPrime_"+producto + "_" + timePago.getTime() + ""; // Concatenación de estampa de tiempo con nombre del producto para la referencia de pago obligatoria
document.getElementById("referenciaPago").value = referenciaPago; // Asignación de la referencia de pago

var cantidadProducto = document.getElementById("num-product").value; // captura de la cantidad de productos para la compra
var cantidadProducto = parseInt(cantidadProducto);

document.getElementById("codigoLink").style.display = "none";

///////////////////////////////////////////// Inicio detección navegador

function detectionMovil() {
  // console.log("Datos sobre el navegador:");
  let navegador = navigator.userAgent;
  // console.log(navegador);

  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    // console.log("Estás usando un dispositivo móvil!!");
    document.getElementById("contTextWhat").style.display = "none";
    document.getElementById("contNombreMov").style.display = "";
    document.getElementById("contNombreDes").style.display = "none";

    movil = true;
  } else {
    // console.log("No estás usando un móvil");
    document.getElementById("contNombreMov").style.display = "none";
    document.getElementById("contNombreDes").style.display = "";
    movil = false;
  }

  // console.log(movil);
}

///////////////////////////////////////////// Fin detección navegador

detectionMovil();

///////////////////////////////////////////// Inicio productos

switch (producto) {
  case "bari":
    
    var precioNeto = 4250000 * cantidadProducto;

    var tasa = 19;
    var iva = (precioNeto * tasa) / 100;
    document.getElementById("fleteI").value = 0;

    envioNeto = document.getElementById("subtotalTextMov").innerHTML =
      "$4,250,000.00 + IVA";
    envioNeto = document.getElementById("subtotalTextDes").innerHTML =
      "$4,250,000.00 + IVA";
    envioNeto2 = document.getElementById("subtotal").innerHTML =
      "$4,250,000.00";
    envioNombre = document.getElementById("nombreMov").innerHTML = "Cafetera Bari";
    envioNombre = document.getElementById("nombreDes").innerHTML = "Cafetera Bari";
    sku = "Cafetera Bari";
    envioIva = document.getElementById("iva").innerHTML = "$807,500.00";
    envioTotal = document.getElementById("total").innerHTML = "$5,057,500.00";

    total = 5057500;
    inventario = 50;
    url = document.getElementById("redirect-url").value =
      "http://inssa.com.co/ecommerce/postBari.html";
    wompiapi();

    var video = document.createElement("video");

    video.src = "images/bari/videoBari.mp4";

    video.autoplay = false;
    video.controls = true;
    video.muted = false;
    // video.height = 240; // 👈️ in px
    video.style.width = "100%";
    video.style.display = "flex";
    video.style.justifyContent = "center";
    video.style.alignContent = "center";
    video.style.flexWrap = "wrap";

    // document.getElementById("videoProduct").style.marginTop = "3%"
    var videoProduct = document.getElementById("slick-slide03");
    videoProduct.style.marginTop = "5%";

    var vid = document.getElementById("video");

    vid.appendChild(video);

    break;

  case "parisEspresso":

    // var precioNeto = 8657000 * cantidadProducto;
    var precioNeto = 8657000 * cantidadProducto;
    var tasa = 19;
    var iva = (precioNeto * tasa) / 100;
    document.getElementById("fleteI").value = 0;
    envioNeto = document.getElementById("subtotalTextMov").innerHTML =
      "$8,657,000.00 + IVA";
    envioNeto = document.getElementById("subtotalTextDes").innerHTML =
      "$8,657,000.00 + IVA";
    envioNeto2 = document.getElementById("subtotal").innerHTML =
      "$8,657,000.00";
    // envioNeto = document.getElementById("subtotalTextMov").innerHTML =
    //   "$10.00 + IVA";
    // envioNeto = document.getElementById("subtotalTextDes").innerHTML =
    //   "$10.00 + IVA";
    // envioNeto2 = document.getElementById("subtotal").innerHTML = "$10.00";
    envioNombre = document.getElementById("nombreMov").innerHTML =
    envioNombre = document.getElementById("nombreDes").innerHTML =
      "Cafetera Paris espresso";
    sku = "Cafetera Paris";
    envioIva = document.getElementById("iva").innerHTML = "$1,644,830.00";
    envioTotal = document.getElementById("total").innerHTML = "$10,301,830.00";

    total = 10301830;
    inventario = 6;
    url = document.getElementById("redirect-url").value =
      "http://inssa.com.co/ecommerce/postParisEspresso.html?ver1";
    wompiapi();

    var imgg5 = document.createElement("img");

    imgg5.src = "images/paris/paris_42.jpg";

    var aImg5 = document.createElement("a");

    aImg5.href = "images/paris/paris_42.jpg";
    aImg5.id = "iA";
    aImg5.className =
      "flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04";

    var iImg5 = document.createElement("i");
    iImg5.className = "fa fa-expand";

    document.getElementById("video").appendChild(imgg5);
    document.getElementById("video").appendChild(aImg5);
    document.getElementById("iA").appendChild(iImg5);

    break;

  case "parisSoluble":

    // var precioNeto = 8657000 * cantidadProducto;
    var precioNeto = 6216000 * cantidadProducto;
    var tasa = 19;
    var iva = (precioNeto * tasa) / 100;
    document.getElementById("fleteI").value = 0;
    envioNeto = document.getElementById("subtotalTextMov").innerHTML =
      "$6,216,000.00 + IVA";
    envioNeto = document.getElementById("subtotalTextDes").innerHTML =
      "$6,216,000.00 + IVA";
    envioNeto2 = document.getElementById("subtotal").innerHTML =
      "$6,216,000.00";
    // envioNeto = document.getElementById("subtotalTextMov").innerHTML =
    //   "$10.00 + IVA";
    // envioNeto = document.getElementById("subtotalTextDes").innerHTML =
    //   "$10.00 + IVA";
    // envioNeto2 = document.getElementById("subtotal").innerHTML = "$10.00";
    envioNombre = document.getElementById("nombreMov").innerHTML =
    envioNombre = document.getElementById("nombreDes").innerHTML =
      "Cafetera Paris soluble";
    sku = "Cafetera Paris soluble";
    envioIva = document.getElementById("iva").innerHTML = "$1,181,040.00";
    envioTotal = document.getElementById("total").innerHTML = "$7,397,040.00";

    total = 7397040;
    inventario = 6;
    url = document.getElementById("redirect-url").value =
      "http://inssa.com.co/ecommerce/postParisSoluble.html?ver1";
    wompiapi();

    var imgg5 = document.createElement("img");

    imgg5.src = "images/paris/paris_42.jpg";

    var aImg5 = document.createElement("a");

    aImg5.href = "images/paris/paris_42.jpg";
    aImg5.id = "iA";
    aImg5.className =
      "flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04";

    var iImg5 = document.createElement("i");
    iImg5.className = "fa fa-expand";

    document.getElementById("video").appendChild(imgg5);
    document.getElementById("video").appendChild(aImg5);
    document.getElementById("iA").appendChild(iImg5);

    break;

  case "turin":
    var precioNeto = 3205000 * cantidadProducto;
    var tasa = 19;
    var iva = (precioNeto * tasa) / 100;
    document.getElementById("fleteI").value = 0;

    envioNeto = document.getElementById("subtotalTextDes").innerHTML =
      "$3,205,000.00 + IVA";
    envioNeto = document.getElementById("subtotalTextMov").innerHTML =
      "$3,205,000.00 + IVA";
    envioNeto2 = document.getElementById("subtotal").innerHTML =
      "$3,205,000.00";
    envioNombre = document.getElementById("nombreDes").innerHTML =
      "Cafetera Turin";
    envioNombre = document.getElementById("nombreMov").innerHTML =
      "Cafetera Turin";
    sku = "Cafetera Turin";
    envioIva = document.getElementById("iva").innerHTML = "$608,950.00";
    envioTotal = document.getElementById("total").innerHTML = "$3,813,950.00";

    total = 3813950;
    inventario = 0;
    
    url = document.getElementById("redirect-url").value =
      "http://inssa.com.co/ecommerce/postTurin.html";
      wompiapi();

    var imgg5 = document.createElement("img");

    imgg5.src = "images/paris/paris_4.png";

    var aImg5 = document.createElement("a");

    aImg5.href = "images/paris/paris_4.png";
    aImg5.id = "iA";
    aImg5.className =
      "flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04";

    var iImg5 = document.createElement("i");
    iImg5.className = "fa fa-expand";

    document.getElementById("video").appendChild(imgg5);
    document.getElementById("video").appendChild(aImg5);
    document.getElementById("iA").appendChild(iImg5);
    break;

  case "berna12L":
    var precioNeto = 2779000 * cantidadProducto;
    var tasa = 19;
    var iva = (precioNeto * tasa) / 100;
    document.getElementById("fleteI").value = 0;

    envioNeto = document.getElementById("subtotalTextDes").innerHTML =
      "$2,779,000.00 + IVA";
    envioNeto = document.getElementById("subtotalTextMov").innerHTML =
      "$2,779,000.00 + IVA";
    envioNeto2 = document.getElementById("subtotal").innerHTML =
      "$2,779,000.00";
    envioNombre = document.getElementById("nombreDes").innerHTML =
      "Dispensadora de jugos Berna 12 Litros";
    envioNombre = document.getElementById("nombreMov").innerHTML =
      "Dispensadora de jugos Berna 12 Litros";
    sku = " Berna 12 L";
    envioIva = document.getElementById("iva").innerHTML = "$528,010.00";
    envioTotal = document.getElementById("total").innerHTML = "$3,307,010.00";

    total = 3307010;
    inventario = 6;

    url = document.getElementById("redirect-url").value =
      "http://inssa.com.co/ecommerce/postBerna12L.html";
    wompiapi();

    var imgg5 = document.createElement("img");

    imgg5.src = "images/berna12l/berna12_41.jpg";

    var aImg5 = document.createElement("a");

    aImg5.href = "images/berna12l/berna12_41.jpg";
    aImg5.id = "iA";
    aImg5.className =
      "flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04";

    var iImg5 = document.createElement("i");
    iImg5.className = "fa fa-expand";

    document.getElementById("video").appendChild(imgg5);
    document.getElementById("video").appendChild(aImg5);
    document.getElementById("iA").appendChild(iImg5);

    break;

  case "berna20L":
    var precioNeto = 3016000 * cantidadProducto;
    var tasa = 19;
    var iva = (precioNeto * tasa) / 100;
    document.getElementById("fleteI").value = 0;

    envioNeto = document.getElementById("subtotalTextDes").innerHTML =
      "$3,016,000.00 + IVA";
    envioNeto = document.getElementById("subtotalTextMov").innerHTML =
      "$3,016,000.00 + IVA";
    envioNeto2 = document.getElementById("subtotal").innerHTML =
      "$3,016,000.00";
    envioNombre = document.getElementById("nombreDes").innerHTML =
      "Dispensadora de jugos Berna 20 Litros";
    envioNombre = document.getElementById("nombreMov").innerHTML =
      "Dispensadora de jugos Berna 20 Litros";
    sku = " Berna 20 L";
    envioIva = document.getElementById("iva").innerHTML = "$573,040.00";
    envioTotal = document.getElementById("total").innerHTML = "$3,589,040.00";

    total = 3589040;
    inventario = 10;

    url = document.getElementById("redirect-url").value =
      "http://inssa.com.co/ecommerce/postBerna20L.html";
    wompiapi();

    var imgg5 = document.createElement("img");

    imgg5.src = "images/paris/paris_4.png";

    var aImg5 = document.createElement("a");

    aImg5.href = "images/paris/paris_4.png";
    aImg5.id = "iA";
    aImg5.className =
      "flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04";

    var iImg5 = document.createElement("i");
    iImg5.className = "fa fa-expand";

    document.getElementById("video").appendChild(imgg5);
    document.getElementById("video").appendChild(aImg5);
    document.getElementById("iA").appendChild(iImg5);
    break;

  case "grecia151T":
    var precioNeto = 2772000 * cantidadProducto;
    var tasa = 19;
    var iva = (precioNeto * tasa) / 100;
    document.getElementById("fleteI").value = 0;

    envioNeto = document.getElementById("subtotalTextDes").innerHTML =
      "$2,772,000.00 + IVA";
    envioNeto = document.getElementById("subtotalTextMov").innerHTML =
      "$2,772,000.00 + IVA";
    envioNeto2 = document.getElementById("subtotal").innerHTML =
      "$2,772,000.00";

    envioNombre = document.getElementById("nombreDes").innerHTML =
      "Dispensadora de bebidas Grecia 15 litros 1 tanque";
    envioNombre = document.getElementById("nombreMov").innerHTML =
      "Dispensadora de bebidas Grecia 15 litros 1 tanque";
    sku = " Grecia 15L1T";
    envioIva = document.getElementById("iva").innerHTML = "$526,680.00";
    envioTotal = document.getElementById("total").innerHTML = "$3,298,680.00";

    total = 3298680;
    inventario = 9;
    
    url = document.getElementById("redirect-url").value =
      "http://inssa.com.co/ecommerce/postGrecia1T.html";
      wompiapi();

    var imgg5 = document.createElement("img");

    imgg5.src = "images/paris/paris_4.png";

    var aImg5 = document.createElement("a");

    aImg5.href = "images/paris/paris_4.png";
    aImg5.id = "iA";
    aImg5.className =
      "flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04";

    var iImg5 = document.createElement("i");
    iImg5.className = "fa fa-expand";

    document.getElementById("video").appendChild(imgg5);
    document.getElementById("video").appendChild(aImg5);
    document.getElementById("iA").appendChild(iImg5);
    break;

  case "grecia152T":
    var precioNeto = 4341000 * cantidadProducto;
    var tasa = 19;
    var iva = (precioNeto * tasa) / 100;
    document.getElementById("fleteI").value = 0;

    envioNeto = document.getElementById("subtotalTextDes").innerHTML =
      "$4,341,000.00 + IVA";
    envioNeto = document.getElementById("subtotalTextMov").innerHTML =
      "$4,341,000.00 + IVA";
    envioNeto2 = document.getElementById("subtotal").innerHTML =
      "$4,341,000.00";

    envioNombre = document.getElementById("nombreDes").innerHTML =
      "Dispensadora de bebidas Grecia 15 litros 2 tanques";
    envioNombre = document.getElementById("nombreMov").innerHTML =
      "Dispensadora de bebidas Grecia 15 litros 2 tanques";
    sku = " Grecia 15L2T";
    envioIva = document.getElementById("iva").innerHTML = "$824,790.00";
    envioTotal = document.getElementById("total").innerHTML = "$5,165,790.00";

    total = 5165790;
    inventario = 0;
    
    url = document.getElementById("redirect-url").value =
      "http://inssa.com.co/ecommerce/postGrecia2T.html";
      wompiapi();

    var imgg5 = document.createElement("img");

    imgg5.src = "images/paris/paris_4.png";

    var aImg5 = document.createElement("a");

    aImg5.href = "images/paris/paris_4.png";
    aImg5.id = "iA";
    aImg5.className =
      "flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04";

    var iImg5 = document.createElement("i");
    iImg5.className = "fa fa-expand";

    document.getElementById("video").appendChild(imgg5);
    document.getElementById("video").appendChild(aImg5);
    document.getElementById("iA").appendChild(iImg5);
    break;

  case "neve110":
    var precioNeto = 1881000 * cantidadProducto;
    var tasa = 19;
    var iva = (precioNeto * tasa) / 100;
    document.getElementById("fleteI").value = 0;

    envioNeto = document.getElementById("subtotalTextDes").innerHTML =
      "$9,900,000.00 + IVA";
    envioNeto = document.getElementById("subtotalTextMov").innerHTML =
      "$9,900,000.00 + IVA";
    envioNeto2 = document.getElementById("subtotal").innerHTML =
      "$9,900,000.00";

    envioNombre = document.getElementById("nombreDes").innerHTML =
      "Dispensadora de helado suave Neve 110 V";
    envioNombre = document.getElementById("nombreMov").innerHTML =
      "Dispensadora de helado suave Neve 110 V";
    sku = " Neve 110V";
    envioIva = document.getElementById("iva").innerHTML = "$1,881,000.00";
    envioTotal = document.getElementById("total").innerHTML = "$11,781,000.00";

    total = 11781000;
    inventario = 4;
    
    url = document.getElementById("redirect-url").value =
      "http://inssa.com.co/ecommerce/postNeve110.html";
      wompiapi();

    var imgg5 = document.createElement("img");

    imgg5.src = "images/paris/paris_4.png";

    var aImg5 = document.createElement("a");

    aImg5.href = "images/paris/paris_4.png";
    aImg5.id = "iA";
    aImg5.className =
      "flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04";

    var iImg5 = document.createElement("i");
    iImg5.className = "fa fa-expand";

    document.getElementById("video").appendChild(imgg5);
    document.getElementById("video").appendChild(aImg5);
    document.getElementById("iA").appendChild(iImg5);
    break;

  case "neve220":
    var precioNeto = 1881000 * cantidadProducto;
    var tasa = 19;
    var iva = (precioNeto * tasa) / 100;
    document.getElementById("fleteI").value = 0;

    envioNeto = document.getElementById("subtotalTextDes").innerHTML =
      "$9,900,000.00 + IVA";
    envioNeto = document.getElementById("subtotalTextMov").innerHTML =
      "$9,900,000.00 + IVA";
    envioNeto2 = document.getElementById("subtotal").innerHTML =
      "$9,900,000.00";

    envioNombre = document.getElementById("nombreDes").innerHTML =
      "Dispensadora de helado suave Neve 220 V";
    envioNombre = document.getElementById("nombreMov").innerHTML =
      "Dispensadora de helado suave Neve 220 V";
    sku = " Neve 220V";
    envioIva = document.getElementById("iva").innerHTML = "$1,881,000.00";
    envioTotal = document.getElementById("total").innerHTML = "$11,781,000.000";

    total = 11781000;
    inventario = 10;
   
    url = document.getElementById("redirect-url").value =
      "http://inssa.com.co/ecommerce/postNeve220.html";
      wompiapi();

    var imgg5 = document.createElement("img");

    imgg5.src = "images/paris/paris_4.png";

    var aImg5 = document.createElement("a");

    aImg5.href = "images/paris/paris_4.png";
    aImg5.id = "iA";
    aImg5.className =
      "flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04";

    var iImg5 = document.createElement("i");
    iImg5.className = "fa fa-expand";

    document.getElementById("video").appendChild(imgg5);
    document.getElementById("video").appendChild(aImg5);
    document.getElementById("iA").appendChild(iImg5);
    break;

  case "asis":
    var precioNeto = 1500000 * cantidadProducto;
    var tasa = 19;
    var iva = (precioNeto * tasa) / 100;
    document.getElementById("fleteI").value = 0;

    envioNeto = document.getElementById("subtotalTextDes").innerHTML =
      "$1,500,000.00 + IVA";
    envioNeto = document.getElementById("subtotalTextMov").innerHTML =
      "$1,500,000.00 + IVA";
    envioNeto2 = document.getElementById("subtotal").innerHTML =
      "$1,500,000.00";

    envioNombre = document.getElementById("nombreDes").innerHTML =
      "Cafetera por goteo Asis";
    envioNombre = document.getElementById("nombreMov").innerHTML =
      "Cafetera por goteo Asis";
    sku = " Cafetera Asis";
    envioIva = document.getElementById("iva").innerHTML = "$285,000.00";
    envioTotal = document.getElementById("total").innerHTML = "$1,785,000.00";

    total = 1785000;
    inventario = 12;
    
    url = document.getElementById("redirect-url").value =
      "http://inssa.com.co/ecommerce/postAsis.html";
      wompiapi();

    var imgg5 = document.createElement("img");

    imgg5.src = "images/paris/paris_4.png";

    var aImg5 = document.createElement("a");

    aImg5.href = "images/paris/paris_4.png";
    aImg5.id = "iA";
    aImg5.className =
      "flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04";

    var iImg5 = document.createElement("i");
    iImg5.className = "fa fa-expand";

    document.getElementById("video").appendChild(imgg5);
    document.getElementById("video").appendChild(aImg5);
    document.getElementById("iA").appendChild(iImg5);
    break;

  default:
    break;
}

///////////////////////////////////////////// Fin productos

if (inventario <= 3) {
  console.log("no se publica");
  document.getElementById("abrirModal").disabled = true;
  document.getElementById("marcaAgua").style.display = "flex";

}

function ShowSelectedDelivery() {
  // setTimeout(cambios, 3);
  GetDelivery();
  // ValidarCiudad()
}

// function ValidarCiudad() {
//   var ciudadDelivery = document.getElementById("ciudadDelivery").value
//   var ciudadDelivery = document.getElementById("ciudadSucursal").value

// }

function ShowEnvioCDelivery() {
  totalFlete = document.getElementById("fleteI").value;
  intFlete = parseInt(totalFlete);
  var envioFlete = document.getElementById("flete");
  var formateadoFlete = intFlete.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  envioFlete.innerHTML = formateadoFlete;
  cambios();
}

function GetDelivery() {
  valueDelivery = document.getElementById("delivery").value;
  valueCiudadDelivery = document.getElementById("ciudadDelivery").value;
  // console.log("Seleccion Delivery", valueDelivery);

  if (valueDelivery === "Domicilio") {
    // console.log("entra a domicilio");

    document.getElementById("cCiudadDelivery").style.display = "";
    document.getElementById("cCiudadSucursal").style.display = "none";
    document.getElementById("direcciones").style.display = "none";
    // document.getElementById("textImgProve").style.display = "none";
    // document.getElementById("hrefProve").style.display = "none";
    document.getElementById("ciudadSucursal").selectedIndex = "0";
    document.getElementById("select2-ciudadSucursal-container").innerHTML =
      "Escoja una opción";
    ShowEnvioCDelivery();
  } else {
    valueCiudadDelivery = document.getElementById("ciudadDelivery").value;
    // console.log("entra a fisico");
    document.getElementById("cCiudadDelivery").style.display = "none";
    document.getElementById("cCiudadSucursal").style.display = "";
    document.getElementById("ciudadDelivery").selectedIndex = "0";
    document.getElementById("select2-ciudadDelivery-container").innerHTML =
      "Escoja una opción";
    // console.log("ciudadDelivery2", valueCiudadDelivery);
    totalFlete = document.getElementById("fleteI").value = 0;
    ShowEnvioCDelivery();
  }
}

function ShowSelectedCiudadSucursal() {
  valueCiudadSucursal = document.getElementById("ciudadSucursal").value;
  // console.log("valueCiudadSucursal", valueCiudadSucursal);
  hrefProve = document.getElementById("hrefProve");

  validarSucursal();

  document.getElementById("cCiudadSucursal").style.display = "";
  switch (valueCiudadSucursal) {
    case "Medellín":
      document.getElementById("direcciones").style.display = "flex";
      document.getElementById("direccionSucursal").innerHTML =
        " Calle 10 sur # 50ff - 28";

      break;

    case "Bogotá Dc":
      document.getElementById("direcciones").style.display = "flex";

      document.getElementById("direccionSucursal").innerHTML = " Cra 26# 78-47";
      break;
    case "Cali":
      document.getElementById("direcciones").style.display = "flex";

      document.getElementById("direccionSucursal").innerHTML =
        " Calle 25nte # 5b-54";
      break;

    default:
      break;
  }
  // document.getElementById("textImgProve").style.display = "";
  // document.getElementById("hrefProve").style.display = "";
  // switch (valueCiudadSucursal) {
  //   case "Medellín":
  //     console.log("medellin");
  //     document.getElementById("textImgProve").innerHTML =
  //       "* Prueba de concepto, definir si incluir precio o enrutar al sitio del aliado.";
  //     document.getElementById("imgProve").src =
  //       "images/bari/proveedorMedellin.jpeg";

  //     hrefProve.href = "https://www.inssa.com.co/";

  //     break;

  //   case "Bogotá Dc":
  //     document.getElementById("textImgProve").innerHTML =
  //       "* Prueba de concepto, definir si incluir precio o enrutar al sitio del aliado.";
  //     document.getElementById("imgProve").src = "images/bari/alpaso.png";

  //     hrefProve.href = "https://www.capuccinoalpaso.com/";
  //     break;

  //   case "Cali":
  //     document.getElementById("textImgProve").innerHTML =
  //       "* Prueba de concepto, definir si incluir precio o enrutar al sitio del aliado.";
  //     document.getElementById("imgProve").src =
  //       "images/bari/proveedosCali.jpeg";

  //     hrefProve.href = "https://www.facebook.com.co/";
  //     break;

  //   default:
  //     document.getElementById("textImgProve").innerHTML = "";
  //     document.getElementById("imgProve").src = "";

  //     break;
  // }
}

function ShowChangeCDelivery() {
  ShowEnvioCDelivery();
}

function validarSucursal() {
  validarSucursalDe = document.getElementById("ciudadDelivery").value;
  validarSucursalFis = document.getElementById("ciudadSucursal").value;
  // console.log("ciudadDeliveryaaa", validarSucursalDe);
  // console.log("ciudadSucursalaaa", validarSucursalFis);

  if (validarSucursalDe == "Otra") {
    Swal.fire({
      title: "Municipio sin cobertura",
      text: "Se pueden hacer cobros adicionales para tu envío, comunícate con nosotros",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Comunícate con nosotros",
      cancelButtonText: "Aceptar y continuar con la compra",
    }).then((result) => {
      if (result.isConfirmed) {
        // location.replace('https://api.whatsapp.com/send?phone=573102242724&text=Hola,%20quiero%20hacer%20una%20compra%20por%20INSSA%20Prime,%20pero%20no%20encuentro%20mi%20ciudad.');
        window.open(
          "https://api.whatsapp.com/send?phone=573102242724&text=Hola,%20quiero%20hacer%20una%20compra%20por%20INSSA%20Prime,%20pero%20no%20encuentro%20mi%20ciudad.",
          "_blank"
        );
      }
    });
  }

  if (
    validarSucursalDe != "Escoje una opción" ||
    validarSucursalFis != "Escoje una opción"
  ) {
    // console.log("movil", movil);
    if (movil === true) {
      // console.log("movil si");
      // console.log("entra a escoge una opc");

      document.getElementById("linkPago").style.display = "none";
      validacion = true;
      // document.getElementById("botonpagar").disabled = false
    } else {
      console.log("entra a escoge una opc");
      if (document.getElementById("delivery").value === "Domicilio") {
        // console.log("Siiii");
        document.getElementById("codigoLink").style.display = "none";
      } else {
        document.getElementById("codigoLink").style.display = "none";
      }

      validacion = true;
      // document.getElementById("botonpagar").disabled = false
    }
  } else {
    // console.log("no entra a escoge una opc");

    document.getElementById("codigoLink").style.display = "none";

    validacion = false;
    // document.getElementById("botonpagar").disabled = true
    //   var url = document.getElementById("linkPago").innerHTML;
    // window.open(url, "_blank");
  }
}

function mensajeBoton() {}

async function generarQr() {
  cantidadProducto = document.getElementById("num-product").value;
  validarSucursal();
  // console.log("boton");

  if (validacion == true) {
    // console.log("true");
    var url = document.getElementById("linkPago").innerHTML;
    window.open(url, "_blank");
  } else {
    // console.log("false");

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Tienes que hacer las selecciones requeridas",
    });

    document.getElementById("divDelivery").style.border = "1px solid #b72d2";
    document.getElementById("select2-delivery-container").style.color =
      "#b72d2d";
  }
}

async function cambios() {
  validarSucursal();
  var cantidadProducto = document.getElementById("num-product").value;

  // console.log("cantidadProducto", cantidadProducto);
  // console.log("iva", iva);
  // console.log("flete", flete);

  var botonMas = document.getElementById("mas");

  var botonMenos = document.getElementById("menos");

  calInventario = inventario - 1;
  // console.log(calInventario, "inventario");
  if (cantidadProducto >= calInventario) {
    botonMas.disabled = true;
  } else {
    botonMas.disabled = false;
  }
  if (cantidadProducto <= 1) {
    botonMenos.disabled = true;
  } else {
    botonMenos.disabled = false;
  }

  var intCantidadProducto = parseInt(cantidadProducto);
  var intPrecioNeto = parseInt(precioNeto);
  let intTotalNeto = intPrecioNeto * intCantidadProducto;

  var envioTotalNeto = document.getElementById("subtotal");
  var formateadoTotalNeto = intTotalNeto.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  envioTotalNeto.innerHTML = formateadoTotalNeto;

  var intIva = parseInt(iva);
  let intTotalIva = intIva * intCantidadProducto;

  var envioIva = document.getElementById("iva");
  var formateadoTotalIva = intTotalIva.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  envioIva.innerHTML = formateadoTotalIva;

  flete = document.getElementById("fleteI").value;
  intFlete = parseInt(flete);

  IntTotalFlete = intFlete * intCantidadProducto;

  var envioFlete = document.getElementById("flete");
  var formateadoFlete = IntTotalFlete.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  envioFlete.innerHTML = formateadoFlete;

  total = intTotalNeto + intTotalIva + IntTotalFlete;

  var formateadoTotal = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  document.getElementById("total").innerHTML = formateadoTotal;

  // var intIva = parseInt(iva);
  // let intTotalIv = intIva * intCantidadProducto;

  // var envioIva = document.getElementById("iva");
  // var formateadoTotalIva = intTotalIva.toLocaleString("en", {
  //   style: "currency",
  //   currency: "USD",
  // });
  // envioIva.innerHTML = formateadoTotalIva;

  // console.log("antesWompi");
  // console.log("cantidadProducto", cantidadProducto);
  // console.log("iva", iva);
  // console.log("intTotalNeto", intTotalNeto);
  // console.log("intTotalIva", intTotalIva);
  // console.log("IntTotalFlete", IntTotalFlete);
  // console.log("total", total);
  // console.log("FinAntesWompi");

  wompiapi();
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

async function wompiapi() {
  totalwompi = total * 100;
  // sku = document.getElementById("nombre").innerHTML;
  validarDelivery = document.getElementById("delivery").value;

  if (validarDelivery === "Domicilio") {
    // console.log("entra a domicilioooooooooooo");
    // console.log("sku", sku);

    var settings = {
      //url: "https://sandbox.wompi.co/v1/payment_links",
      url: "https://production.wompi.co/v1/payment_links",
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
        //Authorization: "Bearer prv_test_WDfNEEXbSwMctMtIvaoqCNUOYekfBE7p",
        Authorization: "Bearer prv_prod_1ZVu4OhiyKTGLRO5SyIqWRWb3q7b8i8t",
      },
      data: JSON.stringify({
        name: "sku",
        description: "Compra de ",
        single_use: true,
        collect_shipping: true,
        collect_customer_legal_id: false,
        amount_in_cents: totalwompi,
        currency: "COP",
        sku: "sku",
        redirect_url:
          "https://api.whatsapp.com/send?phone=573102242724&text=Hola%2C%20hice%20una%20compra%20por%20INSSA%20Prime%2C%20quisiera%20confirmar%20mis%20datos.",
        customer_data: {
          customer_references: [
            {
              label: "Observaciones",
              is_required: false,
            },
          ],
        },
      }),
    };

    $.ajax(settings).done(function (response) {
      // console.log(response);

      var id = response.data.id;
      var raiz = "https://checkout.wompi.co/l/";
      var url = raiz + id;
      /* console.log("link", url); */

      var envioUrl = (document.getElementById("link").value = url);
      var envioHrefQr = (document.getElementById("aQr").href = url);
      var envioHrefPago = (document.getElementById("linkPago").href = url);
      var envioHrefPago = (document.getElementById("linkPago").innerHTML = url);

      /* console.log("envioUrlValue", envioUrl, envioHrefQr); */

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          /*     console.log("Cargando datos...."); */
          resolve(response);

          new QRious({
            element: document.getElementById("codigo"),
            value: url, // La URL o el texto
            size: 250,
            backgroundAlpha: 0, // 0 para fondo transparente
            foreground: "black", // Color del QR
            level: "H", // Puede ser L,M,Q y H (L es el de menor nivel, H el mayor)
          });
        }, 0);
      });

      /* location.href = raiz + id; */
    });
  } else {
    // console.log("skuFisico", sku);
    // console.log("sku", sku);

    // console.log("totalwompi", totalwompi);

    var settings = await {
      //url: "https://sandbox.wompi.co/v1/payment_links",
      url: "https://production.wompi.co/v1/payment_links",

      method: "POST",
      timeout: 0,
      headers: {
        //Authorization: "Bearer prv_test_WDfNEEXbSwMctMtIvaoqCNUOYekfBE7p",
        Authorization: "Bearer prv_prod_1ZVu4OhiyKTGLRO5SyIqWRWb3q7b8i8t",
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        name: sku,
        description: "Compra de " + sku + " ",
        single_use: true,
        collect_shipping: false,
        collect_customer_legal_id: false,
        amount_in_cents: totalwompi,
        currency: "COP",
        sku: sku,
        redirect_url: url,
        customer_data: {
          customer_references: [
            {
              label: "Observaciones",
              is_required: true,
            },
          ],
        },
      }),
    };

    $.ajax(settings).done(function (response) {
      // console.log("response", response.data.id);
      var id = response.data.id;
      var raiz = "https://checkout.wompi.co/l/";
      var url = raiz + id;
      /* console.log("link", url); */

      var envioUrl = (document.getElementById("link").value = url);
      var envioHrefQr = (document.getElementById("aQr").href = url);
      var envioHrefPago = (document.getElementById("linkPago").href = url);
      var envioHrefPago = (document.getElementById("linkPago").innerHTML = url);

      /* console.log("envioUrlValue", envioUrl, envioHrefQr); */

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          /*     console.log("Cargando datos...."); */
          resolve(response);

          new QRious({
            element: document.getElementById("codigo"),
            value: url, // La URL o el texto
            size: 250,
            backgroundAlpha: 0, // 0 para fondo transparente
            foreground: "black", // Color del QR
            level: "H", // Puede ser L,M,Q y H (L es el de menor nivel, H el mayor)
          });
        }, 0);
      });

      /* location.href = raiz + id; */
    });
  }
}

function overWhat() {
  if (movil === true) {
    // console.log("hola movil", movil);
    document.getElementById("contTextWhat").style.display = "none";
  }
  document.getElementById("contTextWhat").style.display = "";
}
function outWhat() {
  if (movil === true) {
    // console.log("hola movil", movil);
    document.getElementById("contTextWhat").style.display = "none";
  }
  document.getElementById("contTextWhat").style.display = "none";
}

// Ventana modal
var modalDomi = document.getElementById("ventanaModalDomi");
// var modalFisico = document.getElementById("ventanaModalFisico");
// Botón que abre el modal
var botonn = document.getElementById("abrirModal");
// Hace referencia al elemento <span> que tiene la X que cierra la ventana
var spanDomi = document.getElementsByClassName("cerrarDomi")[0];
// var spanFisico = document.getElementsByClassName("cerrarFisico")[0];

// Cuando el usuario hace clic en el botón, se abre la ventana
botonn.addEventListener("click", function () {
  check = document.getElementById("opt-in");
  if (check.checked) {
    validarSucursal();
    // console.log("asasasdasd", validacion);
    if (validacion === true) {
      document.getElementById("divCiudadDeli").style.border =
        "1px solid #e6e6e6";
      document.getElementById("select2-ciudadDelivery-container").style.color =
        "#555";
      validarDelivery = document.getElementById("delivery").value;
      if (validarDelivery === "Domicilio") {
        var modal = document.getElementById("ventanaModalDomi");
        // console.log("domi");
        // console.log(modal);
        modal.style.display = "block";
        document.getElementById("amount-in-cents").value = totalwompi;
        document.getElementById("reference").value = referenciaPago;
        document.getElementById("shipping-address:city").value =
          validarSucursalDe;
      } else {
        // var modal = document.getElementById("ventanaModalFisico");
        // console.log("Nodomi");
        // console.log("pailas");
        document.getElementById("divSucursal").style.border =
          "1px solid #e6e6e6";
        document.getElementById(
          "select2-ciudadSucursal-container"
        ).style.color = "#555";
        generarQr();
      }
    } else {
      // console.log("false");

      delivery = document.getElementById("delivery").value;

      if (delivery === "Escoje una opción") {
        document.getElementById("divDelivery").style.border =
          "1px solid #b72d2d";
        document.getElementById("select2-delivery-container").style.color =
          "#b72d2d";

        // Swal.fire({
        //   title: 'Do you want to save the changes?',
        //   showDenyButton: false,
        //   showCancelButton: false,
        //   confirmButtonText: 'Save',
        //   denyButtonText: `Don't save`,
        // }).then((result) => {
        //   /* Read more about isConfirmed, isDenied below */
        //   if (result.isConfirmed) {
        //     var divvvv = document.getElementById('cDelivery');
        // divvvv.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        //   } else if (result.isDenied) {
        //     Swal.fire('Changes are not saved', '', 'info')
        //   }
        // })

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Tienes que hacer la selección envió",
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            var divvvv = document.getElementById("cDelivery");
            divvvv.scrollIntoView({ block: "center" });
          }
        });
      } else {
        document.getElementById("divDelivery").style.border =
          "1px solid #e6e6e6";
        document.getElementById("select2-delivery-container").style.color =
          "#555";

        ciudadDelivery = document.getElementById("ciudadDelivery").value;
        ciudadSucursal = document.getElementById("ciudadSucursal").value;
        if (delivery === "Domicilio") {
          if (ciudadDelivery === "Escoje una opción") {
            document.getElementById("divCiudadDeli").style.border =
              "1px solid #b72d2d";
            document.getElementById(
              "select2-ciudadDelivery-container"
            ).style.color = "#b72d2d";
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Tienes que hacer la selección de ciudad de envío",
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                var divvvv = document.getElementById("cDelivery");
                divvvv.scrollIntoView({ block: "center" });
              }
            });
          } else {
          }
        }

        if (delivery === "fisico") {
          if (ciudadSucursal === "Escoje una opción") {
            document.getElementById("divSucursal").style.border =
              "1px solid #b72d2d";
            document.getElementById(
              "select2-ciudadSucursal-container"
            ).style.color = "#b72d2d";
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Tienes que hacer la selección de la sucursal",
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                var divvvv = document.getElementById("cDelivery");
                divvvv.scrollIntoView({ block: "center" });
              }
            });
          }
        }
      }

      //
      // document.getElementById("divSucursal").style.border = "1px solid #b72d2d"

      // document.getElementById("select2-ciudadDelivery-container").style.color = "#b72d2d"
      // document.getElementById("select2-ciudadSucursal-container").style.color = "#b72d2d"
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Acepta términos y condiciones",
    });
  }
});
// Si el usuario hace clic en la x, la ventana se cierra
spanDomi.addEventListener("click", function () {
  modalDomi.style.display = "none";
});
// spanFisico.addEventListener("click", function () {
//   modalFisico.style.display = "none";
// });
// Si el usuario hace clic fuera de la ventana, se cierra.
window.addEventListener("click", function (event) {
  if (event.target == modalDomi) {
    modalDomi.style.display = "none";
  }
  // if (event.target == modalFisico) {
  // modalFisico.style.display = "none";
  // }
});
