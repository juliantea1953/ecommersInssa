<?php

$produc = $_GET['producto'];


$fecha_actual = date("dmYhis");
include("variables1.php");
noCachePHP();

// echo($fecha_actual)

?>

<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="" />
	<meta <?php echo "{$og_title}" ?> />
	<meta <?php echo "{$og_url}" ?> />
	<meta <?php echo "{$og_desciption}" ?> />
	<meta <?php echo "{$og_image}" ?> />
	<meta <?php echo "{$og_image_url}" ?> />
	<!-- <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="EAS Hospitalario">
  <meta name="twitter:description" content="EAS Hospitalario Tw"> -->

  <!-- <meta http-equiv="Expires" content="0"> -->
  <!-- <meta http-equiv="Expires" content="Friday, 30-Jun-23 21:44:00 GMT">
  <meta http-equiv="Last-Modified" content="Friday, 30-Jun-23 21:41:00 GMT"> -->
  <!-- <meta http-equiv="Cache-Control" content="no-store, mustrevalidate"> -->
  <!-- <meta http-equiv="Pragma" content="no-cache"> -->
  <!-- <meta http-equiv="Cache-Control" content="no-cache" />  -->
  <!-- <meta http-equiv="refresh" content="30"> -->

  <meta http-equiv="cache-control" content="max-age=0" />
<meta http-equiv="cache-control" content="no-cache" /> 
<meta http-equiv="pragma" content="no-cache" />
<meta http-equiv="expires" content="0" />
<meta http-equiv="expires" content="Fri, 30 Jun 2023 21:55:00 GMT" />
	<title>INSSA PRIME</title>



	<!--===============================================================================================-->
	<link rel="icon" type="image/png" href="images/logoInssa.png" />
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/iconic/css/material-design-iconic-font.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/linearicons-v1.0.0/icon-font.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/slick/slick.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/MagnificPopup/magnific-popup.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/perfect-scrollbar/perfect-scrollbar.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="css/util.css?version= v<?php echo "{$fecha_actual}" ?>">
	<link rel="stylesheet" type="text/css" href="css/main1.css?version= v<?php echo "{$fecha_actual}" ?>">
	<!--===============================================================================================-->
	<!-- Customized Bootstrap Stylesheet -->
	<!-- Icon Font Stylesheet -->
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
	<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
	<!-- Libraries Stylesheet -->
	<script src="https://cdn.wompi.co/libs/js/v1.js"
		data-public-key="pub_prod_jzoTpu9Es1mhKUKrbNw3ezvzImlD8AYb"></script>

		<script type="text/javascript" src="https://checkout.wompi.co/widget.js"></script>

