// From the Shadows — Basic Interactivity (same-tab version, no glow)

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

  // Let links open normally in the same tab
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // No preventDefault — normal navigation
      const url = btn.getAttribute("href");
      window.location.href = url; // same-tab navigation
    });
  });
});
