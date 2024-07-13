


// Funciones para Docente_L8

console.log("script.js cargado correctamente");

function abrir_Docente_L8() {
    $("#box_interno_Docente_L8").slideDown();
    $("#estado_Docente_L8").slideDown();
}

function cerrar_Docente_L8() {
    $("#box_interno_Docente_L8").slideUp();
    $("#report_Docente_L8").slideUp();
    $("#estado_Docente_L8").slideDown();  // Mostrar el diálogo de estado nuevamente
}

let problemaSeleccionado_Docente_L8 = ''; // Variable para almacenar el problema seleccionado

function problemaselecionado_Docente_L8(problema) {
    console.log("Problema seleccionado:", problema); // Debugging line
    problemaSeleccionado_Docente_L8 = problema; // Guarda el problema seleccionado
}

function colorproblema_Docente_L8(color) {
    console.log("Color problema:", color); // Debugging line
    const div = document.getElementById('box_externo_Docente_L8');
    switch (color) {
        case 'Faltan programas':
            div.style.backgroundImage = 'linear-gradient(white 90%, blue)';
            break;
        case 'Necesita soporte':
            div.style.backgroundImage = 'linear-gradient(white 90%, yellow)';
            break;
        case 'Falta un componente':
            div.style.backgroundImage = 'linear-gradient(white 90%, orange)';
            break;
        case 'En mal estado':
            div.style.backgroundImage = 'linear-gradient(white 90%, red)';
            break;
        default:
            div.style.backgroundImage = 'linear-gradient(white 90%, green)';
    }

    $('.button_ventana').click(function() {
        $('.button_ventana').removeClass('seleccionado');
        $(this).addClass('seleccionado');
    });
}

function enviar_problem_Docente_L8() {
    const divName = "Docente_L8"; // Nombre del div correspondiente
    const mensaje = $('#problemaForm_Docente_L8 [name="mensaje"]').val();

    // Validación simple para asegurarse de que se haya seleccionado un problema
    if (!problemaSeleccionado_Docente_L8) {
        alert("Por favor seleccione un problema antes de guardar.");
        return;
    }

    // Envío del formulario via AJAX
    $.ajax({
        url: '../php_envio_correos/enviar_correo.php',
        method: 'POST',
        data: {
            problema: problemaSeleccionado_Docente_L8,
            mensaje: mensaje,
            div_name: divName
        },
        success: function(response) {
            const res = JSON.parse(response);
            if (res.status === 'success') {
                alert("Tu mensaje ha sido enviado correctamente");
                $("#box_interno_Docente_L8").slideUp();
                document.getElementById("report_Docente_L8").style.display = "none";
                document.getElementById("estado_Docente_L8").style.display = "block";
            } else {
                alert(`Error al enviar el mensaje: ${res.message}`);
            }
        },
        error: function(error) {
            alert("Error al enviar el mensaje");
            console.error(error);
        }
    });
}

function report_problem_Docente_L8() {
    document.getElementById("report_Docente_L8").style.display = "block";
    var estado_Docente_L8 = document.getElementById("estado_Docente_L8");
    var report_Docente_L8 = document.getElementById("report_Docente_L8");

    estado_Docente_L8.style.display = "none";
    report_Docente_L8.style.display = "block";
    alert("Reporta el problema que tienes con el equipo");
}



// Funciones para L8_A01

function abrir_L8_A01() {
    $("#box_interno_L8_A01").slideDown();
    $("#estado_L8_A01").slideDown();
}

function cerrar_L8_A01() {
    $("#box_interno_L8_A01").slideUp();
    $("#report_L8_A01").slideUp();
    $("#estado_L8_A01").slideDown();  // Mostrar el diálogo de estado nuevamente
}


let problemaSeleccionado_L8_A01 = ''; // Variable para almacenar el problema seleccionado

function problemaselecionado_L8_A01(problema) {
    problemaSeleccionado_L8_A01 = problema; // Guarda el problema seleccionado
}

function colorproblema_L8_A01(color) {
    const div = document.getElementById('box_externo_L8_A01');
    switch (color) {
        case 'Faltan programas':
            div.style.backgroundImage = 'linear-gradient(white 90%, blue)';
            break;
        case 'Necesita soporte':
            div.style.backgroundImage = 'linear-gradient(white 90%, yellow)';
            break;
        case 'Falta un componente':
            div.style.backgroundImage = 'linear-gradient(white 90%, orange)';
            break;
        case 'En mal estado':
            div.style.backgroundImage = 'linear-gradient(white 90%, red)';
            break;
        default:
            div.style.backgroundImage = 'linear-gradient(white 90%, green)';
    }

    $('.button_ventana').click(function() {
        $('.button_ventana').removeClass('seleccionado');
        $(this).addClass('seleccionado');
    });
}

function enviar_problem_L8_A01() {
    const divName = "L8_A01"; // Nombre del div correspondiente
    const mensaje = $('#problemaForm_L8_A01 [name="mensaje"]').val();

    // Validación simple para asegurarse de que se haya seleccionado un problema
    if (!problemaSeleccionado_L8_A01) {
        alert("Por favor seleccione un problema antes de guardar.");
        return;
    }

    // Envío del formulario via AJAX
    $.ajax({
        url: 'enviar_correo.php',
        method: 'POST',
        data: {
            problema: problemaSeleccionado_L8_A01,
            mensaje: mensaje,
            div_name: divName
        },
        success: function(response) {
            const res = JSON.parse(response);
            if (res.status === 'success') {
                alert("Tu mensaje ha sido enviado correctamente");
                $("#box_interno_L8_A01").slideUp();
                document.getElementById("report_L8_A01").style.display = "none";
                document.getElementById("estado_L8_A01").style.display = "block";
            } else {
                alert(`Error al enviar el mensaje: ${res.message}`);
            }
        },
        error: function(error) {
            alert("Error al enviar el mensaje");
            console.error(error);
        }
    });
}

function report_problem_L8_A01() {
    document.getElementById("report_L8_A01").style.display = "block";
    var estado_L8_A01 = document.getElementById("estado_L8_A01");
    var report_L8_A01 = document.getElementById("report_L8_A01");

    estado_L8_A01.style.display = "none";
    report_L8_A01.style.display = "block";
    alert("Reporta el problema que tienes con el equipo");
}

// Funciones para L8_A02

function abrir_L8_A02() {
    $("#box_interno_L8_A02").slideDown();
    $("#estado_L8_A02").slideDown();
}

function cerrar_L8_A02() {
    $("#box_interno_L8_A02").slideUp();
    $("#report_L8_A02").slideUp();
    $("#estado_L8_A02").slideDown();  // Mostrar el diálogo de estado nuevamente
}

let problemaSeleccionado_L8_A02 = ''; // Variable para almacenar el problema seleccionado

function problemaselecionado_L8_A02(problema) {
    problemaSeleccionado_L8_A02 = problema; // Guarda el problema seleccionado
}

function colorproblema_L8_A02(color) {
    const div = document.getElementById('box_externo_L8_A02');
    switch (color) {
        case 'Faltan programas':
            div.style.backgroundImage = 'linear-gradient(white 90%, blue)';
            break;
        case 'Necesita soporte':
            div.style.backgroundImage = 'linear-gradient(white 90%, yellow)';
            break;
        case 'Falta un componente':
            div.style.backgroundImage = 'linear-gradient(white 90%, orange)';
            break;
        case 'En mal estado':
            div.style.backgroundImage = 'linear-gradient(white 90%, red)';
            break;
        default:
            div.style.backgroundImage = 'linear-gradient(white 90%, green)';
    }

    $('.button_ventana').click(function() {
        $('.button_ventana').removeClass('seleccionado');
        $(this).addClass('seleccionado');
    });
}

