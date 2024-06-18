class pemesananHomeBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      
  
   <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center lg:mt-8 md:mt-8">
      <div class="grid gap-4">
            <picture>
        <source media="(max-width: 600px)" data-srcset="pemesanan-small.jpg">
        <img class="lazyload h-auto max-w-full rounded-lg" data-src="pemesanan-large.jpg" alt="" />
        </picture>
      </div>
      <div>
        <h2 class="text-4xl font-bold mb-4 lg:text-5xl md:text-5xl">Pemesanan</h2>
        <p class="text-gray-600 mb-6">
          Tour wisata ke Desa Penglipuran sangat direkomendasikan bagi Anda yang ingin menikmati keindahan budaya dan tradisi Bali. Anda dapat menikmati pemandangan desa yang indah, melakukan aktivitas-aktivitas yang seru, dan berinteraksi dengan masyarakat setempat.
        </p>
        <button
          type="button"
          class="focus:outline-none text-white bg-[#829E80] hover:bg-[#738c71] focus:ring-4 focus:ring-[#9ab898] font-medium rounded-sm text-md px-5 py-2.5 me-2 mb-2 " onclick="location.href='/pemesanan'"
        >
          Baca Selengkapnya
        </button>
      </div>
    </div>

    


        `;
  }
}

customElements.define('pemesanan-bar', pemesananHomeBar);
