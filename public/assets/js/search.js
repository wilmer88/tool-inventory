$("#tax-form").on("submit", function (event) {
  event.preventDefault();
  var itemToSearch = $("#g-search").val().trim();
  itemToSearch = itemToSearch.replace(/\\\\s+/g, "").toLowerCase();
  $.ajax({
    url: `api/item/${itemToSearch}`,
    method: "GET",
    error: function (response) {
      alert("Searched entry not in inventory database");
    },
  }).then(function (data) {
    console.log(data);
    window.location.href = `/api/item/${itemToSearch}`;
  });
});
