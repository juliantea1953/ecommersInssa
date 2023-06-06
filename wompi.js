function botonWompi() {
    total = 123456789
ciudad =document.getElementById("select2-ciudadDelivery-container").innerHTML
var checkout = new WidgetCheckout({
    currency: 'COP',
    amountInCents: total,
    reference: 'AD002901221aaaaa',
    publicKey: 'pub_test_2YyBHOyazu3p9AlJ2jjdPuLG5YVuX77c',
    redirectUrl: 'https://transaction-redirect.wompi.co/check', // Opci
    customerData: { // Opcional
      email:'lola@gmail.com',
      fullName: ciudad,
      phoneNumber: '3040777777',
      phoneNumberPrefix: '+57',
      legalId: '123456789',
      legalIdType: 'CC'
    },
    collect_shipping: true,
    shippingAddress: { // Opcional
      addressLine1: "Calle 123 # 4-5",
      city: ciudad,
      phoneNumber: '3019444444',
      region: ciudad,
      country: "Colombia"
    }
  })
  getDatos(checkout);

}



  function getDatos(checkout) {
 
    checkout.open(function ( result ) {
        var transaction = result.transaction
        console.log('Transaction ID: ', transaction.id)
        console.log('Transaction object: ', transaction)
      })
  }

 