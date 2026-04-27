window.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".option-card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      cards.forEach((item) => item.classList.remove("selected"));
      card.classList.add("selected");
    });
  });

  const nextBtn = document.querySelector("#nextBtn");

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      window.location.href = "main.html";
    });
  }
});

const loginBtn = document.querySelector("#loginBtn");

if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    window.location.href = "main.html";
  });
}
