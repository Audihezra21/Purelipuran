import 'regenerator-runtime';
import '../../public/styles/style.css';
import './components/index';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

window.addEventListener('load', () => {
  swRegister();
});
