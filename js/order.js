function chooseSweets() {

  //if the selected item is three layered cakes
  if ($("#selectSweets").val() === "threeLayerCakes") {

    //display all the options for three layered cakes
    $("#cakeFlavors").css("display", "block");
    $("#cakeSizes").css("display", "block");
    $("#cakeFilling").css("display", "block");
    $("#vegan10dollars").css("display", "block");
    $("#orderDate").css("display", "block");
    $(".uploadImg").css("display", "block");
    $(".foodAllergies").css("display", "block");
    $(".pickup").css("display", "block");
    $(".delivery").css("display", "block");
    $("#addComment").css("display", "block");
    $("#submit").css("display", "inline");

    //set cake flavors, sizes, filling and image upload to be required
    $("#selectCakeFlavors").attr("required", "true");
    $("#selectCakeSizes").attr("required", "true");
    $("#selectcakeFilling").attr("required", "true");
    $("#imgUpload").attr("required", "true");


    //hide all other options
    $("#sheetCakeSizes").css("display", "none");
    $(".cupcakeAmount").css("display", "none");
    $("#vegan5dollars").css("display", "none");
    $(".cookieAmount").css("display", "none");
    $("#veganCookies").css("display", "none");
    $("#cheesecakeQuantity").css("display", "none");
    $("#cupcakeFilling").css("display", "none");
    $("#cheeseCakeBarbieSizes").css("display", "none");
    $(".cakeCupAmount").css("display", "none");

  } else if($("#selectSweets").val() === "sheetCakes") {

    $("#cakeFlavors").css("display", "block");
    $("#sheetCakeSizes").css("display", "block");
    $("#cakeFilling").css("display", "block");
    $("#vegan10dollars").css("display", "block");
    $("#orderDate").css("display", "block");
    $(".uploadImg").css("display", "block");
    $(".foodAllergies").css("display", "block");
    $(".pickup").css("display", "block");
    $(".delivery").css("display", "block");
    $("#addComment").css("display", "block");
    $("#submit").css("display", "inline");

    //set cake flavors, sizes, filling and image upload to be required
    $("#selectCakeFlavors").attr("required", "true");
    $("#selectCakeSizes").attr("required", "true");
    $("#selectcakeFilling").attr("required", "true");
    $("#imgUpload").attr("required", "true");

    $("#cakeSizes").css("display", "none");
    $(".cupcakeAmount").css("display", "none");
    $("#vegan5dollars").css("display", "none");
    $(".cookieAmount").css("display", "none");
    $("#veganCookies").css("display", "none");
    $("#cheesecakeQuantity").css("display", "none");
    $("#cupcakeFilling").css("display", "none");
    $("#cheeseCakeBarbieSizes").css("display", "none");
    $(".cakeCupAmount").css("display", "none");


  } else if($("#selectSweets").val() === "barbieCakes") {

    $("cakeFlavors").css("display", "block");
    $("#vegan10dollars").css("display", "block");
    $("#cheeseCakeBarbieSizes").css("display", "block");
    $("#orderDate").css("display", "block");
    $(".foodAllergies").css("display", "block");
    $(".pickup").css("display", "block");
    $(".delivery").css("display", "block");
    $("#addComment").css("display", "block");
    $(".submit").css("display", "inline");

    //set cake flavors, sizes, and image upload to be required
    $("#selectCakeFlavors").attr("required", "true");
    $("#selectCheeseCakeFlavors").attr("required", "true");
    $("#imgUpload").attr("required", "true");

    $("#sheetCakeSizes").css("display", "none");
    $(".cupcakeAmount").css("display", "none");
    $("#vegan5dollars").css("display", "none");
    $(".cookieAmount").css("display", "none");
    $("#veganCookies").css("display", "none");
    $("#cheesecakeQuantity").css("display", "none");
    $("#cupcakeFilling").css("display", "none");
    $("#cakeFilling").css("display", "none");
    $("#cakeSizes").css("display", "none");
    $(".uploadImg").css("display", "none");
    $(".cakeCupAmount").css("display", "none");

  } else if($("#selectSweets").val() === "cheesecakes") {
    $("#cheeseCakeFlavors").css("display", "block");
    $("#cheesecakeQuantity").css("display", "block");
    $("#cheeseCakeBarbieSizes").css("display", "block");
    $(".foodAllergies").css("display", "block");
    $("#orderDate").css("display", "block");
    $(".pickup").css("display", "block");
    $(".delivery").css("display", "block");
    $("#addComment").css("display", "block");
    $("#submit").css("display", "inline");

    //set cheesecake flavors, sizes and amount to be required
    $("#selectCheeseCakeFlavors").attr("required", "true");
    $("#selectCheeseCakeFlavors").attr("required", "true");
    $("#cheesecakeAmt").attr("required", "true");

    $("#cakeFlavors").css("display", "none");
    $("#cakeSizes").css("display", "none");
    $("#sheetCakeSizes").css("display", "none");
    $(".cupcakeAmount").css("display", "none");
    $("#vegan5dollars").css("display", "none");
    $(".cookieAmount").css("display", "none");
    $("#veganCookies").css("display", "none");
    $("#vegan10dollars").css("display", "none");
    $("#cupcakeFilling").css("display", "none");
    $("#cakeFilling").css("display", "none");
    $(".uploadImg").css("display", "none");
    $(".cakeCupAmount").css("display", "none");

  } else if($("#selectSweets").val() === "cupcakes"){
    $("#cakeFlavors").css("display", "block");
    $(".cupcakeAmount").css("display", "block");
    $("#cupcakeFilling").css("display", "block");
    $("#vegan5dollars").css("display", "block");
    $(".uploadImg").css("display", "block");
    $(".foodAllergies").css("display", "block");
    $("#orderDate").css("display", "block");
    $(".pickup").css("display", "block");
    $(".delivery").css("display", "block");
    $("#addComment").css("display", "block");
    $("#submit").css("display", "inline");

    //set cheesecake flavors, filling, amount, and image upload to be required
    $("#selectCakeFlavors").attr("required", "true");
    $("#selectcupcakeFilling").attr("required", "true");
    $("#cupcakeAmt").attr("required", "true");
    $("#imgUpload").attr("required", "true");

    $("#cakeSizes").css("display", "none");
    $("#sheetCakeSizes").css("display", "none");
    $("#cakeFilling").css("display", "none");
    $("#vegan10dollars").css("display", "none");
    $(".cookieAmount").css("display", "none");
    $("#veganCookies").css("display", "none");
    $("#cheeseCakeFlavors").css("display", "none");
    $("#cheesecakeQuantity").css("display", "none");
    $("#cheeseCakeBarbieSizes").css("display", "none");
    $(".cakeCupAmount").css("display", "none");


  } else if($("#selectSweets").val() === "cookies"){
    $(".cookieAmount").css("display", "block");
    $("#veganCookies").css("display", "block");
    $("#cookieFlavors").css("display", "block");
    $("#orderDate").css("display", "block");
    $(".uploadImg").css("display", "block");
    $(".foodAllergies").css("display", "block");
    $(".pickup").css("display", "block");
    $(".delivery").css("display", "block");
    $("#addComment").css("display", "block");
    $("#submit").css("display", "inline");

    //set cookies flavors, amount, and image upload to be required
    $("#selectCookieFlavors").attr("required", "true");
    $("#cookieAmt").attr("required", "true");
    $("imgUpload").attr("required", "true");

    $(".cupcakeAmount").css("display", "none");
    $("#vegan10dollars").css("display", "none");
    $("#cakeFlavors").css("display", "none");
    $("#cakeSizes").css("display", "none");
    $("#sheetCakeSizes").css("display", "none");
    $("#cakeFilling").css("display", "none");
    $("#cupcakeFilling").css("display", "none");
    $("#vegan5dollars").css("display", "none");
    $("#cheeseCakeFlavors").css("display", "none");
    $("#cheesecakeQuantity").css("display", "none");
    $("#cheeseCakeBarbieSizes").css("display", "none");
    $(".cakeCupAmount").css("display", "none");

  }  else if($("#selectSweets").val() === "cakeCups"){
    $("#cakeFlavors").css("display", "block");
    $(".cakeCupAmount").css("display", "block");
    $("#cupcakeFilling").css("display", "block");
    $("#vegan5dollars").css("display", "block");
    $(".foodAllergies").css("display", "block");
    $("#orderDate").css("display", "block");
    $(".pickup").css("display", "block");
    $(".delivery").css("display", "block");
    $("#addComment").css("display", "block");
    $("#submit").css("display", "inline");

    //set cake up flavors, filling and amount to be required
    $("#selectCakeFlavors").attr("required", "true");
    $("#selectcupcakeFilling").attr("required", "true");
    $("#cakeCupAmt").attr("required", "true");

    $("#cakeSizes").css("display", "none");
    $("#sheetCakeSizes").css("display", "none");
    $("#cakeFilling").css("display", "none");
    $("#vegan10dollars").css("display", "none");
    $(".cookieAmount").css("display", "none");
    $("#veganCookies").css("display", "none");
    $("#cheeseCakeFlavors").css("display", "none");
    $("#cheesecakeQuantity").css("display", "none");
    $("#cheeseCakeBarbieSizes").css("display", "none");
    $(".uploadImg").css("display", "none");
    $(".cupcakeAmount").css("display", "none");
  }

  else if($("#selectSweets").val() === "cookiesEtsy"){
        window.open("https://www.etsy.com/shop/BanzasBakery");

  }

  else {
    $("#cakeFlavors").css("display", "none");
    $("#cakeSizes").css("display", "none");
    $("#cakeFillingg").css("display", "none");
    $("#vegan10dollars").css("display", "none");
    $("#orderDate").css("display", "none");
    $(".pickup").css("display", "none");
    $(".delivery").css("display", "none");
    $("#addComment").css("display", "none");
    $("#submit").css("display", "none");
    $(".cookieAmount").css("display", "none");
    $(".cupcakeAmount").css("display", "none");
    $("#vegan5dollars").css("display", "none");
    $("#veganCookies").css("display", "none");
    $("#cheeseCakeFlavors").css("display", "none");
    $("#cheesecakeQuantity").css("display", "none");
    $("#cheeseCakeBarbieSizes").css("display", "none");
    $(".uploadImg").css("display", "none");
    $("#cupcakeFilling").css("display", "none");
    $(".foodAllergies").css("display", "none");
    $(".cakeCupAmount").css("display", "none");

  }
}

/*function checkNumber() {
  var sweets = $("#selectSweets").val();

  if(sweets === "cookies"){
  $("#cookieAmt").validate({
    rules: {
      field: {
        required: true,
        min: 12;
      }
    }
  })
}
}*/
function checkNumber() {
  //set numbers for quantities
  var sweets = $("#selectSweets").val();
  var number;

  if(sweets === "cupcakes"){
    number = document.forms["order-form"]["cupcakeAmt"].value;
    if(number < 12){
      $("#cupcakeAmt").setCustomValidity("You must order more than a dozen per order");
    }
  } else if (sweets === "cookies"){
    jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
    });
    $("#cookieAmt").validate({
      rules: {
        field: {
          required: true,
          min: 12
        }
      }
    });
  } else if (sweets === "cakeCups"){
    number = document.forms["order-form"]["cakeCupAmt"].value;
    if(number < 12){
      $("#cakeCupAmt").setCustomValidity("You must order more than a dozen per order");
    }
  }
}
