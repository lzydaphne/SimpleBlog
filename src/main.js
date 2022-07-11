import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2Editor from "vue2-editor";
import firebase from "firebase/app";
import "firebase/auth";

Vue.use(Vue2Editor);

Vue.config.productionTip = false;

let app;
/**這樣的寫法改善了一個問題:「原有的blog app會比firebase更早啟動，導致抓不到firebase中的uid」
 * 所以，目前的寫法確保ˋfirebase啟動之後，我們的blog才Init
 *https://youtu.be/ISv22NNL-aE?t=11176
 */
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
