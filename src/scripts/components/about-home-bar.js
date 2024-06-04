class aboutHomeBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      
   <div class="max-w-7xl mx-auto mt-14 px-4 md:px-8 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">    
      <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg" src="about1.jpg" alt="">
          </div>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 md:grid-cols-2">
          <div>
            <img class="h-auto max-w-full rounded-lg" src="about2.jpg" alt="">
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src="about3.jpg" alt="">
          </div>
      </div>
    </div>

      <div>
        <h2 class="text-4xl font-bold mb-4 lg:text-5xl md:text-5xl">Tentang Kami</h2>
        <p class="text-gray-600 mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </p>
       <button type="button" class="focus:outline-none text-white   bg-[#829E80] hover:bg-[#738c71] focus:ring-4 focus:ring-[#9ab898] font-medium rounded-sm text-md px-5 py-2.5 me-2 mb-2 ">Baca Selengkapnya</button>

      </div>
    </div>

    


        `;
  }
}

customElements.define('about-bar', aboutHomeBar);
