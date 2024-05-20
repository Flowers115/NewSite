document.addEventListener('mousemove', function(e) {
    var cursor = document.getElementById('custom-cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    cursor.style.opacity = 1; // Assicura che il cursore sia visibile
});

document.addEventListener('mouseleave', function() {
    var cursor = document.getElementById('custom-cursor');
    cursor.style.opacity = 0; // Nasconde il cursore
});

document.addEventListener('mouseenter', function() {
    var cursor = document.getElementById('custom-cursor');
    cursor.style.opacity = 1; // Mostra il cursore
});