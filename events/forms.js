// EVENTS - Prevent Default and Form Events

// event.preventDefault() stops the default action of that element

const form = document.querySelector('[name="form"]');
console.log(form);

form.addEventListener('submit', function(event) {
  console.log(event);
  event.preventDefault();

  const name = event.currentTarget.name.value;

  if (name.toLowerCase().includes('chad')) {
    alert('sorry bro')
    event.preventDefault();
  }
})

'keyup'
'keydown'
'focus'
'blur'

const nameInput = form.name;

function logEvent(e) {
  console.log(e);
  console.log(e.type);
}

nameInput.addEventListener('keyup', logEvent);
nameInput.addEventListener('keydown', logEvent);
nameInput.addEventListener('focus', logEvent);
nameInput.addEventListener('blur', logEvent);