function enviar_problem_L8_A02() {
    const divName = "L8_A02"; // Nombre del div correspondiente
    const mensaje = $('#problemaForm_L8_A02 [name="mensaje"]').val();

    // Validación simple para asegurarse de que se haya seleccionado un problema
    if (!problemaSeleccionado_L8_A02) {
        alert("Por favor seleccione un problema antes de guardar.");
        return;
    }

    // Envío del formulario via AJAX
    $.ajax({
        url: 'enviar_correo.php',
        method: 'POST',
        data: {
            problema: problemaSeleccionado_L8_A02,
            mensaje: mensaje,
            div_name: divName
        },
        success: function(response) {
            const res = JSON.parse(response);
            if (res.status === 'success') {
                alert("Tu mensaje ha sido enviado correctamente");
                $("#box_interno_L8_A02").slideUp();
                document.getElementById("report_L8_A02").style.display = "none";
                document.getElementById("estado_L8_A02").style.display = "block";
            } else {
                alert(`Error al enviar el mensaje: ${res.message}`);
            }
        },
        error: function(error) {
            alert("Error al enviar el mensaje");
            console.error(error);
        }
    });
}

function report_problem_L8_A02() {
    document.getElementById("report_L8_A02").style.display = "block";
    var estado_L8_A02 = document.getElementById("estado_L8_A02");
    var report_L8_A02 = document.getElementById("report_L8_A02");

    estado_L8_A02.style.display = "none";
    report_L8_A02.style.display = "block";
    alert("Reporta el problema que tienes con el equipo");
}

// Funciones para L8_A03

function abrir_L8_A03() {
    $("#box_interno_L8_A03").slideDown();
    $("#estado_L8_A03").slideDown();
}

function cerrar_L8_A03() {
    $("#box_interno_L8_A03").slideUp();
    $("#report_L8_A03").slideUp();
    $("#estado_L8_A03").slideDown();  // Mostrar el diálogo de estado nuevamente
}

let problemaSeleccionado_L8_A03 = ''; // Variable para almacenar el problema seleccionado

function problemaselecionado_L8_A03(problema) {
    problemaSeleccionado_L8_A03 = problema; // Guarda el problema seleccionado
}

function colorproblema_L8_A03(color) {
    const div = document.getElementById('box_externo_L8_A03');
    switch (color) {
        case 'Faltan programas':
            div.style.backgroundImage = 'linear-gradient(white 90%, blue)';
            break;
        case 'Necesita soporte':
            div.style.backgroundImage = 'linear-gradient(white 90%, yellow)';
            break;
        case 'Falta un componente':
            div.style.backgroundImage = 'linear-gradient(white 90%, orange)';
            break;
        case 'En mal estado':
            div.style.backgroundImage = 'linear-gradient(white 90%, red)';
            break;
        default:
            div.style.backgroundImage = 'linear-gradient(white 90%, green)';
    }

    $('.button_ventana').click(function() {
        $('.button_ventana').removeClass('seleccionado');
        $(this).addClass('seleccionado');
    });
}

function enviar_problem_L8_A03() {
    const divName = "L8_A03"; // Nombre del div correspondiente
    const mensaje = $('#problemaForm_L8_A03 [name="mensaje"]').val();

    // Validación simple para asegurarse de que se haya seleccionado un problema
    if (!problemaSeleccionado_L8_A03) {
        alert("Por favor seleccione un problema antes de guardar.");
        return;
    }

    // Envío del formulario via AJAX
    $.ajax({
        url: 'enviar_correo.php',
        method: 'POST',
        data: {
            problema: problemaSeleccionado_L8_A03,
            mensaje: mensaje,
            div_name: divName
        },
        success: function(response) {
            const res = JSON.parse(response);
            if (res.status === 'success') {
                alert("Tu mensaje ha sido enviado correctamente");
                $("#box_interno_L8_A03").slideUp();
                document.getElementById("report_L8_A03").style.display = "none";
                document.getElementById("estado_L8_A03").style.display = "block";
            } else {
                alert(`Error al enviar el mensaje: ${res.message}`);
            }
        },
        error: function(error) {
            alert("Error al enviar el mensaje");
            console.error(error);
        }
    });
}

function report_problem_L8_A03() {
    document.getElementById("report_L8_A03").style.display = "block";
    var estado_L8_A03 = document.getElementById("estado_L8_A03");
    var report_L8_A03 = document.getElementById("report_L8_A03");

    estado_L8_A03.style.display = "none";
    report_L8_A03.style.display = "block";
    alert("Reporta el problema que tienes con el equipo");
}


// Funciones para L8_B01

function abrir_L8_B01() {
    $("#box_interno_L8_B01").slideDown();
    $("#estado_L8_B01").slideDown();
}

function cerrar_L8_B01() {
    $("#box_interno_L8_B01").slideUp();
    $("#report_L8_B01").slideUp();
    $("#estado_L8_B01").slideDown();  // Mostrar el diálogo de estado nuevamente
}

let problemaSeleccionado_L8_B01 = ''; // Variable para almacenar el problema seleccionado

function problemaselecionado_L8_B01(problema) {
    problemaSeleccionado_L8_B01 = problema; // Guarda el problema seleccionado
}

function colorproblema_L8_B01(color) {
    const div = document.getElementById('box_externo_L8_B01');
    switch (color) {
        case 'Faltan programas':
            div.style.backgroundImage = 'linear-gradient(white 90%, blue)';
            break;
        case 'Necesita soporte':
            div.style.backgroundImage = 'linear-gradient(white 90%, yellow)';
            break;
        case 'Falta un componente':
            div.style.backgroundImage = 'linear-gradient(white 90%, orange)';
            break;
        case 'En mal estado':
            div.style.backgroundImage = 'linear-gradient(white 90%, red)';
            break;
        default:
            div.style.backgroundImage = 'linear-gradient(white 90%, green)';
    }

    $('.button_ventana').click(function() {
        $('.button_ventana').removeClass('seleccionado');
        $(this).addClass('seleccionado');
    });
}

function enviar_problem_L8_B01() {
    const divName = "L8_B01"; // Nombre del div correspondiente
    const mensaje = $('#problemaForm_L8_B01 [name="mensaje"]').val();

    // Validación simple para asegurarse de que se haya seleccionado un problema
    if (!problemaSeleccionado_L8_B01) {
        alert("Por favor seleccione un problema antes de guardar.");
        return;
    }

    // Envío del formulario via AJAX
    $.ajax({
        url: 'enviar_correo.php',
        method: 'POST',
        data: {
            problema: problemaSeleccionado_L8_B01,
            mensaje: mensaje,
            div_name: divName
        },
        success: function(response) {
            const res = JSON.parse(response);
            if (res.status === 'success') {
                alert("Tu mensaje ha sido enviado correctamente");
                $("#box_interno_L8_B01").slideUp();
                document.getElementById("report_L8_B01").style.display = "none";
                document.getElementById("estado_L8_B01").style.display = "block";
            } else {
                alert(`Error al enviar el mensaje: ${res.message}`);
            }
        },
        error: function(error) {
            alert("Error al enviar el mensaje");
            console.error(error);
        }
    });
}

function report_problem_L8_B01() {
    document.getElementById("report_L8_B01").style.display = "block";
    var estado_L8_B01 = document.getElementById("estado_L8_B01");
    var report_L8_B01 = document.getElementById("report_L8_B01");

    estado_L8_B01.style.display = "none";
    report_L8_B01.style.display = "block";
    alert("Reporta el problema que tienes con el equipo");
}

// Funciones para L8_B02

function abrir_L8_B02() {
    $("#box_interno_L8_B02").slideDown();
    $("#estado_L8_B02").slideDown();
}

function cerrar_L8_B02() {
    $("#box_interno_L8_B02").slideUp();
    $("#report_L8_B02").slideUp();
    $("#estado_L8_B02").slideDown();  // Mostrar el diálogo de estado nuevamente
}

let problemaSeleccionado_L8_B02 = ''; // Variable para almacenar el problema seleccionado

function problemaselecionado_L8_B02(problema) {
    problemaSeleccionado_L8_B02 = problema; // Guarda el problema seleccionado
}

function colorproblema_L8_B02(color) {
    const div = document.getElementById('box_externo_L8_B02');
    switch (color) {
        case 'Faltan programas':
            div.style.backgroundImage = 'linear-gradient(white 90%, blue)';
            break;
        case 'Necesita soporte':
            div.style.backgroundImage = 'linear-gradient(white 90%, yellow)';
            break;
        case 'Falta un componente':
            div.style.backgroundImage = 'linear-gradient(white 90%, orange)';
            break;
        case 'En mal estado':
            div.style.backgroundImage = 'linear-gradient(white 90%, red)';
            break;
        default:
            div.style.backgroundImage = 'linear-gradient(white 90%, green)';
    }

    $('.button_ventana').click(function() {
        $('.button_ventana').removeClass('seleccionado');
        $(this).addClass('seleccionado');
    });
}

