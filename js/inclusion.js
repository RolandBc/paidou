$(function () {
    $("#footer").load("footer.html");
    $("#top_header").load("top_header.html");
    $("#top_menu").load("top_menu.html", function () {
        console.log(window.location.pathname);
        var id = selectActiveMenu(window.location.pathname);
        console.log(document.getElementById(id));
        var activeMenu = document.getElementById(id);
        activeMenu.classList.add('set_active');
    });
});

function selectActiveMenu(url) {
    var response = ''
    switch (url) {
        case "/index.html":
            response = "index";
            break;
        case "/creches.html":
        case "/creche_1.html":
            response = "creches";
            break;
        case "/pedagogie.html":
            response = "pedagogie";
            break;
        case "/inscription.html":
        case "/tarifs.html":
        case "/entreprises.html":
            response = "inscription";
            break;
        case "/contact.html":
            response = "contact";
            break;
        default:
            response = "";
    }
    return response;
}