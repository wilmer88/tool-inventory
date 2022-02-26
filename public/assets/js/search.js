// $.get("/api/" + itemToSearch, function (data) {
//  
//   })


console.log(data);
    $("#show-place").empty();
    if(!data){
      $("#show-place").append("<h2> could not find your item that was searched for, try a search all")
    }
else {
$("#show-place").append("<h2>" + {{data.name}} + "</h2>");
$("#show-place").append("<h3>Department:" + {{data.placement}} + "</h2>");
$("#show-place").append("<h2>Serial-Part#:" + {{data.serial}} + "</h2>");
$("#show-place").append("<h2>Count:" + {{data.name}} + "</h2>");
}