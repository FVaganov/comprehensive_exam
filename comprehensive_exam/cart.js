    const modalBtns = document.querySelectorAll('.btn');
    
    const modals = document.querySelectorAll('.modal');

    modalBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            modals[index].style.display = 'block';
        });
    });

    modals.forEach((modal) => {
        const closeBtn = modal.querySelector('.close');
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
