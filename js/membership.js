window.addEventListener("DOMContentLoaded", () => {
  const page = location.pathname.split("/").pop();

  // 1. 회원가입 → 설문1
  if (page === "membership.html") {
    const nextBtn = document.getElementById("nextBtn");

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        window.location.href = "survey.html";
      });
    }
  }

  // 2. 설문1 → 설문2
  if (page === "survey.html") {
    setupSurvey("survey1", "twosurvey.html");
  }

  // 3. 설문2 → 로딩
  if (page === "twosurvey.html") {
    setupSurvey("survey2", "loging.html");
  }

  // 4. 로딩 → 환영
  if (page === "loging.html") {
    setTimeout(() => {
      window.location.href = "home.html";
    }, 2000);
  }

  // 5. 환영 → 메인
  if (page === "home.html") {
    const startBtn = document.querySelector("#startBtn");

    if (startBtn) {
      startBtn.addEventListener("click", () => {
        window.location.href = "main.html";
      });
    }
  }
});

// 공통 설문 함수
function setupSurvey(storageName, nextPage) {
  const cards = document.querySelectorAll(".option-card");
  const nextBtn = document.querySelector(".next-button");

  let selectedValue = null;

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      cards.forEach((c) => c.classList.remove("selected"));
      card.classList.add("selected");

      selectedValue = card.querySelector(".option-text").innerText;
    });
  });

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (!selectedValue) {
        alert("하나를 선택해주세요!");
        return;
      }

      localStorage.setItem(storageName, selectedValue);
      window.location.href = nextPage;
    });
  }
}
