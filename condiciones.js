var producto = document.getElementById("producto").value;
console.log("bari", producto);

switch (producto) {
  case "bari":
    var condiciones = [
    
      {
        Nombre:
          "Al utilizar el sistema de leche fresca, se requiere desincrustante de sarro para limpieza de calcificación por uso de lácteo. (Producto rinza)",
      },
    ];
    /* addLi(); */

    break;

  case "paris":
    var condiciones = [
      {
        Nombre: "aaaaaaaaa",
      },
    ];
    /* addLi(); */

    break;

  case "turin":
    var condiciones = [
      {
        Nombre: "aaaaaaaaa",
      },
    ];
    /* addLi(); */

    break;

  case "berna12L":
    var condiciones = [
      {
        Nombre: "aaaaaaaaa",
      },
    ];
    /* addLi(); */

    break;

  case "berna20L":
    var condiciones = [
      {
        Nombre: "aaaaaaaaa",
      },
    ];
    /* addLi(); */

    break;

  default:
    break;
}

function addLi() {
  var contenido;
  for (i = 0; i < condiciones.length; i++) {
    var li = document.createElement("li");
    var p = document.createElement("p");
    contenido = condiciones[i].Nombre;
    p.appendChild(document.createTextNode(contenido));
    document.querySelector("#condi").appendChild(li).appendChild(p);
  }
}
