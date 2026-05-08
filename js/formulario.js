document.addEventListener('DOMContentLoaded', function() {
    // Espera a que cargue la página antes de ejecutar el script
    const form = document.querySelector('.form-container');
    if (!form) {
        return;
    }

    const nombreInput = document.getElementById('nombre');
    const edadInput = document.getElementById('edad');
    const generoSelect = document.getElementById('genero');
    const generoOtroInput = document.getElementById('generoOtro');
    const generoOtroGroup = document.getElementById('generoOtroGroup');
    const talentoSelect = document.getElementById('talento');
    const escuelaInput = document.getElementById('escuela');
    const acudienteInput = document.getElementById('acudiente');
    const emailInput = document.getElementById('email');
    const telefonoInput = document.getElementById('telefono');

    form.noValidate = true;

    // Buscar o crear el span donde se mostrará el mensaje de error
    function getErrorMessageElement(input) {
        let messageElement = input.nextElementSibling;
        if (!messageElement || !messageElement.classList.contains('error-message')) {
            messageElement = document.createElement('span');
            messageElement.className = 'error-message';
            input.insertAdjacentElement('afterend', messageElement);
        }
        return messageElement;
    }

    // Señalar un campo incorrecto con estilo y texto de ayuda
    function showFieldError(input, message) {
        input.classList.add('input-error');
        const errorElement = getErrorMessageElement(input);
        errorElement.textContent = message;
    }

    // Limpiar el error visual de un campo cuando se corrige
    function clearFieldError(input) {
        input.classList.remove('input-error');
        const next = input.nextElementSibling;
        if (next && next.classList.contains('error-message')) {
            next.textContent = '';
        }
    }

    // Borrar todos los errores antes de volver a validar
    function clearAllErrors() {
        [nombreInput, edadInput, generoSelect, generoOtroInput, talentoSelect, escuelaInput, acudienteInput, emailInput, telefonoInput].forEach(clearFieldError);
    }

    // Reglas de validación para cada campo del formulario
    function validarNombre() {
        const nombre = nombreInput.value.trim();
        return nombre.length >= 2;
    }

    function validarEdad() {
        const edad = parseInt(edadInput.value, 10);
        return !Number.isNaN(edad) && edad >= 1 && edad <= 18;
    }

    function validarTalento() {
        return talentoSelect.value.trim() !== '';
    }

    function validarGenero() {
        return generoSelect.value.trim() !== '';
    }

    function validarGeneroOtro() {
        if (generoSelect.value !== 'otro') {
            return true;
        }

        const generoOtro = generoOtroInput.value.trim();
        return /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]+$/.test(generoOtro) && generoOtro.length >= 2;
    }

    function validarEscuela() {
        const escuela = escuelaInput.value.trim();
        return escuela.length >= 2;
    }

    function validarAcudiente() {
        const acudiente = acudienteInput.value.trim();
        return acudiente.length >= 2;
    }

    function validarEmail() {
        const email = emailInput.value.trim();
        return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
    }

    function validarTelefono() {
        const telefono = telefonoInput.value.trim();
        return /^[0-9\s()+-]{7,20}$/.test(telefono);
    }

    nombreInput.addEventListener('input', function() {
        clearFieldError(nombreInput);
    });

    // Limpiar el error cuando el usuario escribe nuevamente
    edadInput.addEventListener('input', function() {
        clearFieldError(edadInput);
    });

    generoSelect.addEventListener('input', function() {
        clearFieldError(generoSelect);
        if (generoSelect.value === 'otro') {
            generoOtroGroup.style.display = 'block';
            generoOtroInput.setAttribute('required', 'required');
        } else {
            generoOtroGroup.style.display = 'none';
            clearFieldError(generoOtroInput);
            generoOtroInput.value = '';
            generoOtroInput.removeAttribute('required');
        }
    });

    // Mostrar campo adicional solo si se elige género 'otro'
    generoOtroInput.addEventListener('input', function() {
        clearFieldError(generoOtroInput);
    });

    generoOtroInput.addEventListener('input', function() {
        clearFieldError(generoOtroInput);
    });

    talentoSelect.addEventListener('input', function() {
        clearFieldError(talentoSelect);
    });

    escuelaInput.addEventListener('input', function() {
        clearFieldError(escuelaInput);
    });

    acudienteInput.addEventListener('input', function() {
        clearFieldError(acudienteInput);
    });

    emailInput.addEventListener('input', function() {
        clearFieldError(emailInput);
    });

    telefonoInput.addEventListener('input', function() {
        clearFieldError(telefonoInput);
    });

    // Validación final al enviar el formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        clearAllErrors();

        if (!validarNombre()) {
            showFieldError(nombreInput, 'Rellene sus datos');
            nombreInput.focus();
            return;
        }

        if (!validarEdad()) {
            showFieldError(edadInput, 'Debe ingresar datos para continuar');
            edadInput.focus();
            return;
        }

        if (!validarGenero()) {
            showFieldError(generoSelect, 'Debe seleccionar un género');
            generoSelect.focus();
            return;
        }

        if (generoSelect.value === 'otro' && !validarGeneroOtro()) {
            showFieldError(generoOtroInput, 'Debe ingresar letras para continuar');
            generoOtroInput.focus();
            return;
        }

        if (!validarTalento()) {
            showFieldError(talentoSelect, 'Debe seleccionar un talento');
            talentoSelect.focus();
            return;
        }

        if (!validarEscuela()) {
            showFieldError(escuelaInput, 'Debe ingresar datos para continuar');
            escuelaInput.focus();
            return;
        }

        if (!validarAcudiente()) {
            showFieldError(acudienteInput, 'Debe ingresar datos para continuar');
            acudienteInput.focus();
            return;
        }

        if (!validarEmail()) {
            showFieldError(emailInput, 'Debe ingresar datos para continuar');
            emailInput.focus();
            return;
        }

        if (!validarTelefono()) {
            showFieldError(telefonoInput, 'Debe ingresar datos para continuar');
            telefonoInput.focus();
            return;
        }

        alert('Formulario válido. Puede continuar.');

       
    });
});

