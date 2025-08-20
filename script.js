   // Navbar background change on scroll
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#080506ee";
      } else {
        navbar.style.backgroundColor = "#08050656";
      }
    });

    // Form email validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value;
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (regex.test(email)) {
        alert("✅ Thank you! You'll receive updates soon.");
        form.reset();
      } else {
        alert("❌ Please enter a valid email address.");
      }
    });

    // Subscription box highlight
    document.querySelectorAll('.box').forEach(box => {
      box.addEventListener('mouseenter', () => {
        box.style.transform = "scale(1.05)";
        box.style.transition = "0.3s ease";
        box.style.boxShadow = "0px 0px 25px rgba(255,255,255,0.5)";
      });
      box.addEventListener('mouseleave', () => {
        box.style.transform = "scale(1)";
        box.style.boxShadow = "-3px 4px 15px rgba(170, 34, 34, 0.5)";
      });
    });

    // Scroll reveal effect
    const reveals = document.querySelectorAll('.mainbody, .about, .buynow1, .subscription');
    window.addEventListener('scroll', () => {
      reveals.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
          section.style.opacity = 1;
          section.style.transform = "translateY(0)";
          section.style.transition = "all 1s ease";
        }
      });
    });

    // Initial hidden state for reveal
    document.querySelectorAll('.mainbody, .about, .buynow1, .subscription').forEach(sec => {
      sec.style.opacity = 0;
      sec.style.transform = "translateY(50px)";
    });
    // Highlight active menu item while scrolling
    const sections = document.querySelectorAll("section, .about, .buynow1, .subscription");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach(sec => {
        const sectionTop = sec.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
          current = sec.getAttribute("id");
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    });

    // Add "Back to Top" button
    const backToTop = document.createElement("button");
    backToTop.innerText = "↑";
    backToTop.style.position = "fixed";
    backToTop.style.bottom = "50px";
    backToTop.style.right = "30px";
    backToTop.style.padding = "10px 15px";
    backToTop.style.borderRadius = "8px";
    backToTop.style.width = "45px";
    backToTop.style.height = "45px";
    backToTop.style.border = "none";
    backToTop.style.background = "#014f5f";
    backToTop.style.color = "#fff";
    backToTop.style.fontSize = "20px";
    backToTop.style.cursor = "pointer";
    backToTop.style.display = "none";
    document.body.appendChild(backToTop);

    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Animate buttons when clicked
    document.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.9)";
        setTimeout(() => {
          btn.style.transform = "scale(1)";
        }, 150);
      });
    });
