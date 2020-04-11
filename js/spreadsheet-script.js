const scriptURL = 'https://script.google.com/macros/s/AKfycbwHE6u8ouzhIbqLC6bAYCG6SgYGQ7vi5miquDdLPAB5IjW_v4c/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))

  // $('#myModal').modal('toggle'); //or  $('#IDModal').modal('hide');
  return false;
})
