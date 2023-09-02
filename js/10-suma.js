document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('suma-form');
    const resultSuma = document.getElementById('resultSuma');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita que se envíe el formulario
    });

    const btnSuma = document.getElementById('btnSuma');
    const btnLimpiar = document.getElementById('btnLimpiar');


    btnSuma.addEventListener('click', function() {

        const num1 = parseFloat(form.num1.value); //parseFloat convierte a numero decimal
        const num2 = parseFloat(form.num2.value);

        if(isNaN(num1) || isNaN(num2)) {
            alert('Por favor ingrese números válidos');
        } else {
            const result = num1 + num2;
            
            resultSuma.innerHTML = result+" Q"
           
        }


    });


    btnLimpiar.addEventListener('click', function() {
        form.reset();
        resultSuma.innerHTML = '';
    });

});
