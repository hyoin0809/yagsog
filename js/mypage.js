const logoutBtn = document.querySelector(".logout-btn");
const modal = document.getElementById("logoutModal");
const cancelBtn = document.querySelector(".cancel-btn");
const confirmBtn = document.querySelector(".confirm-btn");

logoutBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

cancelBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

confirmBtn.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "index.html";
});