function enviar_problem_L8_B02() {
    const divName = "L8_B02"; // Nombre del div correspondiente
    const mensaje = $('#problemaForm_L8_B02 [name="mensaje"]').val();

    // Validación simple para asegurarse de que se haya seleccionado un problema
    if (!problemaSeleccionado_L8_B02) {
        alert("Por favor seleccione un problema antes de guardar.");
        return;
    }

    // Envío del formulario via AJAX
    $.ajax({
        url: 'enviar_correo.php',
        method: 'POST',
        data: {
            problema: problemaSeleccionado_L8_B02,
            mensaje: mensaje,
            div_name: divName
        },
        success: function(response) {
            const res = JSON.parse(response);
            if (res.status === 'success') {
                alert("Tu mensaje ha sido enviado correctamente");
                $("#box_interno_L8_B02").slideUp();
                document.getElementById("report_L8_B02").style.display = "none";
                document.getElementById("estado_L8_B02").style.display = "block";
            } else {
                alert(`Error al enviar el mensaje: ${res.message}`);
            }
        },
        error: function(error) {
            alert("Error al enviar el mensaje");
            console.error(error);
        }
    });
}

function report_problem_L8_B02() {
    document.getElementById("report_L8_B02").style.display = "block";
    var estado_L8_B02 = document.getElementById("estado_L8_B02");
    var report_L8_B02 = document.getElementById("report_L8_B02");

    estado_L8_B02.style.display = "none";
    report_L8_B02.style.display = "block";
    alert("Reporta el problema que tienes con el equipo");
}

// Funciones para L8_B03

function abrir_L8_B03() {
    $("#box_interno_L8_B03").slideDown();
    $("#estado_L8_B03").slideDown();
}

function cerrar_L8_B03() {
    $("#box_interno_L8_B03").slideUp();
    $("#report_L8_B03").slideUp();
    $("#estado_L8_B03").slideDown();  // Mostrar el diálogo de estado nuevamente
}

let problemaSeleccionado_L8_B03 = ''; // Variable para almacenar el problema seleccionado

function problemaselecionado_L8_B03(problema) {
    problemaSeleccionado_L8_B03 = problema; // Guarda el problema seleccionado
}

function colorproblema_L8_B03(color) {
    const div = document.getElementById('box_externo_L8_B03');
    switch (color) {
        case 'Faltan programas':
            div.style.backgroundImage = 'linear-gradient(white 90%, blue)';
            break;
        case 'Necesita soporte':
            div.style.backgroundImage = 'linear-gradient(white 90%, yellow)';
            break;
        case 'Falta un componente':
            div.style.backgroundImage = 'linear-gradient(white 90%, orange)';
            break;
        case 'En mal estado':
            div.style.backgroundImage = 'linear-gradient(white 90%, red)';
            break;
        default:
            div.style.backgroundImage = 'linear-gradient(white 90%, green)';
    }

    $('.button_ventana').click(function() {
        $('.button_ventana').removeClass('seleccionado');
        $(this).addClass('seleccionado');
    });
}

function enviar_problem_L8_B03() {
    const divName = "L8_B03"; // Nombre del div correspondiente
    const mensaje = $('#problemaForm_L8_B03 [name="mensaje"]').val();

    // Validación simple para asegurarse de que se haya seleccionado un problema
    if (!problemaSeleccionado_L8_B03) {
        alert("Por favor seleccione un problema antes de guardar.");
        return;
    }

    // Envío del formulario via AJAX
    $.ajax({
        url: 'enviar_correo.php',
        method: 'POST',
        data: {
            problema: problemaSeleccionado_L8_B03,
            mensaje: mensaje,
            div_name: divName
        },
        success: function(response) {
            const res = JSON.parse(response);
            if (res.status === 'success') {
                alert("Tu mensaje ha sido enviado correctamente");
                $("#box_interno_L8_B03").slideUp();
                document.getElementById("report_L8_B03").style.display = "none";
                document.getElementById("estado_L8_B03").style.display = "block";
            } else {
                alert(`Error al enviar el mensaje: ${res.message}`);
            }
        },
        error: function(error) {
            alert("Error al enviar el mensaje");
            console.error(error);
        }
    });
}

function report_problem_L8_B03() {
    document.getElementById("report_L8_B03").style.display = "block";
    var estado_L8_B03 = document.getElementById("estado_L8_B03");
    var report_L8_B03 = document.getElementById("report_L8_B03");

    estado_L8_B03.style.display = "none";
    report_L8_B03.style.display = "block";
    alert("Reporta el problema que tienes con el equipo");
}


//Funciones para L8_C01

function abrir_L8_C01() {
    $("#box_interno_L8_C01").slideDown();
    $("#estado_L8_C01").slideDown();
}

function cerrar_L8_C01() {
    $("#box_interno_L8_C01").slideUp();
    $("#report_L8_C01").slideUp();
    $("#estado_L8_C01").slideDown();  // Mostrar el diálogo de estado nuevamente
}

let problemaSeleccionado_L8_C01 = ''; // Variable para almacenar el problema seleccionado

function problemaselecionado_L8_C01(problema) {
    problemaSeleccionado_L8_C01 = problema; // Guarda el problema seleccionado
}

function colorproblema_L8_C01(color) {
    const div = document.getElementById('box_externo_L8_C01');
    switch (color) {
        case 'Faltan programas':
            div.style.backgroundImage = 'linear-gradient(white 90%, blue)';
            break;
        case 'Necesita soporte':
            div.style.backgroundImage = 'linear-gradient(white 90%, yellow)';
            break;
        case 'Falta un componente':
            div.style.backgroundImage = 'linear-gradient(white 90%, orange)';
            break;
        case 'En mal estado':
            div.style.backgroundImage = 'linear-gradient(white 90%, red)';
            break;
        default:
            div.style.backgroundImage = 'linear-gradient(white 90%, green)';
    }

    $('.button_ventana').click(function() {
        $('.button_ventana').removeClass('seleccionado');
        $(this).addClass('seleccionado');
    });
}

function enviar_problem_L8_C01() {
    const divName = "L8_C01"; // Nombre del div correspondiente
    const mensaje = $('#problemaForm_L8_C01 [name="mensaje"]').val();

    // Validación simple para asegurarse de que se haya seleccionado un problema
    if (!problemaSeleccionado_L8_C01) {
        alert("Por favor seleccione un problema antes de guardar.");
        return;
    }

    // Envío del formulario via AJAX
    $.ajax({
        url: 'enviar_correo.php',
        method: 'POST',
        data: {
            problema: problemaSeleccionado_L8_C01,
            mensaje: mensaje,
            div_name: divName
        },
        success: function(response) {
            const res = JSON.parse(response);
            if (res.status === 'success') {
                alert("Tu mensaje ha sido enviado correctamente");
                $("#box_interno_L8_C01").slideUp();
                document.getElementById("report_L8_C01").style.display = "none";
                document.getElementById("estado_L8_C01").style.display = "block";
            } else {
                alert(`Error al enviar el mensaje: ${res.message}`);
            }
        },
        error: function(error) {
            alert("Error al enviar el mensaje");
            console.error(error);
        }
    });
}

function report_problem_L8_C01() {
    document.getElementById("report_L8_C01").style.display = "block";
    var estado_L8_C01 = document.getElementById("estado_L8_C01");
    var report_L8_C01 = document.getElementById("report_L8_C01");

    estado_L8_C01.style.display = "none";
    report_L8_C01.style.display = "block";
    alert("Reporta el problema que tienes con el equipo");
}


//Funciones para L8_C02

function abrir_L8_C02() {
    $("#box_interno_L8_C02").slideDown();
    $("#estado_L8_C02").slideDown();
}

function cerrar_L8_C02() {
    $("#box_interno_L8_C02").slideUp();
    $("#report_L8_C02").slideUp();
    $("#estado_L8_C02").slideDown();  // Mostrar el diálogo de estado nuevamente
}

let problemaSeleccionado_L8_C02 = ''; // Variable para almacenar el problema seleccionado

function problemaselecionado_L8_C02(problema) {
    problemaSeleccionado_L8_C02 = problema; // Guarda el problema seleccionado
}

