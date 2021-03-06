import Vue from 'vue';
import router from './router';
import App from './App.vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import 'tailwindcss/tailwind.css';

const requireComponent = require.context(
    './components',
    false,
    /Base[A-Z]\w+\.(vue|js)$/,
);

requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);

    const componentName = upperFirst(
        camelCase(
            fileName
                .split('/')
                .pop()
                .replace(/\.\w+$/, ''),
        ),
    );

    Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
