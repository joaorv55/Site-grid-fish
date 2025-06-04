document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const arrow = question.querySelector('.arrow');
            const isActive = question.classList.contains('active');

            // Fecha todas as outras respostas antes de abrir a nova (opcional)
            // faqQuestions.forEach(q => {
            //     if (q !== question && q.classList.contains('active')) {
            //         q.classList.remove('active');
            //         q.nextElementSibling.classList.remove('active');
            //         q.nextElementSibling.style.maxHeight = null;
            //         q.nextElementSibling.style.padding = '0 25px';
            //         q.querySelector('.arrow').innerHTML = '&#9654;'; // Seta para direita
            //     }
            // });

            // Alterna o estado da pergunta clicada
            question.classList.toggle('active');
            answer.classList.toggle('active');

            if (answer.classList.contains('active')) {
                // Define max-height para um valor suficiente para exibir o conteúdo
                // O valor exato pode precisar de ajuste dependendo do conteúdo
                answer.style.maxHeight = answer.scrollHeight + "px";
                answer.style.padding = '0 25px'; // Garante o padding horizontal
                // Adiciona padding vertical ao parágrafo interno quando ativo
                const p = answer.querySelector('p');
                if (p) p.style.padding = '20px 0';
                arrow.innerHTML = '&#9660;'; // Seta para baixo
            } else {
                answer.style.maxHeight = null;
                answer.style.padding = '0 25px'; // Mantém padding horizontal ao fechar
                // Remove padding vertical do parágrafo interno ao fechar
                const p = answer.querySelector('p');
                if (p) p.style.padding = '0';
                arrow.innerHTML = '&#9654;'; // Seta para direita
            }
        });
    });
});

