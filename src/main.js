import Vue from "vue"; // Vue
import App from "./App.vue"; // Vue component
import "./styles/main.scss"; // Sass

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

Vue.filter("camel", function(str) {
    return str.toLowerCase().replace(/^\w|\s\w/g, function(letter) {
        return letter.toUpperCase();
    });
});

new Vue({
    render: h => h(App)
}).$mount("#app");
