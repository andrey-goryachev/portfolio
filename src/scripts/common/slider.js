import Vue from "vue";

export default function slider() {
  new Vue({
    el: '#works',
    data: {
      counter: 0,
      btnLeftClassName: 'works-buttons__left_',
      btnRightClassName: 'works-buttons__right_',
      activeClassImg: 'slider__item-active',
      activeClassDesc: 'works-desc__item-active',
      numWorks: 4
    },
    methods: {
      changeLeftBtnsImg(e) {
        if (this.counter < this.numWorks - 1) {
          this.counter += 1;
        } else {
          this.counter = 0;
        }
      },
      changeRightBtnsImg(e) {
        if (this.counter <= 0) {
          this.counter = this.numWorks - 1;
        } else {
          this.counter -= 1;
        }
        console.log(this.counter);
      }
    }
  });
}