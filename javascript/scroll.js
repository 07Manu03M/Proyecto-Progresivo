document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll(".fade-up");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // para que solo se active una vez
        }
      });
    }, {
      threshold: 0.1, // 10% visible
    });
  
    targets.forEach((el) => observer.observe(el));
  });