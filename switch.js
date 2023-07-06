var esport_btn = document.getElementById("esport_btn");

// Cette fonction permet de changer la couleur du bouton et de le déplacer à droite
function btn_right_clic(){
    esport_btn.style.left = "50%";
    esport_btn.style.backgroundColor = "#b8f600";
}
// Cette fonction permet de changer la couleur du bouton et de le déplacer à gauche
function btn_left_clic(){
    esport_btn.style.left = "0px";
    esport_btn.style.backgroundColor = "#0ab5ed";
}