document.addEventListener('DOMContentLoaded', () => {
  
    const form = document.getElementById('talentoForm');
    const cajaMensaje = document.getElementById('mensajeMensajes');

    
    form.addEventListener('submit', function(event) {
      
        event.preventDefault();

        // 2. Mostramos un mensaje de estado "Enviando..."
        cajaMensaje.style.display = 'block';
        cajaMensaje.style.backgroundColor = '#e2e3e5'; // Gris claro
        cajaMensaje.style.color = '#383d41';
        cajaMensaje.innerText = 'Procesando tu información...';

        // 3. Recopilamos todos los datos (incluyendo la foto/video) automáticamente
        const formData = new FormData(form);

        // 4. Usamos Fetch API para hacer la petición AJAX
    
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: formData 
        })
        .then(respuesta => {
            
            if (respuesta.ok) {
                return respuesta.json();
            }
            throw new Error('Error en la comunicación con el servidor');
        })
        .then(datosRecibidos => {
            // 5. ¡Éxito! El servidor respondió bien
            console.log('Datos procesados por el servidor:', datosRecibidos);
            
            // Actualizamos la interfaz para mostrar el éxito
            cajaMensaje.style.backgroundColor = '#d4edda'; // Verde claro
            cajaMensaje.style.color = '#155724';
            cajaMensaje.innerText = '¡Éxito! Tu talento ha sido registrado correctamente.';
            
            // Opcional: Limpiar los campos del formulario tras el envío
            form.reset();

            // Ocultar el mensaje después de unos segundos (opcional)
            setTimeout(() => {
                cajaMensaje.style.display = 'none';
            }, 5000);
        })
        .catch(error => {
            // 6. Manejo de errores (por si falla el internet o el servidor)
            console.error('Hubo un fallo:', error);
            
            cajaMensaje.style.backgroundColor = '#f8d7da'; // Rojo claro
            cajaMensaje.style.color = '#721c24';
            cajaMensaje.innerText = 'Ups... Hubo un problema al enviar los datos. Inténtalo de nuevo.';
        });
    });


});