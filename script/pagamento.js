// Seleciona os radio buttons
const radioCartaoCredito = document.getElementById("Cartão de Crédito");
const radioCartaoDebito = document.getElementById("Cartão de Débito");
const cartaoForm = document.getElementById("cartaoForm");

// Adiciona um evento de escuta para os radio buttons
radioCartaoCredito.addEventListener("change", function () {
    if (this.checked) {
        cartaoForm.classList.remove("hidden");
    } else {
        cartaoForm.classList.add("hidden");
    }
});

radioCartaoDebito.addEventListener("change", function () {
    if (this.checked) {
        cartaoForm.classList.remove("hidden");
    } else {
        cartaoForm.classList.add("hidden");
    }
});
