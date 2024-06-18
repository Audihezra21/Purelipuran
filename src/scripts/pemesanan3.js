// Import runtime untuk async/await (misalnya regenerator-runtime)
import 'regenerator-runtime';

// Import styles lokal (misalnya style.css)
import '../../public/styles/style.css';

// Import komponen-komponen yang diperlukan (misalnya index.js)
import './components/index';

// Import register service worker (misalnya sw-register.js)
import swRegister from './utils/sw-register';

// Daftarkan service worker setelah halaman dimuat
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
  window.location.href = '/pemesanan4';
});

// Update opsi waktu berdasarkan pilihan paket
document.getElementById('paket').addEventListener('change', function() {
  const paketSelect = document.getElementById('paket');
  const timeSelect = document.getElementById('time');

  if (paketSelect.value === 'FullDay Tour') {
    timeSelect.innerHTML = '<option value="2Days 1Night Tour">2Days 1Night Tour</option>';
  } else {
    timeSelect.innerHTML = '<option value="1Day Tour">1Day Tour</option>';
  }

  // Panggil updatePrice setelah mengubah opsi paket
  updatePrice();
});

// Fungsi untuk mengupdate harga berdasarkan paket dan jumlah wisatawan
function updatePrice() {
  const paketSelect = document.getElementById('paket');
  const selectedOption = paketSelect.options[paketSelect.selectedIndex];
  const hargaPaket = parseInt(selectedOption.getAttribute('data-price'), 10);

  const jumlahInput = document.getElementById('jumlah');
  const jumlahWisatawan = parseInt(jumlahInput.value, 10);

  if (isNaN(hargaPaket) || isNaN(jumlahWisatawan) || jumlahWisatawan <= 0) {
    localStorage.setItem('totalHarga', 0);
    document.getElementById('totalPrice').innerText = `Rp. 0`;
  } else {
    const totalHarga = hargaPaket * jumlahWisatawan;
    localStorage.setItem('totalHarga', totalHarga);
    document.getElementById('totalPrice').innerText = `Rp. ${totalHarga.toLocaleString()}`;
  }
}

// Panggil updatePrice saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
  const paketSelect = document.getElementById('paket');
  const jumlahInput = document.getElementById('jumlah');

  paketSelect.addEventListener('change', updatePrice);
  jumlahInput.addEventListener('input', updatePrice);

  // Panggil updatePrice sekali untuk inisialisasi tampilan harga
  updatePrice();
});
