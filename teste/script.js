document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Encontra o elemento 'faq-item' pai da pergunta clicada
            const faqItem = this.closest('.faq-item');
            const arrow = this.querySelector('.arrow'); // A seta está dentro de faq-question

            // Alterna a classe 'active' no faq-item.
            // O CSS agora cuidará de mostrar/esconder e animar,
            // e também de girar a seta e aplicar o padding correto.
            faqItem.classList.toggle('active');

            // Se você quiser fechar outras FAQs quando uma é aberta,
            // descomente o bloco abaixo.
            // Para isso, o `faqItem.classList.toggle('active');` acima
            // deveria ser `faqItem.classList.add('active');` se você quiser
            // que sempre que uma nova for clicada ela abra e as outras fechem.
            /*
            faqQuestions.forEach(otherQuestion => {
                const otherFaqItem = otherQuestion.closest('.faq-item');
                if (otherFaqItem !== faqItem && otherFaqItem.classList.contains('active')) {
                    otherFaqItem.classList.remove('active');
                    otherQuestion.querySelector('.arrow').innerHTML = '&#9654;'; // Reseta a seta das outras
                }
            });
            */

            // O JavaScript agora só precisa alternar a seta
            // baseando-se na classe 'active' do faqItem
            if (faqItem.classList.contains('active')) {
                arrow.innerHTML = '&#9660;'; // Seta para baixo
            } else {
                arrow.innerHTML = '&#9654;'; // Seta para direita
            }
        });
    });
});
