document.addEventListener("DOMContentLoaded", function() {
    console.log("¡El Grinch ya llegó a la escuela! 💚");

    let contador = document.getElementById("contador");
    if (contador) {
        let numero = 0;
        let meta = 120;
        let intervalo = setInterval(function() {
            numero += 5;
            contador.textContent = numero;
            if (numero >= meta) clearInterval(intervalo);
        }, 50);
    }

    let grinch = document.getElementById("grinch");
    if (grinch) {
        grinch.addEventListener("click", function() {
            alert("¡Ho ho ho! ¡El Grinch te dice hola! 💚🎄");
        });
    }

    let form = document.getElementById("form-registro");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            let nombre = form.querySelector("input[name='nombre_alumno']").value.trim();
            if (nombre === "") {
                alert("¡Oye! Te falta poner el nombre del alumno 😊");
                return;
            }
            document.getElementById("mensaje-exito").textContent = "🎉 ¡Listo " + nombre + "! ¡Te registraste! El Grinch ya te tiene en su lista buena.";
            let total = document.getElementById("total-registrados");
            total.textContent = parseInt(total.textContent) + 1;
            form.reset();
        });
    }
});

function saludarGrinch() {
    let mensajes = [
        "💚 ¡El Grinch ya no es gruñón, ahora ama la Navidad!",
        "🎄 ¡Nuestra escuela es la mejor comunidad!",
        "🎅 ¡Todos juntos hacemos magia esta Navidad!",
        "🎁 ¡Regístrate abajo y únete a la fiesta!"
    ];
    let aleatorio = Math.floor(Math.random() * mensajes.length);
    document.getElementById("mensaje-grinch").textContent = mensajes[aleatorio];
}

function mostrarActividad(texto) {
    document.getElementById("detalle-actividad").textContent = texto;
    let cards = document.querySelectorAll(".card");
    cards.forEach(function(c) { c.classList.remove("activa"); });
    event.currentTarget.classList.add("activa");
}