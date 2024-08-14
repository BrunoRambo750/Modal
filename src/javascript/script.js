const openButtons = document.querySelectorAll('.open-modal');

openButtons.forEach(button => {
    button.addEventListener('click' , () =>{
        const modalId = button.getAttribute ('data-modal');
        console.log(modalId);
        
    });
});