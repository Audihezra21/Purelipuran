class pemesananHomeBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      
  
   <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center lg:mt-8 md:mt-8">
      <div class="grid gap-4">
        <img class="h-auto max-w-full rounded-lg" src="pemesanan.jpg" alt="" />
      </div>
      <div>
        <h2 class="text-4xl font-bold mb-4 lg:text-5xl md:text-5xl">Pemesanan</h2>
        <p class="text-gray-600 mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <button
          type="button"
          class="focus:outline-none text-white bg-[#829E80] hover:bg-[#738c71] focus:ring-4 focus:ring-[#9ab898] font-medium rounded-sm text-md px-5 py-2.5 me-2 mb-2 "
        >
          Baca Selengkapnya
        </button>
      </div>
    </div>

    


        `;
  }
}

customElements.define('pemesanan-bar', pemesananHomeBar);
