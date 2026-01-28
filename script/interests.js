function openGame(gameName) {
    var i;
    var x = document.getElementsByClassName("game");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(gameName).style.display = "block";
}