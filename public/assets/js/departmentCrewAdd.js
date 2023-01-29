$("#chevy-rider").on("submit", function (event) {
  event.preventDefault();
  const routeName = $("#new-departmentCrewName").val().replace(/\s+/g, "").toLowerCase();
  const departmentCrew = $("#new-DepartmentCrew").val();
  const departmentCrewName = $("#new-DepartmentCrewName").val();

  const supervisor = $("#new-supervisor ").val();
  const lead = $("#new-lead").val();
  const id = $("#new-id").val();
  console.log(id);

  $.ajax({
    url: "/api/departmentCrew",
    method: "post",
    data: {
      routeName: routeName,
      departmentCrewName: departmentCrewName,
      supervisor: supervisor,
      lead: lead,
    },
  }).then(function () {
    window.location.reload();
    alert("successfully created entry to departmentCrew table");
  });


  
});