function colorproblema_L8_C02(color) {
    const div = document.getElementById('box_externo_L8_C02');
    switch (color) {
        case 'Faltan programas':
            div.style.backgroundImage = 'linear-gradient(white 90%, blue)';
            break;
        case 'Necesita soporte':
            div.style.backgroundImage = 'linear-gradient(white 90%, yellow)';
            break;
        case 'Falta un componente':
            div.style.backgroundImage = 'linear-gradient(white 90%, orange)';
            break;
        case 'En mal estado':
            div.style.backgroundImage = 'linear-gradient(white 90%, red)';
            break;
        default:
            div.style.backgroundImage = 'linear-gradient(white 90%, green)';
    }

    $('.button_ventana').click(function() {
        $('.button_ventana').removeClass('seleccionado');
        $(this).addClass('seleccionado');
    });
}

function enviar_problem_L8_C02() {
    const divName = "L8_C02"; // Nombre del div correspondiente
    const mensaje = $('#problemaForm_L8_C02 [name="mensaje"]').val();

    // Validación simple para asegurarse de que se haya seleccionado un problema
    if (!problemaSeleccionado_L8_C02) {
        alert("Por favor seleccione un problema antes de guardar.");
        return;
    }

    // Envío del formulario via AJAX
    $.ajax({
        url: 'enviar_correo.php',
        method: 'POST',
        data: {
            problema: problemaSeleccionado_L8_C02,
            mensaje: mensaje,
            div_name: divName
        },
        success: function(response) {
            const res = JSON.parse(response);
            if (res.status === 'success') {
                alert("Tu mensaje ha sido enviado correctamente");
                $("#box_interno_L8_C02").slideUp();
                document.getElementById("report_L8_C02").style.display = "none";
                document.getElementById("estado_L8_C02").style.display = "block";
            } else {
                alert(`Error al enviar el mensaje: ${res.message}`);
            }
        },
        error: function(error) {
            alert("Error al enviar el mensaje");
            console.error(error);
        }
    });
}

function report_problem_L8_C02() {
    document.getElementById("report_L8_C02").style.display = "block";
    var estado_L8_C02 = document.getElementById("estado_L8_C02");
    var report_L8_C02 = document.getElementById("report_L8_C02");

    estado_L8_C02.style.display = "none";
    report_L8_C02.style.display = "block";
    alert("Reporta el problema que tienes con el equipo");
}


//Funciones para L8_C03

function abrir_L8_C03() {
    $("#box_interno_L8_C03").slideDown();
    $("#estado_L8_C03").slideDown();
}

function cerrar_L8_C03() {
    $("#box_interno_L8_C03").slideUp();
    $("#report_L8_C03").slideUp();
    $("#estado_L8_C03").slideDown();  // Mostrar el diálogo de estado nuevamente
}

let problemaSeleccionado_L8_C03 = ''; // Variable para almacenar el problema seleccionado

function problemaselecionado_L8_C03(problema) {
    problemaSeleccionado_L8_C03 = problema; // Guarda el problema seleccionado
}

function colorproblema_L8_C03(color) {
    const div = document.getElementById('box_externo_L8_C03');
    switch (color) {
        case 'Faltan programas':
            div.style.backgroundImage = 'linear-gradient(white 90%, blue)';
            break;
        case 'Necesita soporte':
            div.style.backgroundImage = 'linear-gradient(white 90%, yellow)';
            break;
        case 'Falta un componente':
            div.style.backgroundImage = 'linear-gradient(white 90%, orange)';
            break;
        case 'En mal estado':
            div.style.backgroundImage = 'linear-gradient(white 90%, red)';
            break;
        default:
            div.style.backgroundImage = 'linear-gradient(white 90%, green)';
    }

    $('.button_ventana').click(function() {
        $('.button_ventana').removeClass('seleccionado');
        $(this).addClass('seleccionado');
    });
}

function enviar_problem_L8_C03() {
    const divName = "L8_C03"; // Nombre del div correspondiente
    const mensaje = $('#problemaForm_L8_C03 [name="mensaje"]').val();

    // Validación simple para asegurarse de que se haya seleccionado un problema
    if (!problemaSeleccionado_L8_C03) {
        alert("Por favor seleccione un problema antes de guardar.");
        return;
    }

    // Envío del formulario via AJAX
    $.ajax({
        url: 'enviar_correo.php',
        method: 'POST',
        data: {
            problema: problemaSeleccionado_L8_C03,
            mensaje: mensaje,
            div_name: divName
        },
        success: function(response) {
            const res = JSON.parse(response);
            if (res.status === 'success') {
                alert("Tu mensaje ha sido enviado correctamente");
                $("#box_interno_L8_C03").slideUp();
                document.getElementById("report_L8_C03").style.display = "none";
                document.getElementById("estado_L8_C03").style.display = "block";
            } else {
                alert(`Error al enviar el mensaje: ${res.message}`);
            }
        },
        error: function(error) {
            alert("Error al enviar el mensaje");
            console.error(error);
        }
    });
}

function report_problem_L8_C03() {
    document.getElementById("report_L8_C03").style.display = "block";
    var estado_L8_C03 = document.getElementById("estado_L8_C03");
    var report_L8_C03 = document.getElementById("report_L8_C03");

    estado_L8_C03.style.display = "none";
    report_L8_C03.style.display = "block";
    alert("Reporta el problema que tienes con el equipo");
}


//Funciones para L8_D01

function abrir_L8_D01() {
    $("#box_interno_L8_D01").slideDown();
    $("#estado_L8_D01").slideDown();
}

function cerrar_L8_D01() {
    $("#box_interno_L8_D01").slideUp();
    $("#report_L8_D01").slideUp();
    $("#estado_L8_D01").slideDown();  // Mostrar el diálogo de estado nuevamente
}

let problemaSeleccionado_L8_D01 = ''; // Variable para almacenar el problema seleccionado

function problemaselecionado_L8_D01(problema) {
    problemaSeleccionado_L8_D01 = problema; // Guarda el problema seleccionado
}

function colorproblema_L8_D01(color) {
    const div = document.getElementById('box_externo_L8_D01');
    switch (color) {
        case 'Faltan programas':
            div.style.backgroundImage = 'linear-gradient(white 90%, blue)';
            break;
        case 'Necesita soporte':
            div.style.backgroundImage = 'linear-gradient(white 90%, yellow)';
            break;
        case 'Falta un componente':
            div.style.backgroundImage = 'linear-gradient(white 90%, orange)';
            break;
        case 'En mal estado':
            div.style.backgroundImage = 'linear-gradient(white 90%, red)';
            break;
        default:
            div.style.backgroundImage = 'linear-gradient(white 90%, green)';
    }

    $('.button_ventana').click(function() {
        $('.button_ventana').removeClass('seleccionado');
        $(this).addClass('seleccionado');
    });
}

function enviar_problem_L8_D01() {
    const divName = "L8_D01"; // Nombre del div correspondiente
    const mensaje = $('#problemaForm_L8_D01 [name="mensaje"]').val();

    // Validación simple para asegurarse de que se haya seleccionado un problema
    if (!problemaSeleccionado_L8_D01) {
        alert("Por favor seleccione un problema antes de guardar.");
        return;
    }

    // Envío del formulario via AJAX
    $.ajax({
        url: 'enviar_correo.php',
        method: 'POST',
        data: {
            problema: problemaSeleccionado_L8_D01,
            mensaje: mensaje,
            div_name: divName
        },
        success: function(response) {
            const res = JSON.parse(response);
            if (res.status === 'success') {
                alert("Tu mensaje ha sido enviado correctamente");
                $("#box_interno_L8_D01").slideUp();
                document.getElementById("report_L8_D01").style.display = "none";
                document.getElementById("estado_L8_D01").style.display = "block";
            } else {
                alert(`Error al enviar el mensaje: ${res.message}`);
            }
        },
        error: function(error) {
            alert("Error al enviar el mensaje");
            console.error(error);
        }
    });
}

function report_problem_L8_D01() {
    document.getElementById("report_L8_D01").style.display = "block";
    var estado_L8_D01 = document.getElementById("estado_L8_D01");
    var report_L8_D01 = document.getElementById("report_L8_D01");

    estado_L8_D01.style.display = "none";
    report_L8_D01.style.display = "block";
    alert("Reporta el problema que tienes con el equipo");
}


