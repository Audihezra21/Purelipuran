import './components/index';
import '../../public/styles/style.css';
import swRegister from './utils/sw-register';

window.addEventListener('load', () => {
  swRegister();
});
