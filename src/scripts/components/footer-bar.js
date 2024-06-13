class footerBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      
  



<footer class="bg-[#76885B] mt-16 ">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                  <img src="favicon.png" class="h-10 me-3 rounded-full" alt="FlowBite Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Purelipuran</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 lg:gap-5 lg:grid-cols-2  md:grid-cols-2 md:mx-16 ">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-white uppercase ">Informasi</h2>
                  <ul class="text-white  font-medium">
                      <li class="mb-4">
                          <a href="https://flowbite.com/" class="hover:underline">Beranda</a>
                      </li>
                      <li class="mb-4">
                          <a href="https://tailwindcss.com/" class="hover:underline">Galeri</a>
                      </li>
                      <li class="mb-4">
                          <a href="https://tailwindcss.com/" class="hover:underline">Pemesanan</a>
                      </li>
                      <li class="mb-4">
                          <a href="https://tailwindcss.com/" class="hover:underline">Tentang Kami</a>
                      </li>
                  </ul>
              </div>

              <div>
                  <h2 class="mb-6 text-sm font-semibold text-white uppercase ">Kontak</h2>
                  <ul class="text-gray-500  font-medium">
                      <li class="mb-4">
                      <div class="mt-2 flex md:justify-normal   ">
                        <i class="fa-solid fa-location-dot text-white pt-1"></i>

                            <a href="#" class=" hover:underline  text-white  ml-2">Jl. Penglipuran, Kubu, Kec. Bangli, Kabupaten Bangli</a>
                        </div>
                      </li>
                      <li class="mb-4">
                       <div class="mt-2 flex md:justify-normal  ">
                           <i class="fa-solid fa-phone text-white pt-1"></i>
                          <a href="#" class="hover:underline text-white ml-2">0821-4454-3439</a>
                        </div>
                      
                      </li>
                      <li class="mb-4 ">
                      <div class="mt-2 flex md:justify-normal  ">
                                            <i class="fa-solid fa-envelope text-white pt-1"></i>

                            <a href="#" class=" hover:underline text-white break-all ml-2">info@desapenglipuran.com</a>
                        </div>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 lg:mx-auto  lg:my-8" />
      <div class="lg:flex lg:items-center lg:justify-between">
          <span class="text-sm text-white lg:text-center ">© 2024 <a href="https://flowbite.com/" class="hover:underline">Purelipuran™</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 lg:justify-center lg:mt-0">
              <a href="#" class="text-white hover:text-gray-900 ">
                  <i class="fa-brands fa-facebook"></i>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="text-white hover:text-gray-900  ms-5">
                  <i class="fa-brands fa-instagram"></i>
                  <span class="sr-only">Instagram page</span>
              </a>
              <a href="#" class="text-white hover:text-gray-900  ms-5">
                <i class="fa-brands fa-twitter"></i>
                  <span class="sr-only">X-twitter page</span>
              </a>
              <a href="#" class="text-white hover:text-gray-900  ms-5">
                <i class="fa-brands fa-youtube"></i>
                  <span class="sr-only">Youtube page</span>
              </a>
              <a href="#" class="text-white hover:text-gray-900  ms-5">
                  <i class="fa-brands fa-linkedin"></i>
                  <span class="sr-only">Linkedin page</span>
              </a>
              <a href="#" class="text-white hover:text-gray-900  ms-5">
                 <i class="fa-brands fa-tumblr"></i>
                  <span class="sr-only">Tumblr page</span>
              </a>
          </div>
      </div>
    </div>
</footer>


    


        `;
  }
}

customElements.define('footer-bar', footerBar);
