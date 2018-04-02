import initMap from './common/googleMap';
import parallaxIndex from './common/parallaxIndex';
import parallaxScroll from './common/parallaxScroll';
import skills from './common/skills';
import flip from './common/flipIndex';
import headerMenu from './common/headerMenu';
import headerArrow from './common/headerArrow';
import worksArrowUp from './common/worksArrowUp';
import blog from './common/blog';




if (document.getElementById('parallax__layer')) {
    parallaxIndex();
}

if (document.getElementById('btn-auth')) {
    flip();
}

if (document.getElementById('scroll-parallax__layer')) {
    parallaxScroll();
}
if (document.getElementById('about')) {
    skills();
}
if (document.getElementById('hamburger')) {
    headerMenu();
}
if (document.getElementById('header__scroll-btn')) {
    headerArrow();
}

if (document.getElementById('works__btn-up')) {
    worksArrowUp();
}

if (document.getElementById('blog')) {
    blog();
}


