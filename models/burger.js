// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function(){
    $(".change-chomp").on("click", function(event){
        var id=$(this).data("id");
        var newChomp=$(this).data("newdevoured");

        var newChompState={
            Chomp: newChomp
        };

        //send the PUT request
        $.ajax("api/burgers/"+id,{})
    })
})