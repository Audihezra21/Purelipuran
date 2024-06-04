class heroBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      


<section class="relative ">
  <img class="absolute inset-0 w-full h-full object-cover" src="hero/Hero1.png" alt="">
  <div class="relative px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">P u r e l i p u r a n</h1>
    <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Selamat datang di Purelipuran! Temukan pesona Desa Penglipuran yang memesona di Bali. Nikmati keindahan alam, rumah tradisional, dan keramahan penduduk lokal. Mulailah petualangan Anda sekarang!</p>
    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
  </div>
</section>


        `;
  }
}

customElements.define('hero-bar', heroBar);
