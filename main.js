let popup = document.getElementById("popup");

if (popup) {
  function togglePopup(action) {
    popup.classList[action]("open-popup");
  }

  document
    .getElementById("openButton")
    .addEventListener("click", () => togglePopup("add"));
  document
    .getElementById("closeButton")
    .addEventListener("click", () => togglePopup("remove"));
}