//Funciones para L8_D02

function abrir_L8_D02() {
    $("#box_interno_L8_D02").slideDown();
    $("#estado_L8_D02").slideDown();
}

function cerrar_L8_D02() {
    $("#box_interno_L8_D02").slideUp();
    $("#report_L8_D02").slideUp();
    $("#estado_L8_D02").slideDown();  // Mostrar el diálogo de estado nuevamente
}

let problemaSeleccionado_L8_D02 = ''; // Variable para almacenar el problema seleccionado

function problemaselecionado_L8_D02(problema) {
    problemaSeleccionado_L8_D02 = problema; // Guarda el problema seleccionado
}

function colorproblema_L8_D02(color) {
    const div = document.getElementById('box_externo_L8_D02');
    switch (color) {
        case 'Faltan programas':
            div.style.backgroundImage = 'linear-gradient(white 90%, blue)';
            break;
        case 'Necesita soporte':
            div.style.backgroundImage = 'linear-gradient(white 90%, yellow)';
            break;
        case 'Falta un componente':
            div.style.backgroundImage = 'linear-gradient(white 90%, orange)';
            break;
        case 'En mal estado':
            div.style.backgroundImage = 'linear-gradient(white 90%, red)';
            break;
        default:
            div.style.backgroundImage = 'linear-gradient(white 90%, green)';
    }

    $('.button_ventana').click(function() {
        $('.button_ventana').removeClass('seleccionado');
        $(this).addClass('seleccionado');
    });
}

function enviar_problem_L8_D02() {
    const divName = "L8_D02"; // Nombre del div correspondiente
    const mensaje = $('#problemaForm_L8_D02 [name="mensaje"]').val();

    // Validación simple para asegurarse de que se haya seleccionado un problema
    if (!problemaSeleccionado_L8_D02) {
        alert("Por favor seleccione un problema antes de guardar.");
        return;
    }

    // Envío del formulario via AJAX
    $.ajax({
        url: 'enviar_correo.php',
        method: 'POST',
        data: {
            problema: problemaSeleccionado_L8_D02,
            mensaje: mensaje,
            div_name: divName
        },
        success: function(response) {
            const res = JSON.parse(response);
            if (res.status === 'success') {
                alert("Tu mensaje ha sido enviado correctamente");
                $("#box_interno_L8_D02").slideUp();
                document.getElementById("report_L8_D02").style.display = "none";
                document.getElementById("estado_L8_D02").style.display = "block";
            } else {
                alert(`Error al enviar el mensaje: ${res.message}`);
            }
        },
        error: function(error) {
            alert("Error al enviar el mensaje");
            console.error(error);
        }
    });
}

function report_problem_L8_D02() {
    document.getElementById("report_L8_D02").style.display = "block";
    var estado_L8_D02 = document.getElementById("estado_L8_D02");
    var report_L8_D02 = document.getElementById("report_L8_D02");

    estado_L8_D02.style.display = "none";
    report_L8_D02.style.display = "block";
    alert("Reporta el problema que tienes con el equipo");
}


//Funciones para L8_D03

function abrir_L8_D03() {
    $("#box_interno_L8_D03").slideDown();
    $("#estado_L8_D03").slideDown();
}

function cerrar_L8_D03() {
    $("#box_interno_L8_D03").slideUp();
    $("#report_L8_D03").slideUp();
    $("#estado_L8_D03").slideDown();  // Mostrar el diálogo de estado nuevamente
}

let problemaSeleccionado_L8_D03 = ''; // Variable para almacenar el problema seleccionado

function problemaselecionado_L8_D03(problema) {
    problemaSeleccionado_L8_D03 = problema; // Guarda el problema seleccionado
}

function colorproblema_L8_D03(color) {
    const div = document.getElementById('box_externo_L8_D03');
    switch (color) {
        case 'Faltan programas':
            div.style.backgroundImage = 'linear-gradient(white 90%, blue)';
            break;
        case 'Necesita soporte':
            div.style.backgroundImage = 'linear-gradient(white 90%, yellow)';
            break;
        case 'Falta un componente':
            div.style.backgroundImage = 'linear-gradient(white 90%, orange)';
            break;
        case 'En mal estado':
            div.style.backgroundImage = 'linear-gradient(white 90%, red)';
            break;
        default:
            div.style.backgroundImage = 'linear-gradient(white 90%, green)';
    }

    $('.button_ventana').click(function() {
        $('.button_ventana').removeClass('seleccionado');
        $(this).addClass('seleccionado');
    });
}

function enviar_problem_L8_D03() {
    const divName = "L8_D03"; // Nombre del div correspondiente
    const mensaje = $('#problemaForm_L8_D03 [name="mensaje"]').val();

    // Validación simple para asegurarse de que se haya seleccionado un problema
    if (!problemaSeleccionado_L8_D03) {
        alert("Por favor seleccione un problema antes de guardar.");
        return;
    }

    // Envío del formulario via AJAX
    $.ajax({
        url: 'enviar_correo.php',
        method: 'POST',
        data: {
            problema: problemaSeleccionado_L8_D03,
            mensaje: mensaje,
            div_name: divName
        },
        success: function(response) {
            const res = JSON.parse(response);
            if (res.status === 'success') {
                alert("Tu mensaje ha sido enviado correctamente");
                $("#box_interno_L8_D03").slideUp();
                document.getElementById("report_L8_D03").style.display = "none";
                document.getElementById("estado_L8_D03").style.display = "block";
            } else {
                alert(`Error al enviar el mensaje: ${res.message}`);
            }
        },
        error: function(error) {
            alert("Error al enviar el mensaje");
            console.error(error);
        }
    });
}

function report_problem_L8_D03() {
    document.getElementById("report_L8_D03").style.display = "block";
    var estado_L8_D03 = document.getElementById("estado_L8_D03");
    var report_L8_D03 = document.getElementById("report_L8_D03");

    estado_L8_D03.style.display = "none";
    report_L8_D03.style.display = "block";
    alert("Reporta el problema que tienes con el equipo");
}


// Funciones para L8_E01

function abrir_L8_E01() {
    $("#box_interno_L8_E01").slideDown();
    $("#estado_L8_E01").slideDown();
}

function cerrar_L8_E01() {
    $("#box_interno_L8_E01").slideUp();
    $("#report_L8_E01").slideUp();
    $("#estado_L8_E01").slideDown();  // Mostrar el diálogo de estado nuevamente
}

let problemaSeleccionado_L8_E01 = ''; // Variable para almacenar el problema seleccionado

function problemaselecionado_L8_E01(problema) {
    problemaSeleccionado_L8_E01 = problema; // Guarda el problema seleccionado
}

function colorproblema_L8_E01(color) {
    const div = document.getElementById('box_externo_L8_E01');
    switch (color) {
        case 'Faltan programas':
            div.style.backgroundImage = 'linear-gradient(white 90%, blue)';
            break;
        case 'Necesita soporte':
            div.style.backgroundImage = 'linear-gradient(white 90%, yellow)';
            break;
        case 'Falta un componente':
            div.style.backgroundImage = 'linear-gradient(white 90%, orange)';
            break;
        case 'En mal estado':
            div.style.backgroundImage = 'linear-gradient(white 90%, red)';
            break;
        default:
            div.style.backgroundImage = 'linear-gradient(white 90%, green)';
    }

    $('.button_ventana').click(function() {
        $('.button_ventana').removeClass('seleccionado');
        $(this).addClass('seleccionado');
    });
}

function enviar_problem_L8_E01() {
    const divName = "L8_E01"; // Nombre del div correspondiente
    const mensaje = $('#problemaForm_L8_E01 [name="mensaje"]').val();

    // Validación simple para asegurarse de que se haya seleccionado un problema
    if (!problemaSeleccionado_L8_E01) {
        alert("Por favor seleccione un problema antes de guardar.");
        return;
    }

    // Envío del formulario via AJAX
    $.ajax({
        url: 'enviar_correo.php',
        method: 'POST',
        data: {
            problema: problemaSeleccionado_L8_E01,
            mensaje: mensaje,
            div_name: divName
        },
        success: function(response) {
            const res = JSON.parse(response);
            if (res.status === 'success') {
                alert("Tu mensaje ha sido enviado correctamente");
                $("#box_interno_L8_E01").slideUp();
                document.getElementById("report_L8_E01").style.display = "none";
                document.getElementById("estado_L8_E01").style.display = "block";
            } else {
                alert(`Error al enviar el mensaje: ${res.message}`);
            }
        },
        error: function(error) {
            alert("Error al enviar el mensaje");
            console.error(error);
        }
    });
}

