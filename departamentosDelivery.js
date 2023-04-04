var $selectm = $("#municipios");
var $selectd = $("#ciudadDelivery");

const temp = [
  {
    id: 0,

    ciudades: [

      { ciudad: "Armenia Antioquia",
      variables: [
        {
          ica: "100",
          fleteBari: "63000",
          fleteParis: "111000",
          fleteTurin: "49600",
          fleteBerna12: "45000",
          fleteBerna20: "65000",
        },
      ], },

      { ciudad: "Caucasia",
      variables: [
        {
          ica: "100",
          fleteBari: "118125",
          fleteParis: "118125",
          fleteTurin: "90000",
          fleteBerna12: "108750",
          fleteBerna20: "118125",
        },
      ], },
      
      {
        ciudad: "Medellín",
        variables: [
          {
            ica: "100",
            fleteBari: "65500",
            fleteParis: "114000",
            fleteTurin: "52500",
            fleteBerna12: "47000",
            fleteBerna20: "69800",
          },
        ],
      },
      
      { ciudad: "Tarazá",
      variables: [
        {
          ica: "100",
          fleteBari: "141750",
          fleteParis: "141750",
          fleteTurin: "108000",
          fleteBerna12: "130500",
          fleteBerna20: "141750",
        },
      ], },
      
      { ciudad: "Yarumal",
      variables: [
        {
          ica: "100",
          fleteBari: "141750",
          fleteParis: "141750",
          fleteTurin: "108000",
          fleteBerna12: "130500",
          fleteBerna20: "141750",
        },
      ], },
     
      { ciudad: "Baranoa",
      variables: [
        {
          ica: "100",
          fleteBari: "86000",
          fleteParis: "86000",
          fleteTurin: "86625",
          fleteBerna12: "79750",
          fleteBerna20: "86000",
        },
      ], },
      {
        ciudad: "Barranquilla",
        variables: [
          {
            ica: "100",
            fleteBari: "70800",
            fleteParis: "122000",
            fleteTurin: "59000",
            fleteBerna12: "53000",
            fleteBerna20: "82000",
          },
        ],
      },
     
      { ciudad: "Sabanalarga",
      variables: [
        {
          ica: "100",
          fleteBari: "86625",
          fleteParis: "86625",
          fleteTurin: "79000",
          fleteBerna12: "79750",
          fleteBerna20: "86625",
        },
      ], },
     
      {
        ciudad: "Bogotá Dc",
        variables: [
          {
            ica: "100",
            fleteBari: "57800",
            fleteParis: "103000",
            fleteTurin: "43000",
            fleteBerna12: "39500",
            fleteBerna20: "52000",
          },
        ],
      },

     
      {
        ciudad: "Cartagena de Indias",
        variables: [
          {
            ica: "100",
            fleteBari: "76000",
            fleteParis: "129000",
            fleteTurin: "65000",
            fleteBerna12: "57500",
            fleteBerna20: "95000",
          },
        ],
      },
     
      { ciudad: "El Carmen de Bolívar",
      variables: [
        {
          ica: "100",
          fleteBari: "118125",
          fleteParis: "118125",
          fleteTurin: "90000",
          fleteBerna12: "108750",
          fleteBerna20: "118125",
        },
      ], },
     
      { ciudad: "Magangué",
      variables: [
        {
          ica: "100",
          fleteBari: "118125",
          fleteParis: "118125",
          fleteTurin: "90000",
          fleteBerna12: "108750",
          fleteBerna20: "118125",
        },
      ], },
      
      { ciudad: "Mompós",
      variables: [
        {
          ica: "100",
          fleteBari: "157500",
          fleteParis: "157500",
          fleteTurin: "120000",
          fleteBerna12: "145000",
          fleteBerna20: "157500",
        },
      ], },
      
      { ciudad: "San Jacinto",
      variables: [
        {
          ica: "100",
          fleteBari: "141750",
          fleteParis: "141750",
          fleteTurin: "108000",
          fleteBerna12: "130500",
          fleteBerna20: "141750",
        },
      ], },
      { ciudad: "San Juan Nepomuceno",
      variables: [
        {
          ica: "100",
          fleteBari: "108125",
          fleteParis: "108125",
          fleteTurin: "90000",
          fleteBerna12: "108750",
          fleteBerna20: "108125",
        },
      ], },
      
      { ciudad: "Puerto Boyacá",
      variables: [
        {
          ica: "100",
          fleteBari: "118125",
          fleteParis: "118125",
          fleteTurin: "90000",
          fleteBerna12: "108000",
          fleteBerna20: "118125",
        },
      ], },
     
      {
        ciudad: "Tunja",
        variables: [
          {
            ica: "100",
            fleteBari: "66000",
            fleteParis: "114000",
            fleteTurin: "52000",
            fleteBerna12: "47000",
            fleteBerna20: "70000",
          },
        ],
      },
     
      {
        ciudad: "Manizales",
        variables: [
          {
            ica: "100",
            fleteBari: "68200",
            fleteParis: "118000",
            fleteTurin: "55000",
            fleteBerna12: "49000",
            fleteBerna20: "76000",
          },
        ],
      },
      
      {
        ciudad: "Florencia Caquetá",
        variables: [
          {
            ica: "100",
            fleteBari: "87000",
            fleteParis: "146000",
            fleteTurin: "79000",
            fleteBerna12: "69000",
            fleteBerna20: "119800",
          },
        ],
      },
     
      { ciudad: "Yopal",
      variables: [
        {
          ica: "100",
          fleteBari: "75000",
          fleteParis: "129000",
          fleteTurin: "65000",
          fleteBerna12: "57000",
          fleteBerna20: "93000",
        },
      ],
     },

     
      {
        ciudad: "Popayán",
        variables: [
          {
            ica: "100",
            fleteBari: "71000",
            fleteParis: "122000",
            fleteTurin: "59000",
            fleteBerna12: "52000",
            fleteBerna20: "82000",
          },
        ],
      },
      

      { ciudad: "Aguachica",
      variables: [
        {
          ica: "100",
          fleteBari: "74000",
          fleteParis: "74000",
          fleteTurin: "67500",
          fleteBerna12: "68500",
          fleteBerna20: "74000",
        },
      ],
     },
      { ciudad: "Agustín Codazzi",
      variables: [
        {
          ica: "100",
          fleteBari: "110250",
          fleteParis: "110250",
          fleteTurin: "84000",
          fleteBerna12: "101500",
          fleteBerna20: "110250",
        },
      ], },
     
      { ciudad: "Bosconia",
      variables: [
        {
          ica: "100",
          fleteBari: "82000",
          fleteParis: "82000",
          fleteTurin: "67250",
          fleteBerna12: "69500",
          fleteBerna20: "82000",
        },
      ], },
     
      { ciudad: "La Jagua de Ibirico",
      variables: [
        {
          ica: "100",
          fleteBari: "67250",
          fleteParis: "67250",
          fleteTurin: "66000",
          fleteBerna12: "63500",
          fleteBerna20: "67250",
        },
      ], },
     
      { ciudad: "Pailitas",
      variables: [
        {
          ica: "100",
          fleteBari: "78750",
          fleteParis: "78750",
          fleteTurin: "60000",
          fleteBerna12: "72500",
          fleteBerna20: "78750",
        },
      ], },
     
      { ciudad: "San Alberto",
      variables: [
        {
          ica: "100",
          fleteBari: "67250",
          fleteParis: "67250",
          fleteTurin: "66000",
          fleteBerna12: "63500",
          fleteBerna20: "67250",
        },
      ], },
     
      {
        ciudad: "Valledupar",
        variables: [
          {
            ica: "100",
            fleteBari: "81000",
            fleteParis: "136000",
            fleteTurin: "70800",
            fleteBerna12: "62000",
            fleteBerna20: "105000",
          },
        ],
      },
      

      {
        ciudad: "Agua de Dios",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
      },
      { ciudad: "Albán",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Anapoima",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Anolaima",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Apulo",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Arbeláez",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Beltrán",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Bituima",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Bojacá",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Cabrera",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Cachipay",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Cajicá",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Caparrapí",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Cáqueza",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Carmen de Carupa",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Chaguaní",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Chía",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Chipaque",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Choachí",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Chocontá",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Cogua",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Cota",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Cucunubá",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "El Colegio",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "El Peñón",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "El Rosal",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Facatativá",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Fómeque",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Fosca",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Funza",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Fúquene",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Fusagasugá",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Gachalá",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Gachancipá",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Gachetá",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Gama",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Girardot",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Granada",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Guachetá",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Guaduas",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Guasca",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Guataquí",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Guatavita",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Guayabal de Síquima",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Guayabetal",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Gutiérrez",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Jerusalén",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Junín",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "La Calera",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "La Mesa",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "La Palma",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "La Peña",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "La Vega",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Lenguazaque",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ],
     },
      { ciudad: "Machetá",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Madrid",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Manta",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Medina",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Mosquera",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Nariño",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Nemocón",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Nilo",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Nimaima",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Nocaima",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Pacho",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Paime",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Pandi",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Paratebueno",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Pasca",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Puerto Salgar",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Pulí",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Quebradanegra",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Quetame",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Quipile",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Ricaurte",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "San Antonio del Tequendama",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "San Bernardo",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "San Cayetano",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "San Francisco",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "San Juan de Rioseco",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Sasaima",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Sesquilé",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Sibaté",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Silvania",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Simijaca",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Soacha",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Sopó",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Subachoque",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Suesca",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Supatá",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Susa",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Sutatausa",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Tabio",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Tausa",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Tena",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Tenjo",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Tibacuy",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Tibirita",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Tocaima",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Tocancipá",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Topaipí",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Ubalá",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Ubaque",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Ubaté",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Une",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "útica",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Venecia",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Vergara",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Vianí",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Villagómez",
        variables: [
          {
            ica: "100",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "Villapinzón",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ], },
      { ciudad: "Villeta",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ], },
      { ciudad: "Viotá",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ], },
      { ciudad: "Yacopí",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ], },
      { ciudad: "Zipacón",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ], },
      { ciudad: "Zipaquirá",
      variables: [
        {
          ica: "100",
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
        },
      ], },

     
      { ciudad: "Cereté",
      variables: [
        {
          ica: "100",
          fleteBari: "110250",
          fleteParis: "110250",
          fleteTurin: "84000",
          fleteBerna12: "101500",
          fleteBerna20: "110250",
        },
      ], },
     
      { ciudad: "Chinú",
      variables: [
        {
          ica: "100",
          fleteBari: "126000",
          fleteParis: "126000",
          fleteTurin: "96000",
          fleteBerna12: "116000",
          fleteBerna20: "126000",
        },
      ], },
      { ciudad: "Ciénaga de Oro",
      variables: [
        {
          ica: "100",
          fleteBari: "112125",
          fleteParis: "112125",
          fleteTurin: "90000",
          fleteBerna12: "108750",
          fleteBerna20: "112125",
        },
      ], },
      
      { ciudad: "La Apartada",
      variables: [
        {
          ica: "100",
          fleteBari: "126000",
          fleteParis: "126000",
          fleteTurin: "96000",
          fleteBerna12: "116000",
          fleteBerna20: "126000",
        },
      ], },
      { ciudad: "Lorica",
      variables: [
        {
          ica: "100",
          fleteBari: "126000",
          fleteParis: "126000",
          fleteTurin: "96000",
          fleteBerna12: "116000",
          fleteBerna20: "126000",
        },
      ], },
     
      { ciudad: "Montelíbano",
      variables: [
        {
          ica: "100",
          fleteBari: "126000",
          fleteParis: "126000",
          fleteTurin: "96000",
          fleteBerna12: "116000",
          fleteBerna20: "126000",
        },
      ], },
      {
        ciudad: "Montería",
        variables: [
          {
            ica: "100",
            fleteBari: "83000",
            fleteParis: "139800",
            fleteTurin: "74000",
            fleteBerna12: "65000",
            fleteBerna20: "111000",
          },
        ],
      },
      
      { ciudad: "Planeta Rica",
        variables: [
          {
            ica: "100",
            fleteBari: "118125",
            fleteParis: "118125",
            fleteTurin: "90000",
            fleteBerna12: "108750",
            fleteBerna20: "118125",
          },
        ],
       },
     
      { ciudad: "San Antero",
        variables: [
          {
            ica: "100",
            fleteBari: "126000",
            fleteParis: "126000",
            fleteTurin: "86000",
            fleteBerna12: "95000",
            fleteBerna20: "126000",
          },
        ],
       },
      
      { ciudad: "Tierralta",
        variables: [
          {
            ica: "100",
            fleteBari: "149625",
            fleteParis: "149625",
            fleteTurin: "114000",
            fleteBerna12: "137750",
            fleteBerna20: "149625",
          },
        ],
       },
     
      { ciudad: "Neiva",
      variables: [
        {
          ica: "100",
          fleteBari: "70000",
          fleteParis: "121000",
          fleteTurin: "58000",
          fleteBerna12: "52000",
          fleteBerna20: "81000",
        },
      ],
    },
     
      { ciudad: "Albania",
      variables: [
        {
          ica: "100",
          fleteBari: "103000",
          fleteParis: "103000",
          fleteTurin: "94500",
          fleteBerna12: "87000",
          fleteBerna20: "103000",
        },
      ],
     },
      { ciudad: "Barrancas",
      variables: [
        {
          ica: "100",
          fleteBari: "84000",
          fleteParis: "84000",
          fleteTurin: "72500",
          fleteBerna12: "78750",
          fleteBerna20: "84000",
        },
      ], },
     
      { ciudad: "Fonseca",
      variables: [
        {
          ica: "100",
          fleteBari: "78750",
          fleteParis: "78750",
          fleteTurin: "60000",
          fleteBerna12: "72500",
          fleteBerna20: "78750",
        },
      ], },
      { ciudad: "Hatonuevo",
      variables: [
        {
          ica: "100",
          fleteBari: "78750",
          fleteParis: "78750",
          fleteTurin: "60000",
          fleteBerna12: "72500",
          fleteBerna20: "78750",
        },
      ], },
     
      { ciudad: "Maicao",
      variables: [
        {
          ica: "100",
          fleteBari: "86625",
          fleteParis: "86625",
          fleteTurin: "66000",
          fleteBerna12: "79750",
          fleteBerna20: "86625",
        },
      ], },
      
      { ciudad: "Riohacha",
      variables: [
        {
          ica: "100",
          fleteBari: "126000",
          fleteParis: "126000",
          fleteTurin: "96000",
          fleteBerna12: "116000",
          fleteBerna20: "126000",
        },
      ], },
      
      { ciudad: "Ciénaga",
      variables: [
        {
          ica: "100",
          fleteBari: "86625",
          fleteParis: "86625",
          fleteTurin: "66000",
          fleteBerna12: "79750",
          fleteBerna20: "86625",
        },
      ], },
     
      { ciudad: "El Banco",
      variables: [
        {
          ica: "100",
          fleteBari: "141750",
          fleteParis: "141750",
          fleteTurin: "108000",
          fleteBerna12: "130500",
          fleteBerna20: "141750",
        },
      ], },
      
      { ciudad: "Fundación",
      variables: [
        {
          ica: "100",
          fleteBari: "110250",
          fleteParis: "110250",
          fleteTurin: "84000",
          fleteBerna12: "101500",
          fleteBerna20: "110250",
        },
      ], },
     
    
      { ciudad: "Plato",
      variables: [
        {
          ica: "100",
          fleteBari: "149625",
          fleteParis: "149625",
          fleteTurin: "114000",
          fleteBerna12: "137750",
          fleteBerna20: "149625",
        },
      ], },
     
      { ciudad: "Santa Marta",
      variables: [
        {
          ica: "100",
          fleteBari: "75000",
          fleteParis: "129000",
          fleteTurin: "65000",
          fleteBerna12: "57000",
          fleteBerna20: "93000",
        },
      ],
    },
      
      { ciudad: "Villavicencio",
      variables: [
        {
          ica: "100",
          fleteBari: "65500",
          fleteParis: "116000",
          fleteTurin: "54000",
          fleteBerna12: "48000",
          fleteBerna20: "73000",
        },
      ],
     },
      
      { ciudad: "Pasto",
      variables: [
        {
          ica: "100",
          fleteBari: "84000",
          fleteParis: "142000",
          fleteTurin: "75500",
          fleteBerna12: "66000",
          fleteBerna20: "114000",
        },
      ],
     },
     
      { ciudad: "Cúcuta",
      variables: [
        {
          ica: "100",
          fleteBari: "72000",
          fleteParis: "124000",
          fleteTurin: "60000",
          fleteBerna12: "54000",
          fleteBerna20: "84000",
        },
      ],
     },
     
      { ciudad: "Los Patios",
      variables: [
        {
          ica: "100",
          fleteBari: "69375",
          fleteParis: "69375",
          fleteTurin: "60000",
          fleteBerna12: "66250",
          fleteBerna20: "69375",
        },
      ], },
     
      { ciudad: "Pamplona",
      variables: [
        {
          ica: "100",
          fleteBari: "69375",
          fleteParis: "69375",
          fleteTurin: "60000",
          fleteBerna12: "66250",
          fleteBerna20: "69375",
        },
      ], },
     
      { ciudad: "Armenia Quindío",
      variables: [
        {
          ica: "100",
          fleteBari: "92000",
          fleteParis: "92000",
          fleteTurin: "86625",
          fleteBerna12: "89750",
          fleteBerna20: "92000",
        },
      ],
     },
     
      { ciudad: "Pereira",
      variables: [
        {
          ica: "100",
          fleteBari: "67000",
          fleteParis: "115000",
          fleteTurin: "54000",
          fleteBerna12: "48000",
          fleteBerna20: "72000",
        },
      ],
     },
     
      { ciudad: "Barrancabermeja",
      variables: [
        {
          ica: "100",
          fleteBari: "93000",
          fleteParis: "93000",
          fleteTurin: "69375",
          fleteBerna12: "76250",
          fleteBerna20: "93000",
        },
      ], },
     
      { ciudad: "Bucaramanga",
      variables: [
        {
          ica: "100",
          fleteBari: "66000",
          fleteParis: "115000",
          fleteTurin: "53500",
          fleteBerna12: "48000",
          fleteBerna20: "72000",
        },
      ],
     },
      
      { ciudad: "El Socorro",
      variables: [
        {
          ica: "100",
          fleteBari: "69375",
          fleteParis: "69375",
          fleteTurin: "60000",
          fleteBerna12: "66250",
          fleteBerna20: "69375",
        },
      ], },
      
      { ciudad: "San Gil",
      variables: [
        {
          ica: "100",
          fleteBari: "69375",
          fleteParis: "69375",
          fleteTurin: "60000",
          fleteBerna12: "66250",
          fleteBerna20: "69375",
        },
      ], },
      
      { ciudad: "Corozal",
      variables: [
        {
          ica: "100",
          fleteBari: "204750",
          fleteParis: "204750",
          fleteTurin: "156000",
          fleteBerna12: "188500",
          fleteBerna20: "204750",
        },
      ], },
      
      { ciudad: "Ovejas",
      variables: [
        {
          ica: "100",
          fleteBari: "149625",
          fleteParis: "149625",
          fleteTurin: "114000",
          fleteBerna12: "137750",
          fleteBerna20: "149625",
        },
      ], },
      
      { ciudad: "San Marcos",
      variables: [
        {
          ica: "100",
          fleteBari: "157500",
          fleteParis: "157500",
          fleteTurin: "120000",
          fleteBerna12: "145000",
          fleteBerna20: "157500",
        },
      ], },
      { ciudad: "San Onofre",
      variables: [
        {
          ica: "100",
          fleteBari: "141750",
          fleteParis: "141750",
          fleteTurin: "108000",
          fleteBerna12: "130500",
          fleteBerna20: "141750",
        },
      ], },
      { ciudad: "San Pedro",
      variables: [
        {
          ica: "100",
          fleteBari: "126000",
          fleteParis: "126000",
          fleteTurin: "96000",
          fleteBerna12: "116000",
          fleteBerna20: "126000",
        },
      ], },
      
      { ciudad: "Sincelejo",
      variables: [
        {
          ica: "100",
          fleteBari: "83000",
          fleteParis: "131000",
          fleteTurin: "73500",
          fleteBerna12: "64000",
          fleteBerna20: "109000",
        },
      ],
     },
      
      { ciudad: "Tolú",
      variables: [
        {
          ica: "100",
          fleteBari: "126000",
          fleteParis: "126000",
          fleteTurin: "96000",
          fleteBerna12: "116000",
          fleteBerna20: "126000",
        },
      ], },
     
      { ciudad: "Honda",
      variables: [
        {
          ica: "100",
          fleteBari: "102375",
          fleteParis: "102375",
          fleteTurin: "78000",
          fleteBerna12: "94250",
          fleteBerna20: "102375",
        },
      ], },
      { ciudad: "Ibagué",
      variables: [
        {
          ica: "100",
          fleteBari: "65000",
          fleteParis: "112000",
          fleteTurin: "52000",
          fleteBerna12: "46000",
          fleteBerna20: "68000",
        },
      ],
     },
      
      { ciudad: "Buga",
      variables: [
        {
          ica: "100",
          fleteBari: "78000",
          fleteParis: "78000",
          fleteTurin: "72500",
          fleteBerna12: "74500",
          fleteBerna20: "78000",
        },
      ], },
      
      { ciudad: "Cali",
      variables: [
        {
          ica: "100",
          fleteBari: "63000",
          fleteParis: "110000",
          fleteTurin: "49000",
          fleteBerna12: "45000",
          fleteBerna20: "63000",
        },
      ],
     },

     { ciudad: "Otra",
     variables: [
       {
         ica: "0",
         fleteBari: "0",
         fleteParis: "0",
         fleteTurin: "0",
         fleteBerna12: "0",
         fleteBerna20: "0",
       },
     ],
    },
      
    ],
  },
];

