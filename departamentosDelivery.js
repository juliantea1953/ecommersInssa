var $selectm = $("#municipios");
var $selectd = $("#ciudadDelivery");

const temp = [
  {
    id: 0,

    ciudades: [

      { ciudad: "Armenia Antioquia",
      variables: [
        {
          ica: "",
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
          ica: "2",
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
            ica: "3",
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
          ica: "4",
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
          ica: "5",
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
          ica: "6",
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
            ica: "7",
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
          ica: "8",
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
            ica: "11.04",
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
            ica: "10",
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
          ica: "11",
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
          ica: "12",
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
          ica: "13",
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
          ica: "14",
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
          ica: "15",
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
          ica: "16",
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
            ica: "17",
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
            ica: "18",
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
            ica: "19",
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
          ica: "20",
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
            ica: "21",
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
          ica: "22",
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
          ica: "23",
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
          ica: "24",
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
          ica: "25",
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
          ica: "26",
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
          ica: "27",
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
            ica: "28",
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
            ica: "29",
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
          ica: "30",
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
          ica: "31",
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
          ica: "32",
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
          ica: "33",
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
          ica: "34",
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
          ica: "35",
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
          ica: "36",
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
          ica: "37",
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
          ica: "38",
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
          ica: "39",
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
          ica: "40",
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
          ica: "41",
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
          ica: "42",
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
          ica: "43",
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
          ica: "44",
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
          ica: "45",
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
          ica: "46",
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
          ica: "47",
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
          ica: "48",
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
          ica: "49",
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
          ica: "50",
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
          ica: "51",
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
          ica: "52",
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
          ica: "53",
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
          ica: "54",
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
          ica: "55",
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
          ica: "56",
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
          ica: "57",
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
          ica: "58",
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
          ica: "59",
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
          ica: "60",
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
          ica: "61",
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
          ica: "62",
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
          ica: "63",
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
          ica: "64",
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
          ica: "65",
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
          ica: "66",
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
          ica: "67",
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
          ica: "68",
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
          ica: "69",
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
          ica: "70",
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
          ica: "71",
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
          ica: "72",
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
          ica: "73",
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
          ica: "74",
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
          ica: "75",
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
          ica: "76",
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
          ica: "77",
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
          ica: "78",
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
          ica: "79",
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
          ica: "80",
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
          ica: "81",
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
          ica: "82",
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
            ica: "83",
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
            ica: "84",
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
            ica: "85",
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
            ica: "86",
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
            ica: "87",
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
            ica: "88",
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
            ica: "89",
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
            ica: "90",
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
            ica: "91",
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
            ica: "92",
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
            ica: "93",
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
            ica: "94",
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
            ica: "95",
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
            ica: "96",
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
            ica: "97",
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
            ica: "98",
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
            ica: "99",
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
            ica: "101",
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
            ica: "102",
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
            ica: "103",
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
            ica: "104",
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
            ica: "105",
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
            ica: "106",
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
            ica: "107",
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
            ica: "108",
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
            ica: "109",
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
            ica: "110",
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
            ica: "111",
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
            ica: "112",
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
            ica: "113",
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
            ica: "114",
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
            ica: "115",
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
            ica: "116",
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
            ica: "117",
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          },
        ],
       },
      { ciudad: "118",
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
            ica: "119",
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
            ica: "120",
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
            ica: "121",
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
            ica: "122",
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
            ica: "123",
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
            ica: "124",
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
            ica: "125",
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
            ica: "126",
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
            ica: "127",
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
            ica: "128",
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
            ica: "129",
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
            ica: "130",
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
            ica: "131",
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
            ica: "132",
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
            ica: "133",
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
            ica: "134",
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
            ica: "135",
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
            ica: "136",
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
            ica: "137",
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
          ica: "138",
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
          ica: "139",
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
          ica: "140",
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
          ica: "141",
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
          ica: "142",
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
          ica: "143",
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
          ica: "144",
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
          ica: "145",
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
          ica: "146",
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
          ica: "147",
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
          ica: "148",
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
          ica: "149",
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
            ica: "150",
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
            ica: "151",
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
            ica: "152",
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
            ica: "153",
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
          ica: "154",
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
          ica: "155",
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
          ica: "156",
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
          ica: "157",
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
          ica: "158",
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
          ica: "159",
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
          ica: "160",
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
          ica: "161",
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
          ica: "162",
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
          ica: "163",
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
          ica: "164",
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
          ica: "165",
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
          ica: "166",
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
          ica: "167",
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
          ica: "168",
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
          ica: "169",
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
          ica: "170",
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
          ica: "171",
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
          ica: "172",
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
          ica: "173",
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
          ica: "174",
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
          ica: "175",
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
          ica: "176",
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
          ica: "177",
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
          ica: "178",
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
          ica: "179",
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
          ica: "180",
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
          ica: "181",
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
          ica: "182",
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
          ica: "183",
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
          ica: "184",
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
          ica: "185",
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
          ica: "186",
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
          ica: "7.7",
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
