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
      <picture>
        <source media="(max-width: 600px)" data-srcset="galeri1-small.jpg">
        <img class="lazyload h-auto max-w-full rounded-lg" data-src="galeri1-large.jpg" alt="">
        </picture>
    </div>
    <div>
          <picture>
        <source media="(max-width: 600px)" data-srcset="galeri2-small.jpg">
        <img class="lazyload h-auto max-w-full rounded-lg" data-src="galeri2-large.jpg" alt="">
        </picture>
    </div>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-4">
        <div>
              <picture>
        <source media="(max-width: 600px)" data-srcset="galeri3-small.jpg">
            <img class="lazyload h-auto max-w-full rounded-lg" data-src="galeri3-large.jpg" alt="">
            </picture>
        </div>
        <div>     
         <picture>
        <source media="(max-width: 600px)" data-srcset="galeri4-small.jpg">
            <img class="lazyload h-auto max-w-full rounded-lg" data-src="galeri4-large.jpg" alt="">
            </picture>
        </div>
        <div class="grid-cols-1 ">
      <picture>
        <source media="(max-width: 600px)" data-srcset="galeri5-small.jpg">
            <img class="lazyload h-auto max-w-full rounded-lg" data-src="galeri5-large.jpg" alt="">
            </picture>
        </div>
    </div>
</div>
      <div class="flex justify-end mt-8">
      <button type="button" class="focus:outline-none text-white bg-[#829E80] hover:bg-[#738c71] focus:ring-4 focus:ring-[#9ab898] font-medium rounded-sm text-md px-5 py-2.5 me-2 mb-2" onclick="location.href='/galery'">Galeri <i class="fa-solid fa-arrow-right pl-2 text-sm"></i></button>
      </div>
    </div>



        `;
  }
}

customElements.define('galeri-bar', galeriBar);
