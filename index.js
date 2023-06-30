const input = document.querySelector('#input');
const div = document.createElement('div');

div.classList.add('focus-div');
div.innerText = 'Hello world!';
    
const body = document.querySelector('body');

input.onfocus = function() {
    body.appendChild(div);
};

input.onblur = function() {
    body.removeChild(div);
}