function showDetails(techId) {
    var details = document.getElementById("details-" + techId);
    if (details.style.display === "none" || details.style.display === "") {
      details.style.display = "block";
    } else {
      details.style.display = "none";
    }
  }
  