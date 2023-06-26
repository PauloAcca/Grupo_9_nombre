window.addEventListener("load", () => {

    let form = document.querySelector(".forms");


    let erroresHtml = document.querySelector("#errores");

    form.addEventListener("submit", (event) => {

        /* Creo un array de errores vacio. 
        En caso de ir detectando errores  los iremos agregando aquí */

        let errores = [];

        /* Nombre */

        if (form.nombre.value == "") {
            errores.push("Debe insertar su nombre");
            form.nombre.classList.remove("es-valido")
            form.nombre.classList.add("es-invalido")
        } else if (form.nombre.value.length < 2) {
            errores.push("El nombre debe tener al menos 2 carácteres");
            form.nombre.classList.remove("es-valido")
            form.nombre.classList.add("es-invalido")
        } else {
            form.nombre.classList.remove("es-invalido")
            form.nombre.classList.add("es-valido")

        }


        /* Apellido */

        if (form.apellido.value == "") {
            errores.push("Debe ingresar su apellido");
            form.apellido.classList.remove("es-valido")
            form.apellido.classList.add("es-invalido")
        } else if (form.apellido.value.length < 2) {
            errores.push("El apellido debe tener al menos 2 carácteres");
            form.apellido.classList.remove("es-valido")
            form.apellido.classList.add("es-invalido")
        } else {
            form.apellido.classList.remove("es-invalido")
            form.apellido.classList.add("es-valido")

        }

        /* Email */


        let regEmail = /\S+@\S+\.\S+/;
        if (!regEmail.test(form.email.value)) {
            errores.push("Debe ingresar un email válido");
            form.email.classList.add("is-invalid");
            form.email.classList.remove("is-valid");
        } else {
            form.email.classList.add("is-valid");
            form.email.classList.remove("is-invalid");
            form.password.focus();
        };

        /* Contraseña 1 */

        if (password1.value == "") {
            errores.push("El campo contraseña no puede estar vacío");
            form.password1.classList.remove("is-valid");
            form.password1.classList.add("is-invalid");
        } else if (password1.value.length < 8) {
            errores.push("El campo nombre debe tener al menos 8 caracteres");
            form.password1.classList.remove("is-valid");
            form.password1.classList.add("is-invalid");
        } else {
            form.password1.classList.add("is-valid");
            form.password1.classList.remove("is-invalid");

        };

        /* Contraseña 2 */


        if (password2.value == "") {
            errores.push("El campo contraseña no puede estar vacío");
            form.password2.classList.remove("is-valid");
            form.password2.classList.add("is-invalid");
        } else if (password2.value.length < 8) {
            errores.push("El campo nombre debe tener al menos 8 caracteres");
            form.password2.classList.remove("is-valid");
            form.password2.classList.add("is-invalid");
        } else {
            form.password2.classList.add("is-valid");
            form.password2.classList.remove("is-invalid");

        };

        /* La imagen Deberá ser un archivo válido (JPG, JPEG, PNG, GIF).*/

        let imagenUsuario = form.imagenUsuario;
        if (imagenUsuario.files.length === 0) {
            errores.push("Debe seleccionar una imagen");
        } else {
            let file = imagenUsuario.files[0];
            let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
            if (!allowedExtensions.test(file.name)) {
                errores.push("La imagen debe tener una extensión válida (JPG, JPEG, PNG, GIF)");
            }
        }



        /* Chequeo de errores en pantalla  */

        if (errores.length > 0) {

            event.preventDefault();

            erroresHtml.innerHTML = "";
            for (let i = 0; i < errores.length; i++) {
                erroresHtml.innerHTML += "<li>" + errores[i] + "</li>";
            };
        } else {
            erroresHtml.innerHTML = "";
            form.submit();


        }
    })

})
