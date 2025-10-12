
document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("tech-stack-list");
  if (!list) return;

  let scrollAmount = 0;
  const speed = 2; 
  const interval = 16; 

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