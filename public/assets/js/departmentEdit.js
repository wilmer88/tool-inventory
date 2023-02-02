$("#departmentEditForm").on("submit", function (event) {
  event.preventDefault();
  const departmentName = $("#new-departmentName").val();
  const supervisor = $("#new-supervisor").val();
  const lead = $("#new-lead").val();
  const departmentId = $("#department-id").val();
  const routeName = $("#new-departmentName").val().replace(/\s+/g, " ").toLowerCase();
  $.ajax({
    url: `/api/departmentEdit/${departmentId}`,
    method: "PUT",
    data: {
      departmentName: departmentName,
      supervisor: supervisor,
      lead: lead,
      routeName: routeName,
    },
  }).then(function () {
    window.location.replace(`/departmentView/${departmentId}`);
  });
});
