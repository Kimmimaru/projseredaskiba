(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-opent]"),
      closeModalBtn: document.querySelector("[data-modal-closet]"),
      modal: document.querySelector("[data-modalt]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }

    
  })();


  function calculateSum() {
    const form = document.getElementById('calculatorForm');
    const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');
    let sum = 0;
  
    checkboxes.forEach((checkbox) => {
      sum += parseFloat(checkbox.value);
    });
  
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Сума обраних послуг: ${+ sum}$`;
  }
  
  function closeForm() {
    const form = document.getElementById('calculatorForm');
    form.style.display = 'none';
  }