<!-- Hotjar Tracking Code for https://inssa.com.co/ecommerce/index.php -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3551339,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
</head>
<body class="animsition ">
	<!-- Header -->
	<header class="header-v4">
		<!-- Header desktop -->
		<!-- Modal1 -->
		<!-- Header -->
		<header>
			<!-- Header desktop -->
			<!-- <p>
				<?php echo "{$fecha_actual}" ?>
			</p> -->
			<div class="container-menu-desktop">
				<!-- Topbar -->
				<div class="top-bar ">
					<div class="content-topbar flex-sb-m h-full container">
						<div>
						<a href="https://inssa.com.co/" target = "_blank" class="navbar-brand d-flex align-items-center">
								<h1 class="m-0">
									<img class="w-100" src="images/logoInssa.png" width="50" height="50"
										alt="Logo Inssa" style="max-width: 80px" />
								</h1>
							</a>
						</div>
						<div class="left-top-bar">
							<small class="fa fa-phone-alt me-2"></small>
							<small>+57 310 224 2724</small>
						</div>
						<div class="left-top-bar">
							<small>mercadeo@inssa.com.co </small>
						</div>
						<div class="left-top-bar">
							<small>Lun - Vie : 07 AM - 05 PM Sab 07 AM - 10 AM</small>
						</div>
						<div class="left-top-bar">
						</div>
						<div class="contLogo right-top-bar flex-w h-full">
							<a href="https://www.facebook.com/INSSASAS" target = "_blank" class=" logoNavBar flex-c-m trans-04 p-lr-25">
								<i class="fab fa-facebook-f"></i></a>
							</a>
							<a href="https://www.youtube.com/@inssasas/videos" target = "_blank" class="logoNavBar flex-c-m trans-04 p-lr-25">
								<i class="fab fa-youtube"></i>
							</a>
							<a href="https://www.instagram.com/mercadeoinssa/" target = "_blank" class="logoNavBar flex-c-m trans-04 p-lr-25">
								<i class="fab fa-instagram"></i>
							</a>
						</div>
					</div>
				</div>
				<div class=" ">
					<div class="content-topbar flex-sb-m h-full container">
						<!-- <div class="left-top-bar">
							<a href="https://inssa.com.co/" class="navbar-brand d-flex align-items-center">
								<h1 class="m-0">
									<img class="w-100" src="images/logoInssa.png" width="50" height="50"
										alt="Logo Inssa" style="max-width: 80px" />
								</h1>
							</a>
						</div> -->
						<div class="left-top-bar">
						</div>
					</div>
				</div>
			</div>
			<!-- <form  method ="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>"  > -->
			<div class=" js-modal1 ">
			
				<div class="container">
					<div class="bg0 p-t-40 p-lr-15-lg how-pos3-parent">
						<!-- <button class="how-pos3 hov3 trans-04 js-hide-modal1">
						<img src="images/icons/icon-close.png" alt="CLOSE">
					</button> -->
					<div class="contNombreMov" id="contNombreMov" style="margin-bottom: 10px;">
						<h3 class="mtext-111 cl2 js-name-detail p-b-14 nombreMaquina" id="nombreMov">
						</h3>
						<span class="mtext-111 cl2" id="subtotalTextMov">
						</span>
					</div>
						<div class="row">
							
							<div class="col-md-6 col-lg-7">
								<div class="p-l-25 p-r-30 p-lr-0-lg">
									<div class="wrap-slick3 flex-sb flex-w">
										<div class="wrap-slick3-dots"></div>
										<div class="wrap-slick3-arrows flex-sb-m flex-w"></div>
										<div class="slick3 gallery-lb">
											<div class="item-slick3" alt="Imagen producto 1" data-thumb="<?php echo "{$img1}" ?>">
												<div class="wrap-pic-w pos-relative">
													<img alt="Imagen producto 1" src="<?php echo "{$img1}" ?>">
													<a alt="Imagen producto 1"
														class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
														href="<?php echo "{$img1}" ?>" >
														<i class="fa fa-expand"></i>
													</a>
												</div>
											</div>
											<div alt="Imagen producto 2" id="img2" class="item-slick3" data-thumb="<?php echo "
												{$img2}" ?>">
												<div class="wrap-pic-w pos-relative">
													<img alt="Imagen producto 2" src="<?php echo "{$img2}" ?>" >
													<a alt="Imagen producto 2"
														class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
														href="<?php echo "{$img2}" ?>">
														<i class="fa fa-expand"></i>
													</a>
												</div>
											</div>
											<div alt="Imagen producto 3" class="item-slick3" data-thumb="<?php echo "
												{$img3}" ?>">
												<div class="wrap-pic-w pos-relative">
													<img alt="Imagen proveedor" src="<?php echo "{$img3}" ?>">
													<a alt="Imagen producto 3"
														class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
														href="<?php echo "{$img3}" ?>">
														<i class="fa fa-expand"></i>
													</a>
												</div>
											</div>
										
											<div id="img5" alt="Imagen producto 5" class="item-slick3" data-thumb="<?php echo "
												{$img5}" ?>">
												<div class="" style="height: 100%;">
													<div class="wrap-pic-w pos-relative" id="video">
											
												
													</div>

												</div>
											
											</div>
											<!-- <div alt="Imagen producto video" class="item-slick3" data-thumb="<?php echo "
												{$img4}" ?>">
												<div class="wrap-pic-w pos-relative">
													<div class="video" id="video">
														
													</video>
												</div>
												</div>
											</div>
											<div class="item-slick3" data-thumb="<?php echo "{$imgvideo1}" ?>">
												<div class="wrap-pic-w pos-relative">
													<div class="video" id="video">
														
														</video>
													</div>
												</div>
											</div> -->

											<!-- <div class="item-slick3" data-thumb="<?php echo "{$imgvideo1}" ?>">
												<div class="wrap-pic-w pos-relative">
													<div class="video">
														<video style="width: 100%;" class="" src="<?php echo "{$video1}" ?>" controls>
														</video>
													</div>
												</div>
											</div> -->
										</div>
									</div>
				
									<div id = "codigoLink">
									<div class="qr">
										<a id="aQr" href="" target = "_blank">
											<img alt="Código QR" id="codigo">
										</a>
									</div>
									<div class="linkPago">
										<a id="linkPago" href="" target = "_blank">
											<label readonly type="url" id="link" name="link" for=""></label>
										</a>
									</div>
									<input type="hidden" id="link" name="link" require />
									</div>
									
								</div>

