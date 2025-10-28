// From the Shadows — Basic Interactivity (no glow)

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".category-btn");

  // Smooth fade-in for buttons when page loads
  buttons.forEach((btn, i) => {
    btn.style.opacity = "0";
    btn.style.transform = "translateY(10px)";
    setTimeout(() => {
      btn.style.transition = "all 0.6s ease";
      btn.style.opacity = "1";
      btn.style.transform = "translateY(0)";
    }, 100 * i);
  });

  // Make links open in new tabs
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const url = btn.getAttribute("href");
      window.open(url, "_blank");
    });
  });
});
