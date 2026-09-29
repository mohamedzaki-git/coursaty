import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App.jsx';
import BtnScroll from './components/common/BtnScroll.jsx';
import Theme from './components/common/Theme.jsx';
import WhatsApp from './components/common/whatsApp.jsx';
import './styles/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BtnScroll />
    <WhatsApp />
    <Theme />

    <App />
  </StrictMode>,
)
