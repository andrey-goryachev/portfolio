var layer = document.getElementById('parallax__layer');

var moveLayers = function (e) {
    var initialX = (window.innerWidth / 2) - e.pageX;
    var initialY = (window.innerHeight / 2) - e.pageY;
    var
        divider = 1 / 100,
        positionX = initialX * divider,
        positionY = initialY * divider,
        bottomPosition = (window.innerHeight / 2) * divider,
        transformString = 'translate(' + positionX + 'px,' + positionY + 'px)',
        image = document.getElementById('parallax__image');

    layer.style.transform = transformString;
    image.style.bottom = '-' + bottomPosition + 'px';
};

if (layer) {
    var parallaxFunc = window.addEventListener('mousemove', moveLayers);
}


module.exports = parallaxFunc;