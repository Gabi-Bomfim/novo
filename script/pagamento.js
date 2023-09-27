// Seleciona os radio buttons
const radioCartaoCredito = document.getElementById("cartaoCredito");
const radioCartaoDebito = document.getElementById("cartaoDebito");
const cartaoForm = document.getElementById("cartaoForm");

// Adiciona um evento de escuta para os radio buttons
radioCartaoCredito.addEventListener("change", function () {
    if (this.checked || radioCartaoDebito.checked) {
        cartaoForm.classList.remove("hidden");
    } else {
        cartaoForm.classList.add("hidden");
    }
});

radioCartaoDebito.addEventListener("change", function () {
    if (this.checked || radioCartaoCredito.checked) {
        cartaoForm.classList.remove("hidden");
    } else {
        cartaoForm.classList.add("hidden");
    }
});


