
document.getElementById('submit-form').addEventListener('click', send);

function send(e) {

    e.preventDefault();

    var theUrl = 'https://script.google.com/macros/s/AKfycbz_Y81NT0zKIIGw_czQjdYODH5FA-IVbDCJn4I-s2zuRkhOv_A/exec';

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    if (name.checkValidity() && email.checkValidity()) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", theUrl + '?Name=' + name.value + '&Email=' + email.value, true);
        xhttp.send();
        document.getElementById('test-form').style.display = "none";
        document.getElementById('thanks').style.display = "block";
    }
}

window.addEventListener('load', loaded);

function loaded() {
    document.getElementById('loading').style.display = "none";
}