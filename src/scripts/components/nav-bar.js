class navBar extends HTMLElement {
  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.innerHTML = `
      <nav class="bg-[#76885B] fixed w-full z-20 top-0 start-0">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class="self-center text-3xl font-semibold whitespace-nowrap text-white">Purelipuran</span>
          </a>
          <button id="menuButton" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-[#76885B] focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-[#76885B] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#76885B]">
              <li>
                <a href="home.html" class="block py-2 px-3 text-white font-bold md:p-0 hover:underline">Beranda</a>
              </li>
              <li>
                <a href="galery.html" class="block py-2 px-3 text-white font-bold md:p-0 hover:underline">Galeri</a>
              </li>
              <li>
                <a href="pemesanan.html" class="block py-2 px-3 text-white font-bold md:p-0 hover:underline">Pemesanan</a>
              </li>
              <li>
                <a href="about.html" class="block py-2 px-3 text-white font-bold md:p-0 hover:underline">Tentang Kami</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }

  addEventListeners() {
    const menuButton = this.querySelector('#menuButton');
    const navbarDefault = this.querySelector('#navbar-default');

    menuButton.addEventListener('click', () => {
      const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', !isExpanded);
      navbarDefault.classList.toggle('hidden');
    });
  }
}

customElements.define('nav-bar', navBar);