<div class="p-l-25 p-r-30 p-lr-0-lg" style="margin-top: 10px;" id="caracteristicas">

	<div class="contCara">
		<div class=" js-hide-modal1">
			<div class="container containerCara">
				<div class="bg0 p-lr-15-lg how-pos3-parent">
					<div class="row">


						<div class=" col-md-12 colum">
							<div class=" ">
								<div class=" m-lr-0-xl">
									<div class="wrap-table-shopping-cart">
										<table class="table-shopping-cart">
											<tbody>
												<tr class="table_head">
													<th class="columnT-1">características</th>
												</tr>
												<tr class="table_row">
													<td class="column-1 tdCare">
														<ul id="care" class="care">
															
														</ul>


													</td>
												</tr>

											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
				


						<!-- <div class=" col-md-12 colum">
							<div class=" ">
								<div class=" m-lr-0-xl">
									<div class="wrap-table-shopping-cart">
										<table class="table-shopping-cart">
											<tbody>
												<tr class="table_head">
													<th class="columnT-1">Documentos</th>
												</tr>
												<tr class="table_row">
													<td class="column-1">
														<ul>
															<li><a href=" " target="_blank"> Manual Berna 12 Litros</a>
															</li>
													
														</ul>



													</td>
												</tr>

											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div> -->

					</div>
				</div>
			</div>
		</div>
	</div>

