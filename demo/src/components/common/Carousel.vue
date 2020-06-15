<template>
  <div class="carousel">
    <img v-for="(item,i) in img" :key="i" :src="item.url" :alt="item.name" v-show="n===i" />
    <ul class="carousel-indicators">
      <li
        class="carousel-indicator"
        v-for="(item,i) in img"
        :key="i"
        :class="(n===i)?'selected':''"
        @click="n=i"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  components: {},

  data() {
    return {
      n: 0,
      img: [
        { url: require("../../assets/images/index-intro1.png"), name: "1" },
        { url: require("@/assets/images/login-img.png"), name: "2" }
      ]
    };
  },

  mounted() {
    this.autoplay();
  },

  methods: {
    autoplay() {
      setInterval(this.paly, 3000);
    },
    paly() {
      this.n++;
      if (this.n === this.img.length) {
        this.n = 0;
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.carousel {
  margin: auto;
  width: 300px;
  height: 300px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .carousel-indicators {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .carousel-indicator {
    background-color: rgba(255, 255, 255, 0.5);
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    cursor: pointer;
  }
  .selected {
    background-color: #000;
  }
}
</style>