function chooseSweets() {

  //show different forms depending on which item is chosen

  //if the selected item is three layered cakes then display the corresponding form
  if  ($("#selectSweets").val() === "Three-Layer-Cakes"){

    $("iframe").attr("src", "order-threelayercakes.html");

    $("iframe").css("height", "400px");

    //media query for order page
    function myFunction(x) {
      if (x.matches) { // If media query matches open mobile version of site
        window.open("order-threelayercakesmobile.html", "_self")
      }
    }

    var x = window.matchMedia("(max-width: 818px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes

  } else if ($("#selectSweets").val() === "Sheet-Cakes"){

    $("iframe").attr("src", "order-sheetcakes.html");

    $("iframe").css("height", "400px");

    //media query for order page
    function myFunction(x) {
      if (x.matches) { // If media query matches open mobile version of site
        window.open("order-sheetcakesmobile.html", "_self")
      }
    }

    var x = window.matchMedia("(max-width: 818px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes


  } else if ($("#selectSweets").val() === "Barbie-Cakes"){

      $("iframe").attr("src", "order-barbiecakes.html");

    $("iframe").css("height", "400px");

    //media query for order page
    function myFunction(x) {
      if (x.matches) { // If media query matches open mobile version of site
        window.open("order-barbiecakesmobile.html", "_self")
      }
    }

    var x = window.matchMedia("(max-width: 818px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes


  } else if ($("#selectSweets").val() === "Cheese-Cakes"){

      $("iframe").attr("src", "order-cheesecakes.html");

      $("iframe").css("height", "400px");

      //media query for order page
      function myFunction(x) {
        if (x.matches) { // If media query matches open mobile version of site
          window.open("order-cheesecakesmobile.html", "_self")
        }
      }

      var x = window.matchMedia("(max-width: 818px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes



  } else if ($("#selectSweets").val() === "Cupcakes"){

      $("iframe").attr("src", "order-cupcakes.html");

      $("iframe").css("height", "400px");

      //media query for order page
      function myFunction(x) {
        if (x.matches) { // If media query matches open mobile version of site
          window.open("order-cupcakesmobile.html", "_self")
        }
      }

      var x = window.matchMedia("(max-width: 818px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes



  } else if ($("#selectSweets").val() === "CakeCups"){


    $("iframe").attr("src", "order-cakecups.html");

    $("iframe").css("height", "400px");

    //media query for order page
    function myFunction(x) {
      if (x.matches) { // If media query matches open mobile version of site
        window.open("order-cakecupsmobile.html", "_self")
      }
    }

    var x = window.matchMedia("(max-width: 818px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes



  } else if ($("#selectSweets").val() === "Cookies"){


    $("iframe").attr("src", "order-cookies.html");

    $("iframe").css("height", "400px");

    //media query for order page
    function myFunction(x) {
      if (x.matches) { // If media query matches open mobile version of site
        window.open("order-cookiesmobile.html", "_self")
      }
    }

    var x = window.matchMedia("(max-width: 818px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes


  } else if ($("#selectSweets").val() === "cookiesEtsy") {

          window.open("https://www.etsy.com/shop/BanzasBakery");
  }

}

function chooseSweetsMobile() {
  if($(".selectSweetsMobile").val() === "Three-Layer-Cakes"){
    window.open("order-threelayercakesmobile.html", "_self");
  } else if($(".selectSweetsMobile").val() === "Sheet-Cakes"){
    window.open("order-sheetcakesmobile.html", "_self");
  } else if($(".selectSweetsMobile").val() === "Barbie-Cakes"){
    window.open("order-barbiecakesmobile.html", "_self");
  } else if($(".selectSweetsMobile").val() === "Cheese-Cakes"){
    window.open("order-cheesecakesmobile.html", "_self");
  } else if($(".selectSweetsMobile").val() === "Cupcakes"){
    window.open("order-cupcakesmobile.html", "_self");
  } else if($(".selectSweetsMobile").val() === "CakeCups"){
    window.open("order-cakecupsmobile.html", "_self");
  } else if($(".selectSweetsMobile").val() === "Cookies"){
    window.open("order-cookiesmobile.html", "_self");
  }


}
