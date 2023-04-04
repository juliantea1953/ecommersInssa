<?php


$produc= $_GET['producto'];


require "variables.php";




?>

<!DOCTYPE html>
<html lang="en">

<head>
	<title>Producto</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!--===============================================================================================-->
	<link rel="icon" type="image/png" href="images/icons/favicon.png" />
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
	<link rel="stylesheet" type="text/css" href="css/util.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<!--===============================================================================================-->
	<!-- Customized Bootstrap Stylesheet -->


	<!-- Icon Font Stylesheet -->
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
	<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

	<!-- Libraries Stylesheet -->
	<script src="https://cdn.wompi.co/libs/js/v1.js"
		data-public-key="pub_prod_jzoTpu9Es1mhKUKrbNw3ezvzImlD8AYb"></script>

</head>

<body class="animsition ">

	<!-- Header -->
	<header class="header-v4">
		<!-- Header desktop -->


		<!-- Modal1 -->


		<!-- Header -->
		<header>
			<!-- Header desktop -->
			<div class="container-menu-desktop">
				<!-- Topbar -->
				<div class="top-bar ">
					<div class="content-topbar flex-sb-m h-full container">
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

						<div class="right-top-bar flex-w h-full">
							<a href="https://www.facebook.com/INSSASAS" class="flex-c-m trans-04 p-lr-25">
								<i class="fab fa-facebook-f"></i></a>
							</a>

							<a href="https://www.youtube.com/@inssasas/videos" class="flex-c-m trans-04 p-lr-25">
								<i class="fab fa-youtube"></i>
							</a>

							<a href="https://www.instagram.com/inssasas/" class="flex-c-m trans-04 p-lr-25">
								<i class="fab fa-instagram"></i>
							</a>


						</div>
					</div>
				</div>



				<div class=" ">
					<div class="content-topbar flex-sb-m h-full container">
						<div class="left-top-bar">
							<a href="https://inssa.com.co/" class="navbar-brand d-flex align-items-center">
								<h1 class="m-0">
									<img class="w-100" src="images/logoInssa.png" width="50" height="50" alt="Image"
										style="max-width: 80px" />
								</h1>
							</a>
						</div>

						<div class="left-top-bar">

						</div>


					</div>
				</div>

			</div>








			<!-- <form  method ="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>"  > -->
			<div class=" js-modal1 ">
				<div class=" js-hide-modal1"></div>

				<div class="container">
					<div class="bg0 p-t-60 p-lr-15-lg how-pos3-parent">
						<!-- <button class="how-pos3 hov3 trans-04 js-hide-modal1">
						<img src="images/icons/icon-close.png" alt="CLOSE">
					</button> -->

						<div class="row">
							<div class="col-md-6 col-lg-7">
								<div class="p-l-25 p-r-30 p-lr-0-lg">
									<div class="wrap-slick3 flex-sb flex-w">
										<div class="wrap-slick3-dots"></div>
										
										<div class="wrap-slick3-arrows flex-sb-m flex-w"></div>

										
							
										<div class="slick3 gallery-lb">
											<div class="item-slick3" data-thumb="<?php echo " {$img1}" ?>">
												<div class="wrap-pic-w pos-relative">
													<img src="<?php echo " {$img1}" ?>" alt="IMG-PRODUCT">
							
													<a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3
																						trans-04" href="<?php echo " {$img1}" ?>">
														<i class="fa fa-expand"></i>
													</a>
												</div>
											</div>
							
											<div class="item-slick3" data-thumb="<?php echo " {$img2}" ?>">
												<div class="wrap-pic-w pos-relative">
													<img src="<?php echo " {$img2}" ?>" alt="IMG-PRODUCT">
							
													<a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3
																						trans-04" href="<?php echo " {$img2}" ?>">
														<i class="fa fa-expand"></i>
													</a>
												</div>
											</div>
							
											<div class="item-slick3" data-thumb="<?php echo " {$img3}" ?>">
												<div class="wrap-pic-w pos-relative">
													
														<img href = "" src="<?php echo " {$img3}" ?>" alt="IMG-PRODUCT">
													
													
							
													<a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3
																						trans-04" href="<?php echo " {$img3}" ?>">
														<i class="fa fa-expand"></i>
													</a>
												</div>

											</div>

											<div class="item-slick3" data-thumb="<?php echo " {$img3}" ?>">
												<div class="wrap-pic-w pos-relative">
													
													<iframe src="https://www.youtube.com/embed/ooFKpioJcL4?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Finssa.com.co&widgetid=1" width="560" height="315">
													</iframe>
													
													
							
													<a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3
																						trans-04" href="<?php echo " {$img3}" ?>">
														<i class="fa fa-expand"></i>
													</a>
												</div>

											</div>
											<div class="item-slick3" data-thumb="<?php echo " {$img3}" ?>">
												<div class="wrap-pic-w pos-relative">
													
													<iframe src="https://www.youtube.com/embed/ooFKpioJcL4?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Finssa.com.co&widgetid=1" width="560" height="315">
													</iframe>
													
													
							
													<a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3
																						trans-04" href="<?php echo " {$img3}" ?>">
														<i class="fa fa-expand"></i>
													</a>
												</div>

											</div>
											<div class="item-slick3" data-thumb="<?php echo " {$img3}" ?>">
												<div class="wrap-pic-w pos-relative">
													
													<iframe src="https://www.youtube.com/embed/ooFKpioJcL4?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Finssa.com.co&widgetid=1" width="560" height="315">
													</iframe>
													
													
							
													<a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3
																						trans-04" href="<?php echo " {$img3}" ?>">
														<i class="fa fa-expand"></i>
													</a>
												</div>

											</div>
											<div class="item-slick3" data-thumb="<?php echo " {$img3}" ?>">
												<div class="wrap-pic-w pos-relative">
													
													<iframe src="https://www.youtube.com/embed/ooFKpioJcL4?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Finssa.com.co&widgetid=1" width="560" height="315">
													</iframe>
													
													
							
													<a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3
																						trans-04" href="<?php echo " {$img3}" ?>">
														<i class="fa fa-expand"></i>
													</a>
												</div>

											</div>
											<div class="item-slick3" data-thumb="<?php echo " {$img3}" ?>">
												<div class="wrap-pic-w pos-relative">
													
													<iframe src="https://www.youtube.com/embed/ooFKpioJcL4?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Finssa.com.co&widgetid=1" width="560" height="315">
													</iframe>
													
													
							
													<a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3
																						trans-04" href="<?php echo " {$img3}" ?>">
														<i class="fa fa-expand"></i>
													</a>
												</div>

											</div>

											
										</div>

										

										

										
									</div>

									<div class="qr">
										
										<a id="aQr" href="">
											<img alt="Código QR" id="codigo">
										</a>

										
									</div>

									<div class="linkPago">
										<a id="linkPago" href="">
											<label readonly type="url" id="link" name="link" for=""></label>
										</a>
									</div>

									
								
									<input  type="hidden" id="link" name="link" require />
									
								</div>
								
							
							</div>


							<div class="col-md-6 col-lg-5 ">
								<div class="p-r-50 p-t-5 p-lr-0-lg">

									<input type="hidden" id="producto" name="producto" require value="<?php echo "{$produc}" ?>"/>

									<input type="hidden" id="ica" name="ica" require />

									<input type="hidden" id="fleteI" name="fleteI" require />
									



									<h4 class="mtext-105 cl2 js-name-detail p-b-14" id="nombre">

									</h4>

									<span class="mtext-106 cl2" id="subtotalText">

									</span>

									<p class="stext-102 cl3 p-t-23">

									</p>

									<!--  -->
									<form id="formulario" name="formulario" action="wompi.php" method="post">
										<input type="hidden" id="ciudad1" name="ciudad1">

										<div class="p-t-33">

											


						<div class="contRadio">

							<div class="radio">

							
							<input type="hidden" id="totalWompi" name="totalWompi" value = "" />
							
									<label>
										<input class="radio1" id="cc" type="radio" name="identificacion" checked value="Cedula"  onclick="selectRadioB()"> Cedula
									</label>

					

							</div>
							<div class="radio">
								<label>
									<input class="radio2" id="nit" type="radio" name="identificacion" value="NIT" onclick="selectRadioB()" > NIT
								</label>
								
							</div>
							<fieldset >
		

							
					
							</fieldset>
						</div>
											


						<div class="flex-w flex-r-m p-b-10"
						onmouseover="describeSelectParamAgente()"
						onmouseout="clearParamDescrAgente();"
						id="agente" name = "agente" style="display: none">
						<div class="size-203 respon6">
							Agente de retención?
						</div>

						<div class="size-204 respon6-next">
							<div class="rs1-select2  bg0">
								<input type="checkbox" name="CheckAgente" id="CheckAgente" onclick="cambios()"> 

								<div class="dropDownSelect2"></div>
							</div>
						</div>



					</div>

					
