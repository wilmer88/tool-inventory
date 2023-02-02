

$("#chevy-rider").on("submit", function (event) {


  event.preventDefault();

  const routeName = $("#new-departmentName").val().replace(/\s+/g, " ").toLowerCase();
  const departmentName = $("#new-departmentName").val();
  const supervisor = $("#new-supervisor ").val();
  const lead = $("#new-lead").val();

  $.ajax({
    url: "/api/departmentPost",
    method: "post",
    data: {
      departmentName: departmentName,
      supervisor: supervisor,
      lead: lead,
      routeName: routeName,
    },
  }).then(function (departmetDB) {
    console.log(departmetDB)
    window.location.replace("/");
    alert("successfully created entry for departments");
  });
  
});
