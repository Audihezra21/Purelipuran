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
