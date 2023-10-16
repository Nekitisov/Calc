let number = document.querySelectorAll('.btn'),
    equals = document.querySelector('.btnEquals'),
    conclusion = document.querySelector('#result'),
    clear = document.querySelector('#CE');


number.forEach(function (id) {
    id.addEventListener('click', function () {
        conclusion.innerHTML += this.id;
    })
});

equals.addEventListener('click', function () {
    let text = conclusion.textContent.match(/(\d+\.\d+|\d+|[-+*/])/g);
    if (text[1] === '+') {
        conclusion.innerHTML = +text[0] + +text[2];
    } else if (text[1] === '-') {
        conclusion.innerHTML = +text[0] - +text[2]
    } else if (text[1] === '*') {
        conclusion.innerHTML = +text[0] * +text[2]
    } else if (text[1] === '/') {
        conclusion.innerHTML = +text[0] / +text[2]
    }
})

clear.addEventListener('click', function () {
    conclusion.innerHTML = '';
})