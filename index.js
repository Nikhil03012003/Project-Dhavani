const toggleBtn = document.querySelector(".hamburg");
const dropdown = document.querySelector(".down_drop");
toggleBtn.addEventListener("click", () => {
  dropdown.classList.toggle("top-16");
});

var searchBox = document.getElementById("search-box");

function openSearchBox() {
    searchBox.classList.remove("hidden");
}

function closeSearchBox() {
    searchBox.classList.add("hidden");
}