//FILTER:

//create on click function for each selection

//change filter Menu
$("#filterMenu").change(function () {

  //if cakes are selected
  if ($("#filterMenu").val() === "dropdownCakes"){

  //change css for cakes to display: block
  $(".cakes-section").css("display", "inline-block");

  //hide everything else
  $(".cupcakes-section").css("display", "none");
  $(".cookies-section").css("display", "none");
  $(".other-section").css("display", "none");
  $(".all-section").css("display", "none");

  //else if cupcakes are selected
} else if ($("#filterMenu").val() === "dropdownCupcakes"){

  //show cupcakes
  $(".cupcakes-section").css("display", "block");

  //hide everything else
  $(".cakes-section").css("display", "none");
  $(".cookies-section").css("display", "none");
  $(".other-section").css("display", "none");
  $(".all-section").css("display", "none");

//else if cookies are selected
} else if ($("#filterMenu").val() === "dropdownCookies"){
  //show cookies
  $(".cookies-section").css("display", "block");

  //hide everything else
  $(".cakes-section").css("display", "none");
  $(".cupcakes-section").css("display", "none");
  $(".other-section").css("display", "none");
  $(".all-section").css("display", "none");

  //else if other sweets are selected
} else if ($("#filterMenu").val() === "dropdownOther"){
    //show cookies
    $(".other-section").css("display", "block");

    //hide everything else
    $(".cakes-section").css("display", "none");
    $(".cupcakes-section").css("display", "none");
    $(".cookies-section").css("display", "none");
    $(".all-section").css("display", "none");

    //else if all are selected
  } else if ($("#filterMenu").val() === "dropdownAll"){
      //show cookies
      $(".all-section").css("display", "block");

      //hide everything else
      $(".cakes-section").css("display", "none");
      $(".cupcakes-section").css("display", "none");
      $(".other-section").css("display", "none");
      $(".cookies-section").css("display", "none");

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
