import initMap from './common/googleMap';
import parallaxIndex from './common/parallaxIndex';
import parallaxScroll from './common/parallaxScroll';
import skills from './common/skills';
import flip from './common/flipIndex';




if (document.getElementById('parallax__layer')) {
    parallaxIndex();
}

if (document.getElementById('btn-auth')) {
    flip();
}

if (document.getElementById('scroll-parallax__layer')) {
    parallaxScroll();
}
if (document.getElementById('skills-list')) {
    skills();
}


