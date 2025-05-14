// js/route.js

// 选手点击 → 显示赛事数据
document.getElementById("runner").addEventListener("click", () => {
    document.getElementById("modal").classList.remove("hidden");
  });
  
  // 关闭按钮
  document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("modal").classList.add("hidden");
  });
  
  // 热干面摊点击 → 显示文化介绍
  document.getElementById("cart").addEventListener("click", () => {
    document.getElementById("noodle-info").classList.remove("hidden");
  });
  
  document.getElementById("closeNoodle").addEventListener("click", () => {
    document.getElementById("noodle-info").classList.add("hidden");
  });
  