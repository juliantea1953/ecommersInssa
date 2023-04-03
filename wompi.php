<?php

function wompiurl(){
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $x = (int) $_POST['totalWompi'];
           $curl = curl_init('https://sandbox.wompi.co/v1/payment_links');
           $fields = array(
       
           
               "name"=> "Subscripción",
               "description"=> "Subscipción mensual",
               "single_use"=> true,
               "collect_shipping"=> true,
               "collect_customer_legal_id"=> true,
               "amount_in_cents" => $x,
               "currency"=> "COP",
               "sku"=> "1",
               "redirect_url"=> "https://inssa.com.co/"
           
           );
           $json_string = json_encode($fields);
           curl_setopt($curl, CURLOPT_POST, TRUE);
           curl_setopt($curl, CURLOPT_POSTFIELDS, $json_string);
           curl_setopt($curl, CURLOPT_HTTPHEADER, array('Authorization: Bearer prv_test_WDfNEEXbSwMctMtIvaoqCNUOYekfBE7p',
           'Content-Type: application/json'));
           curl_setopt($curl, CURLOPT_RETURNTRANSFER, true );
           $data = curl_exec($curl);
           curl_close($curl);
       
           $recorrer = json_decode($data, true);
       
           foreach ($recorrer as $value) {
               $cadena =  $value['id'];
               print_r ($cadena);
       
       
            };
       
       
           }
}


?>