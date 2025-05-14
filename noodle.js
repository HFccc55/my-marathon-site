// js/noodle.js

let stirCount = 0;
let isDragging = false;
let startX = 0;

const chopsticks = document.getElementById("chopsticks");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

chopsticks.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const diff = e.clientX - startX;
  chopsticks.style.transform = `rotate(${diff / 5}deg)`;

  if (Math.abs(diff) > 50) {
    stirCount++;
    startX = e.clientX; // 重置起点
    console.log("搅拌次数:", stirCount);

    if (stirCount >= 5) {
      showModal();
      isDragging = false;
    }
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  chopsticks.style.transform = `rotate(0deg)`;
});

function showModal() {
  modal.classList.remove("hidden");
}

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  stirCount = 0; // 重置
});
