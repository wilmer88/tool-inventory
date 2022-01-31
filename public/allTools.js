$(document).ready(function () {
  allSavedTools();
  var erramientas = [];
  function allSavedTools() {
    $.get("/api/alltools", function (data) {
      erramientas = data;
    });
  }
  console.log(erramientas);
});
