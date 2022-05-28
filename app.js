const text = document.querySelectorAll('.text');

text.forEach(item => {
    let question = item.firstElementChild;
    let arrow = question.children[1];
    let answer = item.lastElementChild;

    item.addEventListener('click', () => {
        arrow.classList.toggle('rotate');
        answer.classList.toggle('visibility');
    })
})