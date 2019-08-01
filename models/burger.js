// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function(){
    $(".change-chomp").on("click", function(event){
        var id=$(this).data("id");
        var newChomp=$(this).data("newdevoured");

        var newChompState={
            Chomp: newChomp
        };

        //send the PUT request
        $.ajax("api/burgers/"+id,{
            type: "PUT",
            data: newChompState
        }).then(
            function(){
                console.log("changed chomp state to", newChomp);
                //reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger={
            name: $("#burger").val().trim(),
            chomp: $("[name=chomp]:checked").val().trim()
        };

        //sent the POST request
        $.ajax("/api/burgers",{
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("created new burger", id);
                //reload the page to get the updated list
                location.reload();
            }
        );
    });
$(".delete-burger").on("click", function(event){
    var id=$(this).data("id");

    //send the  DELETE request.
    $.ajax("/api/burgers/" + id,{
type: "DELETE"
    }).then(
        function(){
            console.log("deleted burger", id);
            //reload the page to get the updated list
            location.reload();
        }
    )
})

})