</div>

							</div>
							<div class="col-md-6 col-lg-5 ">
								<div class="p-r-50 p-t-5 p-lr-0-lg">
									<input type="hidden" id="producto" name="producto" require value="<?php echo "{$produc}" ?>"/>
									<input type="hidden" id="referenciaPago" name="referenciaPago" require />
									<input type="hidden" id="fleteI" name="fleteI" require />
									<input type="hidden" id="kit" name="kit" require  />
									<input type="hidden" id="totalWompi" name="totalWompi" value="" />

									<div class="contNombreDes" id="contNombreDes">
										<h3 class="mtext-111 cl2 js-name-detail p-b-14 nombreMaquina" id="nombreDes">
										</h3>
										<span class="mtext-111 cl2" id="subtotalTextDes">
										</span>
									</div>

									
									<!-- <p id="stock">
										Cantidad en stock 14
									</p> -->
									<p class="stext-102 cl3 p-t-23">
									</p>
									<!--  -->
									<form id="formulario" name="formulario" action="wompi.php" method="post">
										<input type="hidden" id="ciudad1" name="ciudad1">
										<div class="p-t-33 contSelec">
											<!-- <div class="contRadio">
												<div class="radio">
													<input type="hidden" id="totalWompi" name="totalWompi" value="" />
													<label>
														<input class="radio1 mtext-105" id="cc" type="radio" name="identificacion"
															checked value="Cedula" onclick="selectRadioB()"> Cédula
													</label>
												</div>
												<div class="radio">
													<label>
														<input class="radio2" id="nit" type="radio"
															name="identificacion" value="NIT" onclick="selectRadioB()">
														NIT
													</label>
												</div>
												<fieldset>
												</fieldset>
											</div> -->
											<!-- <div class="flex-w flex-r-m p-b-10"
												onmouseover="describeSelectParamAgente()"
												onmouseout="clearParamDescrAgente();" id="agente" name="agente"
												style="display: none">
												<div class="labelForm size-203 respon6">
													¿Agente de retención?
												</div>
												<div class="selecForm size-204 respon6-next">
													<div class="rs1-select2  bg0">
														<input type="checkbox" name="CheckAgente" id="CheckAgente"
															onclick="cambios()">
														<div class="dropDownSelect2"></div>
													</div>
												</div>
											</div> -->
											<!-- <div id="descriptionBoxAgente" class="descriptionBox">Selecciona si eres una persona o entidad que tiene la responsabilidad legal de retener y pagar impuestos.</div> -->
											<!-- <div class="flex-w flex-r-m p-b-10"
												onmouseover="describeSelectParamDepart()"
												onmouseout="clearParamDescrDepart();" name="CMunicipios"
												id="CMunicipios" style="display: none;">
												<div class="labelForm size-203 respon6">
													Municipio de retención
												</div>
												<div class="selecForm selecForm size-204 respon6-next">
													<div class="rs1-select2 bor8 bg0">
														<select class="js-select2" type="text"
															onchange="ShowSelectedMunicipios();"
															name="municipios" id="municipios" require>
															<option disabled selected>Escoje una opción</option>
															<option value="Bogota">Bogotá DC</option>
															<option value="Cali">Cali</option>
														</select>
														<div class="dropDownSelect2"></div>
													</div>
												</div>
											</div>
											<div id="descriptionBoxMunicipios" class="descriptionBox">Si tu municipio de retención no está listado, ve a ayuda e información para brindarte apoyo.</div> -->
											<div class="flex-w flex-r-m p-b-10 cDelivery"
												 name="cDelivery" id="cDelivery">
												<div class="labelForm labelForm size-203 respon6">
													Envío
												</div>
												<div class="selecForm selecForm size-204 respon6-next">
													<div class="rs1-select2 bor8 bg0" id="divDelivery">
														<select class="js-select2" type="text" name="delivery"
															id="delivery" onchange="ShowSelectedDelivery();" require>
															<option disabled selected>Escoje una opción</option>
															<option value="Domicilio">Domicilio</option>
															<option value="fisico">Recoger en sucursal</option>
														</select>
														<div class="dropDownSelect2"></div>
													</div>
												</div>
											</div>
											<!-- <div id="descriptionBoxDelivery" class="descriptionBox">Descripción de
												Envió</div> -->
											<div class="flex-w flex-r-m p-b-10 cCiudadDelivery"
												 name="cCiudadDelivery"
												id="cCiudadDelivery" style="display: none ;">
												<div class="labelForm size-203 respon6">
													Ciudad de destino por cargger
												</div>
												<div class="selecForm size-204 respon6-next">
													<div class="rs1-select2 bor8 bg0" id="divCiudadDeli">
														<select class="js-select2" type="text"
														onchange="ShowSelectedCDelivery(), ShowChangeCDelivery()"
															id="ciudadDelivery" require>
															<option disabled selected>Escoje una opción</option>
														</select>
														<div class="dropDownSelect2"></div>
													</div>
												</div>
											</div>
											<div id="descriptionBoxCiudadDelivery" class="descriptionBox">Descripción de
												ciudad delivery</div>
											<div class="flex-w flex-r-m p-b-10 cCiudadSucursal"
												 name="cCiudadSucursal"
												id="cCiudadSucursal" style="display: none;">
												<div class="labelForm size-203 respon6">
													Sucursal a recoger
												</div>
												<div class="selecForm size-204 respon6-next">
													<div class="rs1-select2 bor8 bg0" id="divSucursal">
														<select class="js-select2" type="text"
															onchange="ShowSelectedCiudadSucursal()" id="ciudadSucursal"
															require>
															<option disabled selected>Escoje una opción</option>
															<option value="Bogotá Dc">Bogotá Dc</option>
															<option value="Medellín">Medellín</option>
															<option value="Cali">Cali</option>
														</select>
														<div class="dropDownSelect2"></div>
													</div>
												</div>
											</div>
											
											<!-- <div id="descriptionBoxCiudadSucursal" class="descriptionBox">Descripción de
												ciudad de recogida máquina</div> -->
											<!-- <div class="flex-w flex-r-m p-b-10 cproveedor"
												 name="cproveedor"
												id="cproveedor" style="display: none">
												<div class="labelForm size-203 respon6">
													Solicita tu kit aliado
												</div>
												<div class="selecForm size-204 respon6-next">
													<div class="rs1-select2  bg0">
														<input type="checkbox" name="Checkproveedor" id="Checkproveedor"
															onclick="cambios()">
														<div class="dropDownSelect2"></div>
													</div>
												</div>
											</div> -->
											<!-- <div id="descriptionBoxproveedor" class="descriptionBox">Descripción de
												proveedor</div> -->
											<!-- <div>
												<h6 class = "alertProve" id="textImgProve"  ></h6>
												<div class="contImgProve">
													<a class = "hrefProve" id = "hrefProve" target = "_blank">
													<img class="imgProve" id="imgProve" src="" alt="">
													</a>
													
												</div>
											</div> -->
											<div class="direcciones" id="direcciones">
												<div class=" contSedes ">
													<h4 class="" style="text-align: center;">Sede</h4>
													<div class="contDire" style="display: flex;">
														<div class="icon">
															<i class="fa fa-map-marker-alt me-3"></i> 
														</div>
														<div class="dire" style="margin-left: 10px;">
															<p id="direccionSucursal">
														
															</p>
														</div>
													</div>
													<div class="contDire" style="display: flex;">
														<div class="icon">
															<i class="fa fa-phone-alt me-3"></i> 
														</div>
														<div class="dire" style="margin-left: 10px;">
															<p>
																310 224 2724
															</p>
														</div>
													</div>
													<div class="contDire" style="display: flex;">
														<div class="icon">
															<i class="fa fa-envelope me-3"></i> 
														</div>
														<div class="dire" style="margin-left: 10px;">
															<p>
																mercadeo@inssa.com.co
															</p>
														</div>
													</div>
										
												</div>
											</div>
									
											<div class=" contContador flex-w flex-r-m p-b-10">
												<div class=" flex-w flex-m respon6-next">
													<div class="wrap-num-product flex-w m-r-20 m-tb-10">
														<div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"
															id="BotMenos">
															<!-- <i class="fs-16 zmdi zmdi-minus menos"></i> -->
															<button id="menos"  type="button" class=" camb fs-16 zmdi
																	zmdi-minus">
														</div>
														<input class="mtext-104 cl3 txt-center num-product"
															type="number" id="num-product" name="num-product" value="1">
														<div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m"
															id="BotMas">
															<!-- <i class="fs-16 zmdi zmdi-plus mas"></i> -->
															<button id="mas"  type="button" class="camb fs-16 zmdi
																		zmdi-plus">
															</button>
														</div>
													</div>		
												</div>
											</div>
										</div>
										<input type="hidden" id="f1t1" name="f1t1" class="mtext-110 cl2">
										</input>
							

								</div>
								<div class=" m-b-30">
									<div class="bor10 p-lr-40 p-t-30 p-b-40 m-lr-0-xl p-lr-15-sm">
										<h4 class="mtext-109 cl2 p-b-30">
											Balance
										</h4>
										<div class="flex-w flex-t bor12 p-b-13">
											<div class="size-208">
												<span class="stext-110 cl2">
													Subtotal:
												</span>
											</div>
											<div class="size-209">
												<label id="subtotal" name="subtotal" class="mtext-110 cl2"></label>
											</div>
										</div>
										<div class="flex-w flex-t bor12 p-b-13">
											<div class="size-208">
												<span class="stext-110 cl2">
													Iva:
												</span>
											</div>
											<div class="size-209">
												<label id="iva" name="iva" class="mtext-110 cl2"></label>
											</div>
										</div>
										<div class="flex-w flex-t bor12 p-b-13">
											<div class="size-208">
												<span class="stext-110 cl2">
													Flete:
												</span>
											</div>
											<div class="size-209">
												<label id="flete" name="flete" class="mtext-110 cl2">$0.00</label>
											</div>
										</div>
										<div id="divDescuentoIca" name="divDescuentoIca" class="flex-w flex-t
														bor12 p-b-13" style="display: none;">
											<div class="size-208">
												<span class="stext-110 cl2">
													Reteica:
												</span>
											</div>
											<div class="size-209">
												<label id="reteica" name="reteica" class="mtext-110 cl2">$
												</label>
											</div>
										</div>
										<div id="divDescuentoFuente" name="divDescuentoFuente" class="flex-w flex-t
														bor12 p-b-13" style="display: none;">
											<div class="size-208">
												<span class="stext-110 cl2">
													Retefuente:
												</span>
											</div>
											<div class="size-209">
												<label id="retefuente" name="retefuente" class="mtext-110 cl2">$
												</label>
											</div>
										</div>
										<div id="divDescuento" name="divDescuento" class="flex-w flex-t
														bor12 p-b-13" style="display: none;">
											<div class="size-208">
												<span class="stext-110 cl2">
													Total retención:
												</span>
											</div>
											<div class="size-209">
												<label id="descuento" name="descuento" class="mtext-110 cl2">$
												</label>
											</div>
										</div>
										<div class="flex-w flex-t p-t-27 p-b-33">
											<div class="size-208">
												<span class="mtext-101 cl2">
													Total:
												</span>
											</div>
											<div class="size-209 p-t-1">
												<label id="total" name="total" class="mtext-110 cl2">$
												</label>
											</div>
										</div>
										<!-- <button class="waybox-button flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1
											p-lr-15 trans-04 " type="button" id=botonpagar  name="botonpagar" onclick="generarQr()">
											Pagar
										</button> -->
										


										<form class="pru">

										</form>

										<div style="display: flex; align-items: baseline;">
											<input type="checkbox" name="my-checkbox" id="opt-in">
											<label style="margin-left: 10px;" for="opt-in">He leído y estoy de acuerdo con los <a href="https://inssa.com.co/terminos-y-condiciones-ecommerce-inssa/"
												target="_blank">términos y condiciones</a> de la web *</label>
										  </div>

										

										

