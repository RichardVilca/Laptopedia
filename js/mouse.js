document.addEventListener('mousemove', function (e) {
    const trail = document.createElement('div');
    trail.classList.add('ghost-trail');

    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';

    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 1000);
}); 
