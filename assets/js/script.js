// Perfectly smooth, seamless auto-scroll for tech stack
document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("tech-stack-list");
  if (!list) return;

  // Duplicate the content for seamless scroll
  list.innerHTML += list.innerHTML;

  let scrollAmount = 0;
  const speed = 2; // Adjust for faster/slower scroll
  const interval = 16; // 16ms = 60fps

  function autoScroll() {
    scrollAmount += speed;
    if (scrollAmount >= list.scrollWidth / 2) {
      scrollAmount = 0;
    }
    list.scrollLeft = scrollAmount;
  }

  setInterval(autoScroll, interval);

  list.style.overflowX = "hidden";
  list.style.whiteSpace = "nowrap";
});
const nav = document.querySelector('nav');

document.addEventListener('click', () => {
  nav.classList.toggle('show');
});
document.addEventListener('DOMContentLoaded', function () {
  const sidebarBtn = document.querySelector('[data-sidebar-btn]');
  const sidebar = document.querySelector('.sidebar');
  if (sidebarBtn && sidebar) {
    sidebarBtn.addEventListener('click', function () {
      sidebar.classList.toggle('active');
    });
  }
});