<!-- 					<div class="flex-w flex-r-m p-b-10"
					onmouseover="describeSelectParamAgente()"
					onmouseout="clearParamDescrAgente();"
					id="agente" name = "agente" style="display: none;">
					<div class="size-203 respon6">
						Agente de retención?
					</div>

					<div class="size-204 respon6-next">
						<div class="rs1-select2 bor8 bg0">
							<select class="js-select2" type="text" name="persona"
								id="persona" onchange="ShowSelectAgente();" >
								<option disabled selected>Escoja una opción</option>
								<option value="Si">Si</option>
								<option value="No">No</option>

							</select>
							<div class="dropDownSelect2"></div>
						</div>
					</div>



				</div> -->

					
		


							

<!-- 
											<div class="flex-w flex-r-m p-b-10"
												onmouseover="describeSelectParamAgente()"
												onmouseout="clearParamDescrAgente();"
												id="agente" name = "agente" style="display: none;">
												<div class="size-203 respon6">
													Agente de retención?
												</div>

												<div class="size-204 respon6-next">
													<div class="rs1-select2 bor8 bg0">
														<select class="js-select2" type="text" name="persona"
															id="persona" onchange="ShowSelectAgente();" >
															<option disabled selected>Escoja una opción</option>
															<option value="Si">Si</option>
															<option value="No">No</option>

														</select>
														<div class="dropDownSelect2"></div>
													</div>
												</div>



											</div> -->

											<div id="descriptionBoxAgente" class="descriptionBox">descripcion de que
												es un agente de retencion</div>


											<div class="flex-w flex-r-m p-b-10"
												onmouseover="describeSelectParamDepart()"
												onmouseout="clearParamDescrDepart();" name="CMunicipios"
												id="CMunicipios" style="display: none;">
												<div class="size-203 respon6">
													Departamento de retención
												</div>
												<div class="size-204 respon6-next">
													<div class="rs1-select2 bor8 bg0">
														<select class="js-select2" type="text"
															onchange="ShowSelectedMunicipios(), ShowSelectedCMunicipios();"
															name="municipios" id="municipios" require>
															<option disabled selected>Escoja una opción</option>
														</select>
														<div class="dropDownSelect2"></div>
													</div>
												</div>

											</div>

											<div id="descriptionBoxMunicipios" class="descriptionBox">descripcion de
												municipio de retencion</div>


											<div class="flex-w flex-r-m p-b-10 cDelivery"
												onmouseover="describeSelectParamDelivery()"
												onmouseout="clearParamDescrDelivery();" name="cDelivery" id="cDelivery">
												<div class="size-203 respon6">
													Delivery
												</div>

												<div class="size-204 respon6-next">
													<div class="rs1-select2 bor8 bg0">
														<select class="js-select2" type="text" name="delivery"
															id="delivery" onchange="ShowSelectedDelivery();" require>
															<option disabled selected>Escoja una opción</option>
															<option value="Domicilio">Domicilio</option>
															<option value="fisico">Recoger en punto fisico</option>

														</select>
														<div class="dropDownSelect2"></div>
													</div>
												</div>
											</div>

											<div id="descriptionBoxDelivery" class="descriptionBox">descripcion de
												delivery</div>

											<div class="flex-w flex-r-m p-b-10 cCiudadDelivery"
												onmouseover="describeSelectCiudadDelivery()"
												onmouseout="clearParamDescrCiudadDelivery();" name="cCiudadDelivery"
												id="cCiudadDelivery" style="display: none ;">
												<div class="size-203 respon6">
													Ciudad de envio
												</div>
												<div class="size-204 respon6-next">
													<div class="rs1-select2 bor8 bg0">
														<select class="js-select2" type="text"
															onchange="ShowSelectedCiudadDelivery(), ShowSelectedCDelivery();"
															id="ciudadDelivery" require>
															<option disabled selected>Escoja una opción</option>
														</select>
														<div class="dropDownSelect2"></div>
													</div>
												</div>

											</div>

											<div id="descriptionBoxCiudadDelivery" class="descriptionBox">descripcion de
												ciudad delivery</div>


											<div class="flex-w flex-r-m p-b-10 cCiudadSucursal"
												onmouseover="describeSelectCiudadSucursal()"
												onmouseout="clearParamDescrCiudadSucursal();" name="cCiudadSucursal"
												id="cCiudadSucursal" style="display: none;">
												<div class="size-203 respon6">
													Sucursal a recoger
												</div>
												<div class="size-204 respon6-next">
													<div class="rs1-select2 bor8 bg0">
														<select class="js-select2" type="text"
															onchange="ShowSelectedCiudadSucursal()" id="ciudadSucursal"
															require>
															<option disabled selected>Escoja una opción</option>
															<option value="Bogota">Bogota</option>
															<option value="Medellin">Medellin</option>
															<option value="Cali">Cali</option>
														</select>
														<div class="dropDownSelect2"></div>
													</div>
												</div>

											</div>

											<div id="descriptionBoxCiudadSucursal" class="descriptionBox">descripcion de
												ciudad de recogida maquina</div>






											<div class="flex-w flex-r-m p-b-10">
												<div class="size-204 flex-w flex-m respon6-next">
													<div class="wrap-num-product flex-w m-r-20 m-tb-10">
														<div
															class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m" id="BotMenos">
															<!-- <i class="fs-16 zmdi zmdi-minus menos"></i> -->
															<button id="menos" type="button" class=" camb fs-16 zmdi
																	zmdi-minus">
														</div>

														<input class="mtext-104 cl3 txt-center num-product"
															type="number" id="num-product" name="num-product" value="1">
														<div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m" id="BotMas">
															<!-- <i class="fs-16 zmdi zmdi-plus mas"></i> -->
															<button id="mas" type="button" class="camb fs-16 zmdi
																		zmdi-plus">

															</button>
														</div>
													</div>

																	<!-- <button class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1
																p-lr-15 trans-04 js-addcart-detail" type="button" id =botonpagar name = "botonpagar" >
													Pagar
												</button>

												<input class="btn  w-100 py-3 contac" type="" onclick="generarQr()" id = "boton" name="submit" value="Enviar" /> -->





												</div>
											</div>

										</div>


										<input type="hidden" id="f1t1" name="f1t1" class="mtext-110 cl2">
										</input>



									</form>





								</div>




								<div class=" m-b-30">
									<div class="bor10 p-lr-40 p-t-30 p-b-40 m-lr-0-xl p-lr-15-sm">
										<h4 class="mtext-109 cl2 p-b-30">
											Total
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
												<label id="flete" name="flete" class="mtext-110 cl2">COL 0.00</label>
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
												<label id="reteica" name="reteica" class="mtext-110 cl2">COL
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
												<label id="retefuente" name="retefuente" class="mtext-110 cl2">COL
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
												<label id="descuento" name="descuento" class="mtext-110 cl2">COL
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
												<label id="total" name="total" class="mtext-110 cl2">COL
												</label>
											</div>
										</div>

										<!-- <div class="contPago">
											<form action="https://checkout.wompi.co/p/" method="GET" class="wompi"
												name="wompi" id="wompi"> -->

												<!-- OBLIGATORIOS -->

												<!-- <input type="hidden" name="public-key"
													value="pub_prod_jzoTpu9Es1mhKUKrbNw3ezvzImlD8AYb" />

												<input type="hidden" name="currency" value="COP" />

												<input type="hidden" name="amount-in-cents" id="amount-in-cents"
													value="" />

												<input type="hidden" name="reference" value="REFERENA_DE_PAGO144554551555" />

												<input type="hidden" name="collect-shipping" value="true" />
												<input type="hidden" name="collect-customer-legal-id" value="true" /> -->

												<!-- OPCIONALES -->
												<!-- <input type="hidden" name="signature:integrity"
													value="FIRMA_DE_INTEGRIDAD" />
													
												<input type="hidden" name="redirect-url" value="https://inssa.com.co/" />
												
												
												<input type="hidden" name="customer-data:email"
													value="CORREO_DEL_PAGADOR" />

												<input type="hidden" name="customer-data:full-name"
													value="NOMBRE_DEL_PAGADOR" />

												<input type="hidden" name="customer-data:phone-number"
													value="NUMERO_DE_TELEFONO_DEL_PAGADOR" />

												<input type="hidden" name="customer-data:legal-id"
													value="DOCUMENTO_DE_IDENTIDAD_DEL_PAGADOR" />

												<input type="hidden" name="customer-data:legal-id-type"
													value="TIPO_DEL_DOCUMENTO_DE_IDENTIDAD_DEL_PAGADOR" />

												<input type="hidden" name="shipping-address:address-line-1"
													value="DIRECCION_DE_ENVIO" />

												<input type="hidden" name="shipping-address:country"
													value="PAIS_DE_ENVIO" />

												<input type="hidden" name="shipping-address:phone-number"
													value="NUMERO_DE_TELEFONO_DE_QUIEN_RECIBE" />

												<input type="hidden" name="shipping-address:city"
													value="CIUDAD_DE_ENVIO" />

												<input type="hidden" name="shipping-address:region"
													value="REGION_DE_ENVIO" />

												<button class="waybox-button flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1
																		p-lr-15 trans-04 " type="submit">Pagar con Wompi</button>
											</form> -->
										
											<button class="waybox-button flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1
											p-lr-15 trans-04 " type="button" id =botonpagar name = "botonpagar"  onclick="generarQr()" >
													Pagar
												</button>
										</div>


									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


			<div class=" js-hide-modal1">
				<div class="container">
					<div class="bg0 p-lr-15-lg how-pos3-parent">


						<div class="row">
							<div class=" col-md-6 colum">
								<div class=" ">
									<div class=" m-lr-0-xl">
										<div class="wrap-table-shopping-cart">
											<table class="table-shopping-cart">
												<tr class="table_head">
													<th class="columnT-1">Características</th>


												</tr>

												<tr class="table_row">
													<td class="column-1">
														<p>
															<?php echo " {$textCarac1}" ?>
														</p>
														<p>
															<?php echo " {$textCarac2}" ?>
														</p>
														<p>
															<?php echo " {$textCarac3}" ?>
														</p>
														<p>
															<?php echo " {$textCarac4}" ?>
														</p>
														<p>
															<?php echo " {$textCarac5}" ?>
														</p>
														<p>
															<?php echo " {$textCarac6}" ?>
														</p>
														<p>
															<?php echo " {$textCarac7}" ?>
														</p>
														<p>
															<?php echo " {$textCarac8}" ?>
														</p>
														<p>
															<?php echo " {$textCarac9}" ?>
														</p>
														<p>
															<?php echo " {$textCarac10}" ?>
														</p>
														<p>
															<?php echo " {$textCarac11}" ?>
														</p>
														<p>
															<?php echo " {$textCarac12}" ?>
														</p>
														<p>
															<?php echo " {$textCarac13}" ?>
														</p>
														<p>
															<?php echo " {$textCarac14}" ?>
														</p>
														<p>
															<?php echo " {$textCarac15}" ?>
														</p>
														<p>
															<?php echo " {$textCarac16}" ?>
														</p>
													</td>


												</tr>


											</table>
										</div>


									</div>
								</div>
							</div>

							<div class=" col-md-6 colum">
								<div class=" ">
									<div class=" m-lr-0-xl">
										<div class="wrap-table-shopping-cart">
											<table class="table-shopping-cart">
												<tr class="table_head">
													<th class="columnT-1">Condiciones</th>


												</tr>

												<tr class="table_row">
													<td class="column-1">														
														<p>
															<?php echo " {$textCndi1}" ?>
														</p>
														<p>
															<?php echo " {$textCndi2}" ?>
														</p>
														<p>
															<?php echo " {$textCndi3}" ?>
														</p>
														<p>
															<?php echo " {$textCndi4}" ?>
														</p>
														<p>
															<?php echo " {$textCndi5}" ?>
														</p>
														<p id="alertaIca">
															
														</p>
													</p>
													<p id="alertaDelivery">
														
													</p>
													</td>


												</tr>


											</table>
										</div>


									</div>
								</div>

							</div>
						</div>
					</div>
				</div>

			</div>





			<!-- Footer Start -->
			<div class="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
				<div class="container py-5">
					<div class="row g-5">
						<div class="col-lg-3 col-md-6  ">
							<h1 class="text-white mb-4">
								<img class="fa fa-building me-3" src="images/logoInssa.png" width="80" height="60"
									alt="Image" /> Inssa
							</h1>
							<p>
								Somos una organización que cree en los emprendedores y en las empresas.
								Asesoramos, gestionamos, conseguimos y ofrecemos oportunidades de nuevos negocios.
							</p>
							<div class="d-flex pt-4">
								<!--               <a class="btn btn-square btn-outline-primary me-1" href=""
                ><i class="fab fa-twitter"></i
              ></a> -->
								<a class="btn btn-square btn-outline-primary me-1"
									href="https://www.facebook.com/INSSASAS"><i class="fab fa-facebook-f"></i></a>
								<a class="btn btn-square btn-outline-primary me-1"
									href="https://www.youtube.com/@inssasas/videos"><i class="fab fa-youtube"></i></a>
								<!--          <a class="btn btn-square btn-outline-primary me-1" href=""
                ><i class="fab fa-linkedin-in"></i
              ></a> -->
								<a class="btn btn-square btn-outline-primary me-0"
									href="https://www.instagram.com/inssasas/"><i class="fab fa-instagram"></i></a>
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
								<i class="fa fa-map-marker-alt me-3"></i> Medellín: Calle 10s # 50ff - 28
							</p>
							<p><i class="fa fa-phone-alt me-3"></i> 310 224 2724</p>
							<p><i class="fa fa-envelope me-3"></i> mercadeo@inssa.com.co</p>
						</div>
						<!--           <div class="col-lg-3 col-md-6">
            <h4 class="text-light mb-4">Quick Links</h4>
            <a class="btn btn-link" href="">About Us</a>
            <a class="btn btn-link" href="">Contact Us</a>
            <a class="btn btn-link" href="">Our Services</a>
            <a class="btn btn-link" href="">Terms & Condition</a>
            <a class="btn btn-link" href="">Support</a>
          </div> -->
						<!--           <div class="col-lg-3 col-md-6">
            <h4 class="text-light mb-4">Newsletter</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div class="position-relative mx-auto" style="max-width: 400px">
              <input
                class="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div> -->
					</div>
				</div>
				<!--       <div class="container-fluid copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a href="#">Your Site Name</a>, All Right Reserved.
            </div>
            <div class="col-md-6 text-center text-md-end">

				Designed By <a href="https://htmlcodex.com">HTML Codex</a>
              <br />Distributed By:
              <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
            </div>
          </div>
        </div>
      </div> -->
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

						if (selectCiudad == "Escoja una opción" && selectPersona == "Escoja una opción") {
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
			<script src="ciudades.js"></script>
			<script src="departamentosDelivery.js"></script>

</body>

</html>

<?php


?>