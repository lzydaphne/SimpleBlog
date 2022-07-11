import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blogs from "../views/Blogs.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";

Vue.use(VueRouter);
// 建立不同分頁連結
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    // 變更頁面名稱
    meta: {
      title: "Home",
    },
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
    meta: {
      title: "Blogs",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login",
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: "Register",
    },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: {
      title: "Forgot Password",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
//https://book.vue.tw/CH4/4-4-navigation-guards.html
/*路由守衛（Navigation Guards）
作用: 讓我們可以在變更路由的前後，去自動調用它們。
- router.beforeEach 註冊對應的 callback，這樣當「每一個」路由要進入之前，都會先經過這裡
我們可以在 router.beforeEach 的 callback 函式內取得 to 與 from，
它們分別代表： to: 即將進入的路由。 from: 從何處進入的路由。
-  next() 用來表示繼續往下執行的 callback
*/
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | FireBlog`;
  next();
});

export default router;
