document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form-container');
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

    function showFieldError(input, message) {
        input.setCustomValidity(message);
        input.reportValidity();
    }

    function clearFieldError(input) {
        input.setCustomValidity('');
    }

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

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (!validarNombre()) {
            showFieldError(nombreInput, 'Debe ingresar datos para continuar');
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

        // Si quieres enviar el formulario a un servidor, descomenta la siguiente línea:
        // form.submit();
    });
});