$(document).ready(function () {
    const nombre = $("#nombre").html();
    const apellido = $("#apellido").html();
    const correo = $("#correo").html();
    const user = $("#user").html();
    const contrasena = $("#contrasenna").html();
    const combo = $("#combo").html();
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    $("#enfermedades").hide();

    $("#registrar").click(function (e) { 
        e.preventDefault();
        if (!nombre.value) {
            alert('La seccion "Nombres" es obligatoria');
        }
        if (!apellido.value) {
            alert('La seccion "Apellidos" es obligatoria');
        }
        if (!correo.value) {
            alert('La seccion "Correo electronico" es obligatoria');
        }
        if (!user.value) {
            alert('La seccion "Nombre de usuario" es obligatoria');
        }
        if (!contrasena.value) {
            alert('La seccion "Contraseña" es obligatoria');
        }
        if (!emailRegex.test(correo.value)) {
            alert('La direccion de correo no es valida');
        }
    });
});