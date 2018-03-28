import Vue from 'vue';

export default function skills () {

    

    const app = new Vue({
        data: {
            skillsFrontend: [
                { title: 'HTML5', percents: 90 },
                { title: 'CSS3', percents: 80 },
                { title: 'JavaScript', percents: 30 }
            ]
        }
    });

    app.$mount('#skills-list');


}



