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

const nextBtn = document.querySelector(".next-button");
const cards = document.querySelectorAll(".option-card");

let selectedValue = null;

// 카드 선택
cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((c) => c.classList.remove("selected"));
    card.classList.add("selected");

    selectedValue = card.querySelector(".option-text").innerText;
  });
});

// 다음 버튼
nextBtn.addEventListener("click", () => {
  if (!selectedValue) {
    alert("하나를 선택해주세요!");
    return;
  }

  // 지금 페이지가 survey.html이면 survey2.html로
  if (location.pathname.includes("survey.html")) {
    localStorage.setItem("survey", selectedValue);
    window.location.href = "twosurvey.html";
  }

  // 지금 페이지가 survey2.html이면 loading.html로
  if (location.pathname.includes("survey2.html")) {
    localStorage.setItem("twosurvey", selectedValue);
    window.location.href = "loging.html";
  }
});
