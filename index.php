<?php


$produc= $_GET['producto'];



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
	<script src="https://cdn.wompi.co/libs/js/v1.js"
		data-public-key="pub_prod_jzoTpu9Es1mhKUKrbNw3ezvzImlD8AYb"></script>

</head>

<body class="animsition ">

	<!-- Header -->
	<header class="header-v4">
		<!-- Header desktop -->


		<!-- Modal1 -->

		<form>
			<script src="https://checkout.wompi.co/widget.js" data-render="button"
				data-public-key="pub_prod_jzoTpu9Es1mhKUKrbNw3ezvzImlD8AYb" data-currency="COP"
				data-amount-in-cents="49500" data-reference="inssa_3b4393bafe98ba22">
				</script>
		</form>


		<!-- <form  method ="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>"  > -->
		<div class=" js-modal1 ">
			<div class=" js-hide-modal1"></div>

			<div class="container">
				<div class="bg0 p-t-60 p-lr-15-lg how-pos3-parent">
					<button class="how-pos3 hov3 trans-04 js-hide-modal1">
						<img src="images/icons/icon-close.png" alt="CLOSE">
					</button>

					<div class="row">
						<div class="col-md-6 col-lg-7">
							<div class="p-l-25 p-r-30 p-lr-0-lg">
								<div class="wrap-slick3 flex-sb flex-w">
									<div class="wrap-slick3-dots"></div>
									<div class="wrap-slick3-arrows flex-sb-m flex-w"></div>

									<div class="slick3 gallery-lb">
										<div class="item-slick3" data-thumb="images/Turin/Turin.png">
											<div class="wrap-pic-w pos-relative">
												<img src="images/Turin/Turin.png" alt="IMG-PRODUCT">

												<a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3
															trans-04" href="images/Turin/Turin.png">
													<i class="fa fa-expand"></i>
												</a>
											</div>
										</div>

										<div class="item-slick3" data-thumb="images/Turin/turin-sensacion.png">
											<div class="wrap-pic-w pos-relative">
												<img src="images/Turin/turin-sensacion.png" alt="IMG-PRODUCT">

												<a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3
															trans-04" href="images/Turin/turin-sensacion.png">
													<i class="fa fa-expand"></i>
												</a>
											</div>
										</div>

										<div class="item-slick3" data-thumb="images/Turin/stiker-para-turin1080.png">
											<div class="wrap-pic-w pos-relative">
												<img src="images/Turin/stiker-para-turin1080.png" alt="IMG-PRODUCT">

												<a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3
															trans-04" href="images/Turin/stiker-para-turin1080.png">
													<i class="fa fa-expand"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-md-6 col-lg-5 ">
							<div class="p-r-50 p-t-5 p-lr-0-lg">

								<input type="hidden" id="producto" name="producto" require value="<?php echo "{$produc}" ?>"/> 
								
								<h4 class="mtext-105 cl2 js-name-detail p-b-14" id="nombre">

								</h4>

								<span class="mtext-106 cl2" id="subtotalText">

								</span>

								<p class="stext-102 cl3 p-t-23">

								</p>

								<!--  -->
								<form id="formulario" name="formulario">
									<input type="hidden" id="ciudad1" name="ciudad1">

									<div class="p-t-33">


										<div class="flex-w flex-r-m p-b-10" onmouseover="describeSelectParamAgente()"
											onmouseout="clearParamDescrAgente();">
											<div class="size-203 respon6">
												Agente de retención?
											</div>

											<div class="size-204 respon6-next">
												<div class="rs1-select2 bor8 bg0">
													<select class="js-select2" type="text" name="persona" id="persona"
														onchange="ShowSelectAgente();" require>
														<option disabled selected>Escoja una opción</option>
														<option value="Si">Si</option>
														<option value="No">No</option>

													</select>
													<div class="dropDownSelect2"></div>
												</div>
											</div>



										</div>

										<div id="descriptionBoxAgente" class="descriptionBox">descripcion de que
											es un agente de retencion</div>


										<div class="flex-w flex-r-m p-b-10" onmouseover="describeSelectParamDepart()"
										onmouseout="clearParamDescrDepart();" name="CMunicipios" id="CMunicipios"
											style="display: none;">
											<div class="size-203 respon6">
												Departamento de retención
											</div>
											<div class="size-204 respon6-next">
												<div class="rs1-select2 bor8 bg0" >
													<select class="js-select2" type="text" onchange="ShowSelectedMunicipios();" name = "municipios" id="municipios" require>
														<option disabled selected>Escoja una opción</option>
													</select>
													<div class="dropDownSelect2"></div>
												</div>
											</div>

										</div>

										<div id="descriptionBoxMunicipios" class="descriptionBox">descripcion de municipio de retencion</div>


										<div class="flex-w flex-r-m p-b-10 cDelivery" onmouseover="describeSelectParamDelivery()"
										onmouseout="clearParamDescrDelivery();" name="cDelivery" id="cDelivery" >
											<div class="size-203 respon6">
											 Delivery
											</div>

											<div class="size-204 respon6-next">
												<div class="rs1-select2 bor8 bg0">
													<select class="js-select2" type="text" name="delivery" id="delivery"
														onchange="ShowSelectedDelivery();" require>
														<option disabled selected>Escoja una opción</option>
														<option value="Domicilio">Domicilio</option>
														<option value="fisico">Recoger en punto fisico</option>

													</select>
													<div class="dropDownSelect2"></div>
												</div>
											</div>
										</div>

										<div id="descriptionBoxDelivery" class="descriptionBox">descripcion de delivery</div>

										<div class="flex-w flex-r-m p-b-10 cCiudadDelivery" onmouseover="describeSelectCiudadDelivery()"
										onmouseout="clearParamDescrCiudadDelivery();" name="cCiudadDelivery" id="cCiudadDelivery"
											style="display: none;">
											<div class="size-203 respon6">
												Ciudad de envio
											</div>
											<div class="size-204 respon6-next">
												<div class="rs1-select2 bor8 bg0" >
													<select class="js-select2" type="text" onchange="ShowSelectedCiudadDelivery();" id="ciudadDelivery" require>
														<option disabled selected>Escoja una opción</option>
													</select>
													<div class="dropDownSelect2"></div>
												</div>
											</div>

										</div>

										<div id="descriptionBoxCiudadDelivery" class="descriptionBox">descripcion de ciudad delivery</div>


										<div class="flex-w flex-r-m p-b-10 cCiudadSucursal" onmouseover="describeSelectCiudadSucursal()"
										onmouseout="clearParamDescrCiudadSucursal();" name="cCiudadSucursal" id="cCiudadSucursal"
											style="display: none;">
											<div class="size-203 respon6">
												Sucursal a recoger
											</div>
											<div class="size-204 respon6-next">
												<div class="rs1-select2 bor8 bg0" >
													<select class="js-select2" type="text" onchange="ShowSelectedCiudadSucursal();" id="ciudadSucursal" require>
														<option disabled selected>Escoja una opción</option>
														<option value="Bogota">Bogota</option>
														<option value="Medellin">Medellin</option>
														<option value="Cali">Cali</option>
													</select>
													<div class="dropDownSelect2"></div>
												</div>
											</div>

										</div>

										<div id="descriptionBoxCiudadSucursal" class="descriptionBox">descripcion de ciudad de recogida maquina</div>


										



										<div class="flex-w flex-r-m p-b-10">
											<div class="size-204 flex-w flex-m respon6-next">
												<div class="wrap-num-product flex-w m-r-20 m-tb-10">
													<div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
														<!-- <i class="fs-16 zmdi zmdi-minus menos"></i> -->
														<button id="menos" type="button" class=" camb fs-16 zmdi
																	zmdi-minus">
													</div>

													<input class="mtext-104 cl3 txt-center num-product" type="number"
														id="num-product" name="num-product" value="1">
													<div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
														<!-- <i class="fs-16 zmdi zmdi-plus mas"></i> -->
														<button id="mas" type="button" class="camb fs-16 zmdi
																		zmdi-plus">

														</button>
													</div>
												</div>

												<button class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1
																p-lr-15 trans-04 js-addcart-detail" type="button">
													Pagar
												</button>

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

									<div id="divDescuento" name="divDescuento" class="flex-w flex-t
														bor12 p-b-13" style="display: none;">
										<div class="size-208">
											<span class="stext-110 cl2">
												Descuento:
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
													asdasdasd
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
													asdasdasd
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




		<form>
			<script>




			</script>
			<script src="https://checkout.wompi.co/widget.js" data-render="button"
				data-public-key="pub_prod_jzoTpu9Es1mhKUKrbNw3ezvzImlD8AYb" data-currency="COP" data-amount-in-cents="1"
				data-reference="inssa_3b4393bafe98ba234"
				data-redirect-url="https://api.whatsapp.com/send?phone=573102242724" data-collect-shiping>
				</script>
		</form>

		<div class="contBoton">
			<input type="image" src="images/Turin/Botón pago_Mesa de trabajo 1.png" class="pagar">

		</div>



		<div class="cont" style="display: flex;">
			<div>

				<a href="https://checkout.wompi.co/l/C3BOwg">
					<img src="images/Turin/qr.jpeg" alt="">
				</a>

			</div>



			<a href="https://checkout.wompi.co/l/C3BOwg">

				<img src="images/Turin/Botón pago_Mesa de trabajo 1.png" alt="" type="button">
				<!-- <button  class = "" type ="button">
                                            link de pago
                                        </button> -->
			</a>

			<div>

			</div>
		</div>



		</form>

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



					var selectCiudad = document.getElementById("ciudad").value;
					console.log("ciudad", selectCiudad);


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
		<script src="departamentos.js"></script>

</body>

</html>