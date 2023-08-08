// var $selectm = $("#municipios");
var $selectd = $("#ciudadDelivery");

const temp = [
  {
    id: 0,

    ciudades: [

      { ciudad: "Armenia Antioquia",
      variables: [
        {
          ica: "0",
          fleteBari: "63000",
          fleteParis: "111000",
          fleteTurin: "49600",
          fleteBerna12: "45000",
          fleteBerna20: "65000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ], },

      { ciudad: "Caucasia",
      variables: [
        {
          
          fleteBari: "118125",
          fleteParis: "118125",
          fleteTurin: "90000",
          fleteBerna12: "108750",
          fleteBerna20: "118125",
          fleteGrecia1t: "111750",
          fleteGrecia2t: "173250",
          fleteNeve110: "151250",
          fleteNeve220: "151250",
          fleteAsis286: "111750",
        },
      ], },
      
      {
        ciudad: "Medellín",
        variables: [
          {
            
            fleteBari: "65500",
            fleteParis: "114000",
            fleteTurin: "52500",
            fleteBerna12: "47000",
            fleteBerna20: "69800",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
      },
      
      { ciudad: "Tarazá",
      variables: [
        {
          
          fleteBari: "141750",
          fleteParis: "141750",
          fleteTurin: "108000",
          fleteBerna12: "130500",
          fleteBerna20: "141750",
          fleteGrecia1t: "135000",
          fleteGrecia2t: "163125",
          fleteNeve110: "177188",
          fleteNeve220: "177188",
          fleteAsis286: "196875",
        },
      ], },
      
      { ciudad: "Yarumal",
      variables: [
        {
          
          fleteBari: "141750",
          fleteParis: "141750",
          fleteTurin: "108000",
          fleteBerna12: "130500",
          fleteBerna20: "141750",
          fleteGrecia1t: "92500",
          fleteGrecia2t: "94063",
          fleteNeve110: "177188",
          fleteNeve220: "177188",
          fleteAsis286: "112326",
        },
      ], },
     
      { ciudad: "Baranoa",
      variables: [
        {
          
          fleteBari: "86000",
          fleteParis: "86000",
          fleteTurin: "86625",
          fleteBerna12: "79750",
          fleteBerna20: "86000",
          fleteGrecia1t: "108809",
          fleteGrecia2t: "173456",
          fleteNeve110: "148375",
          fleteNeve220: "148375",
          fleteAsis286: "98250",
        },
      ], },
      {
        ciudad: "Barranquilla",
        variables: [
          {
            
            fleteBari: "70800",
            fleteParis: "122000",
            fleteTurin: "59000",
            fleteBerna12: "53000",
            fleteBerna20: "82000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
      },
     
      { ciudad: "Sabanalarga",
      variables: [
        {
          
          fleteBari: "86625",
          fleteParis: "86625",
          fleteTurin: "79000",
          fleteBerna12: "79750",
          fleteBerna20: "86625",
          fleteGrecia1t: "98750",
          fleteGrecia2t: "99688",
          fleteNeve110: "108281",
          fleteNeve220: "108281",
          fleteAsis286: "120313",
        },
      ], },
     
      {
        ciudad: "Bogotá Dc",
        variables: [
          {
            
            fleteBari: "57800",
            fleteParis: "103000",
            fleteTurin: "43000",
            fleteBerna12: "39500",
            fleteBerna20: "52000",
          fleteGrecia1t: "48625",
          fleteGrecia2t: "60250",
          fleteNeve110: "101250",
          fleteNeve220: "101250",
          fleteAsis286: "47500",
        },
        ],
      },

     
      {
        ciudad: "Cartagena de Indias",
        variables: [
          {
            
            fleteBari: "76000",
            fleteParis: "129000",
            fleteTurin: "65000",
            fleteBerna12: "57500",
            fleteBerna20: "95000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
      },
     
      { ciudad: "El Carmen de Bolívar",
      variables: [
        {
          
          fleteBari: "118125",
          fleteParis: "118125",
          fleteTurin: "90000",
          fleteBerna12: "108750",
          fleteBerna20: "118125",
          fleteGrecia1t: "112500",
          fleteGrecia2t: "135938",
          fleteNeve110: "147656",
          fleteNeve220: "147656",
          fleteAsis286: "94444",
        },
      ], },
     
      { ciudad: "Magangué",
      variables: [
        {
          
          fleteBari: "118125",
          fleteParis: "118125",
          fleteTurin: "90000",
          fleteBerna12: "108750",
          fleteBerna20: "118125",
          fleteGrecia1t: "112500",
          fleteGrecia2t: "135938",
          fleteNeve110: "147656",
          fleteNeve220: "147656",
          fleteAsis286: "164063",
        },
      ], },
      
      { ciudad: "Mompós",
      variables: [
        {
          
          fleteBari: "157500",
          fleteParis: "157500",
          fleteTurin: "120000",
          fleteBerna12: "145000",
          fleteBerna20: "157500",
          fleteGrecia1t: "150000",
          fleteGrecia2t: "181250",
          fleteNeve110: "196875",
          fleteNeve220: "196875",
          fleteAsis286: "218750",
        },
      ], },
      
      { ciudad: "San Jacinto",
      variables: [
        {
          
          fleteBari: "141750",
          fleteParis: "141750",
          fleteTurin: "108000",
          fleteBerna12: "130500",
          fleteBerna20: "141750",
          fleteGrecia1t: "135000",
          fleteGrecia2t: "163125",
          fleteNeve110: "177188",
          fleteNeve220: "177188",
          fleteAsis286: "196875",
        },
      ], },
      { ciudad: "San Juan Nepomuceno",
      variables: [
        {
          
          fleteBari: "108125",
          fleteParis: "108125",
          fleteTurin: "90000",
          fleteBerna12: "108750",
          fleteBerna20: "108125",
          fleteGrecia1t: "112500",
          fleteGrecia2t: "135938",
          fleteNeve110: "147656",
          fleteNeve220: "147656",
          fleteAsis286: "164063",
        },
      ], },
      
      { ciudad: "Puerto Boyacá",
      variables: [
        {
          
          fleteBari: "118125",
          fleteParis: "118125",
          fleteTurin: "90000",
          fleteBerna12: "108000",
          fleteBerna20: "118125",
          fleteGrecia1t: "112500",
          fleteGrecia2t: "135938",
          fleteNeve110: "147656",
          fleteNeve220: "147656",
          fleteAsis286: "164063",
        },
      ], },
     
      {
        ciudad: "Tunja",
        variables: [
          {
            
            fleteBari: "66000",
            fleteParis: "114000",
            fleteTurin: "52000",
            fleteBerna12: "47000",
            fleteBerna20: "70000",
          fleteGrecia1t: "65714",
          fleteGrecia2t: "113333",
          fleteNeve110: "102500",
          fleteNeve220: "102500",
          fleteAsis286: "50082",
        },
        ],
      },
     
      {
        ciudad: "Manizales",
        variables: [
          {
            
            fleteBari: "68200",
            fleteParis: "118000",
            fleteTurin: "55000",
            fleteBerna12: "49000",
            fleteBerna20: "76000",
          fleteGrecia1t: "85000",
          fleteGrecia2t: "91500",
          fleteNeve110: "105000",
          fleteNeve220: "105000",
          fleteAsis286: "116667",
        },
        ],
      },
      
      {
        ciudad: "Florencia Caquetá",
        variables: [
          {
            
            fleteBari: "87000",
            fleteParis: "146000",
            fleteTurin: "79000",
            fleteBerna12: "69000",
            fleteBerna20: "119800",
          fleteGrecia1t: "102857",
          fleteGrecia2t: "188333",
          fleteNeve110: "164500",
          fleteNeve220: "164500",
          fleteAsis286: "99667",
        },
        ],
      },
     
      { ciudad: "Yopal",
      variables: [
        {
          
          fleteBari: "75000",
          fleteParis: "129000",
          fleteTurin: "65000",
          fleteBerna12: "57000",
          fleteBerna20: "93000",
          fleteGrecia1t: "72857",
          fleteGrecia2t: "123333",
          fleteNeve110: "110333",
          fleteNeve220: "110333",
          fleteAsis286: "65000",
        },
      ],
     },

     
      {
        ciudad: "Popayán",
        variables: [
          {
            
            fleteBari: "71000",
            fleteParis: "122000",
            fleteTurin: "59000",
            fleteBerna12: "52000",
            fleteBerna20: "82000",
          fleteGrecia1t: "105714",
          fleteGrecia2t: "19366",
          fleteNeve110: "171667",
          fleteNeve220: "171667",
          fleteAsis286: "103333",
        },
        ],
      },
      

      { ciudad: "Aguachica",
      variables: [
        {
          
          fleteBari: "74000",
          fleteParis: "74000",
          fleteTurin: "67500",
          fleteBerna12: "68500",
          fleteBerna20: "74000",
          fleteGrecia1t: "108809",
          fleteGrecia2t: "171106",
          fleteNeve110: "148359",
          fleteNeve220: "148359",
          fleteAsis286: "108809",
        },
      ],
     },
      { ciudad: "Agustín Codazzi",
      variables: [
        {
          
          fleteBari: "110250",
          fleteParis: "110250",
          fleteTurin: "84000",
          fleteBerna12: "101500",
          fleteBerna20: "110250",
          fleteGrecia1t: "105000",
          fleteGrecia2t: "126875",
          fleteNeve110: "137813",
          fleteNeve220: "137813",
          fleteAsis286: "121753",
        },
      ], },
     
      { ciudad: "Bosconia",
      variables: [
        {
          
          fleteBari: "82000",
          fleteParis: "82000",
          fleteTurin: "67250",
          fleteBerna12: "69500",
          fleteBerna20: "82000",
          fleteGrecia1t: "74875",
          fleteGrecia2t: "113750",
          fleteNeve110: "101250",
          fleteNeve220: "101250",
          fleteAsis286: "68125",
        },
      ], },
     
      { ciudad: "La Jagua de Ibirico",
      variables: [
        {
          
          fleteBari: "67250",
          fleteParis: "67250",
          fleteTurin: "66000",
          fleteBerna12: "63500",
          fleteBerna20: "67250",
          fleteGrecia1t: "82500",
          fleteGrecia2t: "79375",
          fleteNeve110: "84063",
          fleteNeve220: "84063",
          fleteAsis286: "122222",
        },
      ], },
     
      { ciudad: "Pailitas",
      variables: [
        {
          
          fleteBari: "78750",
          fleteParis: "78750",
          fleteTurin: "60000",
          fleteBerna12: "72500",
          fleteBerna20: "78750",
          fleteGrecia1t: "75000",
          fleteGrecia2t: "82813",
          fleteNeve110: "98438",
          fleteNeve220: "98438",
          fleteAsis286: "109375",
        },
      ], },
     
      { ciudad: "San Alberto",
      variables: [
        {
          
          fleteBari: "67250",
          fleteParis: "67250",
          fleteTurin: "66000",
          fleteBerna12: "63500",
          fleteBerna20: "67250",
          fleteGrecia1t: "82500",
          fleteGrecia2t: "79375",
          fleteNeve110: "84063",
          fleteNeve220: "84063",
          fleteAsis286: "120313",
        },
      ], },
     
      {
        ciudad: "Valledupar",
        variables: [
          {
            
            fleteBari: "81000",
            fleteParis: "136000",
            fleteTurin: "70800",
            fleteBerna12: "62000",
            fleteBerna20: "105000",
          fleteGrecia1t: "92500",
          fleteGrecia2t: "94063",
          fleteNeve110: "101094",
          fleteNeve220: "101094",
          fleteAsis286: "112326",
        },
        ],
      },
      

      {
        ciudad: "Agua de Dios",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
      },
      { ciudad: "Albán",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Anapoima",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Anolaima",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Apulo",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Arbeláez",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Beltrán",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Bituima",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Bojacá",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Cabrera",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Cachipay",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Cajicá",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "44286",
          fleteGrecia2t: "68333",
          fleteNeve110: "61667",
          fleteNeve220: "61667",
          fleteAsis286: "40000",
        },
      ],
     },
      { ciudad: "Caparrapí",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Cáqueza",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Carmen de Carupa",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Chaguaní",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Chía",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "61667",
          fleteNeve220: "61667",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Chipaque",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Choachí",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Chocontá",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Cogua",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Cota",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Cucunubá",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "El Colegio",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "El Peñón",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "El Rosal",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Facatativá",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Fómeque",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Fosca",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Funza",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "51429",
          fleteGrecia2t: "68333",
          fleteNeve110: "61667",
          fleteNeve220: "61667",
          fleteAsis286: "40000",
        },
      ],
     },
      { ciudad: "Fúquene",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Fusagasugá",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Gachalá",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Gachancipá",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Gachetá",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Gama",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Girardot",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Granada",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Guachetá",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Guaduas",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Guasca",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Guataquí",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Guatavita",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Guayabal de Síquima",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Guayabetal",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Gutiérrez",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Jerusalén",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Junín",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "La Calera",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "La Mesa",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "La Palma",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "La Peña",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "La Vega",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Lenguazaque",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ],
     },
      { ciudad: "Machetá",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Madrid",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Manta",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Medina",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Mosquera",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "44286",
          fleteGrecia2t: "68333",
          fleteNeve110: "61667",
          fleteNeve220: "61667",
          fleteAsis286: "50000",
        },
        ],
       },
      { ciudad: "Nariño",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Nemocón",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Nilo",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Nimaima",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Nocaima",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Pacho",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Paime",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Pandi",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Paratebueno",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Pasca",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Puerto Salgar",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Pulí",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Quebradanegra",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Quetame",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Quipile",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Ricaurte",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "San Antonio del Tequendama",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "San Bernardo",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "San Cayetano",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "San Francisco",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "San Juan de Rioseco",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Sasaima",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Sesquilé",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Sibaté",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Silvania",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Simijaca",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Soacha",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Sopó",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Subachoque",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Suesca",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Supatá",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "118",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Sutatausa",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Tabio",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Tausa",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Tena",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Tenjo",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Tibacuy",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Tibirita",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Tocaima",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Tocancipá",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "51429",
          fleteGrecia2t: "68333",
          fleteNeve110: "61667",
          fleteNeve220: "61667",
          fleteAsis286: "40000",
        },
        ],
       },
      { ciudad: "Topaipí",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Ubalá",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Ubaque",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Ubaté",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Une",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "útica",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Venecia",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Vergara",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Vianí",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Villagómez",
        variables: [
          {
            
            fleteBari: "68800",
            fleteParis: "119000",
            fleteTurin: "57000",
            fleteBerna12: "51000",
            fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
        ],
       },
      { ciudad: "Villapinzón",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ], },
      { ciudad: "Villeta",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ], },
      { ciudad: "Viotá",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ], },
      { ciudad: "Yacopí",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ], },
      { ciudad: "Zipacón",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ], },
      { ciudad: "Zipaquirá",
      variables: [
        {
          
          fleteBari: "68800",
          fleteParis: "119000",
          fleteTurin: "57000",
          fleteBerna12: "51000",
          fleteBerna20: "78000",
          fleteGrecia1t: "54286",
          fleteGrecia2t: "85000",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "43333",
        },
      ], },

     
      { ciudad: "Cereté",
      variables: [
        {
          
          fleteBari: "110250",
          fleteParis: "110250",
          fleteTurin: "84000",
          fleteBerna12: "101500",
          fleteBerna20: "110250",
          fleteGrecia1t: "87000",
          fleteGrecia2t: "138750",
          fleteNeve110: "121875",
          fleteNeve220: "121875",
          fleteAsis286: "77750",
        },
      ], },
     
      { ciudad: "Chinú",
      variables: [
        {
          
          fleteBari: "126000",
          fleteParis: "126000",
          fleteTurin: "96000",
          fleteBerna12: "116000",
          fleteBerna20: "126000",
          fleteGrecia1t: "87000",
          fleteGrecia2t: "138125",
          fleteNeve110: "121875",
          fleteNeve220: "121875",
          fleteAsis286: "77750",
        },
      ], },
      { ciudad: "Ciénaga de Oro",
      variables: [
        {
          
          fleteBari: "112125",
          fleteParis: "112125",
          fleteTurin: "90000",
          fleteBerna12: "108750",
          fleteBerna20: "112125",
          fleteGrecia1t: "112500",
          fleteGrecia2t: "135938",
          fleteNeve110: "147656",
          fleteNeve220: "147656",
          fleteAsis286: "66667",
        },
      ], },
      
      { ciudad: "La Apartada",
      variables: [
        {
          
          fleteBari: "126000",
          fleteParis: "126000",
          fleteTurin: "96000",
          fleteBerna12: "116000",
          fleteBerna20: "126000",
          fleteGrecia1t: "120000",
          fleteGrecia2t: "145000",
          fleteNeve110: "157500",
          fleteNeve220: "157500",
          fleteAsis286: "105556",
        },
      ], },
      { ciudad: "Lorica",
      variables: [
        {
          
          fleteBari: "126000",
          fleteParis: "126000",
          fleteTurin: "96000",
          fleteBerna12: "116000",
          fleteBerna20: "126000",
          fleteGrecia1t: "120000",
          fleteGrecia2t: "145000",
          fleteNeve110: "157500",
          fleteNeve220: "157500",
          fleteAsis286: "175000",
        },
      ], },
     
      { ciudad: "Montelíbano",
      variables: [
        {
          
          fleteBari: "126000",
          fleteParis: "126000",
          fleteTurin: "96000",
          fleteBerna12: "116000",
          fleteBerna20: "126000",
          fleteGrecia1t: "120000",
          fleteGrecia2t: "145000",
          fleteNeve110: "157500",
          fleteNeve220: "157500",
          fleteAsis286: "175000",
        },
      ], },
      {
        ciudad: "Montería",
        variables: [
          {
            
            fleteBari: "83000",
            fleteParis: "139800",
            fleteTurin: "74000",
            fleteBerna12: "65000",
            fleteBerna20: "111000",
          fleteGrecia1t: "105000",
          fleteGrecia2t: "126875",
          fleteNeve110: "137813",
          fleteNeve220: "137813",
          fleteAsis286: "153125",
        },
        ],
      },
      
      { ciudad: "Planeta Rica",
        variables: [
          {
            
            fleteBari: "118125",
            fleteParis: "118125",
            fleteTurin: "90000",
            fleteBerna12: "108750",
            fleteBerna20: "118125",
          fleteGrecia1t: "112500",
          fleteGrecia2t: "135938",
          fleteNeve110: "147656",
          fleteNeve220: "147656",
          fleteAsis286: "164063",
        },
        ],
       },
     
      { ciudad: "San Antero",
        variables: [
          {
            
            fleteBari: "126000",
            fleteParis: "126000",
            fleteTurin: "86000",
            fleteBerna12: "95000",
            fleteBerna20: "126000",
          fleteGrecia1t: "107500",
          fleteGrecia2t: "118750",
          fleteNeve110: "157500",
          fleteNeve220: "157500",
          fleteAsis286: "175000",
        },
        ],
       },
      
      { ciudad: "Tierralta",
        variables: [
          {
            
            fleteBari: "149625",
            fleteParis: "149625",
            fleteTurin: "114000",
            fleteBerna12: "137750",
            fleteBerna20: "149625",
          fleteGrecia1t: "142500",
          fleteGrecia2t: "172188",
          fleteNeve110: "187031",
          fleteNeve220: "187031",
          fleteAsis286: "207813",
        },
        ],
       },
     
      { ciudad: "Neiva",
      variables: [
        {
          
          fleteBari: "70000",
          fleteParis: "121000",
          fleteTurin: "58000",
          fleteBerna12: "52000",
          fleteBerna20: "81000",
          fleteGrecia1t: "65714",
          fleteGrecia2t: "113333",
          fleteNeve110: "103333",
          fleteNeve220: "103333",
          fleteAsis286: "51667",
        },
      ],
    },
     
      { ciudad: "Albania",
      variables: [
        {
          
          fleteBari: "103000",
          fleteParis: "103000",
          fleteTurin: "94500",
          fleteBerna12: "87000",
          fleteBerna20: "103000",
          fleteGrecia1t: "134286",
          fleteGrecia2t: "250000",
          fleteNeve110: "221667",
          fleteNeve220: "221667",
          fleteAsis286: "68333",
        },
      ],
     },
      { ciudad: "Barrancas",
      variables: [
        {
          
          fleteBari: "84000",
          fleteParis: "84000",
          fleteTurin: "72500",
          fleteBerna12: "78750",
          fleteBerna20: "84000",
          fleteGrecia1t: "75714",
          fleteGrecia2t: "93333",
          fleteNeve110: "80000",
          fleteNeve220: "80000",
          fleteAsis286: "51667",
        },
      ], },
     
      { ciudad: "Fonseca",
      variables: [
        {
          
          fleteBari: "78750",
          fleteParis: "78750",
          fleteTurin: "60000",
          fleteBerna12: "72500",
          fleteBerna20: "78750",
          fleteGrecia1t: "75000",
          fleteGrecia2t: "90625",
          fleteNeve110: "98438",
          fleteNeve220: "98438",
          fleteAsis286: "66667",
        },
      ], },
      { ciudad: "Hatonuevo",
      variables: [
        {
          
          fleteBari: "78750",
          fleteParis: "78750",
          fleteTurin: "60000",
          fleteBerna12: "72500",
          fleteBerna20: "78750",
          fleteGrecia1t: "75000",
          fleteGrecia2t: "90625",
          fleteNeve110: "98438",
          fleteNeve220: "98438",
          fleteAsis286: "77778",
        },
      ], },
     
      { ciudad: "Maicao",
      variables: [
        {
          
          fleteBari: "86625",
          fleteParis: "86625",
          fleteTurin: "66000",
          fleteBerna12: "79750",
          fleteBerna20: "86625",
          fleteGrecia1t: "82500",
          fleteGrecia2t: "99688",
          fleteNeve110: "108281",
          fleteNeve220: "108281",
          fleteAsis286: "120313",
        },
      ], },
      
      { ciudad: "Riohacha",
      variables: [
        {
          
          fleteBari: "126000",
          fleteParis: "126000",
          fleteTurin: "96000",
          fleteBerna12: "116000",
          fleteBerna20: "126000",
          fleteGrecia1t: "120000",
          fleteGrecia2t: "145000",
          fleteNeve110: "157500",
          fleteNeve220: "157500",
          fleteAsis286: "175000",
        },
      ], },
      
      { ciudad: "Ciénaga",
      variables: [
        {
          
          fleteBari: "86625",
          fleteParis: "86625",
          fleteTurin: "66000",
          fleteBerna12: "79750",
          fleteBerna20: "86625",
          fleteGrecia1t: "82500",
          fleteGrecia2t: "99688",
          fleteNeve110: "108281",
          fleteNeve220: "108281",
          fleteAsis286: "77778",
        },
      ], },
     
      { ciudad: "El Banco",
      variables: [
        {
          
          fleteBari: "141750",
          fleteParis: "141750",
          fleteTurin: "108000",
          fleteBerna12: "130500",
          fleteBerna20: "141750",
          fleteGrecia1t: "135000",
          fleteGrecia2t: "163125",
          fleteNeve110: "177188",
          fleteNeve220: "177188",
          fleteAsis286: "79028",
        },
      ], },
      
      { ciudad: "Fundación",
      variables: [
        {
          
          fleteBari: "110250",
          fleteParis: "110250",
          fleteTurin: "84000",
          fleteBerna12: "101500",
          fleteBerna20: "110250",
          fleteGrecia1t: "105000",
          fleteGrecia2t: "126875",
          fleteNeve110: "137813",
          fleteNeve220: "137813",
          fleteAsis286: "69444",
        },
      ], },
     
    
      { ciudad: "Plato",
      variables: [
        {
          
          fleteBari: "149625",
          fleteParis: "149625",
          fleteTurin: "114000",
          fleteBerna12: "137750",
          fleteBerna20: "149625",
          fleteGrecia1t: "142500",
          fleteGrecia2t: "172188",
          fleteNeve110: "187031",
          fleteNeve220: "187031",
          fleteAsis286: "207813",
        },
      ], },
     
      { ciudad: "Santa Marta",
      variables: [
        {
          
          fleteBari: "75000",
          fleteParis: "129000",
          fleteTurin: "65000",
          fleteBerna12: "57000",
          fleteBerna20: "93000",
          fleteGrecia1t: "113714",
          fleteGrecia2t: "211667",
          fleteNeve110: "185000",
          fleteNeve220: "185000",
          fleteAsis286: "113333",
        },
      ],
    },
      
      { ciudad: "Villavicencio",
      variables: [
        {
          
          fleteBari: "65500",
          fleteParis: "116000",
          fleteTurin: "54000",
          fleteBerna12: "48000",
          fleteBerna20: "73000",
          fleteGrecia1t: "65714",
          fleteGrecia2t: "113333",
          fleteNeve110: "103333",
          fleteNeve220: "103333",
          fleteAsis286: "51667",
        },
      ],
     },
      
      { ciudad: "Pasto",
      variables: [
        {
          
          fleteBari: "84000",
          fleteParis: "142000",
          fleteTurin: "75500",
          fleteBerna12: "66000",
          fleteBerna20: "114000",
          fleteGrecia1t: "77143",
          fleteGrecia2t: "113333",
          fleteNeve110: "163333",
          fleteNeve220: "163333",
          fleteAsis286: "81667",
        },
      ],
     },
     
      { ciudad: "Cúcuta",
      variables: [
        {
          
          fleteBari: "72000",
          fleteParis: "124000",
          fleteTurin: "60000",
          fleteBerna12: "54000",
          fleteBerna20: "84000",
          fleteGrecia1t: "75000",
          fleteGrecia2t: "82813",
          fleteNeve110: "86719",
          fleteNeve220: "86719",
          fleteAsis286: "55556",
        },
      ],
     },
     
      { ciudad: "Los Patios",
      variables: [
        {
          
          fleteBari: "69375",
          fleteParis: "69375",
          fleteTurin: "60000",
          fleteBerna12: "66250",
          fleteBerna20: "69375",
          fleteGrecia1t: "75000",
          fleteGrecia2t: "82813",
          fleteNeve110: "86719",
          fleteNeve220: "86719",
          fleteAsis286: "96354",
        },
      ], },
     
      { ciudad: "Pamplona",
      variables: [
        {
          
          fleteBari: "69375",
          fleteParis: "69375",
          fleteTurin: "60000",
          fleteBerna12: "66250",
          fleteBerna20: "69375",
          fleteGrecia1t: "75000",
          fleteGrecia2t: "82813",
          fleteNeve110: "86719",
          fleteNeve220: "86719",
          fleteAsis286: "96354",
        },
      ], },
     
      { ciudad: "Armenia Quindío",
      variables: [
        {
          
          fleteBari: "92000",
          fleteParis: "92000",
          fleteTurin: "86625",
          fleteBerna12: "89750",
          fleteBerna20: "92000",
          fleteGrecia1t: "57736",
          fleteGrecia2t: "81679",
          fleteNeve110: "74000",
          fleteNeve220: "74000",
          fleteAsis286: "53461",
        },
      ],
     },
     
      { ciudad: "Pereira",
      variables: [
        {
          
          fleteBari: "67000",
          fleteParis: "115000",
          fleteTurin: "54000",
          fleteBerna12: "48000",
          fleteBerna20: "72000",
          fleteGrecia1t: "65714",
          fleteGrecia2t: "113333",
          fleteNeve110: "103333",
          fleteNeve220: "103333",
          fleteAsis286: "51667",
        },
      ],
     },
     
      { ciudad: "Barrancabermeja",
      variables: [
        {
          
          fleteBari: "93000",
          fleteParis: "93000",
          fleteTurin: "69375",
          fleteBerna12: "76250",
          fleteBerna20: "93000",
          fleteGrecia1t: "93625",
          fleteGrecia2t: "140250",
          fleteNeve110: "123625",
          fleteNeve220: "123625",
          fleteAsis286: "93500",
        },
      ], },
     
      { ciudad: "Bucaramanga",
      variables: [
        {
          
          fleteBari: "66000",
          fleteParis: "115000",
          fleteTurin: "53500",
          fleteBerna12: "48000",
          fleteBerna20: "72000",
          fleteGrecia1t: "65714",
          fleteGrecia2t: "113333",
          fleteNeve110: "103333",
          fleteNeve220: "103333",
          fleteAsis286: "70000",
        },
      ],
     },
      
      { ciudad: "El Socorro",
      variables: [
        {
          
          fleteBari: "69375",
          fleteParis: "69375",
          fleteTurin: "60000",
          fleteBerna12: "66250",
          fleteBerna20: "69375",
          fleteGrecia1t: "75000",
          fleteGrecia2t: "82813",
          fleteNeve110: "86719",
          fleteNeve220: "86719",
          fleteAsis286: "96354",
        },
      ], },
      
      { ciudad: "San Gil",
      variables: [
        {
          
          fleteBari: "69375",
          fleteParis: "69375",
          fleteTurin: "60000",
          fleteBerna12: "66250",
          fleteBerna20: "69375",
          fleteGrecia1t: "75000",
          fleteGrecia2t: "82813",
          fleteNeve110: "86719",
          fleteNeve220: "86719",
          fleteAsis286: "96354",
        },
      ], },
      
      { ciudad: "Corozal",
      variables: [
        {
          
          fleteBari: "204750",
          fleteParis: "204750",
          fleteTurin: "156000",
          fleteBerna12: "188500",
          fleteBerna20: "204750",
          fleteGrecia1t: "105000",
          fleteGrecia2t: "126875",
          fleteNeve110: "137813",
          fleteNeve220: "137813",
          fleteAsis286: "81944",
        },
      ], },
      
      { ciudad: "Ovejas",
      variables: [
        {
          
          fleteBari: "149625",
          fleteParis: "149625",
          fleteTurin: "114000",
          fleteBerna12: "137750",
          fleteBerna20: "149625",
          fleteGrecia1t: "142500",
          fleteGrecia2t: "172188",
          fleteNeve110: "187031",
          fleteNeve220: "187031",
          fleteAsis286: "207813",
        },
      ], },
      
      { ciudad: "San Marcos",
      variables: [
        {
          
          fleteBari: "157500",
          fleteParis: "157500",
          fleteTurin: "120000",
          fleteBerna12: "145000",
          fleteBerna20: "157500",
          fleteGrecia1t: "150000",
          fleteGrecia2t: "181250",
          fleteNeve110: "196875",
          fleteNeve220: "196875",
          fleteAsis286: "218750",
        },
      ], },
      { ciudad: "San Onofre",
      variables: [
        {
          
          fleteBari: "141750",
          fleteParis: "141750",
          fleteTurin: "108000",
          fleteBerna12: "130500",
          fleteBerna20: "141750",
          fleteGrecia1t: "135000",
          fleteGrecia2t: "163125",
          fleteNeve110: "177188",
          fleteNeve220: "177188",
          fleteAsis286: "196875",
        },
      ], },
      { ciudad: "San Pedro",
      variables: [
        {
          
          fleteBari: "126000",
          fleteParis: "126000",
          fleteTurin: "96000",
          fleteBerna12: "116000",
          fleteBerna20: "126000",
          fleteGrecia1t: "120000",
          fleteGrecia2t: "145000",
          fleteNeve110: "157500",
          fleteNeve220: "157500",
          fleteAsis286: "175000",
        },
      ], },
      
      { ciudad: "Sincelejo",
      variables: [
        {
          
          fleteBari: "83000",
          fleteParis: "131000",
          fleteTurin: "73500",
          fleteBerna12: "64000",
          fleteBerna20: "109000",
          fleteGrecia1t: "105000",
          fleteGrecia2t: "126875",
          fleteNeve110: "137819",
          fleteNeve220: "137819",
          fleteAsis286: "153125",
        },
      ],
     },
      
      { ciudad: "Tolú",
      variables: [
        {
          
          fleteBari: "126000",
          fleteParis: "126000",
          fleteTurin: "96000",
          fleteBerna12: "116000",
          fleteBerna20: "126000",
          fleteGrecia1t: "120000",
          fleteGrecia2t: "145000",
          fleteNeve110: "157500",
          fleteNeve220: "157500",
          fleteAsis286: "175000",
        },
      ], },
     
      { ciudad: "Honda",
      variables: [
        {
          
          fleteBari: "102375",
          fleteParis: "102375",
          fleteTurin: "78000",
          fleteBerna12: "94250",
          fleteBerna20: "102375",
          fleteGrecia1t: "97500",
          fleteGrecia2t: "117813",
          fleteNeve110: "127969",
          fleteNeve220: "127969",
          fleteAsis286: "83056",
        },
      ], },
      { ciudad: "Ibagué",
      variables: [
        {
          
          fleteBari: "65000",
          fleteParis: "112000",
          fleteTurin: "52000",
          fleteBerna12: "46000",
          fleteBerna20: "68000",
          fleteGrecia1t: "65714",
          fleteGrecia2t: "113333",
          fleteNeve110: "103333",
          fleteNeve220: "103333",
          fleteAsis286: "51667",
        },
      ],
     },
      
      { ciudad: "Buga",
      variables: [
        {
          
          fleteBari: "78000",
          fleteParis: "78000",
          fleteTurin: "72500",
          fleteBerna12: "74500",
          fleteBerna20: "78000",
          fleteGrecia1t: "74875",
          fleteGrecia2t: "113500",
          fleteNeve110: "101250",
          fleteNeve220: "101250",
          fleteAsis286: "68125",
        },
      ], },
      
      { ciudad: "Cali",
      variables: [
        {
          
          fleteBari: "63000",
          fleteParis: "110000",
          fleteTurin: "49000",
          fleteBerna12: "45000",
          fleteBerna20: "63000",
          fleteGrecia1t: "65714",
          fleteGrecia2t: "113333",
          fleteNeve110: "103333",
          fleteNeve220: "103333",
          fleteAsis286: "51667",
        },
      ],
     },

     { ciudad: "Otra",
     variables: [
       {
         
         fleteBari: "0",
         fleteParis: "0",
         fleteTurin: "0",
         fleteBerna12: "0",
         fleteBerna20: "0",
         fleteGrecia1t: "0",
          fleteGrecia2t: "0",
          fleteNeve110: "0",
          fleteNeve220: "0",
          fleteAsis286: "0",
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
   /*  $selectm.append(
      '<option value="' + ciudad.ciudad + '">' + ciudad.ciudad + "</option>"
    ); */
    $selectd.append(
      '<option value="' + ciudad.ciudad + '">' + ciudad.ciudad + "</option>"
    );
  });
}

