   $(function () {
       $("#addburger").on("click", function (event) {
           // Make sure to preventDefault on a submit event.
           event.preventDefault();
           console.log("onclick form")

           var newBurger = $("#newburger").val().trim();
         
           if (newBurger) {
               $.ajax("/api/burgers", {
                   type: "POST",
                   data: {
                       burger_name: newBurger
                   }
               }).then(function () {
                   console.log("Added new burger!");
                   location.reload();
               });
           }
       });

       $(".btn-chomp").on("click", function (event) {
           event.preventDefault();

           var id = $(this).data("id");
           var chompState = {
               chomped: 1
           };

           $.ajax("/api/burgers/" + id, {
               type: "PUT",
               data: chompState
           }).then(function () {
               console.log("burger chomped");
               location.reload();
           });
       });
   })