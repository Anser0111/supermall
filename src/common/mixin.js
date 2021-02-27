import { debounce } from "common/utils";
import BackTop from "components/content/backTop/BackTop.vue";

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      refresh: null
    };
  },
  mounted() {
    // 1.监听item中图片加载完成
    // 如果在created中监听，会概率出现bug：
    // 有可能在回调前，scroll为null，导致无法调用refresh
    this.refresh = debounce(this.$refs.scroll.refresh, 50);

    // 对监听的时间进行保存
    this.itemImgListener = () => {
      this.refresh();
    };
    this.$bus.$on("itemImgLoad", this.itemImgListener);
    // console.log("我是混入的内容");
  }
};

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    };
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    }
  }
};
