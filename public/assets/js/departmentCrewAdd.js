$("#chevy-rider").on("submit", function (event) {
  event.preventDefault();
  const departmentName = $("#new-name").val();
  const supervisor = $("#new-supervisor ").val();
  const lead = $("#new-lead").val();

  $.ajax({
    url: "/api/departmentPost",
    method: "post",
    data: {

      name: departmentName,
      supervisor: supervisor,
      lead: lead,
    },
  }).then(function () {
    window.location.reload();
    alert("successfully created entry to departmentCrew table");
  });


  
});
