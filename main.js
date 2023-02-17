const modal_btn = document.getElementById('modal-btn');
const modal_overlay = document.getElementById('modal-overlay');
const close_btn = document.getElementById('modal-close-btn');

modal_btn.addEventListener('click', () => {
  modal_overlay.classList.toggle('open-modal');
});

close_btn.addEventListener('click', () => {
  modal_overlay.classList.toggle('open-modal');
});