<button class="waybox-button flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1
p-lr-15 trans-04" id="abrirModal">Pagar</button>

<div style="display: flex; margin-top: 10px; align-items: baseline;">
	<label style="margin-left: 10px;" for="opt-in">Te informamos que los datos que nos proporciones serán tratados de manera confidencial y utilizados únicamente para fines específicos relacionados con tu compra y otros propósitos descritos en nuestra <a href="https://inssa.com.co/terminos-y-condiciones-ecommerce-inssa/"
		target="_blank">política de privacidad.</a></label>
  </div>


<!-- Ventana modal, por defecto no visiblel -->
<div id="ventanaModalDomi" class="modal">
	<div class="modal-content">
		<span class="cerrarDomi">&times;</span>

		<form action="https://checkout.wompi.co/p/" method="GET" class="wompi" name="wompi" id="wompi" target="_blank">

			<input type="hidden" name="public-key" value="pub_prod_jzoTpu9Es1mhKUKrbNw3ezvzImlD8AYb			" />
			<!-- <input type="hidden" name="public-key" value="pub_test_2YyBHOyazu3p9AlJ2jjdPuLG5YVuX77c" /> -->
			<input type="hidden" name="sku" value="prueba" />
			<input type="hidden" name="currency" value="COP" />
			<input type="hidden" name="amount-in-cents" id="amount-in-cents" value="" />
			<input type="hidden" name="name" id="name" value="REFERENCIA_DE_PAGO" />
			<input type="hidden" name="reference" id="reference" value="REFERENCIA_DE_PAGO" />
			<input type="hidden" name="redirect-url" id = "redirect-url" value="URL_REDIRECCION" />
			<input type="hidden" name="shipping-address:country" value="CO" />
			<input type="hidden" name="shipping-address:region" value="N/A" />

			<input type="hidden" name="shipping-address:city" id="shipping-address:city" value="CIUDAD_DE_ENVIO" />

			<div class="contFormModal">
				<h1>Datos de contacto y envió</h1>

				<div class="formModal">

					<div class="contLefth">
						<div class='data-email'>
							<label for='data-email'>Email</label>
							<input class="data-input" required type="email" name="customer-data:email"
								placeholder="Correo del pagador" />
						</div>
						<div class='data-cel'>
							<label for='data-cel'>Celular</label>
							<input class="data-input" required type="tel" name="customer-data:phone-number"
								placeholder="Número de teléfono del pagador" pattern="[0-9]{10}" />
						</div>
					</div>
					<div class="contRight">
						<div class='data-name'>
							<label for='data-name'>Nombre</label>
							<input class="data-input" required type="text" name="customer-data:full-name"
								placeholder="Nombre del pagador" />
						</div>
					</div>
				</div>
				<div class="formModal">

					<div class="contLefth">
						<div class='data-address'>
							<label for='data-address'>Dirección</label>
							<input class="data-input" required type="text" name="shipping-address:address-line-1"
								placeholder="Dirección de envío" />
						</div>
						<div class='data-address-cel'>
							<label for='data-address-cel'>Teléfono de quien recibe</label>
							<input class="data-input" required type="tel" name="shipping-address:phone-number"
								placeholder="Número de teléfono de quien recibe" pattern="[0-9]{10}" />
						</div>
						<div class='data-address-name'>
							<label for='data-address-name'>Nombre de quien recibe</label>
							<input class="data-input" required type="text" name="shipping-address:name"
								placeholder="Nombre de quien recibe" />
						</div>
					</div>
					<div class="contRight">
						<div class='data-address2'>
							<label for='data-address2'>Instrucciones</label>
							<input class="data-input" required type="text" name="shipping-address:address-line-2"
								placeholder="Apartamento / Interior / Oficina / etc" />
						</div>
						<!-- <div class='data-region'>
							<label for='data-region'>departamento</label>
							<select  type="hidden" class="data-input-select" required type="" name="shipping-address:region">
								<option selected disabled value="">Seleccione un elemento de la lista</option>
								<option value="Distrito Capital de Bogotá">Distrito Capital de Bogotá</option>
								<option value="Amazonas">Amazonas</option>
								<option value="Antioquia">Antioquia</option>
								<option value="Arauca">Arauca</option>
								<option value="Atlántico">Atlántico</option>
								<option value="Bolívar">Bolívar</option>
								<option value="Boyacá">Boyacá</option>
								<option value="Caldas">Caldas</option>
								<option value="Caquetá">Caquetá</option>
								<option value="Casanare">Casanare</option>
								<option value="Cauca">Cauca</option>
								<option value="Cesar">Cesar</option>
								<option value="Córdoba">Córdoba</option>
								<option value="Cundinamarca">Cundinamarca</option>
								<option value="Chocó">Chocó</option>
								<option value="Guainía">Guainía</option>
								<option value="Guaviare">Guaviare</option>
								<option value="Huila">Huila</option>
								<option value="La Guajira">La Guajira</option>
								<option value="Magdalena">Magdalena</option>
								<option value="Meta">Meta</option>
								<option value="Nariño">Nariño</option>
								<option value="Norte de Santander">Norte de Santander</option>
								<option value="Putumayo">Putumayo</option>
								<option value="Quindío">Quindío</option>
								<option value="Risaralda">Risaralda</option>
								<option value="San Andrés, Providencia y Santa Catalina">San Andrés, Providencia y Santa
									Catalina</option>
								<option value="Santander">Santander</option>
								<option value="Sucre">Sucre</option>
								<option value="Tolima">Tolima</option>
								<option value="Valle del Cauca">Valle del Cauca</option>
								<option value="Vaupés">Vaupés</option>
								<option value="Vichada">Vichada</option>
							</select>
						</div> -->
					</div>
				</div>
			</div>
			<div class='set'>
				<button class="waybox-button flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1
		p-lr-15 trans-04 botonModal" type="submit">Pagar con Wompi</button>
			</div>
	</div>


