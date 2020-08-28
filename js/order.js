function chooseSweets() {

  var sweets = document.getElementById("selectSweets").value;

  if (sweets === "threeLayerCakes") {

    document.getElementById("cakeFlavors").style.display = "";
    document.getElementById("cakeSizes").style.display = "block";
    document.getElementById("cakeFilling").style.display = "block";
    document.getElementById("vegan10dollars").style.display = "block";
    document.getElementById("orderDate").style.display = "block";
    document.querySelector(".uploadImg").style.display = "block";
    document.querySelector(".foodAllergies").style.display = "block";
    document.querySelector(".pickup").style.display = "block";
    document.querySelector(".delivery").style.display = "block";
    document.getElementById("addComment").style.display = "block";
    document.getElementById("submit").style.display = "inline";

    document.getElementById("sheetCakeSizes").style.display = "none";
    document.querySelector(".cupcakeAmount").style.display = "none";
    document.getElementById("vegan5dollars").style.display = "none";
    document.querySelector(".cookieAmount").style.display = "none";
    document.getElementById("veganCookies").style.display = "none";
    document.getElementById("cheesecakeQuantity").style.display = "none";
    document.getElementById("cupcakeFilling").style.display = "none";
    document.getElementById("cheeseCakeBarbieSizes").style.display = "none";



  } else if(sweets === "sheetCakes") {

    document.getElementById("cakeFlavors").style.display = "block";
    document.getElementById("sheetCakeSizes").style.display = "block";
    document.getElementById("cakeFilling").style.display = "block";
    document.getElementById("vegan10dollars").style.display = "block";
    document.getElementById("orderDate").style.display = "block";
    document.querySelector(".uploadImg").style.display = "block";
    document.querySelector(".foodAllergies").style.display = "block";
    document.querySelector(".pickup").style.display = "block";
    document.querySelector(".delivery").style.display = "block";
    document.getElementById("addComment").style.display = "block";
    document.getElementById("submit").style.display = "inline";

    document.getElementById("cakeSizes").style.display = "none";
    document.querySelector(".cupcakeAmount").style.display = "none";
    document.getElementById("vegan5dollars").style.display = "none";
    document.querySelector(".cookieAmount").style.display = "none";
    document.getElementById("veganCookies").style.display = "none";
    document.getElementById("cheesecakeQuantity").style.display = "none";
    document.getElementById("cupcakeFilling").style.display = "none";
    document.getElementById("cheeseCakeBarbieSizes").style.display = "none";


  } else if(sweets === "barbieCakes") {

    document.getElementById("cakeFlavors").style.display = "block";
    document.getElementById("vegan10dollars").style.display = "block";
    document.getElementById("cheeseCakeBarbieSizes").style.display = "block";
    document.getElementById("orderDate").style.display = "block";
    document.querySelector(".foodAllergies").style.display = "block";
    document.querySelector(".pickup").style.display = "block";
    document.querySelector(".delivery").style.display = "block";
    document.getElementById("addComment").style.display = "block";
    document.getElementById("submit").style.display = "inline";

    document.getElementById("sheetCakeSizes").style.display = "none";
    document.querySelector(".cupcakeAmount").style.display = "none";
    document.getElementById("vegan5dollars").style.display = "none";
    document.querySelector(".cookieAmount").style.display = "none";
    document.getElementById("veganCookies").style.display = "none";
    document.getElementById("cheesecakeQuantity").style.display = "none";
    document.getElementById("cupcakeFilling").style.display = "none";
    document.getElementById("cakeFilling").style.display = "none";
    document.getElementById("cakeSizes").style.display = "none";
    document.querySelector(".uploadImg").style.display = "none";

  } else if(sweets === "cheesecakes") {
    document.getElementById("cheeseCakeFlavors").style.display="block";
    document.getElementById("cheesecakeQuantity").style.display = "block";
    document.getElementById("cheeseCakeBarbieSizes").style.display = "block";
    document.querySelector(".foodAllergies").style.display = "block";
    document.getElementById("orderDate").style.display = "block";
    document.querySelector(".pickup").style.display = "block";
    document.querySelector(".delivery").style.display = "block";
    document.getElementById("addComment").style.display = "block";
    document.getElementById("submit").style.display = "inline";

    document.getElementById("cakeFlavors").style.display = "none";
    document.getElementById("cakeSizes").style.display = "none";
    document.getElementById("sheetCakeSizes").style.display = "none";
    document.querySelector(".cupcakeAmount").style.display = "none";
    document.getElementById("vegan5dollars").style.display = "none";
    document.querySelector(".cookieAmount").style.display = "none";
    document.getElementById("veganCookies").style.display = "none";
    document.getElementById("vegan10dollars").style.display = "none";
    document.getElementById("cupcakeFilling").style.display = "none";
    document.getElementById("cakeFilling").style.display = "none";
    document.querySelector(".uploadImg").style.display = "none";

  } else if(sweets === "cupcakes"){
    document.getElementById("cakeFlavors").style.display = "block";
    document.querySelector(".cupcakeAmount").style.display = "block";
    document.getElementById("cupcakeFilling").style.display = "block";
    document.getElementById("vegan5dollars").style.display = "block";
    document.querySelector(".uploadImg").style.display = "block";
    document.querySelector(".foodAllergies").style.display = "block";
    document.getElementById("orderDate").style.display = "block";
    document.querySelector(".pickup").style.display = "block";
    document.querySelector(".delivery").style.display = "block";
    document.getElementById("addComment").style.display = "block";
    document.getElementById("submit").style.display = "inline";

    document.getElementById("cakeSizes").style.display = "none";
    document.getElementById("sheetCakeSizes").style.display = "none";
    document.getElementById("cakeFilling").style.display = "none";
    document.getElementById("vegan10dollars").style.display = "none";
    document.querySelector(".cookieAmount").style.display = "none";
    document.getElementById("veganCookies").style.display = "none";
    document.getElementById("cheeseCakeFlavors").style.display= "none";
    document.getElementById("cheesecakeQuantity").style.display = "none";
    document.getElementById("cheeseCakeBarbieSizes").style.display = "none";


  } else if(sweets === "cookies"){
    document.querySelector(".cookieAmount").style.display = "block";
    document.getElementById("veganCookies").style.display = "block";
    document.getElementById("cookieFlavors").style.display = "block";
    document.getElementById("orderDate").style.display = "block";
    document.querySelector(".uploadImg").style.display = "block";
    document.querySelector(".foodAllergies").style.display = "block";
    document.querySelector(".pickup").style.display = "block";
    document.querySelector(".delivery").style.display = "block";
    document.getElementById("addComment").style.display = "block";
    document.getElementById("submit").style.display = "inline";


    document.querySelector(".cupcakeAmount").style.display = "none";
    document.getElementById("vegan10dollars").style.display = "none";
    document.getElementById("cakeFlavors").style.display = "none";
    document.getElementById("cakeSizes").style.display = "none";
    document.getElementById("sheetCakeSizes").style.display = "none";
    document.getElementById("cakeFilling").style.display = "none";
    document.getElementById("vegan5dollars").style.display = "none";
    document.getElementById("cheeseCakeFlavors").style.display= "none";
    document.getElementById("cheesecakeQuantity").style.display = "none";
    document.getElementById("cheeseCakeBarbieSizes").style.display = "none";

  }  else if(sweets === "cakeCups"){
    document.getElementById("cakeFlavors").style.display = "block";
    document.querySelector(".cupcakeAmount").style.display = "block";
    document.getElementById("cupcakeFilling").style.display = "block";
    document.getElementById("vegan5dollars").style.display = "block";
    document.querySelector(".foodAllergies").style.display = "block";
    document.getElementById("orderDate").style.display = "block";
    document.querySelector(".pickup").style.display = "block";
    document.querySelector(".delivery").style.display = "block";
    document.getElementById("addComment").style.display = "block";
    document.getElementById("submit").style.display = "inline";

    document.getElementById("cakeSizes").style.display = "none";
    document.getElementById("sheetCakeSizes").style.display = "none";
    document.getElementById("cakeFilling").style.display = "none";
    document.getElementById("vegan10dollars").style.display = "none";
    document.querySelector(".cookieAmount").style.display = "none";
    document.getElementById("veganCookies").style.display = "none";
    document.getElementById("cheeseCakeFlavors").style.display= "none";
    document.getElementById("cheesecakeQuantity").style.display = "none";
    document.getElementById("cheeseCakeBarbieSizes").style.display = "none";
    document.querySelector(".uploadImg").style.display = "none";
  }

  else if(sweets === "cookiesEtsy"){
        window.open("https://www.etsy.com/shop/BanzasBakery");

  }

  else {
    document.getElementById("cakeFlavors").style.display = "none";
    document.getElementById("cakeSizes").style.display = "none";
    document.getElementById("cakeFillingg").style.display = "none";
    document.getElementById("vegan10dollars").style.display = "none";
    document.getElementById("orderDate").style.display = "none";
    document.querySelector(".pickup").style.display = "none";
    document.querySelector(".delivery").style.display = "none";
    document.getElementById("addComment").style.display = "none";
    document.getElementById("submit").style.display = "none";
    document.querySelector(".cookieAmount").style.display = "none";
    document.querySelector(".cupcakeAmount").style.display = "none";
    document.getElementById("vegan5dollars").style.display = "none";
    document.getElementById("veganCookies").style.display = "none";
    document.getElementById("cheeseCakeFlavors").style.display= "none";
    document.getElementById("cheesecakeQuantity").style.display = "none";
    document.getElementById("cheeseCakeBarbieSizes").style.display = "none";
    document.querySelector(".uploadImg").style.display = "none";
    document.getElementById("cupcakeFilling").style.display = "none";
    document.querySelector(".foodAllergies").style.display = "nonee";

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
