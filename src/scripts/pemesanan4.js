import 'regenerator-runtime';
import '../../public/styles/style.css';
import './components/index';
import swRegister from './utils/sw-register';

window.addEventListener('load', () => {
  swRegister();
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('pesanForm');
  form.addEventListener('submit', sendMessage);
});

function sendMessage(event) {
  event.preventDefault(); // Mencegah form dari pengiriman default

  const name = document.getElementById('name').value;
  const nophone = document.getElementById('nophone').value;
  const email = document.getElementById('email').value;
  const harga = document.getElementById('harga').value;
  const pesan = document.getElementById('pesan').value;

  // Ambil data booking dari localStorage
  const bookingData = JSON.parse(localStorage.getItem('bookingData'));

  // Buat teks pesan WhatsApp dengan data booking dan data lainnya
  const url = `https://api.whatsapp.com/send?phone=6281375100138&text=Halo%2C%20Permisi%0ASaya%20*${name}*%20%0ANomor%20yang%20dapat%20dihubungi%20*${nophone}*%0Aemail%20saya%20*${email}*%0A%0ATanggal%20Tiba%3A%20*${bookingData.tanggal}*%0APaket%3A%20*${bookingData.paket}%20${bookingData.time}*%0AJumlah%20Wisatawan%3A%20*${bookingData.jumlah}*%0A%0ATotal%20biaya%20%3A%20*${harga}*%0APesan%20Tambahan%3A%20*${pesan}*%0A%0A`;

  // Buka WhatsApp dalam tab baru
  window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
  const bookingData = JSON.parse(localStorage.getItem('bookingData'));
  if (bookingData) {
    document.getElementById('fix-tanggal').textContent = bookingData.tanggal;
    document.getElementById('fix-paket').textContent = bookingData.paket;
    document.getElementById('fix-jumlah').textContent = bookingData.jumlah;
  } else {
    document.getElementById('fix-tanggal').textContent = 'Data tidak ditemukan';
    document.getElementById('fix-paket').textContent = 'Data tidak ditemukan';
    document.getElementById('fix-jumlah').textContent = 'Data tidak ditemukan';
  }
});

const totalHarga = localStorage.getItem('totalHarga');

// Set the value of harga input in pemesanan4.html
document.getElementById('harga').value = `Rp. ${totalHarga.toLocaleString()}`;