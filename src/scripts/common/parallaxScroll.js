var parallaxScroll = (function() {
    var bg = document.querySelector('.scroll-parallax__layer'),
        image = document.querySelector('.scroll-parallax__image'),
        user = document.querySelector('.user');

    return {
        move: function(block, windowScroll, strafeAmount) {
            var strafe = windowScroll / -strafeAmount + '%';
            var transformString = 'translate3d(0,' + strafe  + ',0)';
            
            var style = block.style;

            style.transform = transformString;
            style.webkitTransform = transformString;
        },

        init: function(wScroll) {
            //this.move(bg, wScroll, 45);
            this.move(image, wScroll, 65);
            this.move(user, wScroll, 45);
        } 
    }

}());




window.onscroll = function () {
    var wScroll = window.pageYOffset;
    parallaxScroll.init(wScroll);
}