import 'regenerator-runtime';
import '../../public/styles/style.css';
import './components/index';
import swRegister from './utils/sw-register';

window.addEventListener('load', () => {
  swRegister();
});

function handleFullDayClick() {
  localStorage.setItem('jenisPemesanan', 'Full Day');
}

// Fungsi untuk menangani klik pada link Paket Half Day
function handleHalfDayClick() {
  localStorage.setItem('jenisPemesanan', 'Half Day');
}