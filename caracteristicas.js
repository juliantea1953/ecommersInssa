var producto = document.getElementById("producto").value;
console.log("bari", producto);

switch (producto) {
  case "bari":
    var character = [
      {
        Nombre:
          "Dispensa 6 bebidas: espresso, americano, agua caliente, cappuccino, latte, leche caliente.",
      },
      {
        Nombre: "Pantalla touch de 9.5 x 5.5 cm.",
      },
      {
        Nombre: "Programación digital.",
      },
      {
        Nombre: "Contenedor de café con capacidad de 500 gr aprox.",
      },
      {
        Nombre: "Ideal para dispensar hasta 70 bebidas al día.",
      },
      {
        Nombre: "Temperatura programable.",
      },
      {
        Nombre: "Bandeja de residuos.",
      },
      {
        Nombre: "Registro de ventas por selección.",
      },
      {
        Nombre: "Fácil manejo y limpieza.",
      },
      {
        Nombre: "Dimensiones: Ancho 27cm - Fondo 44cm - Alto 53cm",
      },
      {
        Nombre: "Peso: 20kg",
      },
      {
        Nombre: "Voltaje: 110v",
      },
      {
        Nombre: "Garantía 12 meses o 8.000 servicios.",
      },
      {
        Nombre: "Kit de filtros.",
      },
      {
        Nombre: "Kit de bomba autónoma",
      },
    ];
    /* addLi(); */

    break;

    case "paris":
        var character = [
          {
            Nombre:
            "Dispensa 7 bebidas: café con leche, largo, corto y cortado, cappuccino, mocaccino, chocolate, y botón para lavado automático."          },
          {
            Nombre: "Pantalla LCD integrada de 10.1” para visualización de imágenes.",
          },
          {
            Nombre: "4 contenedores de productos solubles",
          },
          {
            Nombre: "Mayor higiene, frescura y presentación de los productos.",
          },
          {
            Nombre: "Eficiente, rentable y versátil.",
          },
          {
            Nombre: "100 W/hora en modo standby - 300 W / cada 50 bebidas.",
          },
          {
            Nombre: "Contador de bebidas dispensadas - Total y por cada selección.",
          },
          {
            Nombre: "Dimensiones: Ancho 30 cm - Fondo 50 cm - Alto 73 cm.",
          },
          {
            Nombre: "Peso: 28 kg.",
          },
          {
            Nombre: "Voltaje: 110v.",
          },
          {
            Nombre: "Garantía 12 meses o 30.000 servicios.",
          },
          {
            Nombre: "Incluye filtro de agua.",
          },
          {
            Nombre: "Incluye Kit filtro",
          },
          {
            Nombre: "Incluye Kit acoples",
          },
          {
            Nombre: "Incluye caja de mezcladores",
          },
        
        ];
        /* addLi(); */
    
        break;

    case "turin":
        var character = [
          {
            Nombre:
            "Dispensa 3 bebidas diferentes."},
          {
            Nombre: "3 Contenedores para producto soluble.",
          },
          {
            Nombre: "Conexión al punto de agua (opcional bomba autónoma).",
          },
          {
            Nombre: "Fácil manejo y limpieza.",
          },
          {
            Nombre: "Dimensiones: Alto 67cm - Ancho 30cm - Fondo 46cm.",
          },
          {
            Nombre: "Peso: 20kg.",
          },
          {
            Nombre: "Potencia: 1800w.",
          },
          {
            Nombre: "Voltaje: 110v.",
          },
          {
            Nombre: "Garantía 12 meses.",
          },
          {
            Nombre: "Incluye depurador de agua.",
          },
          {
            Nombre: "incluye kit para instalación de filtros.",
          },
          {
            Nombre: "incluye kit de racores para instalación.",
          },
              
        ];
        /* addLi(); */
    
        break;

    case "berna12L":
        var character = [
          {
            Nombre:
            "dispensadora especializada para cafeterías, restaurantes, fruterías, empresas y centros deportivos."},
          {
            Nombre: "Agitador central por medio de aspa.",
          },
          {
            Nombre: "Push para dispensado del producto.",
          },
          {
            Nombre: "Bandeja de residuos.",
          },
          {
            Nombre: "Botón para la regulación de temperatura de 0 a 5 grados.",
          },
          {
            Nombre: "Control automático de temperatura.",
          },
          {
            Nombre: "Compresor de 1/4 HP.",
          },
          {
            Nombre: "Dimensiones: alto 72,4 cm - ancho 27 cm - fondo 38 cm.",
          },
          {
            Nombre: "Peso: 20/24 kg.",
          },
          {
            Nombre: "Potencia: 330 W.",
          },
          {
            Nombre: "Voltaje: 110 V.",
          },
          {
            Nombre: "Consumo: 3 Amp.",
          },
          {
            Nombre: "Frecuencia 60 Hz.",
          },
          {
            Nombre: "Polo a tierra.",
          },
          {
            Nombre: "Garantía 12 meses.",
          },
         
              
        ];
        /* addLi(); */
    
        break;

    case "berna20L":
        var character = [
          {
            Nombre:
            "Dispensadora especializada para cafeterías, restaurantes, fruterías, empresas y centros deportivos."},
          {
            Nombre: "Capacidad de 20 litros.",
          },
          {
            Nombre: "Agitador central por medio de aspa.",
          },
          {
            Nombre: "Push para el dispensado del producto.",
          },
          {
            Nombre: "Bandeja de residuos.",
          },
          {
            Nombre: "Botón para la regulación de temperatura de 0 a 6 grados.",
          },
          {
            Nombre: "Control automático de temperatura.",
          },
          {
            Nombre: "Compresor de 1/4 hp.",
          },
          {
            Nombre: "Dimensiones: Alto 72,5cm - Ancho 78,5cm - Fondo 38cm.",
          },
          {
            Nombre: "Peso: 20/25kg.",
          },
          {
            Nombre: "Potencia: 330W.",
          },
          {
            Nombre: "Voltaje: 115v.",
          },
          {
            Nombre: "Consumo: 3 amp.",
          },
          {
            Nombre: "Frecuencia 60 hz.",
          },
          {
            Nombre: "Polo a tierra.",
          },
          {
            Nombre: "Garantía 12 meses.",
          },
         
              
        ];
        /* addLi(); */
    
        break;

  default:
    break;
}

function addLi() {
  var contenido;
  for (i = 0; i < character.length; i++) {
    var li = document.createElement("li");
    var p = document.createElement("p");
    contenido = character[i].Nombre;
    p.appendChild(document.createTextNode(contenido));
    document.querySelector("#care").appendChild(li).appendChild(p);
  }
}
