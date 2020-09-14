//FILTER:

//create on click function for each selection

//change filter Menu
$("#filterMenu").change(function () {

  //if cakes are selected
  if ($("#filterMenu").val() === "dropdownCakes"){

  window.open("#cakeSection","_self")
  //else if cupcakes are selected
} else if ($("#filterMenu").val() === "dropdownCupcakes"){

  window.open("#cupcakeSection","_self")

//else if cookies are selected
} else if ($("#filterMenu").val() === "dropdownCookies"){

  window.open("#cookieSection","_self")

  //else if other sweets are selected
} else if ($("#filterMenu").val() === "dropdownOther"){

    window.open("#otherSection","_self")

  }
});

//MODAL:

//create variable for image ID
var imgID;

//function to open modal on click
$(".gallery-img").click(function() {
  imgID = $(this).attr("id");

  var imgSrc = $("#" + imgID).attr("src");

// set modal ID
  var modalID = "modal" + imgID;

//set modal's img ID
  var modalImgID = imgID + "Modal";

//set modal image to thumbnail image
  $("#" + modalImgID).attr("src", imgSrc);

//display modal
 $("#" + modalID).css("display", "block");

//close modal
$(".close").click(function () {
    $(".modal").css("display", "none");
  });

});
