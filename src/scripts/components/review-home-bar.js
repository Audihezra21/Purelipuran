class reviewHomeBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      
  
   <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  grid grid-cols-1 md:grid-cols-2 gap-8 items-center lg:mt-8 md:mt-8">
         <div>
        <h2 class="text-4xl font-bold mb-4 lg:text-5xl md:text-5xl">Ulasan Pengguna</h2>
       <form class=" mx-auto mt-10">
       <div class="mb-5">
      <label for="name" class="block mb-2 text-md font-medium text-gray-900 ">Nama</label>
  <input id="review" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Masukkan Nama Anda..."></input>
  </div>
  <label for="review" class="block mb-2 text-md font-medium text-gray-900 ">Ulasan Anda</label>
  <textarea id="review" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Masukkan Ulasan Anda..."></textarea>
</form>
        <button
          type="button"
          class="focus:outline-none text-white bg-[#829E80] hover:bg-[#738c71] focus:ring-4 focus:ring-[#9ab898] font-medium rounded-sm text-md px-5 py-2.5 my-4 me-2 mb-2 "
        >
          Read More
        </button>
      </div>
      <div class="grid gap-4 md:-ml-8">
      <div class="card-review flex flex-col justify-center text-center w-full lg:max-w-xs p-x-10 lg:ml-32 md:ml-14 md:max-w-xs">
         <div class="review-content  rounded-lg bg-slate-100 shadow-lg p-5">
            <i class="fa-solid fa-circle-user text-4xl "></i>
          <div class="review-inner" tabindex="0">
            <h3 class="text-lg font-semibold ">Sasa</h3>
            <p class="text-md  text-black font-medium">02 Agustus 2023</p>
            <p class="text-md  text-black font-medium">"Bagus"</p>
          </div>  
          </div>
        </div>
      </div>
    </div>

    


        `;
  }
}

customElements.define('review-bar', reviewHomeBar);
