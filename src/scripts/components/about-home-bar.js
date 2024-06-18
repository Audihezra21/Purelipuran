class aboutHomeBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      
   <div class="max-w-7xl mx-auto mt-14 px-4 md:px-8 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">    
      <div class="grid gap-4">
          <div>
          
      <picture>
        <source media="(max-width: 600px)" data-srcset="about1-small.jpg">
            <img class="lazyload h-auto max-w-full rounded-lg" data-src="about1-large.jpg" alt="">
            </picture>
          </div>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 md:grid-cols-2">
          <div>
      <picture>
        <source media="(max-width: 600px)" data-srcset="about2-small.jpg">
            <img class="lazyload h-auto max-w-full rounded-lg" data-src="about2-large.jpg" alt="">
            </picture>
          </div>
          <div>
      <picture>
        <source media="(max-width: 600px)" data-srcset="about3-small.jpg">
            <img class="lazyload h-auto max-w-full rounded-lg" data-src="about3-large.jpg" alt="">
            </picture>
          </div>
      </div>
    </div>

      <div>
        <h2 class="text-4xl font-bold mb-4 lg:text-5xl md:text-5xl">Tentang Kami</h2>
        <p class="text-gray-600 mb-6">
          Desa Wisata Penglipuran terletak di Kecamatan Bangli, Kabupaten
          Bangli, Provinsi Bali dengan luas wilayah 112 Ha dengan penggunaan
          wilayah berupa pertanian 50 Ha untuk lahan pertanian, hutan bambu 45
          Ha, hutan kayu 4 Ha, pemukiman 9 Ha, tempat suci 4 Ha dan fasilitas
          umum. Desa Wisata Penglipuran terletak cukup strategis berjarak 60 km
          dengan jarak tempuh 1 jam 30 menit dari Bandara Internasional Ngurah
          Rai. Secara georafis terletak pada ketinggian 600- 650 m dari
          permukaan air laut, sehingga memiliki suhu yang cukup sejuk. 
        </p>
       <button type="button" class="focus:outline-none text-white   bg-[#829E80] hover:bg-[#738c71] focus:ring-4 focus:ring-[#9ab898] font-medium rounded-sm text-md px-5 py-2.5 me-2 mb-2 " onclick="location.href='/about'">Baca Selengkapnya</button>

      </div>
    </div>

    


        `;
  }
}

customElements.define('about-bar', aboutHomeBar);
