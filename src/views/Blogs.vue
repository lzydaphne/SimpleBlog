<template>
  <div class="blog-card-wrap">
    <div class="blog-cards container">
      <div class="toggle-edit">
        <span>Toggle Editing Post</span>
        <input type="checkbox" v-model="editPost" />
      </div>
      <BlogCard
        :post="post"
        v-for="(post, index) in sampleBlogCards"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import BlogCard from "../components/BlogCard.vue";
export default {
  name: "blogs",
  components: { BlogCard },
  //computed 屬性會將計算後的結果暫存，若它所觀察的屬性 (也就是那些 this.XXX) 沒有被更新的情況下，computed 就不會重複被執行
  //computed呼叫時不需要加上括號，methods才要
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
    //https://book.vue.tw/CH1/1-3-computed-and-methods.html
    //computed 除了可以單純將另一個實體屬性「加工」後回傳 (也就是預設的 get) 之外， 還可以透過 set 寫回這個 computed 屬性
    //若沒有為 computed 屬性加上 set，則不允許手動修改對應的 computed 屬性。 否則在 console 主控台會出現類似： [Vue warn]: Computed property "jpy" was assigned to but it has no setter. 的錯誤訊息。
    editPost: {
      get() {
        return this.$store.state.editPost;
      },
      // 提交 mutations 是改變 Vuex 中 store 的唯一方式
      //payload => 核心資料
      //變數前的 prefix 符號純粹是 Vue.js 的一種撰寫風格，主要是用來辨識該變數對於實體來說是屬於私有屬性還是公開屬性，
      //$ is for public instance properties:
      //_ is for private instance properties:
      set(payload) {
        //提交 PayLoad，觸發mutation
        this.$store.commit("toggleEditPost", payload);
      },
    },
  },
  beforeDestroy() {
    //Vue 實體物件被銷毀前
    this.$store.commit("toggleEditPost", false);
  },
};
</script>

<style lang="scss" scoped>
.blog-cards {
  position: relative;

  .toggle-edit {
    display: flex;
    align-items: center;
    position: absolute;
    top: -70px;
    right: 0;

    span {
      margin-right: 16px;
    }

    input[type="checkbox"] {
      position: relative;
      border: none;
      -webkit-appearance: none;
      background: #fff;
      outline: none;
      width: 80px;
      height: 30px;
      border-radius: 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    input[type="checkbox"]:before {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 20px;
      top: 0;
      left: 0;
      background: #303030;
      transform: scale(1.1);
      transition: 750ms ease all;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    input:checked[type="checkbox"]:before {
      background: #fff;
      left: 52px;
    }
  }
}
</style>
