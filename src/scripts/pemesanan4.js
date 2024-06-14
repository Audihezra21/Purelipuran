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

  const url = `https://api.whatsapp.com/send?phone=6281375100138&text=Halo%2C%20Permisi%0ASaya%20*${name}*%20%0ANomor%20yang%20dapat%20dihubungi%20*${nophone}*%0Aemail%20saya%20*${email}*%0A%0A*${harga}*%0A*${pesan}*`;
  
  window.open(url, '_blank');
}
