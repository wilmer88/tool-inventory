$("#department-id").on("click", function (event) {
    event.preventDefault();
    var departmentToSearch= $("#g-").val().trim();
    departmentToSearch = itemToSearch.replace(/\\\\s+/g, "").toLowerCase();
    $.ajax({
      url: `/api/byDepartment/${departmentToSearch}`,
      method: "GET",
      error: function (response) {
        alert("Searched entry not in department table or database");
      },
    }).then(function (data) {
      console.log(data);
      window.location.href = `/api/item/${departmentToSearch}`;
    });
  });