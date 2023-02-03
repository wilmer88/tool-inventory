  $("#chevy-rider").on("submit", function (event) {
    event.preventDefault();
    const id = $("#departmentId").val();
    const routeName = $("#new-itemName").val().replace(/\s+/g, " ").toLowerCase();

    console.log(id);
    const ItemName = $("#new-itemName").val();
    const placement = $("#new-location").val();
    const serial = $("#new-serial").val();
    const count = $("#new-count").val();
    const countedBy = $("#new-countedBy").val();
  
    $.ajax({
      url: "/api/postItem",
      method: "POST",
      data: {
        DepartmentId: id,
        itemName: ItemName,
        placement: placement,
        serial: serial,
        count: count,
        countedBy: countedBy,
        routeName: routeName,      
      },
    }).then(function () {
      // window.location.replace("/");
      alert("Successfully added entry to the department.");
    });
  });


