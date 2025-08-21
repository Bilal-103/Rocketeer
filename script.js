
// Form email validation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = form.querySelector('input[type="email"]').value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email)) {
    alert("Thank you! You'll receive updates soon.");
    form.reset();
  } else {
    alert("Please enter a valid email address.");
  }
});

// Subscription box hover effect
document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.style.cssText = `
      transform: scale(1.05);
      transition: 0.3s ease;
      box-shadow: 0px 0px 25px rgba(255,255,255,0.5);
    `;
  });
  box.addEventListener('mouseleave', () => {
    box.style.cssText = `
      transform: scale(1);
      box-shadow: -3px 4px 15px rgba(170, 34, 34, 0.5);
    `;
  });
});

// Scroll reveal effect
const reveals = document.querySelectorAll('.mainbody, .about, .buynow1, .subscription');

reveals.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(50px)";
  sec.style.transition = "all 0.8s ease"; 
});

function revealOnScroll() {
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 100 && rect.bottom > 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    } else {
      el.style.opacity = 0;
      el.style.transform = "translateY(50px)";
    }
  });
}

window.addEventListener("DOMContentLoaded", revealOnScroll);
window.addEventListener("scroll", revealOnScroll);

// Highlight active menu item on scroll
const sections = document.querySelectorAll("section"); 
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    if (pageYOffset >= sec.offsetTop - 120) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
});

// Back to Top button
const backToTop = document.createElement("button");
backToTop.innerText = "↑";
backToTop.id = "backToTop"; 
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 200 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Animate all buttons when clicked
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.9)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 150);
  });
});
// Navbar background change on scroll
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
  navbar.style.backgroundColor =
    window.scrollY > 50 ? "#080506ee" : "#08050656";
});
