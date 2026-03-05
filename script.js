const faders = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
  });
});

faders.forEach(el => observer.observe(el));

const leftElements = document.querySelectorAll('.fade-left');

leftElements.forEach(el => observer.observe(el));

const line = document.querySelector('.transition-line');

const lineObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
  });
}, { threshold: 0.5 });

if(line) lineObserver.observe(line);

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});