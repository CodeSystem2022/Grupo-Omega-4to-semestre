const buttonIcon = document.getElementById("buttonIcon");
const listaDesplegableMenu = document.getElementById("menu-desplegable");
const buttonIconCancel = document.getElementById("buttonIconCancel");


buttonIcon.addEventListener("click",() => {
    buttonIcon.style.display = "none";
    buttonIconCancel.style.display = "block";
    listaDesplegableMenu.style.display = "block";
});

buttonIconCancel.addEventListener("click", () => {
    buttonIcon.style.display = "block";
    buttonIconCancel.style.display = "none";
    listaDesplegableMenu.style.display = "none";
});