import 'regenerator-runtime';
import '../../public/styles/style.css';
import './components/index';
import swRegister from './utils/sw-register';

window.addEventListener('load', () => {
  swRegister();
});

