


<!DOCTYPE html>
<html lang="en">
<head>
	<title>Product</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->
	<link rel="icon" type="image/png" href="images/icons/favicon.png"/>
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
</head>
<body class="animsition ">

	<!-- Header -->
	<header class="header-v4">
		<!-- Header desktop -->


	<!-- Modal1 -->

	<!-- <form  method ="post" action="/lp/ecommerce/index.php"  > -->


	<div class=" js-modal1  p-b-20" >
		<div class=" js-hide-modal1"></div>

		<div class="container">
			<div class="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
				<button class="how-pos3 hov3 trans-04 js-hide-modal1">
					<img src="images/icons/icon-close.png" alt="CLOSE">
				</button>

				<div class="row">
					<div class="col-md-6 col-lg-7 p-b-30">
						<div class="p-l-25 p-r-30 p-lr-0-lg">
							<div class="wrap-slick3 flex-sb flex-w">
								<div class="wrap-slick3-dots"></div>
								<div class="wrap-slick3-arrows flex-sb-m flex-w"></div>

								<div class="slick3 gallery-lb">
									<div class="item-slick3" data-thumb="images/Turin/Turin.png">
										<div class="wrap-pic-w pos-relative">
											<img src="images/Turin/Turin.png" alt="IMG-PRODUCT">

											<a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/Turin/Turin.png">
												<i class="fa fa-expand"></i>
											</a>
										</div>
									</div>

									<div class="item-slick3" data-thumb="images/Turin/turin-sensacion.png">
										<div class="wrap-pic-w pos-relative">
											<img src="images/Turin/turin-sensacion.png" alt="IMG-PRODUCT">

											<a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/Turin/turin-sensacion.png">
												<i class="fa fa-expand"></i>
											</a>
										</div>
									</div>

									<div class="item-slick3" data-thumb="images/Turin/stiker-para-turin1080.png">
										<div class="wrap-pic-w pos-relative">
											<img src="images/Turin/stiker-para-turin1080.png" alt="IMG-PRODUCT">

											<a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/Turin/stiker-para-turin1080.png">
												<i class="fa fa-expand"></i>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="col-md-6 col-lg-5 p-b-30">
						<div class="p-r-50 p-t-5 p-lr-0-lg">
							<h4 class="mtext-105 cl2 js-name-detail p-b-14">
								Cafetera Turin
							</h4>

							<span class="mtext-106 cl2">
								$3´205.000
							</span>

							<p class="stext-102 cl3 p-t-23">

							</p>

							<!--  -->
							<form>
							<input type="hidden" id="ciudad1" name="ciudad1">



							<div class="p-t-33">
								<div class="flex-w flex-r-m p-b-10">
									<div class="size-203  respon6">
										Ciudad
									</div>

									<div class="size-204 respon6-next">
										<div class="rs1-select2 bor8 bg0">
											<select class="js-select2" type="text" name="ciudad" id ="ciudad" require>
												<option disabled selected>Escoja una opción</option>
												<option>Bogotá</option>
												<option>Medellín</option>
												<option>Arauca</option>

											</select>
											<div class="dropDownSelect2"></div>
										</div>
									</div>
								</div>

								<div class="flex-w flex-r-m p-b-10">
									<div class="size-203  respon6">
										Tipo de persona
									</div>

									<div class="size-204 respon6-next">
										<div class="rs1-select2 bor8 bg0">
											<select class="js-select2" type="text" name="persona" id ="persona"  onchange="ShowSelected();" require>
												<option disabled selected>Escoja una opción</option>
												<option>Persona jurídica</option>
												<option>Persona Natural</option>

											</select>
											<div class="dropDownSelect2"></div>
										</div>
									</div>



								</div>

								<div class="flex-w flex-r-m p-b-10"  name="sucursal" id ="sucursal" style="display: none;">
									<div class="size-203  respon6">
										Sucursal
									</div>
									<div class="size-204 respon6-next">
										<div class="rs1-select2 bor8 bg0" id = "sucursal"  >
											<select class="js-select2"  type="text" require>
												<option disabled selected>Escoja una opción</option>
												<option>Bogotá</option>
												<option>Medellín</option>
												<option>Arauca</option>

											</select>
											<div class="dropDownSelect2"></div>
										</div>
									</div>



								</div>









								<div class="flex-w flex-r-m p-b-10">
									<div class="size-204 flex-w flex-m respon6-next">
										<div class="wrap-num-product flex-w m-r-20 m-tb-10">
											<div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
												<i class="fs-16 zmdi zmdi-minus"></i>
											</div>

											<input class="mtext-104 cl3 txt-center num-product" type="number" id="num-product" name="num-product" value="1">

											<div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
												<i class="fs-16 zmdi zmdi-plus"></i>
											</div>
										</div>

                                        <button  class = "flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail" type ="button">
                                            Pagar
                                        </button>

										<!-- <button type = "sumit" class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
											Pagar
										</button> -->
									</div>
								</div>
							</div>

							<!--  -->
							<div class="flex-w flex-m p-l-100 p-t-40 respon7">
								<div class="flex-m bor9 p-r-10 m-r-11">
									<a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100" data-tooltip="Add to Wishlist">
										<i class="zmdi zmdi-favorite"></i>
									</a>
								</div>

								<a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Facebook">
									<i class="fa fa-facebook"></i>
								</a>

								<a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Twitter">
									<i class="fa fa-twitter"></i>
								</a>

								<a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Google Plus">
									<i class="fa fa-google-plus"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="cont" style="display: flex;">
		<div>

		<a href="https://checkout.wompi.co/l/C3BOwg">
		<img src="images/Turin/qr.jpeg" alt="">
		</a>

		</div>

		

										<a href="https://checkout.wompi.co/l/C3BOwg">

										<img src="images/Turin/Botón pago_Mesa de trabajo 1.png" alt="" type ="button">
											
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
		$(".js-select2").each(function(){
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
		$('.gallery-lb').each(function() { // the containers for all your galleries
			$(this).magnificPopup({
		        delegate: 'a', // the selector for gallery item
		        type: 'image',
		        gallery: {
		        	enabled:true
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
		function ShowSelected()
{



var valPersona = document.getElementById("persona").value;

var x = document.getElementById("sucursal");


if (valPersona == "Persona jurídica") {

	x.style.display = "";
	console.log("entra", valPersona);

}
else{
	x.style.display = "none";
}
}

		</script>

	<script>
		$('.js-addwish-b2, .js-addwish-detail').on('click', function(e){
			e.preventDefault();
		});

		$('.js-addwish-b2').each(function(){
			var nameProduct = $(this).parent().parent().find('.js-name-b2').html();

			$(this).on('click', function(){
				swal(nameProduct, "is added to wishlist !", "success");

				$(this).addClass('js-addedwish-b2');
				$(this).off('click');
			});
		});

		$('.js-addwish-detail').each(function(){
			var nameProduct = $(this).parent().parent().parent().find('.js-name-detail').html();


			$(this).on('click', function(){
				swal(nameProduct, "is added to wishlist !", "success");

				$(this).addClass('js-addedwish-detail');
				$(this).off('click');
			});
		});

		/*---------------------------------------------*/



		$('.js-addcart-detail').each(function(){



            /* var select = $(this).parent().parent().parent().parent().find('.ciudad').html(); */

			var nameProduct = $(this).parent().parent().parent().parent().find('.js-name-detail').html();

			$(this).on('click', function(){


function total(){
	if (persona == "Persona jurídica" ) {

		valorPersona = 115508


		total = (totalProducto - valorPersona + valorCiudad) * cantidadProducto

		console.log(total);
	}
	else{
		total = (valorCiudad + totalProducto) * cantidadProducto
	}
}



   var persona = document.getElementById("persona").value;
   var ciudad = document.getElementById("ciudad").value;
   var cantidadProducto = document.getElementById("num-product").value;

			console.log("asd", cantidadProducto);

   var valorProducto = 3205000
   var tasa = 19;
   var iva = (valorProducto * tasa)/100;
   var totalProducto = valorProducto + iva;

   if (ciudad == "Escoja una opción") {


	if (persona == "Escoja una opción") {
		Swal.fire('No puedes dejar campos vacios')

	}


   }

 function mensaje(){
	Swal.fire({


title: "El valor total es:",
text: total,

icon: 'info',
showCancelButton: true,
confirmButtonColor: '#3085d6',
cancelButtonColor: '#d33',
confirmButtonText: 'confirmar',
cancelButtonText: 'cancelar'
}).then((result) => {
if (result.isConfirmed) {

}
})
 }


   if (ciudad == "Bogotá") {
	valorCiudad = 0
	total();
	mensaje();
   }

   if (ciudad == "Medellín") {
	valorCiudad = 5000
	total();
	mensaje();
   }

   if (ciudad == "Arauca") {
	valorCiudad = 10000
	total();
	mensaje();
   }

   var x
   document.getElementById("ciudad1").innerHTML = x;
   var alerta = document.getElementById("ciudad1").innerHTML = x;
   /* console.log("x",x);
   console.log("ciudad",ciudad); */






			});
		});

	</script>
<!--===============================================================================================-->
	<script src="vendor/perfect-scrollbar/perfect-scrollbar.min.js"></script>
	<script>
		$('.js-pscroll').each(function(){
			$(this).css('position','relative');
			$(this).css('overflow','hidden');
			var ps = new PerfectScrollbar(this, {
				wheelSpeed: 1,
				scrollingThreshold: 1000,
				wheelPropagation: false,
			});

			$(window).on('resize', function(){
				ps.update();
			})
		});
	</script>
<!--===============================================================================================-->
	<script src="js/main.js"></script>

</body>
</html>