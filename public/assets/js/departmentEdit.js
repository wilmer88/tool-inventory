$("#departmentEditForm").on("submit", function (event) {
    event.preventDefault();
    const routeName = $("#new-name").val().replace(/\s+/g, " ").toLowerCase();
  const name = $("#new-name").val();
   const supervisor = $("#new-supervisor").val();
  const lead = $("#new-lead").val();

console.log(id);
$.ajax({
 url:`/api/item/${id}`,
 method: "PUT",
 data: {
   name: name,
   supervisor: supervisor,
   lead: lead,
  routeName: routeName
 },
}).then(function () {
window.location.replace(`/item/${id}`);
}).catch(err => {
 console.log(err)
  res.status(500).json({
      error: true,
      data: null,
      message: "faild to update item",
    });
})
})
