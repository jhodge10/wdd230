const input = document.querySelector('favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
button.addEventListener('click', () => {
    button.classList.add('add');
});
    if (input.value != '') {Error}
const li = document.createElement('li');
li.textContent = input.value;
li.append(deletebutton);
list.append(li);

const deletebutton = document.createElement('button');
deletebutton.textContent = 'X';

deletebutton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
});

input.focus();
input.value = '';
