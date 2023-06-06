<?php

$produc= $_GET['producto'];

switch ($produc) {
    case "bari":
        $img1 = "images/bari/bari1.jpg";
        $img2 = "images/bari/bari3.jpg";
        $img3 = "images/bari/bari.jpeg";
        $imgvideo1 = "images/bari/miniVideoBari.jpeg";
        $video1 = "images/bari/videoBari.mp4";
        $hrefCapacitacion = "https://inssa.com.co/capacitacion-bari/";
        $hrefManual = "images/bari/Manual de operacion Bari V2 .pdf";
        $capacitacion = "Capacitación Bari";
        $manual = "Manual Bari";

  
      break;
  
    case "paris":
        $img1 = "images/paris/paris1.jpeg";
        $img2 = "images/paris/paris1.jpeg";
        $img3 = "images/paris/paris1.jpeg";
        $imgvideo1 = "images/paris/paris1.jpeg";

        $video1 = "";
        $hrefCapacitacion = "";
        $hrefManual = "";
        $capacitacion = "Capacitación Paris";
        $manual = "Manual Paris";
  
      break;
  
    case "turin":
       $img1 = "images/Turin/Turin.png";
       $img2 = "images/Turin/turin-sensacion.png";
       $img3 = "images/Turin/stiker-para-turin1080.png";
       $imgvideo1 = "images/Turin/stiker-para-turin1080.png";

       $video1 = "";
       $hrefCapacitacion = "";
       $hrefManual = "";
       $capacitacion = "Capacitación Turin";
        $manual = "Manual Turin";
       
      break;
  
    case "berna12L":
        $img1 = "images/berna12l/Berna12L-ecommerce.png";
        $img2 = "images/berna12l/Berna12Lsensacion.png";
        $img3 = "images/berna12l/stiker-para-Berna12L-1080.png";
        $imgvideo1 = "images/berna12l/stiker-para-Berna12L-1080.png";
 
        $video1 = "";
        $hrefCapacitacion = "";
        $hrefManual = "";
        $capacitacion = "Capacitación Berna 12 Litros";
        $manual = "Manual Berna 12 Litros";
      break;
  
    case "berna20L":
        $img1 = "images/berna20l/berna20L1.jpeg";
        $img2 = "images/berna20l/berna20l2.jpeg";
        $img3 = "images/berna20l/berna20l1.jpeg";
        $imgvideo1 = "images/berna20l/berna20l1.jpeg";
    
        $video1 = "";
        $hrefCapacitacion = "";
        $hrefManual = "";
        $capacitacion = "Capacitación Berna 20 Litros";
        $manual = "Manual Berna 20 Litros";
      break;
  
    default:
      break;
  }
?>