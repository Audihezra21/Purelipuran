class galeriBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      

   <div class="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 lg:mt-8 md:mt-8">
      <h2 class="text-4xl font-bold mb-4 lg:text-5xl md:text-5xl">Galeri</h2>
    <div class="grid gap-4 ">
    <div class="grid grid-cols-2 gap-4 sm:grid-cols-2">
    <div>
        <img class="h-auto max-w-full rounded-lg" src="galeri1.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="galeri2.jpg" alt="">
    </div>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="galeri3.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="galeri4.jpg" alt="">
        </div>
        <div class="grid-cols-1 ">
            <img class="h-auto max-w-full rounded-lg" src="galeri5.jpg" alt="">
        </div>
    </div>
</div>
      <div class="flex justify-end mt-8">
      <button type="button" class="focus:outline-none text-white bg-[#829E80] hover:bg-[#738c71] focus:ring-4 focus:ring-[#9ab898] font-medium rounded-sm text-md px-5 py-2.5 me-2 mb-2">Galeri <i class="fa-solid fa-arrow-right pl-2 text-sm"></i></button>
      </div>
    </div>



        `;
  }
}

customElements.define('galeri-bar', galeriBar);
