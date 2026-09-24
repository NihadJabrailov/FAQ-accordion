document.querySelectorAll('.question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;

        if (!answer || !answer.classList.contains('answer')) return;

        const icon = question.querySelector('img');
        const isOpen = answer.classList.contains('open');

        document.querySelectorAll('.answer').forEach(a => a.classList.remove('open'));
        document.querySelectorAll('.question img').forEach(img => {
            img.src = '/images/icon-plus.svg';
        });

        if (!isOpen) {
            answer.classList.add('open');
            icon.src = '/images/icon-minus.svg';
        }
    });
});
