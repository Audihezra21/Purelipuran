import 'regenerator-runtime';
import '../../public/styles/style.css';
import './components/index';
import swRegister from './utils/sw-register';

window.addEventListener('load', () => {
  swRegister();
});

const jenisPemesanan = localStorage.getItem('jenisPemesanan');

        // Tampilkan jenis pemesanan di halaman
        document.getElementById('jenisPemesanan').innerText = 'Anda telah memilih paket: ' + jenisPemesanan;