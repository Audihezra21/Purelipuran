import { createClient } from '@supabase/supabase-js';

class reviewHomeBar extends HTMLElement {
  constructor() {
    super();
    this.supabaseUrl = 'https://zfebmchdyrqurbnxkpek.supabase.co';
    this.supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmZWJtY2hkeXJxdXJibnhrcGVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzNTczMjMsImV4cCI6MjAzMzkzMzMyM30.jRwjBiC2WMQM071msyNHDRgU0E3-EjWutlpo4uqefHs';
    this.supabase = createClient(this.supabaseUrl, this.supabaseKey);
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

  async connectedCallback() {
    await this.render();
  }

  async render() {
    const reviews = await this.fetchReviews();
    this.innerHTML = `
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  grid grid-cols-1 md:grid-cols-2 gap-8 items-center lg:mt-8 md:mt-8">
        <div>
          <h2 class="text-4xl font-bold mb-4 lg:text-5xl md:text-5xl">Ulasan Pengguna</h2>
          <form class=" mx-auto mt-10">
            <div class="mb-5">
              <label for="name" class="block mb-2 text-md font-medium text-gray-900 ">Nama</label>
              <input id="reviewName" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Masukkan Nama Anda..."></input>
            </div>
            <label for="review" class="block mb-2 text-md font-medium text-gray-900 ">Ulasan Anda</label>
            <textarea id="reviewMessage" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Masukkan Ulasan Anda..."></textarea>
            <button id="submitReview"
              type="button"
              class="focus:outline-none text-white bg-[#829E80] hover:bg-[#738c71] focus:ring-4 focus:ring-[#9ab898] font-medium rounded-sm text-md px-5 py-2.5 my-4 me-2 mb-2 "
            >
              Kirim Ulasan
            </button>
          </form>
        </div>
        <div class="grid gap-4 md:-ml-8">
          ${reviews.map(review => `
            <div class="card-review flex flex-col justify-center text-center w-full lg:max-w-xs p-x-10 lg:ml-32 md:ml-14 md:max-w-xs">
              <div class="review-content  rounded-lg bg-slate-100 shadow-lg p-5">
                <i class="fa-solid fa-circle-user text-4xl "></i>
                <div class="review-inner" tabindex="0">
                  <h3 class="text-lg font-semibold ">${review.name}</h3>
                  <p class="text-md  text-black font-medium">${new Date(review.created_at).toLocaleDateString()}</p>
                  <p class="text-md  text-black font-medium">"${review.pesan}"</p>
                </div>  
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Tambahkan event listener untuk tombol Kirim Ulasan
    const submitButton = this.querySelector('#submitReview');
    submitButton.addEventListener('click', async () => {
      const nameInput = this.querySelector('#reviewName');
      const messageInput = this.querySelector('#reviewMessage');

      const name = nameInput.value.trim();
      const pesan = messageInput.value.trim();

      if (name !== '' && pesan !== '') {
        // Simpan ulasan ke Supabase
        const { data, error } = await this.supabase.from('ulasan').insert([{ name, pesan }]);

        if (error) {
          console.error('Error saving review:', error.message);
          return;
        }

        // Reset input setelah berhasil disimpan
        nameInput.value = '';
        messageInput.value = '';

        // Ambil ulasan terbaru dan render ulang komponen
        const updatedReviews = await this.fetchReviews();
        this.render();
      } else {
        alert('Mohon isi nama dan ulasan Anda.');
      }
    });
  }
}

customElements.define('review-bar', reviewHomeBar);