function report_problem_L8_E01() {
    document.getElementById("report_L8_E01").style.display = "block";
    var estado_L8_E01 = document.getElementById("estado_L8_E01");
    var report_L8_E01 = document.getElementById("report_L8_E01");

    estado_L8_E01.style.display = "none";
    report_L8_E01.style.display = "block";
    alert("Reporta el problema que tienes con el equipo");
}


// Funciones para L8_E02

function abrir_L8_E02() {
    $("#box_interno_L8_E02").slideDown();
    $("#estado_L8_E02").slideDown();
}

function cerrar_L8_E02() {
    $("#box_interno_L8_E02").slideUp();
    $("#report_L8_E02").slideUp();
    $("#estado_L8_E02").slideDown();  // Mostrar el diálogo de estado nuevamente
}

let problemaSeleccionado_L8_E02 = ''; // Variable para almacenar el problema seleccionado

function problemaselecionado_L8_E02(problema) {
    problemaSeleccionado_L8_E02 = problema; // Guarda el problema seleccionado
}

function colorproblema_L8_E02(color) {
    const div = document.getElementById('box_externo_L8_E02');
    switch (color) {
        case 'Faltan programas':
            div.style.backgroundImage = 'linear-gradient(white 90%, blue)';
            break;
        case 'Necesita soporte':
            div.style.backgroundImage = 'linear-gradient(white 90%, yellow)';
            break;
        case 'Falta un componente':
            div.style.backgroundImage = 'linear-gradient(white 90%, orange)';
            break;
        case 'En mal estado':
            div.style.backgroundImage = 'linear-gradient(white 90%, red)';
            break;
        default:
            div.style.backgroundImage = 'linear-gradient(white 90%, green)';
    }

    $('.button_ventana').click(function() {
        $('.button_ventana').removeClass('seleccionado');
        $(this).addClass('seleccionado');
    });
}

function enviar_problem_L8_E02() {
    const divName = "L8_E02"; // Nombre del div correspondiente
    const mensaje = $('#problemaForm_L8_E02 [name="mensaje"]').val();

    // Validación simple para asegurarse de que se haya seleccionado un problema
    if (!problemaSeleccionado_L8_E02) {
        alert("Por favor seleccione un problema antes de guardar.");
        return;
    }

    // Envío del formulario via AJAX
    $.ajax({
        url: 'enviar_correo.php',
        method: 'POST',
        data: {
            problema: problemaSeleccionado_L8_E02,
            mensaje: mensaje,
            div_name: divName
        },
        success: function(response) {
            const res = JSON.parse(response);
            if (res.status === 'success') {
                alert("Tu mensaje ha sido enviado correctamente");
                $("#box_interno_L8_E02").slideUp();
                document.getElementById("report_L8_E02").style.display = "none";
                document.getElementById("estado_L8_E02").style.display = "block";
            } else {
                alert(`Error al enviar el mensaje: ${res.message}`);
            }
        },
        error: function(error) {
            alert("Error al enviar el mensaje");
            console.error(error);
        }
    });
}

function report_problem_L8_E02() {
    document.getElementById("report_L8_E02").style.display = "block";
    var estado_L8_E02 = document.getElementById("estado_L8_E02");
    var report_L8_E02 = document.getElementById("report_L8_E02");

    estado_L8_E02.style.display = "none";
    report_L8_E02.style.display = "block";
    alert("Reporta el problema que tienes con el equipo");
}


// Funciones para L8_E03

function abrir_L8_E03() {
    $("#box_interno_L8_E03").slideDown();
    $("#estado_L8_E03").slideDown();
}

function cerrar_L8_E03() {
    $("#box_interno_L8_E03").slideUp();
    $("#report_L8_E03").slideUp();
    $("#estado_L8_E03").slideDown();  // Mostrar el diálogo de estado nuevamente
}

let problemaSeleccionado_L8_E03 = ''; // Variable para almacenar el problema seleccionado

function problemaselecionado_L8_E03(problema) {
    problemaSeleccionado_L8_E03 = problema; // Guarda el problema seleccionado
}

function colorproblema_L8_E03(color) {
    const div = document.getElementById('box_externo_L8_E03');
    switch (color) {
        case 'Faltan programas':
            div.style.backgroundImage = 'linear-gradient(white 90%, blue)';
            break;
        case 'Necesita soporte':
            div.style.backgroundImage = 'linear-gradient(white 90%, yellow)';
            break;
        case 'Falta un componente':
            div.style.backgroundImage = 'linear-gradient(white 90%, orange)';
            break;
        case 'En mal estado':
            div.style.backgroundImage = 'linear-gradient(white 90%, red)';
            break;
        default:
            div.style.backgroundImage = 'linear-gradient(white 90%, green)';
    }

    $('.button_ventana').click(function() {
        $('.button_ventana').removeClass('seleccionado');
        $(this).addClass('seleccionado');
    });
}

function enviar_problem_L8_E03() {
    const divName = "L8_E03"; // Nombre del div correspondiente
    const mensaje = $('#problemaForm_L8_E03 [name="mensaje"]').val();

    // Validación simple para asegurarse de que se haya seleccionado un problema
    if (!problemaSeleccionado_L8_E03) {
        alert("Por favor seleccione un problema antes de guardar.");
        return;
    }

    // Envío del formulario via AJAX
    $.ajax({
        url: 'enviar_correo.php',
        method: 'POST',
        data: {
            problema: problemaSeleccionado_L8_E03,
            mensaje: mensaje,
            div_name: divName
        },
        success: function(response) {
            const res = JSON.parse(response);
            if (res.status === 'success') {
                alert("Tu mensaje ha sido enviado correctamente");
                $("#box_interno_L8_E03").slideUp();
                document.getElementById("report_L8_E03").style.display = "none";
                document.getElementById("estado_L8_E03").style.display = "block";
            } else {
                alert(`Error al enviar el mensaje: ${res.message}`);
            }
        },
        error: function(error) {
            alert("Error al enviar el mensaje");
            console.error(error);
        }
    });
}

function report_problem_L8_E03() {
    document.getElementById("report_L8_E03").style.display = "block";
    var estado_L8_E03 = document.getElementById("estado_L8_E03");
    var report_L8_E03 = document.getElementById("report_L8_E03");

    estado_L8_E03.style.display = "none";
    report_L8_E03.style.display = "block";
    alert("Reporta el problema que tienes con el equipo");
}


// Funciones para L8_F01

function abrir_L8_F01() {
    $("#box_interno_L8_F01").slideDown();
    $("#estado_L8_F01").slideDown();
}

function cerrar_L8_F01() {
    $("#box_interno_L8_F01").slideUp();
    $("#report_L8_F01").slideUp();
    $("#estado_L8_F01").slideDown();  // Mostrar el diálogo de estado nuevamente
}

let problemaSeleccionado_L8_F01 = ''; // Variable para almacenar el problema seleccionado

function problemaselecionado_L8_F01(problema) {
    problemaSeleccionado_L8_F01 = problema; // Guarda el problema seleccionado
}

function colorproblema_L8_F01(color) {
    const div = document.getElementById('box_externo_L8_F01');
    switch (color) {
        case 'Faltan programas':
            div.style.backgroundImage = 'linear-gradient(white 90%, blue)';
            break;
        case 'Necesita soporte':
            div.style.backgroundImage = 'linear-gradient(white 90%, yellow)';
            break;
        case 'Falta un componente':
            div.style.backgroundImage = 'linear-gradient(white 90%, orange)';
            break;
        case 'En mal estado':
            div.style.backgroundImage = 'linear-gradient(white 90%, red)';
            break;
        default:
            div.style.backgroundImage = 'linear-gradient(white 90%, green)';
    }

    $('.button_ventana').click(function() {
        $('.button_ventana').removeClass('seleccionado');
        $(this).addClass('seleccionado');
    });
}

