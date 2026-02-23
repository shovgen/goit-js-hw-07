const nameIm = document.querySelector(`#name-input`);
const userName = document.querySelector(`#name-output`);


nameIm.addEventListener('input', (event) => {

    const trimmValue = event.currentTarget.value.trim();
    if (trimmValue === '') {
         userName.textContent = 'Anonymous';
    } else {
        userName.textContent = trimmValue;
    }

});