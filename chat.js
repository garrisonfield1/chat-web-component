// Import stylesheets
import './chat-style.css';

const iframeContainer = document.getElementById('modal-container-chat');

const chatButtonOpen = document.querySelector(
  '[data-component-id="DssChatBotButton"]'
);

let showPopup = false;

window.addEventListener('message', (e) => {
  if (e.origin !== 'http://localhost:8080') return;
  showPopup = e.data.showPopup;

  if (showPopup) {
    chatButtonOpen.classList.add('hidden');
    iframeContainer.classList.remove('hidden');
  } else {
    chatButtonOpen.classList.remove('hidden');
    iframeContainer.classList.add('hidden');
  }
});

chatButtonOpen.addEventListener('click', (event) => {
  chatButtonOpen.classList.add('hidden');
  iframeContainer.classList.remove('hidden');
});
