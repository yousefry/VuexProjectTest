<template>
  <div>
    <footer class="footer">
      <span
        class="scroll__top"
        @click="goTopSite"
        :style="handleScrollTop ? 'display:block' : 'display:none'"
      ></span>
      <div class="footer__top">
        <div class="container">
          <div class="footer__row">
            <div class="footer__getcall">
              <img :src="require('../assets/img/tamasbama.png')" alt="" />
              <div class="footer__getcall-info">
                <h3 class="footer__getcall-h3">با ما تماس بگیرید</h3>
                <span class="gooter__getcall-span"
                  >برای ثبت سفارش و مشاوره با مشاوران ما تماس بگیرید !</span
                >
              </div>
            </div>
            <div class="footer__info">
              <span class="footer__info-span">Email : info@domian.com</span>
              <span class="footer__info-span margin--right-10"
                >Tel : 1023233030</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="footer__main">
        <div class="container">
          <div class="footer__links">
            <a href="" class="footer__link">لینک اول</a>
            <a href="" class="footer__link">لینک اول</a>
            <a href="" class="footer__link">لینک اول</a>
            <a href="" class="footer__link">لینک اول</a>
            <a href="" class="footer__link">لینک اول</a>
            <a href="" class="footer__link">لینک اول</a>
          </div>
          <div class="footer__hr"></div>
          <div class="footer__about">
            <p class="footer__txt">
              وب اموز مرجعی تخصصی برای یادگیری طراحی و برنامه نویسی وب و موبایل
              است. ما در وب اموز با بهره گیری از نیروهای متخصص، باتجربه تمام
              تلاش خود را برای تهیه و تولید آموزش های با کیفیت و کامل و حرفه ای
              انجام می دهیم. باور ما اینست که کاربران ایرانی لایق بهترین ها
              هستند و باید بهترین و بروزترین فیلم های آموزشی، در اختیار آنها
              قرار بگیرد تا بتوانند به سرعت پیشرفت کنند و جزء بهترین ها شوند.
              امید است که با همراهی هر چه بیشتر شما کاربران عزیز در این راه، ما
              را برای حرکتی قدرتمند در مسیر این هدف باارزش یاری دهید.
            </p>
          </div>
        </div>
        <div class="footer__team">
          طراحی و توسعه توسط
          <a href="" class="footer__copy">محمد نیکو</a>
          © 1399
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "BaseFooter",
  data: () => ({
    handleScrollTop: false,
    scrollTimeOut: null,
  }),
  methods: {
    handleScroll() {
      if (this.scrollTimeOut) return;
      this.scrollTimeOut = setTimeout(() => {
        this.handleScrollTop = window.scrollY > 200;
        clearTimeout(this.scrollTimeOut);
        this.scrollTimeOut = 0;
      }, 150);
    },
    goTopSite() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    document.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    document.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
</style>