import 'regenerator-runtime';
import '../../public/styles/style.css';
import './components/index';
import swRegister from './utils/sw-register';

window.addEventListener('load', () => {
  swRegister();
});

// Tangani submit form di pemesanan3.html
document.getElementById('bookingForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah form dari pengiriman default

  const tanggal = document.getElementById('tanggal').value;
  const paket = document.getElementById('paket').value;
  const time = document.getElementById('time').value;
  const jumlah = document.getElementById('jumlah').value;

  const bookingData = {
    tanggal: tanggal,
    paket: paket,
    time: time,
    jumlah: jumlah
  };

  localStorage.setItem('bookingData', JSON.stringify(bookingData));

  // Redirect to pemesanan4.html
  window.location.href = 'pemesanan4.html';
});


document.getElementById('paket').addEventListener('change', function() {
  const paketSelect = document.getElementById('paket');
  const timeSelect = document.getElementById('time');

  // Jika memilih "FullDay Tour", atur opsi "2Days 1Night Tour" untuk waktu
  if (paketSelect.value === 'FullDay Tour') {
    timeSelect.innerHTML = '<option value="2Days 1Night Tour">2Days 1Night Tour</option>';
  } else {
    // Jika memilih "HalfDay Tour", atur opsi "1Day Tour" untuk waktu
    timeSelect.innerHTML = '<option value="1Day Tour">1Day Tour</option>';
  }
});

// pemesanan3.js

function updatePrice() {
  const paketSelect = document.getElementById('paket');
  const selectedOption = paketSelect.options[paketSelect.selectedIndex];
  const hargaPaket = parseInt(selectedOption.getAttribute('data-price'), 10);

  const jumlahInput = document.getElementById('jumlah');
  const jumlahWisatawan = parseInt(jumlahInput.value, 10);

  if (isNaN(jumlahWisatawan) || jumlahWisatawan <= 0) {
      // Handle case where jumlahWisatawan is NaN or <= 0
      localStorage.setItem('totalHarga', 0); // Set totalHarga to 0
      document.getElementById('totalPrice').innerText = `Rp. 0`;
  } else {
      const totalHarga = hargaPaket * jumlahWisatawan;
      localStorage.setItem('totalHarga', totalHarga);
      document.getElementById('totalPrice').innerText = `Rp. ${totalHarga.toLocaleString()}`;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const paketSelect = document.getElementById('paket');
  const jumlahInput = document.getElementById('jumlah');

  paketSelect.addEventListener('change', updatePrice);
  jumlahInput.addEventListener('input', updatePrice);

  // Call updatePrice once to initialize price display
  updatePrice();
});

