document.addEventListener("DOMContentLoaded", function () {
    document.body.style.opacity = "1";
});

function limitTextWidth(event) {
    const input = event.target;
    const maxWidth = 550;
    const span = document.createElement('span');
    span.style.visibility = 'hidden';
    span.style.position = 'absolute';
    span.style.whiteSpace = 'nowrap';
    span.style.fontSize = window.getComputedStyle(input).fontSize;
    span.style.fontFamily = window.getComputedStyle(input).fontFamily;
    span.textContent = input.value;
    document.body.appendChild(span);

    if (span.offsetWidth > maxWidth) {
        input.value = input.value.slice(0, -1);
    }

    document.body.removeChild(span);
    document.getElementById("nextButton").style.display = input.value.length >= 3 ? "block" : "none";
}

function saveNameAndRedirect() {
    const nameInput = document.querySelector(".name").value;
    if (nameInput.length >= 3) {
        localStorage.setItem("username", nameInput);
        window.location.href = "card.html";
    }
}

