var btnAuth = document.getElementById('btn-auth'),
    flipContainer = document.getElementById('index-flip-container'),
    wrapperIndex = document.getElementById('wrapper-index');

var clickCount = 1;
var clickBtn = function(event) {
    event.stopPropagation();
        flipContainer.style.transform = 'rotateY(180deg)';
        btnAuth.style.left = '9999px';
};

var clickIgnore = function (event) {
    event.stopPropagation();
};

var clickWrap = function (event) {
    var target = event.target.id;
    if (target == 'wrapper-index') {
        btnAuth.style.left = 'auto';
        flipContainer.style.transform = 'rotateY(360deg)';
    }
};

var flipper = btnAuth.addEventListener('click', clickBtn);
var flipIgnore = wrapperIndex.addEventListener('click', clickIgnore);
var flipBack = wrapperIndex.addEventListener('click', clickWrap);