    const toggleBtn = document.getElementById("menu-toggle");
    const navList = document.querySelector(".nav-list");

    if (toggleBtn && navList) {
        toggleBtn.addEventListener("click", () => {
            navList.classList.toggle("show");
        });
    }
//carregar navbar
     fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
      document.getElementById('navbar-placeholder').innerHTML = data;

      // só agora o botão existe → só agora posso ativar o JS
      const toggleBtn = document.getElementById("menu-toggle");
      const navList = document.querySelector(".nav-list");

      toggleBtn.addEventListener("click", () => {
          navList.classList.toggle("show");
      });
  });

// Carregar Footer
    fetch('footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
      });