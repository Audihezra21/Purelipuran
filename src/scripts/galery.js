import './components/index';
import '../../public/styles/style.css';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

window.addEventListener('load', () => {
  swRegister();
});

document.addEventListener('DOMContentLoaded', () => {
  console.log('Home page script loaded');

  // Menambahkan logika khusus untuk halaman Home di sini
  const homeTitle = document.querySelector('h1');
  homeTitle.innerHTML = 'Purelipuran <span class="text-[#76885B]">Gallery</span>';
  homeTitle.className = 'mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl';

  const homeDesc = document.querySelector('p');
  homeDesc.remove();
});

document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-button');
  const gallerySections = document.querySelectorAll('.gallery-section');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const category = this.getAttribute('data-category');

      gallerySections.forEach(section => {
        const sectionCategory = section.getAttribute('data-category');
        const sectionTitle = section.querySelector('h1');

        if (category === 'all') {
          if (sectionCategory === 'all') {
            section.style.display = 'block';
            sectionTitle.style.display = 'block'; // Tampilkan judul "Semua"
          } else {
            section.style.display = 'block';
            sectionTitle.style.display = 'none'; // Sembunyikan judul kategori lainnya
          }
        } else if (sectionCategory === category) {
          section.style.display = 'block';
          if (sectionCategory === 'all') {
            sectionTitle.style.display = 'none'; // Sembunyikan judul "Semua" jika tidak dipilih "all"
          } else {
            sectionTitle.style.display = 'block'; // Tampilkan judul kategori yang dipilih
          }
        } else {
          section.style.display = 'none';
          sectionTitle.style.display = 'none'; // Sembunyikan judul kategori dan galeri yang tidak sesuai
        }
      });
    });
  });
});






