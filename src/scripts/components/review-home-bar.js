import { createClient } from '@supabase/supabase-js';

class reviewHomeBar extends HTMLElement {
  constructor() {
    super();
    this.supabaseUrl = 'https://zfebmchdyrqurbnxkpek.supabase.co';
    this.supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmZWJtY2hkeXJxdXJibnhrcGVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzNTczMjMsImV4cCI6MjAzMzkzMzMyM30.jRwjBiC2WMQM071msyNHDRgU0E3-EjWutlpo4uqefHs';
    this.supabase = createClient(this.supabaseUrl, this.supabaseKey);
    this.reviews = [];
  }

  async fetchReviews() {
    const { data, error } = await this.supabase
      .from('ulasan')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching reviews:', error.message);
      return [];
    }

    return data;
  }

  connectedCallback() {
    this.render();
  }

  async render() {
    this.reviews = await this.fetchReviews();
    this.innerHTML = `
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center lg:mt-8 md:mt-8">
        <div>
          <h2 class="text-4xl font-bold mb-4 lg:text-5xl md:text-5xl">Ulasan Pengguna</h2>
          <form class="mx-auto mt-10">
            <div class="mb-5">
              <label for="name" class="block mb-2 text-md font-medium text-gray-900">Nama</label>
              <input id="reviewName" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Masukkan Nama Anda..."></input>
            </div>
            <label for="review" class="block mb-2 text-md font-medium text-gray-900">Ulasan Anda</label>
            <textarea id="reviewMessage" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Masukkan Ulasan Anda..."></textarea>
            <button id="submitReview" type="button" class="focus:outline-none text-white bg-[#829E80] hover:bg-[#738c71] focus:ring-4 focus:ring-[#9ab898] font-medium rounded-sm text-md px-5 py-2.5 my-4 me-2 mb-2">Kirim Ulasan</button>
          </form>
        </div>
     <div class="grid gap-4 md:-ml-8">
  <div id="reviewCardd" class="relative w-full z-0" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96 md:mt-56 lg:mt-52">
      <!-- Carousel items -->
      ${this.reviews
    .map(
      (review, index) => `
            <div class="duration-700 ease-in-out ${
  index === 0 ? 'block' : 'hidden'
}" data-carousel-item>
              <div class="card-review flex flex-col justify-center text-center w-full lg:max-w-xs p-x-10 lg:ml-32 md:ml-14 md:max-w-xs ">
                <div class="review-content rounded-lg bg-slate-100 shadow-lg p-5">
                  <i class="fa-solid fa-circle-user text-4xl"></i>
                  <div class="review-inner" tabindex="0">
                    <h3 class="text-lg font-semibold">${review.name}</h3>
                    <p class="text-md text-black font-medium">${new Date(
    review.created_at,
  ).toLocaleDateString()}</p>
                    <p class="text-md text-black font-medium">"${
  review.pesan
}"</p>
                  </div>
                     <!-- Add buttons inside the card -->
                <div class="flex justify-between">
                  <button type="button" class="flex items-center justify-center w-10 h-10  rounded-full bg-gray-400 dark:bg-gray-800/30 group-hover:gray-400 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none" data-carousel-prev>
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span class="sr-only">Previous</span>
                  </button>
                  <button type="button" class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-400 dark:bg-gray-800/30 group-hover:gray-400 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none" data-carousel-next>
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span class="sr-only">Next</span>
                  </button>
                </div>
                </div>
             
              </div>
            </div>
          `,
    )
    .join('')}
    </div>
  </div>
</div>
      </div>
    `;

    this.addEventListeners();
  }

  addEventListeners() {
    const items = this.querySelectorAll('[data-carousel-item]');
    let currentIndex = 0;

    const showItem = (index) => {
      items.forEach((item, idx) => {
        item.classList.toggle('hidden', idx !== index);
        item.classList.toggle('block', idx === index);
      });
    };

    items.forEach((item) => {
      const prevButton = item.querySelector('[data-carousel-prev]');
      const nextButton = item.querySelector('[data-carousel-next]');

      prevButton.addEventListener('click', () => {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
        showItem(currentIndex);
      });

      nextButton.addEventListener('click', () => {
        currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
        showItem(currentIndex);
      });
    });

    showItem(currentIndex);

    // Tambahkan event listener untuk tombol Kirim Ulasan
    const submitButton = this.querySelector('#submitReview');
    submitButton.addEventListener('click', async () => {
      const nameInput = this.querySelector('#reviewName');
      const messageInput = this.querySelector('#reviewMessage');

      const name = nameInput.value.trim();
      const pesan = messageInput.value.trim();

      if (name !== '' && pesan !== '') {
        // Simpan ulasan ke Supabase
        const { data, error } = await this.supabase
          .from('ulasan')
          .insert([{ name, pesan }]);

        if (error) {
          console.error('Error saving review:', error.message);
          return;
        }

        // Reset input setelah berhasil disimpan
        nameInput.value = '';
        messageInput.value = '';

        // Ambil ulasan terbaru dan render ulang komponen
        this.reviews = await this.fetchReviews();
        this.render();
      } else {
        alert('Mohon isi nama dan ulasan Anda.');
      }
    });
  }
}

customElements.define('review-bar', reviewHomeBar);
