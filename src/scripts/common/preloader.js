export default function preloader () {
  const imgs = document.querySelectorAll('img');
  const video = document.querySelector('video');
  const svg = document.querySelector('#preloaderSvg');
  const svgText = document.querySelector('#preloaderText');
  const preloaderWrap = document.querySelector('#preloader');
  let number = 0;
  const numberAll = imgs.length;
  

  document.addEventListener('DOMContentLoaded', () => {
    svgText.innerHTML = '5%';
    // ждем видео, если есть
    if (video) {
      video.addEventListener('load', () => {
        if (number == imgs.length) {
          preloaderWrap.classList.remove('preloader_active');
          preloaderWrap.classList.add('preloader');
          svgText.innerHTML = '50%';
        }
      });
    }

    // ждем картинки, меняем проценты в тексте и убираем прелоадер
    for (let i = 0; i < imgs.length; i++) {
      const img = imgs[i];
      img.addEventListener('load', () => {
        number += 1;
        const percentsLoad =number / numberAll * 100;
        svgText.innerHTML = `${Math.floor(percentsLoad - 10)}%`;
        if (number == imgs.length) {
          setTimeout(() => {
            preloaderWrap.classList.remove('preloader_active');
            preloaderWrap.classList.add('preloader');
            svg.classList.remove('preloader__svg_active');
            svg.classList.add('preloader__svg');
            svgText.classList.remove('preloader__text_active');
            svgText.classList.add('preloader__text');
            svgText.innerHTML = '100%';
          }, 1000);
        }
      });
    }
  });
}