</div>

</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
			
			<div class="aliados">
				<img class="imgAliados" src="images/Wompi_LogoPrincipal.png" alt="">
				<img class="imgAliados" src="images/logoCargger.jpeg" alt="">
			</div>
			<!-- Footer Start -->
			<div class="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
				<div class="container py-5">
					<div class="row g-5">
						<div class="col-lg-3 col-md-6  ">
							<h1 class="text-white mb-4">
							<a href="https://inssa.com.co/" target = "_blank" class="navbar-brand d-flex align-items-center">
							<img class="fa fa-building me-3" src="images/logoInssa.png" width="80" height="60"
									alt="Image" />
							</a>
								
							</h1>
							<p>
								Somos una organización que cree en los emprendedores y en las empresas.
								Asesoramos, gestionamos, conseguimos y ofrecemos oportunidades de nuevos negocios.
							</p>
							<div class="d-flex pt-4">
								<a class="btn btn-square btn-outline-primary me-1"
									href="https://www.facebook.com/INSSASAS" target = "_blank"><i class="fab fa-facebook-f" ></i></a>
								<a class="btn btn-square btn-outline-primary me-1"
									href="https://www.youtube.com/@inssasas/videos"target = "_blank"><i class="fab fa-youtube" ></i></a>
								<a class="btn btn-square btn-outline-primary me-0"
									href="https://www.instagram.com/mercadeoinssa/"target = "_blank"><i class="fab fa-instagram" ></i></a>
							</div>
						</div>
						<div class="col-lg-3 col-md-6 contSedes ">
							<h4 class="text-light mb-4">Sedes</h4>
							<p>
								<i class="fa fa-map-marker-alt me-3"></i> Bogotá: Cra 26# 78-47
							</p>
							<p>
								<i class="fa fa-map-marker-alt me-3"></i> Cali: Calle 25nte # 5b-54
							</p>
							<p>
								<i class="fa fa-map-marker-alt me-3"></i> Medellín: Calle 10 sur # 50ff - 28
							</p>
							<p><i class="fa fa-phone-alt me-3"></i> 310 224 2724</p>
							<p><i class="fa fa-envelope me-3"></i> mercadeo@inssa.com.co</p>
						</div>
		
					</div>
				</div>
			</div>

		<!-- <div onmouseover="overWhat()" onmouseout="outWhat()" class = "contWhatsapp" style="z-index: 9999; position: fixed;">
		<a  href="https://wa.link/dpq6x3" class="whatsapp" target="_blank"> <i class="fab fa-whatsapp"></i></a>
		<div class = "contTextWhat" id = "contTextWhat" style = "display: none">
			<p class = "textWhat">
			¡Hola! Soy Lina, ¿en qué puedo ayudarte?
			</p>
		
		</div>
		</div> -->
		
		<div class = "Antpack" style="z-index: 9999; position: fixed;">
		<button onclick="myFunction()"
      style="all:unset;font-family:Helvetica,Arial,sans-serif;display:inline-block;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background-color:#F9CD48;color:#000;font-size:18px;border-radius:18px;padding:0 30px;font-weight:bold;height:45px;cursor:pointer;line-height:45px;text-align:center;margin:0;text-decoration:none;">Contactarme!</button>
     <script >
      function myFunction() {
        document.getElementById("formInssa").style.display = "flex"
      }
      function closeForm(){
        document.getElementById("formInssa").style.display = "none"
      }
      </script> 
    
      


   
