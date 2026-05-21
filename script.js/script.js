 const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  const submenuItems = document.querySelectorAll('.has-submenu');

  submenuItems.forEach(item => {

    item.addEventListener('click', function(e) {

      if (window.innerWidth <= 1100) {

        const parentLink = this.querySelector(':scope > a');

        if (e.target === parentLink) {
          e.preventDefault();
          this.classList.toggle('active');
        }
      }

    });

  });


