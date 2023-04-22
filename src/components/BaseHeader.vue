<template>
  <header class="header header--bg">
    <div class="header__shape">
      <div class="header__shape-inner"></div>
    </div>
    <div class="container">
      <div class="navbar">
        <div class="navbar__row">
          <div class="header__logo">
            <a href="index.html" class="header__logo-img"></a>
          </div>
          <div
            class="navbar__items"
            :class="{ 'navbar__items--is-active': sidebarMenuIsActive }"
          >
            <ul class="navbar__ul">
              <li class="navbar__item">
                <router-link
                  class="navbar__link navbar__link--is-active"
                  :to="{ name: 'home' }"
                  >صفحه اصلی</router-link
                >
              </li>
              <li class="navbar__item navbar__item--has-sub">
                <router-link class="navbar__link" :to="{ name: 'category' }"
                  >دسته بندی</router-link
                >
                <ul class="navbar__subset">
                  <li class="navbar__item">
                    <a href="" class="navbar__link">زیر منو 1</a>
                  </li>
                  <li class="navbar__item">
                    <a href="" class="navbar__link">زیر منو 2</a>
                  </li>
                  <li class="navbar__item navbar__item--has-sub">
                    <a href="" class="navbar__link">زیر منو 3</a>
                    <ul class="navbar__subset">
                      <li class="navbar__item">
                        <a href="" class="navbar__link">زیر منو 1</a>
                      </li>
                      <li class="navbar__item">
                        <a href="" class="navbar__link">زیر منو 2</a>
                      </li>
                      <li class="navbar__item navbar__item--has-sub">
                        <a href="" class="navbar__link">زیر منو 3</a>
                        <ul class="navbar__subset">
                          <li class="navbar__item">
                            <a href="" class="navbar__link">زیر منو 1</a>
                          </li>
                          <li class="navbar__item">
                            <a href="" class="navbar__link">زیر منو 2</a>
                          </li>
                          <li class="navbar__item">
                            <a href="" class="navbar__link">زیر منو 3</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="navbar__item">
                <router-link class="navbar__link" :to="{ name: 'about' }"
                  >درباره ما</router-link
                >
              </li>
              <li class="navbar__item">
                <a href="" class="navbar__link">تماس باما</a>
              </li>
            </ul>
          </div>
          <div class="navbar__action">
            <div class="header__basket" @click="showDropDownBasket">
              <span class="header__basket-icon"></span>
              <span class="header__basket-count">{{ productsInCart.length}}</span>
              <div
                class="header__dropdown"
                :class="{
                  'header__dropdown--is-active': isActiveDropDownBasket,
                }"
              >
                <div
                  class="header__dropdown-content header__dropdown-content--overflow"
                >
                  <div
                    class="header__basket-item"
                    v-for="item in productsInCart"
                    :key="item.id"
                  >
                    <a href="" class="header__basket-link">
                      <img
                        :src="require(`../assets/img/slider/${item.id}.jpg`)"
                        class="header__basket-img"
                      />
                    </a>
                    <div class="header__basket-details">
                      <h5>  
                        <a class="header__basket-title" href=""
                          >{{ `${item.name} ---  ${(item.quantity)}`}} </a
                        >
                      </h5>
                      <div class="header__basket-price">{{ item.price * item.quantity}} تومان</div>
                      <a href="" class="header__basket-remove">حذف</a>
                    </div>
                  </div>
                  <div class="header__basket-btn">
                    <router-link
                      :to="{ name: 'cart' }"
                      class="btn btn--boxshadow btn--brand w--100"
                      >ثبت و نهایی کردن سفارش</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="header__account" @click="showDropDownAccount">
              <span class="header__account-icon"></span>
              <div
                class="header__dropdown header__dropdown--w200"
                :class="{
                  'header__dropdown--is-active': isActiveDropDownAccount,
                }"
              >
                <div class="header__dropdown-content">
                  <router-link
                    :to="{ name: 'login' }"
                    class="header__account-link"
                    >ورود</router-link
                  >
                  <router-link
                    :to="{ name: 'register' }"
                    class="header__account-link"
                    >ثبت نام</router-link
                  >
                </div>
              </div>
            </div>
            <div
              class="header__menu"
              :class="{ 'header__menu--is-active': sidebarMenuIsActive }"
              @click="sidebarMenuIsActive = !sidebarMenuIsActive"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </header>
  
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "BaseHeader",

  data: () => ({
    isActiveDropDownBasket: false,
    isActiveDropDownAccount: false,
    sidebarMenuIsActive: false,
  }),
  computed: {
    ...mapState("cart", ["productsInCart"]),
  },
  methods: {
    showDropDownBasket() {
      this.isActiveDropDownAccount = false;
      this.isActiveDropDownBasket = !this.isActiveDropDownBasket;
    },
    showDropDownAccount() {
      this.isActiveDropDownBasket = false;
      this.isActiveDropDownAccount = !this.isActiveDropDownAccount;
    },
    closeDropDownOutClick(event) {
      if (!event.target.closest(".header__basket,.header__account")) {
        this.isActiveDropDownAccount = false;
        this.isActiveDropDownBasket = false;
      }
      if (!event.target.closest(".navbar")) {
        this.sidebarMenuIsActive = false;
      }
    },
  },
  watch: {
    sidebarMenuIsActive() {
      this.$emit("show-overly", this.sidebarMenuIsActive);
    },
  },
  mounted() {
    document.addEventListener("click", this.closeDropDownOutClick);
  },
  destroyed() {
    document.removeEventListener("click", this.closeDropDownOutClick);
  },
};
</script>

<style lang="scss" scoped>
</style>
