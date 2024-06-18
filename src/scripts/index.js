import 'regenerator-runtime';
import '../../public/styles/style.css';
import swRegister from './utils/sw-register';

window.addEventListener('load', () => {
  swRegister();
});

