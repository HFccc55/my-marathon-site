// js/timeline.js

let currentIndex = 0;
const totalSlides = document.querySelectorAll(".slide").length;

const container = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateSlide() {
  container.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlide();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    updateSlide();
  }
});
// 完赛证书逻辑
const nameInput = document.getElementById("runnerName");
const generateBtn = document.getElementById("generateBtn");
const certDiv = document.getElementById("certificate");
const certName = document.getElementById("certName");

generateBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();

  if (name) {
    certName.textContent = name;
    certDiv.classList.remove("hidden");
  } else {
    alert("请输入你的姓名！");
  }
});
// 起点弹窗
function toggleStartInfo() {
    document.getElementById("startInfo").classList.toggle("hidden");
  }
  
  function showNoodleIntro() {
    document.getElementById("noodleIntro").classList.toggle("hidden");
  }
  
  // 热干面搅拌计数
  let stirCount = 0;
  const noodleImg = document.getElementById("noodleImg");
  const counterDisplay = document.getElementById("stirCounter");
  const noodleStory = document.getElementById("noodleStory");
  
  if (noodleImg) {
    noodleImg.addEventListener("click", () => {
      stirCount++;
      counterDisplay.textContent = `搅拌次数：${stirCount}`;
      if (stirCount === 5) {
        noodleStory.classList.remove("hidden");
      }
    });
  }
  