function enviar_problem_L8_F01() {
    const divName = "L8_F01"; // Nombre del div correspondiente
    const mensaje = $('#problemaForm_L8_F01 [name="mensaje"]').val();

    // Validación simple para asegurarse de que se haya seleccionado un problema
    if (!problemaSeleccionado_L8_F01) {
        alert("Por favor seleccione un problema antes de guardar.");
        return;
    }

    // Envío del formulario via AJAX
    $.ajax({
        url: 'enviar_correo.php',
        method: 'POST',
        data: {
            problema: problemaSeleccionado_L8_F01,
            mensaje: mensaje,
            div_name: divName
        },
        success: function(response) {
            const res = JSON.parse(response);
            if (res.status === 'success') {
                alert("Tu mensaje ha sido enviado correctamente");
                $("#box_interno_L8_F01").slideUp();
                document.getElementById("report_L8_F01").style.display = "none";
                document.getElementById("estado_L8_F01").style.display = "block";
            } else {
                alert(`Error al enviar el mensaje: ${res.message}`);
            }
        },
        error: function(error) {
            alert("Error al enviar el mensaje");
            console.error(error);
        }
    });
}

function report_problem_L8_F01() {
    document.getElementById("report_L8_F01").style.display = "block";
    var estado_L8_F01 = document.getElementById("estado_L8_F01");
    var report_L8_F01 = document.getElementById("report_L8_F01");

    estado_L8_F01.style.display = "none";
    report_L8_F01.style.display = "block";
    alert("Reporta el problema que tienes con el equipo");
}


// Funciones para L8_F02

function abrir_L8_F02() {
    $("#box_interno_L8_F02").slideDown();
    $("#estado_L8_F02").slideDown();
}

function cerrar_L8_F02() {
    $("#box_interno_L8_F02").slideUp();
    $("#report_L8_F02").slideUp();
    $("#estado_L8_F02").slideDown();  // Mostrar el diálogo de estado nuevamente
}

let problemaSeleccionado_L8_F02 = ''; // Variable para almacenar el problema seleccionado

function problemaselecionado_L8_F02(problema) {
    problemaSeleccionado_L8_F02 = problema; // Guarda el problema seleccionado
}

function colorproblema_L8_F02(color) {
    const div = document.getElementById('box_externo_L8_F02');
    switch (color) {
        case 'Faltan programas':
            div.style.backgroundImage = 'linear-gradient(white 90%, blue)';
            break;
        case 'Necesita soporte':
            div.style.backgroundImage = 'linear-gradient(white 90%, yellow)';
            break;
        case 'Falta un componente':
            div.style.backgroundImage = 'linear-gradient(white 90%, orange)';
            break;
        case 'En mal estado':
            div.style.backgroundImage = 'linear-gradient(white 90%, red)';
            break;
        default:
            div.style.backgroundImage = 'linear-gradient(white 90%, green)';
    }

    $('.button_ventana').click(function() {
        $('.button_ventana').removeClass('seleccionado');
        $(this).addClass('seleccionado');
    });
}

function enviar_problem_L8_F02() {
    const divName = "L8_F02"; // Nombre del div correspondiente
    const mensaje = $('#problemaForm_L8_F02 [name="mensaje"]').val();

    // Validación simple para asegurarse de que se haya seleccionado un problema
    if (!problemaSeleccionado_L8_F02) {
        alert("Por favor seleccione un problema antes de guardar.");
        return;
    }

    // Envío del formulario via AJAX
    $.ajax({
        url: 'enviar_correo.php',
        method: 'POST',
        data: {
            problema: problemaSeleccionado_L8_F02,
            mensaje: mensaje,
            div_name: divName
        },
        success: function(response) {
            const res = JSON.parse(response);
            if (res.status === 'success') {
                alert("Tu mensaje ha sido enviado correctamente");
                $("#box_interno_L8_F02").slideUp();
                document.getElementById("report_L8_F02").style.display = "none";
                document.getElementById("estado_L8_F02").style.display = "block";
            } else {
                alert(`Error al enviar el mensaje: ${res.message}`);
            }
        },
        error: function(error) {
            alert("Error al enviar el mensaje");
            console.error(error);
        }
    });
}

function report_problem_L8_F02() {
    document.getElementById("report_L8_F02").style.display = "block";
    var estado_L8_F02 = document.getElementById("estado_L8_F02");
    var report_L8_F02 = document.getElementById("report_L8_F02");

    estado_L8_F02.style.display = "none";
    report_L8_F02.style.display = "block";
    alert("Reporta el problema que tienes con el equipo");
}


// Funciones para L8_F03

function abrir_L8_F03() {
    $("#box_interno_L8_F03").slideDown();
    $("#estado_L8_F03").slideDown();
}

function cerrar_L8_F03() {
    $("#box_interno_L8_F03").slideUp();
    $("#report_L8_F03").slideUp();
    $("#estado_L8_F03").slideDown();  // Mostrar el diálogo de estado nuevamente
}

let problemaSeleccionado_L8_F03 = ''; // Variable para almacenar el problema seleccionado

function problemaselecionado_L8_F03(problema) {
    problemaSeleccionado_L8_F03 = problema; // Guarda el problema seleccionado
}

function colorproblema_L8_F03(color) {
    const div = document.getElementById('box_externo_L8_F03');
    switch (color) {
        case 'Faltan programas':
            div.style.backgroundImage = 'linear-gradient(white 90%, blue)';
            break;
        case 'Necesita soporte':
            div.style.backgroundImage = 'linear-gradient(white 90%, yellow)';
            break;
        case 'Falta un componente':
            div.style.backgroundImage = 'linear-gradient(white 90%, orange)';
            break;
        case 'En mal estado':
            div.style.backgroundImage = 'linear-gradient(white 90%, red)';
            break;
        default:
            div.style.backgroundImage = 'linear-gradient(white 90%, green)';
    }

    $('.button_ventana').click(function() {
        $('.button_ventana').removeClass('seleccionado');
        $(this).addClass('seleccionado');
    });
}

function enviar_problem_L8_F03() {
    const divName = "L8_F03"; // Nombre del div correspondiente
    const mensaje = $('#problemaForm_L8_F03 [name="mensaje"]').val();

    // Validación simple para asegurarse de que se haya seleccionado un problema
    if (!problemaSeleccionado_L8_F03) {
        alert("Por favor seleccione un problema antes de guardar.");
        return;
    }

    // Envío del formulario via AJAX
    $.ajax({
        url: 'enviar_correo.php',
        method: 'POST',
        data: {
            problema: problemaSeleccionado_L8_F03,
            mensaje: mensaje,
            div_name: divName
        },
        success: function(response) {
            const res = JSON.parse(response);
            if (res.status === 'success') {
                alert("Tu mensaje ha sido enviado correctamente");
                $("#box_interno_L8_F03").slideUp();
                document.getElementById("report_L8_F03").style.display = "none";
                document.getElementById("estado_L8_F03").style.display = "block";
            } else {
                alert(`Error al enviar el mensaje: ${res.message}`);
            }
        },
        error: function(error) {
            alert("Error al enviar el mensaje");
            console.error(error);
        }
    });
}

function report_problem_L8_F03() {
    document.getElementById("report_L8_F03").style.display = "block";
    var estado_L8_F03 = document.getElementById("estado_L8_F03");
    var report_L8_F03 = document.getElementById("report_L8_F03");

    estado_L8_F03.style.display = "none";
    report_L8_F03.style.display = "block";
    alert("Reporta el problema que tienes con el equipo");
}


// Funciones para L8_G01

function abrir_L8_G01() {
    $("#box_interno_L8_G01").slideDown();
    $("#estado_L8_G01").slideDown();
}

function cerrar_L8_G01() {
    $("#box_interno_L8_G01").slideUp();
    $("#report_L8_G01").slideUp();
    $("#estado_L8_G01").slideDown();  // Mostrar el diálogo de estado nuevamente
}

let problemaSeleccionado_L8_G01 = ''; // Variable para almacenar el problema seleccionado

function problemaselecionado_L8_G01(problema) {
    problemaSeleccionado_L8_G01 = problema; // Guarda el problema seleccionado
}

