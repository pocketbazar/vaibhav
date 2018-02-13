function flash() {
    var text = document.getElementById('flashtext');
    text.style.color = (text.style.color=='red') ? 'blue':'red';
}
var clr = setInterval(flash, 1000);