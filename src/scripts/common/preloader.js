export default function preloader () {
  const imgs = document.querySelectorAll('img');
  const video = document.querySelector('video');
  const svg = document.querySelector('#preloaderSvg');
  const svgText = document.querySelector('#preloaderText');
  const preloaderWrap = document.querySelector('#preloader');
  let number = 1;
  const numberAll = imgs.length;
  

  document.addEventListener('DOMContentLoaded', () => {
    svgText.innerHTML = '5%';
    // ждем видео, если есть
    if (video) {
      video.addEventListener('load', () => {
        if (number == imgs.length) {
          preloaderWrap.classList.remove('preloader_active');
          preloaderWrap.classList.add('preloader');
        }
      });
    }

    // ждем картинки, меняем проценты в тексте и убираем прелоадер
    for (let i = 0; i < imgs.length; i++) {
      const img = imgs[i];
      img.addEventListener('load', () => {
        number = i + 1;
        const percentsLoad =number / numberAll * 100;
        svgText.innerHTML = `${Math.ceil(percentsLoad)}%`;
        if (number == imgs.length) {
          setTimeout(() => {
            preloaderWrap.classList.remove('preloader_active');
            preloaderWrap.classList.add('preloader');
            svg.classList.remove('preloader__svg_active');
            svg.classList.add('preloader__svg');
            svgText.classList.remove('preloader__text_active');
            svgText.classList.add('preloader__text');
          }, 2000);
        }
      });
    }
  });
}