function colorproblema_L8_G01(color) {
    const div = document.getElementById('box_externo_L8_G01');
    switch (color) {
        case 'Faltan programas':
            div.style.backgroundImage = 'linear-gradient(white 90%, blue)';
            break;
        case 'Necesita soporte':
            div.style.backgroundImage = 'linear-gradient(white 90%, yellow)';
            break;
        case 'Falta un componente':
            div.style.backgroundImage = 'linear-gradient(white 90%, orange)';
            break;
        case 'En mal estado':
            div.style.backgroundImage = 'linear-gradient(white 90%, red)';
            break;
        default:
            div.style.backgroundImage = 'linear-gradient(white 90%, green)';
    }

    $('.button_ventana').click(function() {
        $('.button_ventana').removeClass('seleccionado');
        $(this).addClass('seleccionado');
    });
}

function enviar_problem_L8_G01() {
    const divName = "L8_G01"; // Nombre del div correspondiente
    const mensaje = $('#problemaForm_L8_G01 [name="mensaje"]').val();

    // Validación simple para asegurarse de que se haya seleccionado un problema
    if (!problemaSeleccionado_L8_G01) {
        alert("Por favor seleccione un problema antes de guardar.");
        return;
    }

    // Envío del formulario via AJAX
    $.ajax({
        url: 'enviar_correo.php',
        method: 'POST',
        data: {
            problema: problemaSeleccionado_L8_G01,
            mensaje: mensaje,
            div_name: divName
        },
        success: function(response) {
            const res = JSON.parse(response);
            if (res.status === 'success') {
                alert("Tu mensaje ha sido enviado correctamente");
                $("#box_interno_L8_G01").slideUp();
                document.getElementById("report_L8_G01").style.display = "none";
                document.getElementById("estado_L8_G01").style.display = "block";
            } else {
                alert(`Error al enviar el mensaje: ${res.message}`);
            }
        },
        error: function(error) {
            alert("Error al enviar el mensaje");
            console.error(error);
        }
    });
}

function report_problem_L8_G01() {
    document.getElementById("report_L8_G01").style.display = "block";
    var estado_L8_G01 = document.getElementById("estado_L8_G01");
    var report_L8_G01 = document.getElementById("report_L8_G01");

    estado_L8_G01.style.display = "none";
    report_L8_G01.style.display = "block";
    alert("Reporta el problema que tienes con el equipo");
}


// Funciones para L8_G02

function abrir_L8_G02() {
    $("#box_interno_L8_G02").slideDown();
    $("#estado_L8_G02").slideDown();
}

function cerrar_L8_G02() {
    $("#box_interno_L8_G02").slideUp();
    $("#report_L8_G02").slideUp();
    $("#estado_L8_G02").slideDown();  // Mostrar el diálogo de estado nuevamente
}

let problemaSeleccionado_L8_G02 = ''; // Variable para almacenar el problema seleccionado

function problemaselecionado_L8_G02(problema) {
    problemaSeleccionado_L8_G02 = problema; // Guarda el problema seleccionado
}

function colorproblema_L8_G02(color) {
    const div = document.getElementById('box_externo_L8_G02');
    switch (color) {
        case 'Faltan programas':
            div.style.backgroundImage = 'linear-gradient(white 90%, blue)';
            break;
        case 'Necesita soporte':
            div.style.backgroundImage = 'linear-gradient(white 90%, yellow)';
            break;
        case 'Falta un componente':
            div.style.backgroundImage = 'linear-gradient(white 90%, orange)';
            break;
        case 'En mal estado':
            div.style.backgroundImage = 'linear-gradient(white 90%, red)';
            break;
        default:
            div.style.backgroundImage = 'linear-gradient(white 90%, green)';
    }

    $('.button_ventana').click(function() {
        $('.button_ventana').removeClass('seleccionado');
        $(this).addClass('seleccionado');
    });
}

function enviar_problem_L8_G02() {
    const divName = "L8_G02"; // Nombre del div correspondiente
    const mensaje = $('#problemaForm_L8_G02 [name="mensaje"]').val();

    // Validación simple para asegurarse de que se haya seleccionado un problema
    if (!problemaSeleccionado_L8_G02) {
        alert("Por favor seleccione un problema antes de guardar.");
        return;
    }

    // Envío del formulario via AJAX
    $.ajax({
        url: 'enviar_correo.php',
        method: 'POST',
        data: {
            problema: problemaSeleccionado_L8_G02,
            mensaje: mensaje,
            div_name: divName
        },
        success: function(response) {
            const res = JSON.parse(response);
            if (res.status === 'success') {
                alert("Tu mensaje ha sido enviado correctamente");
                $("#box_interno_L8_G02").slideUp();
                document.getElementById("report_L8_G02").style.display = "none";
                document.getElementById("estado_L8_G02").style.display = "block";
            } else {
                alert(`Error al enviar el mensaje: ${res.message}`);
            }
        },
        error: function(error) {
            alert("Error al enviar el mensaje");
            console.error(error);
        }
    });
}

function report_problem_L8_G02() {
    document.getElementById("report_L8_G02").style.display = "block";
    var estado_L8_G02 = document.getElementById("estado_L8_G02");
    var report_L8_G02 = document.getElementById("report_L8_G02");

    estado_L8_G02.style.display = "none";
    report_L8_G02.style.display = "block";
    alert("Reporta el problema que tienes con el equipo");
}


// Funciones para L8_G03

function abrir_L8_G03() {
    $("#box_interno_L8_G03").slideDown();
    $("#estado_L8_G03").slideDown();
}

function cerrar_L8_G03() {
    $("#box_interno_L8_G03").slideUp();
    $("#report_L8_G03").slideUp();
    $("#estado_L8_G03").slideDown();  // Mostrar el diálogo de estado nuevamente
}

let problemaSeleccionado_L8_G03 = ''; // Variable para almacenar el problema seleccionado

function problemaselecionado_L8_G03(problema) {
    problemaSeleccionado_L8_G03 = problema; // Guarda el problema seleccionado
}

function colorproblema_L8_G03(color) {
    const div = document.getElementById('box_externo_L8_G03');
    switch (color) {
        case 'Faltan programas':
            div.style.backgroundImage = 'linear-gradient(white 90%, blue)';
            break;
        case 'Necesita soporte':
            div.style.backgroundImage = 'linear-gradient(white 90%, yellow)';
            break;
        case 'Falta un componente':
            div.style.backgroundImage = 'linear-gradient(white 90%, orange)';
            break;
        case 'En mal estado':
            div.style.backgroundImage = 'linear-gradient(white 90%, red)';
            break;
        default:
            div.style.backgroundImage = 'linear-gradient(white 90%, green)';
    }

    $('.button_ventana').click(function() {
        $('.button_ventana').removeClass('seleccionado');
        $(this).addClass('seleccionado');
    });
}

function enviar_problem_L8_G03() {
    const divName = "L8_G03"; // Nombre del div correspondiente
    const mensaje = $('#problemaForm_L8_G03 [name="mensaje"]').val();

    // Validación simple para asegurarse de que se haya seleccionado un problema
    if (!problemaSeleccionado_L8_G03) {
        alert("Por favor seleccione un problema antes de guardar.");
        return;
    }

    // Envío del formulario via AJAX
    $.ajax({
        url: 'enviar_correo.php',
        method: 'POST',
        data: {
            problema: problemaSeleccionado_L8_G03,
            mensaje: mensaje,
            div_name: divName
        },
        success: function(response) {
            const res = JSON.parse(response);
            if (res.status === 'success') {
                alert("Tu mensaje ha sido enviado correctamente");
                $("#box_interno_L8_G03").slideUp();
                document.getElementById("report_L8_G03").style.display = "none";
                document.getElementById("estado_L8_G03").style.display = "block";
            } else {
                alert(`Error al enviar el mensaje: ${res.message}`);
            }
        },
        error: function(error) {
            alert("Error al enviar el mensaje");
            console.error(error);
        }
    });
}

function report_problem_L8_G03() {
    document.getElementById("report_L8_G03").style.display = "block";
    var estado_L8_G03 = document.getElementById("estado_L8_G03");
    var report_L8_G03 = document.getElementById("report_L8_G03");

    estado_L8_G03.style.display = "none";
    report_L8_G03.style.display = "block";
    alert("Reporta el problema que tienes con el equipo");
}