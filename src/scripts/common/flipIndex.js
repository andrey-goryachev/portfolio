var btnAuth = document.getElementById('btn-auth'),
    flipContainer = document.getElementById('index-flip-container'),
    wrapperIndex = document.getElementById('wrapper-index');


var clickBtn = function(e) {
    e.stopPropagation();
    flipContainer.classList.add('index-flip-container_rotate');
    btnAuth.classList.add('btn-auth_left');
};

var clickIgnore = function (e) {
    e.stopPropagation();
};

var clickWrap = function (e) {
    
    var target = e.target.id;
    if (target == 'wrapper-index' || 'btn-index-in-main') {
        btnAuth.classList.remove('btn-auth_left');
        flipContainer.classList.remove('index-flip-container_rotate');
    }
};

if (btnAuth) {
    btnAuth.addEventListener('click', clickBtn);
    wrapperIndex.addEventListener('click', clickIgnore);
    wrapperIndex.addEventListener('click', clickWrap);
}

