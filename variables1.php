<?php

function noCachePHP() {
  header("Expires: Tue, 01 Jul 2001 06:00:00 GMT");
  header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
  header("Cache-Control: no-store, no-cache, must-revalidate");
  header("Cache-Control: post-check=0, pre-check=0", false);
  header("Pragma: no-cache");
  }


$produc= $_GET['producto'];

switch ($produc) {
    case "bari":
        $img1 = "images/bari/Bari(1).jpg?v1";
        $img2 = "images/bari/Bari(2).jpg?v1";
        $img3 = "images/bari/Bari(3).jpg?v1";
        $img4 = "images/bari/Bari(4).jpg?v1";
        $img5 = "images/bari/Bari(4).jpg?v1";
        $hrefCapacitacion = "https://inssa.com.co/capacitacion-bari/";
        $hrefManual = "images/bari/Manual de operacion Bari V2 .pdf";
        $capacitacion = "Capacitación Bari";
        $manual = "Manual Bari";

        $og_title = "property=\"og:title\" content=\"Cafetera Bari\"";
        $og_url = "property=\"og:url\" content=\"https://www.inssa.com.co\"";
        $og_desciption = "property=\"og:description\" content=\"Inssa Prime, compra en un 2 X 3\"";
        $og_image = "property=\"og:image\" content=\"https://inssa.com.co/ecommerce/images/bari/Bari(1).jpg?v1\"";
        $og_image_url = "property=\"og:image:secure_url\" content=\"https://inssa.com.co/ecommerce/images/bari/Bari(1).jpg?v1\"";

  
      break;
  
    case "parisEspresso":

      $og_title = "property=\"og:title\" content=\"Cafetera Paris Espresso\"";
      $og_url = "property=\"og:url\" content=\"https://www.inssa.com.co\"";
      $og_desciption = "property=\"og:description\" content=\"Inssa Prime, compra en un 2 X 3\"";
      $og_image = "property=\"og:image\" content=\"https://inssa.com.co/ecommerce/images/paris/paris_12.jpg?v1\"";
      $og_image_url = "property=\"og:image:secure_url\" content=\"https://inssa.com.co/ecommerce/images/paris/paris_12.jpg?v1\"";


        $img1 = "images/paris/paris_12.jpg?v=1";
        $img2 = "images/paris/paris_2.png?v1";
        $img3 = "images/paris/paris_32.jpg?v1";
        $img4 = "images/paris/paris_42.jpg?v1";
        $img5 = "images/paris/paris_42.jpg?v1";
        $imgvideo1 = "images/paris/paris1.jpeg?v1";

        $video1 = "";

  
      break;

    case "parisSoluble":

      $og_title = "property=\"og:title\" content=\"Cafetera Paris Espresso\"";
      $og_url = "property=\"og:url\" content=\"https://www.inssa.com.co\"";
      $og_desciption = "property=\"og:description\" content=\"Inssa Prime, compra en un 2 X 3\"";
      $og_image = "property=\"og:image\" content=\"https://inssa.com.co/ecommerce/images/paris/paris_12.jpg?v1\"";
      $og_image_url = "property=\"og:image:secure_url\" content=\"https://inssa.com.co/ecommerce/images/paris/paris_12.jpg?v1\"";


        $img1 = "images/paris/paris_12.jpg?v=1";
        $img2 = "images/paris/paris_2.png?v1";
        $img3 = "images/paris/paris_32.jpg?v1";
        $img4 = "images/paris/paris_42.jpg?v1";
        $img5 = "images/paris/paris_42.jpg?v1";
        $imgvideo1 = "images/paris/paris1.jpeg?v1";

        $video1 = "";

  
      break;
  
    case "turin":
       $img1 = "images/Turin/Turin.png?v1";
       $img2 = "images/Turin/turin-sensacion.png?v1";
       $img3 = "images/Turin/stiker-para-turin1080.png?v1";
       $img4 = "images/Turin/stiker-para-turin1080.png?v1";
       $imgvideo1 = "images/Turin/stiker-para-turin1080.png?v1";

       $video1 = "";
       $hrefCapacitacion = "";
       $hrefManual = "";
       $capacitacion = "Capacitación Turin";
        $manual = "Manual Turin";

        $og_title = "property=\"og:title\" content=\"Cafetera Turin\"";
        $og_url = "property=\"og:url\" content=\"https://www.inssa.com.co\"";
        $og_desciption = "property=\"og:description\" content=\"Inssa Prime, compra en un 2 X 3\"";
        $og_image = "property=\"og:image\" content=\"https://inssa.com.co/ecommerce/images/turin/Turin.png?v1\"";
        $og_image_url = "property=\"og:image:secure_url\" content=\"https://inssa.com.co/ecommerce/images/turin/Turin.png?v1\"";
       
      break;
  
    case "berna12L":


        $img1 = "images/berna12l/berna12_11.jpg?v1";
        $img2 = "images/berna12l/berna12_2.png?v1";
        $img3 = "images/berna12l/berna12_31.jpg?v1";
        $img4 = "images/berna12l/berna12_41.jpg?v1";
        $img5 = "images/berna12l/berna12_41.jpg?v1";
        $imgvideo1 = "images/berna12l/stiker-para-Berna12L-1080.png?v1";
 
        $video1 = "";
        $hrefCapacitacion = "";
        $hrefManual = "images/berna12l/Manual de operacion Berna.pdf";
        $capacitacion = "Capacitación Berna 12 Litros";
        $manual = "Manual Berna 12 Litros";

        $og_title = "property=\"og:title\" content=\"Dispensadora de jugos Berna 12 Litros\"";
        $og_url = "property=\"og:url\" content=\"https://www.inssa.com.co\"";
        $og_desciption = "property=\"og:description\" content=\"Inssa Prime, compra en un 2 X 3\"";
        $og_image = "property=\"og:image\" content=\"https://inssa.com.co/ecommerce/images/berna12l/berna12_11.jpg?v1\"";
        $og_image_url = "property=\"og:image:secure_url\" content=\"https://inssa.com.co/ecommerce/images/berna12l/berna12_11.jpg?v1\"";
      break;
  
    case "berna20L":
        $img1 = "images/berna20l/berna20L1.jpeg?v1";
        $img2 = "images/berna20l/berna20l2.jpeg?v1";
        $img3 = "images/berna20l/berna20l1.jpeg?v1";
        $img4 = "images/berna20l/berna20l1.jpeg?v1";
        $imgvideo1 = "images/berna20l/berna20l1.jpeg?v1";
    
        $video1 = "";
        $hrefCapacitacion = "";
        $hrefManual = "";
        $capacitacion = "Capacitación Berna 20 Litros";
        $manual = "Manual Berna 20 Litros";

        $og_title = "property=\"og:title\" content=\"Cafetera Turin\"";
        $og_url = "property=\"og:url\" content=\"https://www.inssa.com.co\"";
        $og_desciption = "property=\"og:description\" content=\"Inssa Prime, compra en un 2 X 3\"";
        $og_image = "property=\"og:image\" content=\"https://inssa.com.co/ecommerce/images/berna20l/berna20L1.jpeg?v1\"";
        $og_image_url = "property=\"og:image:secure_url\" content=\"https://inssa.com.co/ecommerce/images/berna20l/berna20L1.jpeg?v1\"";
      break;
  
    case "grecia181T":
        $img1 = "images/grecia1t/grecia1t1.jpg?v1";
        $img2 = "images/grecia1t/grecia1t2.png?v1";
        $img3 = "images/grecia1t/grecia1t3.jpg?v1";
        $img4 = "images/grecia1t/grecia1t4.jpg?v1";
        $img5 = "images/grecia1t/grecia1t4.jpg?v1";
        $imgvideo1 = "images/grecia1t/grecia1t4.jpg?v1";
    
        $video1 = "";
        $hrefCapacitacion = "";
        $hrefManual = "/images/grecia1t/Manual de operacion Grecia.pdf";
        $capacitacion = "";
        $manual = "Manual Grecia 18 litros 2 tanques";

        $og_title = "property=\"og:title\" content=\"Dispensadora de jugos Grecia 18 Litros 1 Tanque\"";
        $og_url = "property=\"og:url\" content=\"https://www.inssa.com.co\"";
        $og_desciption = "property=\"og:description\" content=\"Inssa Prime, compra en un 2 X 3\"";
        $og_image = "property=\"og:image\" content=\"https://inssa.com.co/ecommerce/?v1\"";
        $og_image_url = "property=\"og:image:secure_url\" content=\"https://inssa.com.co/ecommerce/images/grecia1t/grecia1t1.jpg?v1\"";
      break;
  
    case "grecia182T":
        $img1 = "";
        $img2 = "";
        $img3 = "";
        $img4 = "";
        $imgvideo1 = "";
    
        $video1 = "";
        $hrefCapacitacion = "";
        $hrefManual = "";
        $capacitacion = "Capacitación Berna 20 Litros";
        $manual = "Manual Berna 20 Litros";

        $og_title = "property=\"og:title\" content=\"Cafetera Turin\"";
        $og_url = "property=\"og:url\" content=\"https://www.inssa.com.co\"";
        $og_desciption = "property=\"og:description\" content=\"Inssa Prime, compra en un 2 X 3\"";
        $og_image = "property=\"og:image\" content=\"https://inssa.com.co/ecommerce/\"";
        $og_image_url = "property=\"og:image:secure_url\" content=\"https://inssa.com.co/ecommerce/\"";
      break;
  
    case "neve110":
        $img1 = "";
        $img2 = "";
        $img3 = "";
        $img4 = "";
        $imgvideo1 = "";
    
        $video1 = "";
        $hrefCapacitacion = "";
        $hrefManual = "";
        $capacitacion = "Capacitación Berna 20 Litros";
        $manual = "Manual Berna 20 Litros";

        $og_title = "property=\"og:title\" content=\"Cafetera Turin\"";
        $og_url = "property=\"og:url\" content=\"https://www.inssa.com.co\"";
        $og_desciption = "property=\"og:description\" content=\"Inssa Prime, compra en un 2 X 3\"";
        $og_image = "property=\"og:image\" content=\"https://inssa.com.co/ecommerce/\"";
        $og_image_url = "property=\"og:image:secure_url\" content=\"https://inssa.com.co/ecommerce/\"";
      break;
  
    case "neve220":
        $img1 = "";
        $img2 = "";
        $img3 = "";
        $img4 = "";
        $imgvideo1 = "";
    
        $video1 = "";
        $hrefCapacitacion = "";
        $hrefManual = "";
        $capacitacion = "Capacitación Berna 20 Litros";
        $manual = "Manual Berna 20 Litros";

        $og_title = "property=\"og:title\" content=\"Cafetera Turin\"";
        $og_url = "property=\"og:url\" content=\"https://www.inssa.com.co\"";
        $og_desciption = "property=\"og:description\" content=\"Inssa Prime, compra en un 2 X 3\"";
        $og_image = "property=\"og:image\" content=\"https://inssa.com.co/ecommerce/\"";
        $og_image_url = "property=\"og:image:secure_url\" content=\"https://inssa.com.co/ecommerce/\"";
      break;
  
    case "asis":
        $img1 = "";
        $img2 = "";
        $img3 = "";
        $img4 = "";
        $imgvideo1 = "";
    
        $video1 = "";
        $hrefCapacitacion = "";
        $hrefManual = "";
        $capacitacion = "Capacitación Berna 20 Litros";
        $manual = "Manual Berna 20 Litros";

        $og_title = "property=\"og:title\" content=\"Cafetera Turin\"";
        $og_url = "property=\"og:url\" content=\"https://www.inssa.com.co\"";
        $og_desciption = "property=\"og:description\" content=\"Inssa Prime, compra en un 2 X 3\"";
        $og_image = "property=\"og:image\" content=\"https://inssa.com.co/ecommerce/\"";
        $og_image_url = "property=\"og:image:secure_url\" content=\"https://inssa.com.co/ecommerce/\"";
      break;
  
    default:
      break;
  }
?>