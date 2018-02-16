function flash() {
    var text = document.getElementById('flashtext');
    text.style.color = (text.style.color=='red') ? '#3498db':'red';
}
var clr = setInterval(flash, 1000);