<div id="formInssa" style="display: none; z-index: 10001;">
  <div class="tf-v1-popup" data-testid="tf-v1-popup" style="opacity: 1; position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.75);
    transition: opacity .25s ease-in-out;
    display: flex;
    z-index: 10001;
    align-items: center;
    justify-content: center;">
      <div class="tf-v1-spinner" style="display: none; border: 3px solid #aaa;
    font-size: 40px;
    width: 1em;
    height: 1em;
    border-radius: 0.5em;
    box-sizing: border-box;
    animation: spin 1s linear infinite;
    border-top-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -20px 0 0 -20px;"></div>
      <div class="tf-v1-iframe-wrapper" style="opacity: 1; width: calc(70% - 80px); height: calc(70% - 80px); position: relative;
    transition: opacity .25s ease-in-out;
    min-width: 360px;
    min-height: 360px;"><iframe
          src="https://inssa.com.co/form-scoring/index.html?utm_source=Inssa%20Prime&utm_campaign=NA&utm_medium=Contactarme&utm_content=ContactarmePrime&utm_var=DEFAULT-DEFAULT-DEFAULT&utm_person=lina"
          data-testid="iframe" allow="microphone; camera" title="Inssa Form"
          style="border: 0px; transform: translateZ(0px);     width: 100%;
    height: 100%;
    border: none;
    overflow: hidden;
    border-radius: 8px
