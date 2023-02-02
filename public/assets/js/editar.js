$("#monkey-code").on("submit", function (event) {
    event.preventDefault();
    const routeName = $("#itemName-input").val().replace(/\s+/g, " ").toLowerCase();
  const ItemName = $("#itemName-input").val();
   const placement = $("#placement-input").val();
  const serial = $("#serial-num").val();
  const count = $("#exact-count").val();
  const countedName = $("#counted-by").val();
  const id = $("#item-id").val();
// console.log(id);
$.ajax({
 url:`/api/item/${id}`,
 method: "PUT",
 data: {
   itemName: ItemName,
   placement: placement,
   serial: serial,
   count: count,
   countedBy: countedName,
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

