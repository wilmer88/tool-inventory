$("#add-tool").on("click", function(event){
    event.preventDefault();
// makes a new tool Object
    var newTool = {
        name: $("#tool-name").val().trim(),
        assignedTo: $("#assigned-to")

    }
})