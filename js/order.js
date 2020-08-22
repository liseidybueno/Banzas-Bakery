function chooseSweets() {

  var sweets = document.getElementById("selectSweets").value;

  if (sweets === "threeLayerCakes") {

    document.getElementById("cakeFlavors").style.display = "inline";
    document.getElementById("cakeSizes").style.display = "inline";
    document.getElementById("cakeFrosting").style.display = "inline";
    document.getElementById("vegan10dollars").style.display = "inline";
    document.getElementById("orderDate").style.display = "inline";
    document.querySelector(".pickup").style.display = "inline";
    document.querySelector(".delivery").style.display = "inline";
    document.getElementById("addComment").style.display = "inline";
    document.getElementById("submit").style.display = "inline";

    document.getElementById("sheetCakeSizes").style.display = "none";
    document.querySelector(".basicCheese").style.display ="none";
    document.querySelector(".customCheese").style.display ="none";
    document.querySelector(".basicCupcake").style.display = "none";
    document.querySelector(".customCupcake").style.display = "none";
    document.querySelector(".cupcakeAmount").style.display = "none";
    document.getElementById("vegan5dollars").style.display = "none";
    document.querySelector(".cookiesNote").style.display = "none";
    document.querySelector(".cookieAmount").style.display = "none";
    document.getElementById("cookieSayings").style.display = "none";
    document.getElementById("veganCookies").style.display = "none";



  } else if(sweets === "sheetCakes") {

    document.getElementById("cakeFlavors").style.display = "inline";
    document.getElementById("sheetCakeSizes").style.display = "inline";
    document.getElementById("cakeFrosting").style.display = "inline";
    document.getElementById("vegan10dollars").style.display = "inline";
    document.getElementById("orderDate").style.display = "inline";
    document.querySelector(".pickup").style.display = "inline";
    document.querySelector(".delivery").style.display = "inline";
    document.getElementById("addComment").style.display = "inline";
    document.getElementById("submit").style.display = "inline";

    document.getElementById("cakeSizes").style.display = "none";
    document.querySelector(".basicCheese").style.display ="none";
    document.querySelector(".customCheese").style.display ="none";
    document.querySelector(".basicCupcake").style.display = "none";
    document.querySelector(".customCupcake").style.display = "none";
    document.querySelector(".cupcakeAmount").style.display = "none";
    document.getElementById("vegan5dollars").style.display = "none";
    document.querySelector(".cookiesNote").style.display = "none";
    document.querySelector(".cookieAmount").style.display = "none";
    document.getElementById("cookieSayings").style.display = "none";
    document.getElementById("veganCookies").style.display = "none";


  } else if(sweets === "barbieCakes") {

    document.getElementById("cakeFlavors").style.display = "inline";
    document.getElementById("vegan10dollars").style.display = "inline";
    document.getElementById("orderDate").style.display = "inline";
    document.querySelector(".pickup").style.display = "inline";
    document.querySelector(".delivery").style.display = "inline";
    document.getElementById("addComment").style.display = "inline";
    document.getElementById("submit").style.display = "inline";

    document.getElementById("cakeSizes").style.display = "none";
    document.getElementById("sheetCakeSizes").style.display = "none";
    document.querySelector(".basicCheese").style.display ="none";
    document.querySelector(".customCheese").style.display ="none";
    document.querySelector(".basicCupcake").style.display = "none";
    document.querySelector(".customCupcake").style.display = "none";
    document.querySelector(".cupcakeAmount").style.display = "none";
    document.getElementById("vegan5dollars").style.display = "none";
    document.querySelector(".cookiesNote").style.display = "none";
    document.querySelector(".cookieAmount").style.display = "none";
    document.getElementById("cookieSayings").style.display = "none";
    document.getElementById("cakeFrosting").style.display = "none";
    document.getElementById("veganCookies").style.display = "none";


  } else if(sweets === "cheesecakes") {
    document.querySelector(".basicCheese").style.display ="inline";
    document.querySelector(".customCheese").style.display ="inline";
    document.getElementById("orderDate").style.display = "inline";
    document.querySelector(".pickup").style.display = "inline";
    document.querySelector(".delivery").style.display = "inline";
    document.getElementById("addComment").style.display = "inline";
    document.getElementById("submit").style.display = "inline";

    document.getElementById("cakeFlavors").style.display = "none";
    document.getElementById("cakeSizes").style.display = "none";
    document.getElementById("sheetCakeSizes").style.display = "none";
    document.querySelector(".basicCupcake").style.display = "none";
    document.querySelector(".customCupcake").style.display = "none";
    document.querySelector(".cupcakeAmount").style.display = "none";
    document.getElementById("vegan5dollars").style.display = "none";
    document.querySelector(".cookiesNote").style.display = "none";
    document.querySelector(".cookieAmount").style.display = "none";
    document.getElementById("cookieSayings").style.display = "none";
    document.getElementById("veganCookies").style.display = "none";
    document.getElementById("vegan10dollars").style.display = "none";

  } else if(sweets === "cupcakes"){
    document.querySelector(".basicCupcake").style.display = "inline";
    document.querySelector(".customCupcake").style.display = "inline";
    document.querySelector(".cupcakeAmount").style.display = "inline";
    document.getElementById("vegan5dollars").style.display = "inline";
    document.getElementById("orderDate").style.display = "inline";
    document.querySelector(".pickup").style.display = "inline";
    document.querySelector(".delivery").style.display = "inline";
    document.getElementById("addComment").style.display = "inline";
    document.getElementById("submit").style.display = "inline";

    document.getElementById("cakeFlavors").style.display = "none";
    document.getElementById("cakeSizes").style.display = "none";
    document.getElementById("sheetCakeSizes").style.display = "none";
    document.querySelector(".basicCheese").style.display ="none";
    document.querySelector(".customCheese").style.display ="none";
    document.getElementById("cakeFrosting").style.display = "none";
    document.getElementById("vegan10dollars").style.display = "none";
    document.querySelector(".cookiesNote").style.display = "none";
    document.querySelector(".cookieAmount").style.display = "none";
    document.getElementById("cookieSayings").style.display = "none";
    document.getElementById("veganCookies").style.display = "none";


  } else if(sweets === "cookies"){
    document.querySelector(".cookiesNote").style.display = "inline";
    document.querySelector(".cookieAmount").style.display = "inline";
    document.getElementById("cookieSayings").style.display = "inline";
    document.getElementById("veganCookies").style.display = "inline";
    document.getElementById("orderDate").style.display = "inline";
    document.querySelector(".pickup").style.display = "inline";
    document.querySelector(".delivery").style.display = "inline";
    document.getElementById("addComment").style.display = "inline";
    document.getElementById("submit").style.display = "inline";

    document.querySelector(".basicCupcake").style.display = "none";
    document.querySelector(".customCupcake").style.display = "none";
    document.querySelector(".cupcakeAmount").style.display = "none";
    document.getElementById("vegan10dollars").style.display = "none";
    document.getElementById("cakeFlavors").style.display = "none";
    document.getElementById("cakeSizes").style.display = "none";
    document.getElementById("sheetCakeSizes").style.display = "none";
    document.querySelector(".basicCheese").style.display ="none";
    document.querySelector(".customCheese").style.display ="none";
    document.getElementById("cakeFrosting").style.display = "none";
    document.getElementById("vegan5dollars").style.display = "none";

  }  else if(sweets === "cakeCups"){
    document.getElementById("cakeFlavors").style.display = "inline";
    document.getElementById("vegan5dollars").style.display = "inline";
    document.getElementById("orderDate").style.display = "inline";
    document.querySelector(".pickup").style.display = "inline";
    document.querySelector(".delivery").style.display = "inline";
    document.getElementById("addComment").style.display = "inline";
    document.getElementById("submit").style.display = "inline";

    document.getElementById("sheetCakeSizes").style.display = "none";
    document.querySelector(".basicCheese").style.display ="none";
    document.querySelector(".customCheese").style.display ="none";
    document.querySelector(".basicCupcake").style.display = "none";
    document.querySelector(".customCupcake").style.display = "none";
    document.querySelector(".cupcakeAmount").style.display = "none";
    document.getElementById("vegan10dollars").style.display = "none";
    document.querySelector(".cookiesNote").style.display = "none";
    document.querySelector(".cookieAmount").style.display = "none";
    document.getElementById("cookieSayings").style.display = "none";
    document.getElementById("cakeSizes").style.display = "none";
    document.getElementById("veganCookies").style.display = "none";
  }

  else if(sweets === "cookiesEtsy"){
        window.open("https://www.etsy.com/shop/BanzasBakery");

  }

  else {
    document.getElementById("cakeFlavors").style.display = "none";
    document.getElementById("cakeSizes").style.display = "none";
    document.getElementById("cakeFrosting").style.display = "none";
    document.getElementById("vegan10dollars").style.display = "none";
    document.getElementById("orderDate").style.display = "none";
    document.querySelector(".pickup").style.display = "none";
    document.querySelector(".delivery").style.display = "none";
    document.getElementById("addComment").style.display = "none";
    document.getElementById("submit").style.display = "none";
    document.querySelector(".basicCheese").style.display ="none";
    document.querySelector(".customCheese").style.display ="none";
    document.querySelector(".cookiesNote").style.display = "none";
    document.querySelector(".cookieAmount").style.display = "none";
    document.getElementById("cookieSayings").style.display = "none";
    document.querySelector(".basicCupcake").style.display = "none";
    document.querySelector(".customCupcake").style.display = "none";
    document.querySelector(".cupcakeAmount").style.display = "none";
    document.getElementById("vegan5dollars").style.display = "none";
    document.getElementById("veganCookies").style.display = "none";

  }
}

