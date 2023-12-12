function showProjectDetails(title, description) {
  const modal = document.getElementById("projectDetailsModal");
  const modalTitle = document.getElementById("projectDetailsTitle");
  const modalDescription = document.getElementById("projectDetailsDescription");

  modal.style.display = "block";
  modalTitle.innerText = title;
  modalDescription.innerText = description;
}

function closeProjectDetailsModal() {
  const modal = document.getElementById("projectDetailsModal");
  modal.style.display = "none";
}

// Close modal if clicked outside the content or on the close button
window.onclick = function (event) {
  const modal = document.getElementById("projectDetailsModal");
  if (event.target === modal || event.target.classList.contains("close")) {
    modal.style.display = "none";
  }
};
