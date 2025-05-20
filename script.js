document.getElementById("animateBtn").addEventListener("click", () => {
    const box = document.getElementById("box");
    box.classList.remove("animate"); // Reset animation
    void box.offsetWidth; // Trigger reflow to restart animation
    box.classList.add("animate");
  });
  
  function savePreference() {
    const theme = document.getElementById("theme").value;
    localStorage.setItem("preferredTheme", theme);
    applyTheme(theme);
  }
  
  function applyTheme(theme) {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("preferredTheme") || "light";
    document.getElementById("theme").value = savedTheme;
    applyTheme(savedTheme);
  });
  