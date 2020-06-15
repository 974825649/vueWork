<template>
  <div class="modelShowWrap">
    <HomeHeader></HomeHeader>
    <div class="modelShow">
      <h1>{{ titleName.t1 }}</h1>
      <h2 v-html="t2"></h2>
      <el-button>
        <a :href="eleHref">饿了么UI</a>
      </el-button>
      <el-button type="danger" @click="addSome">饿了么UI</el-button>

      <el-input v-model="text" type="text" placeholder="nothing"></el-input>
      {{ text }}
      {{ alltext}}
      <ul>
        <li v-for="(item,i) in titleName" :key="i">{{ i }} 的名字 {{ item }}</li>
      </ul>

      <div>姓：{{name.fn}} 名：{{name.ln}} 姓名：{{fullname}}</div>

      <div>
        <h1>轮播图demo</h1>
        <Carousel></Carousel>
        
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeader from "@/components/header/HomeHeader";
import Carousel from "../../components/common/Carousel";
export default {
  name: "modelShow_index",
  data() {
    return {
      titleName: {
        t1: "东方",
        t2: "舰娘"
      },
      title3: "模型展示",
      t2: "<span>这是t2</span>",
      eleHref: "https://element.eleme.cn/",
      text: "hehe",
      alltext: "",
      name: {
        fn: "魂魄",
        ln: "妖梦"
      }
    };
  },
  components: {
    HomeHeader,
    Carousel
  },
  computed: {
    fullname() {
      return this.name.fn + this.name.ln;
    }
  },
  methods: {
    addSome() {
      this.alltext += this.text;
    }
  }
};
</script>

<style lang="scss" type="text/scss" scoped>
.modelShowWrap {
  height: 100%;
  .modelShow {
    padding-top: 0.65rem;
    height: 100%;
  }
}
</style>
