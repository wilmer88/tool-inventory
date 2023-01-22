$("#monkey-code").on("submit", function (event) {
    event.preventDefault();
  const name = $("#name-input").val();
   const placement = $("#placement-input").val();
  const serial = $("#serial-num").val();
  const count = $("#exact-count").val();
  const countedName = $("#counted-by").val();
  const id = $("#item-id").val();
console.log(id);
$.ajax({
 url:`/api/item/${id}`,
 method: "PUT",
 data: {
   name: name,
   placement: placement,
   serial: serial,
   count: count,
   countedBy: countedName
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

