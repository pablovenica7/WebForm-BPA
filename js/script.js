const form = document.getElementById('verificationForm');
const responseMessage = document.getElementById('responseMessage');

form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const studentName = document.getElementById('studentName').value.trim();
    const matricula = document.getElementById('matricula').value.trim();
    const empresa = document.getElementById('empresa').value.trim();

    if (studentName === "Pablo Venica" && matricula === "2000668" && empresa === "Arcor") {
        responseMessage.textContent = "Empresa Disponible";
        responseMessage.style.color = "#16a085"; // Cambiar el color a verde
    } else {
        responseMessage.textContent = "Datos incorrectos. Intenta nuevamente.";
        responseMessage.style.color = "#e74c3c"; // Cambiar el color a rojo
    }
});
