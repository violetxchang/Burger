   
   $(function(){
   $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
   }

   var newBurger = $("#newburger").val().trim();
   if (burger_name){
       $.ajax("/api/burgers",{
           type: "POST",
           data: {
               burger_name: burger_name
           }
       }).then(function(){
           console.log("Added new burger!");
           location.reload();
       });
   }
});

$(".btn-chomp").on("click", function(event){
    event.preventDefault();

    var id = $(this).data("id");
    var chompState={
        chomped: 1
    };

    $.ajax("/api/burgers/"+id,{
        type: "PUT",
        data: chompState
    }).then(function(){
        console.log("burger chomped");
        location.reload();
    });
});
