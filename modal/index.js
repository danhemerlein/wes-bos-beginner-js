console.log('modal works');

const button = document.querySelector('.button');

const modalOuter = document.querySelector('.modal-outer');

const img = document.querySelector('.img');

console.log(button);

function handleButtonClick() {
  modalOuter.classList.add('open');
  const imgSource = img.src;
  const p = document.querySelector('.p')
}

button.addEventListener('click', handleButtonClick)

function closeModal(event) {
  modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function(event) {
  const isOutside = event.target.closest('.modal-inner');
  if (!isOutside) {
    closeModal();
  }
})

window.addEventListener('keydown', (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
})


