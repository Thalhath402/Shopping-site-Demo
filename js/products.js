$(document).ready(function(){
    $(".content").slice(0, 10).show();
    $("#loadMore").on("click", function(e){
      e.preventDefault();
      $(".content:hidden").slice(0, 5).slideDown();
      if($(".content:hidden").length == 0) {
        $("#loadMore").addClass("noContent");
      }
    });
  });

// $(document).ready(function(){
//   $(".content").slice(0, 10).show();
//   $("#loadMore").on("click", function(e){
//     e.preventDefault();
//     $(".content:hidden").slice(0, 5).slideDown();
//     if($(".content:hidden").length == 0) {
//       $("#loadMore").addClass("noContent").html("load less");
//     }
//     if($(".content:hidden").length == 0 ){
//       $("#loadMore").on("click", function(e){
//         e.preventDefault();
//         $(".content:visible").slice(10, 20).slideUp();
//       if($(".content:hidden").length == 10) {
//           $("#loadMore").addClass("noContent").html("load more");
//         }
//       });
//     }   
//   });
// });