$("#chevy-rider").on("submit", function (event) {
  event.preventDefault();
  const routeName = $("#new-name").val().replace(/\s+/g, "").toLowerCase();
  const name = $("#new-name").val();
  const placement = $("#new-location").val();
  const serial = $("#new-serial").val();
  const count = $("#new-count").val();
  const id = $("#new-id").val();

  console.log(id);

  $.ajax({
    url: `/api/item`,
    method: "POST",
    data: {
      name: name,
      placement: placement,
      serial: serial,
      count: count,
      routeName: routeName,
    },
  }).then(function () {
    window.location.reload();
    alert("successfully created entry on data base");
  });
});