function cakeFrosting() {

  var size = document.getElementById("selectCakeSizes").value;

    if(size === "eightIn"){

      document.getElementById("buttercream").innerHTML = "Buttercream starts at $80";
      document.getElementById("fondant").innerHTML = "Fondant starts at $100";

  } else if(size === "nineIn"){

    document.getElementById("buttercream").innerHTML = "Buttercream starts at $100";
    document.getElementById("fondant").innerHTML = "Fondant starts at $120";

  } else if(size === "tenIn"){

    document.getElementById("buttercream").innerHTML = "Buttercream starts at $120";
    document.getElementById("fondant").innerHTML = "Fondant starts at $140";
  } else {
  document.getElementById("buttercream").innerHTML = "";
  document.getElementById("fondant").innerHTML = "";

}
}

function sheetCakeFrosting() {
  var size = document.getElementById("selectSheetCakeSizes").value;

  if(size === "half"){
    document.getElementById("buttercream").innerHTML = "Buttercream starts at $80";
    document.getElementById("fondant").innerHTML="Fondant starts at $100"
  } else if(size === "full"){
    document.getElementById("buttercream").innerHTML = "Buttercream starts at $125";
    document.getElementById("fondant").innerHTML="Fondant starts at $145"
  } else {
  document.getElementById("buttercream").innerHTML = "";
  document.getElementById("fondant").innerHTML = "";

}
}

function checkAmount() {

  var sweets = document.getElementById("selectSweets").value;
  var number;

  if(sweets === "cupcakes"){
    number = document.forms["order-form"]["cupcakeAmt"].value;
    if(number < 12){
      alert("You must order more than a dozen per order");
    }
  } else if (sweets === "cookies"){
    number = document.forms["order-form"]["cookieAmt"].value;
    if(number < 12){
      alert("You must order more than a dozen per order");
    }
  }
}