$(document).ready(function () {
  temp;

  post_municipios();


});
var rest = temp.find((element) => element.ciudades);
var re = rest.ciudades;

function post_municipios() {
  $.each(re, function (ciudades, ciudad) {
    $selectm.append(
      '<option value="' + ciudad.ciudad + '">' + ciudad.ciudad + "</option>"
    );
    $selectd.append(
      '<option value="' + ciudad.ciudad + '">' + ciudad.ciudad + "</option>"
    );
  });
}

function ShowSelectedCMunicipios() {
  var selccionCiudad = document.getElementById("municipios").value;
  var variablesCiudad = re.find((element) => element.ciudad == selccionCiudad);
  var variables = variablesCiudad.variables;

  var array_var = variables.find((element) => element.ica);

  var ica = array_var.ica;
  var producto = document.getElementById("producto").value;

  switch (producto) {
    case "bari":
      var flete = array_var.fleteBari;
      var ica = array_var.ica;
      break;

    case "paris":
      var flete = array_var.fleteParis;
      var ica = array_var.ica;
      break;

    case "turin":
      var flete = array_var.fleteTurin;
      var ica = array_var.ica;
      break;

    case "berna12L":
      var flete = array_var.fleteBerna12;
      var ica = array_var.ica;
      break;

    case "berna20L":
      var flete = array_var.fleteBerna20;
      var ica = array_var.ica;
      break;

    default:
      break;
  }

  var inputIca = (document.getElementById("ica").value = ica);
  var inputFlete = (document.getElementById("fleteI").value = flete);


}

function ShowSelectedCDelivery() {
  var selccionCiudad = document.getElementById("ciudadDelivery").value;
  var variablesCiudad = re.find((element) => element.ciudad == selccionCiudad);
  var variables = variablesCiudad.variables;

  var array_var = variables.find((element) => element.ica);

  var ica = array_var.ica;

  var producto = document.getElementById("producto").value;

  switch (producto) {
    case "bari":
      var flete = array_var.fleteBari;
      

      break;

    case "paris":
      var flete = array_var.fleteParis;
    
      break;

    case "turin":
      var flete = array_var.fleteTurin;

      break;

    case "berna12L":
      var flete = array_var.fleteBerna12;

      break;

    case "berna20L":
      var flete = array_var.fleteBerna20;
      break;

    default:
      break;
  }

 

  var inputIca = (document.getElementById("ica").value = ica);
  var inputFlete = (document.getElementById("fleteI").value = flete);


}
