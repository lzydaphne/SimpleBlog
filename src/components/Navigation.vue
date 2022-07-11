<template>
  <header>
    <nav class="container">
      <div class="branding">
        <!-- 使用自定义组件 router-link 来创建链接。
        这使得 Vue Router 可以在不重新加载页面的情况下更改 URL，处理 URL 的生成以及编码 -->
        <!--使用 router-link 组件进行导航 -->
        <!--通过传递 `to` 来指定链接 -->
        <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
        <!-- 冒號後面的部分 (:to) 是指令的“參數”。
          此處，元素的 id attribute 將與組件狀態裡的 name property 保持同步。 -->
        <!-- https://book.vue.tw/CH4/4-3-router-link.html#to-%E5%B1%AC%E6%80%A7 -->
        <!-- 搭配具名路由 -->
        <!-- router-link，切換路徑的連結，實際會渲染出一個 a tag -->
        <!-- https://linwei5316.medium.com/vue-router-4c2aad1cc352 -->
        <!-- 使用具名路由匹配，是 vue-router 去找到符合條件的名稱組件，
        並將其 ‘路徑’ 作為匹配。所以連結顯示的一樣為 path 設定，並不會改成顯示name -->
        <router-link class="header" :to="{ name: 'Home' }">
          FireBlogs
        </router-link>
      </div>
      <div class="nav-links">
        <!-- v-show比起v-if切換更加方便，因為v-show只是多加了css的display none而已 -->
        <!-- 是隱藏元素，不是刪除元素 -->
        <ul v-show="!mobile">
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
          <router-link class="link" to="#">Create Post</router-link>
          <router-link class="link" :to="{ name: 'Login' }">
            Login/Register</router-link
          >
        </ul>
      </div>
    </nav>
    <!-- 建立元件 -->
    <menuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile" />
    <!-- 行動裝置 menu-->
    <!-- name => 自行定義漸變樣式的名稱 -->
    <!-- https://book.vue.tw/CH2/2-5-transitions.html#%E6%9B%BF-transition-%E5%8F%96%E5%90%8D%E7%A8%B1 -->
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
        <router-link class="link" to="#">Create Post</router-link>
        <router-link class="link" :to="{ name: 'Login' }">
          Login/Register</router-link
        >
      </ul>
    </transition>
  </header>
</template>

<script>
import menuIcon from "../assets/Icons/bars-regular.svg";

export default {
  name: "navigation",
  components: {
    menuIcon,
  },
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen(); //app一開始運作時也要檢查一次
  },
  methods: {
    //確認裝置，來決定呈現方法
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },

    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #fff;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;

  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;

    &:hover {
      color: #1eb8b8;
    }
  }

  nav {
    display: flex;
    padding: 25px 0;

    .branding {
      display: flex;
      align-items: center;

      .header {
        font-weight: 600;
        font-size: 24px;
        color: #000;
        text-decoration: none;
      }
    }

    .nav-links {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;

      ul {
        margin-right: 32px;

        .link {
          margin-right: 32px;
        }

        .link:last-child {
          margin-right: 0;
        }
      }

      .profile {
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: #fff;
        background-color: #303030;

        span {
          pointer-events: none;
        }

        .profile-menu {
          position: absolute;
          top: 60px;
          right: 0;
          width: 250px;
          background-color: #303030;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);

          .info {
            display: flex;
            align-items: center;
            padding: 15px;
            border-bottom: 1px solid #fff;

            .initials {
              position: initial;
              width: 40px;
              height: 40px;
              background-color: #fff;
              color: #303030;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
            }

            .right {
              flex: 1;
              margin-left: 24px;

              p:nth-child(1) {
                font-size: 14px;
              }

              p:nth-child(2),
              p:nth-child(3) {
                font-size: 12px;
              }
            }
          }

          .options {
            padding: 15px;
            .option {
              text-decoration: none;
              color: #fff;
              display: flex;
              align-items: center;
              margin-bottom: 12px;

              .icon {
                width: 18px;
                height: auto;
              }
              p {
                font-size: 14px;
                margin-left: 12px;
              }

              &:last-child {
                margin-bottom: 0px;
              }
            }
          }
        }
      }
    }

    .mobile-user-menu {
      margin-right: 40px;
    }
  }

  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
  }

  .mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #303030;
    top: 0;
    left: 0;

    .link {
      padding: 15px 0;
      color: #fff;
    }
  }
  // ue.js 為 <transition> 預先定義了幾種場景，分別是元素進場 (顯示)
  //v-enter-from: 定義元素在進場「之前」的樣式。
  // v-enter-active: 定義元素在進場「過程」的樣式。
  // v-enter-to: 定義元素在進場「結束時」的樣式。
  //元素退場 (消失) ：
  // v-leave-from: 定義元素在退場「之前」的樣式。
  // v-leave-active: 定義元素在退場「過程」的樣式。
  // v-leave-to: 定義元素在退場「結束時」的樣式。
  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 1s ease;
  }
  //	(進場) 漸變動畫執行時
  .mobile-nav-enter {
    transform: translateX(-250px);
  }
  //定義元素在進場「結束時」的樣式
  .mobile-nav-enter-to {
    transform: translateX(0);
  }

  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }
}
</style>
