document.getElementById("nightmode").addEventListener("change", function () {
    if (document.getElementById("nightmode").checked == true) {
        document.documentElement.setAttribute("style", "background: linear-gradient(to left, #fff, #fff);");

    } else {
        document.documentElement.setAttribute("style", "  background: linear-gradient(to left, #000, #000); ");
        document.getElementsByTagName("body")[0].setAttribute("style", "color: #000;");
    }
});