px
;"></iframe>
          <a onclick="closeForm()" class="tf-v1-close tf-v1-close-icon" style="color: #fff !important; position: absolute;
    font-size: 32px;
    line-height: 24px;
    width: 24px;
    height: 24px;
    text-align: center;
    cursor: pointer;
    opacity: .75;
    transition: opacity .25s ease-in-out;
    text-decoration: none;
    color: #000;
    top: -34px;
    right: 0;">×</a></div>
    </div>
  </div>
		</div>
		
		


<div>
<!-- <button class="waybox-button flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1
											p-lr-15 trans-04 " type="button" id=botonpagar  name="botonpagar" onclick="botonWompi()">
											Pagar
										</button> -->


</div>


       
    </div>
  </div>

  <div class="marcaAgua" id="marcaAgua" style="display: none;">
	<p style="transform: rotate(-25deg);
    padding: 17px; color:red">No disponible en tienda virtual</p>
  </div>



	
			<!-- Footer End -->

			<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
			<!--===============================================================================================-->
			<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
			<!--===============================================================================================-->
			<script src="vendor/animsition/js/animsition.min.js"></script>
			<!--===============================================================================================-->
			<script src="vendor/bootstrap/js/popper.js"></script>
			<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
			<!--===============================================================================================-->
			<script src="vendor/select2/select2.min.js"></script>
			<script>
				$(".js-select2").each(function () {
					$(this).select2({
						minimumResultsForSearch: 20,
						dropdownParent: $(this).next('.dropDownSelect2')
					});
				})
			</script>
			<script src="https://unpkg.com/qrious@4.0.2/dist/qrious.js"></script>
			<!--===============================================================================================-->
			<script src="vendor/daterangepicker/moment.min.js"></script>
			<script src="vendor/daterangepicker/daterangepicker.js"></script>
			<!--===============================================================================================-->
			<script src="vendor/slick/slick.min.js"></script>
			<script src="js/slick-custom.js"></script>
			<!--===============================================================================================-->
			<script src="vendor/parallax100/parallax100.js"></script>
			<script>
				$('.parallax100').parallax100();
			</script>
			<!--===============================================================================================-->
			<script src="vendor/MagnificPopup/jquery.magnific-popup.min.js"></script>
			<script>
				$('.gallery-lb').each(function () { // the containers for all your galleries
					$(this).magnificPopup({
						delegate: 'a', // the selector for gallery item
						type: 'image',
						gallery: {
							enabled: true
						},
						mainClass: 'mfp-fade'
					});
				});
			</script>
			<!--===============================================================================================-->
			<script src="vendor/isotope/isotope.pkgd.min.js"></script>
			<!--===============================================================================================-->
			<script src="vendor/sweetalert/sweetalert.min.js"></script>
			<script>
				$('.js-addcart-detail').each(function () {
					var nameProduct = $(this).parent().parent().parent().parent().find('.js-name-detail').html();
					$(this).on('click', function () {
						var selectCiudad = document.getElementById("delivery").value;
						console.log("delivery", selectCiudad);
						var selectPersona = document.getElementById("persona").value;
						console.log("persona", selectPersona);
						if (selectCiudad == "Escoje una opción" && selectPersona == "Escoje una opción") {
							console.log("pailas");
							Swal.fire('No puedes dejar campos vacios')
						} else {
							mensaje()
							console.log("bn", selectCiudad, selectPersona);
						}
					});
				});
			</script>
			<!--===============================================================================================-->
			<script src="vendor/perfect-scrollbar/perfect-scrollbar.min.js"></script>
			<!--===============================================================================================-->
			<script src="js/main.js"></script>
			<!-- <script src="ciudades.js"></script> -->
			<script type="text/javascript">
    $(document).ready(function() {
      setTimeout(function() {
        // alert('Reloading Page');
        history.go(1);

      }, 3000);
    });
  </script>
			<script src="departamentosDelivery.js?version= v<?php echo "{$fecha_actual}" ?>"></script>
			<script src="procesos.js?version= v<?php echo "{$fecha_actual}" ?>"></script>
			<script src="caracteristicas.js?version= v<?php echo "{$fecha_actual}" ?>"></script>
			<script src="condiciones.js?version= v<?php echo "{$fecha_actual}" ?>"></script>
			<script src="wompi.js"></script>
</body>
</html>
