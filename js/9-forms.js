document.addEventListener('DOMContentLoaded', function() {
  
    const form = document.getElementById('personal-form');
    const resultDiv = document.getElementById('result');
    const limpiarBtn = document.getElementById('limpiar');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita que se envíe el formulario

        const nombre = form.nombre.value;
        const apellido = form.apellido.value;
        const edad = form.edad.value;
        const email =  form.email.value;

        const result = `
        <h3>Datos Enviados: </h3>
        <p><strong>Nombre: </strong> ${nombre}</p>
        <p><strong>Apellido: </strong> ${apellido}</p>
        <p><strong>Edad: </strong> ${edad}</p>
        <p><strong>Email: </strong> ${email}</p>
        `;

        resultDiv.innerHTML = result;
        //Muestra el resultado 

        resultDiv.style.display = 'block';

        setTimeout(function() {
            resultDiv.style.opacity = '1';
        }, 100);
    });

    //Agregar evento al limpiar el formulario

    limpiarBtn.addEventListener('click', function() {
        form.reset();
        resultDiv.style.display = 'none';
        resultDiv.style.opacity = '0';
    });
    

});