/* function ShowSelectedCMunicipios() {
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


} */

function ShowSelectedCDelivery() {
  var selccionCiudad = document.getElementById("ciudadDelivery").value;
  var variablesCiudad = re.find((element) => element.ciudad == selccionCiudad);
  var variables = variablesCiudad.variables;

  console.log(variablesCiudad);
  console.log(variables);

  var array_var = variables.find((element) => element.fleteBari);

  console.log(array_var);

  // var ica = array_var.ica;

  var producto = document.getElementById("producto").value;

  switch (producto) {
    case "bari":
      var flete = array_var.fleteBari;
      // console.log("flete bari",flete);
      

      break;

    case "parisEspresso":
      var flete = array_var.fleteParis;
    
      break;

    case "parisSoluble":
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

      case "grecia181T":
      var flete = array_var.fleteGrecia1t;
      break;
      case "grecia182T":
      var flete = array_var.fleteGrecia2t;
      break;

      case "neve110":
      var flete = array_var.fleteNeve110;
      break;

      case "neve220":
      var flete = array_var.fleteNeve220;
      break;

      case "asis":
      var flete = array_var.fleteAsis286;
      break;

    default:
      break;
  }

 
/* 
  var inputIca = (document.getElementById("ica").value = ica); */
  document.getElementById("fleteI").value = flete;

  



}
