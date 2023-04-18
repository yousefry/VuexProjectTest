<template>
  <div>
    <main class="main">
      <div class="container">
        <div class="page">
          <div class="page__sidebar">
            <div class="box" v-show="selectedFilters.length > 0">
              <div class="box-filters">
                <div class="box-filters__header">
                  <span class="box-filters__title">فیلتر های اعمال شده</span>
                  <a
                    href=""
                    class="box-filters__clear"
                    @click.prevent="removeAllFilter"
                    >حذف همه</a
                  >
                </div>
                <ul class="box-filters__ul">
                  <li
                    class="box-filters__li"
                    v-for="filter in selectedFilters"
                    :key="filter"
                  >
                    <button
                      class="box-filters__button"
                      @click="removeFilter(filter)"
                    ></button>
                    <span class="box-filters__name">{{ filter }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="box">
              <div class="box__row">
                <div
                  class="box__header"
                  :class="{ 'box--togglable': !isOpenBrandMenu }"
                  @click="isOpenBrandMenu = !isOpenBrandMenu"
                >
                  برند ها
                </div>
                <div
                  class="box__filter"
                  :style="isOpenBrandMenu ? 'display:block' : 'display:none'"
                >
                  <div class="box__content-container">
                    <div class="box__content">
                      <ul class="box__ul">
                        <li class="box__li">
                          <label
                            class="ui-checkbox"
                            data-fa="سامسونگ"
                            data-en="Sumsung"
                            data-serach="Sumsung سامسونگ"
                          >
                            <input
                              type="checkbox"
                              class="ui-checkbox__input"
                              value="سامسونگ"
                              v-model="selectedFilters"
                            />
                            <span class="ui-checkbox__mark"></span>
                            سامسونگ
                          </label>
                        </li>
                        <li class="box__li">
                          <label
                            class="ui-checkbox"
                            data-fa="سونی"
                            data-en="sony"
                            data-serach="sony سونی"
                          >
                            <input
                              type="checkbox"
                              class="ui-checkbox__input"
                              value="سونی"
                              v-model="selectedFilters"
                            />
                            <span class="ui-checkbox__mark"></span>
                            سونی
                          </label>
                        </li>
                        <li class="box__li">
                          <label
                            class="ui-checkbox"
                            data-fa="اپل"
                            data-en="apple"
                            data-serach="apple اپل"
                          >
                            <input
                              type="checkbox"
                              class="ui-checkbox__input"
                              value="اپل"
                              v-model="selectedFilters"
                            />
                            <span class="ui-checkbox__mark"></span>
                            اپل
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="box__row">
                <div
                  class="box__header yousef"
                  :class="{ 'box--togglable': !isOpenColorMenu }"
                  @click="isOpenColorMenu = !isOpenColorMenu"
                >
                  رنگ ها
                </div>
                <div
                  class="box__filter"
                  :style="isOpenColorMenu ? 'display:block' : 'display:none'"
                >
                  <div class="box__content-container">
                    <div class="box__content">
                      <ul class="box__ul">
                        <li class="box__li">
                          <label
                            class="ui-checkbox"
                            data-fa="مشکی"
                            data-serach="balck مشکی"
                          >
                            <input
                              type="checkbox"
                              class="ui-checkbox__input"
                              value="مشکی"
                              v-model="selectedFilters"
                            />
                            <span class="ui-checkbox__mark"></span>
                            مشکی
                            <span
                              class="filter__color"
                              style="background: rgb(0, 0, 0)"
                            ></span>
                          </label>
                        </li>
                        <li class="box__li">
                          <label
                            class="ui-checkbox"
                            data-fa="آبی"
                            data-serach="blue آبی"
                          >
                            <input
                              type="checkbox"
                              class="ui-checkbox__input"
                              value="آبی"
                              v-model="selectedFilters"
                            />
                            <span class="ui-checkbox__mark"></span>
                            آبی
                            <span
                              class="filter__color"
                              style="background: rgb(0, 0, 255)"
                            ></span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="box box--switcher">
              <label class="ui-switcher">
                <input type="checkbox" class="ui-switcher__input" />
                <span class="ui-switcher__slider">
                  <span class="ui-switcher__toggle"></span>
                </span>
                فقط کالای های موجود
              </label>
            </div>
          </div>
          <div class="page__content">
            <h1>نام کاربر : {{ user }}</h1>
            <ul class="breadcrumb">
              <li class="breadcrumb__item breadcrumb__item--hide">
                <a href="" class="breadcrumb__link"
                  ><span class="breadcrumb__span">صفحه اصلی</span></a
                >
              </li>
              <li class="breadcrumb__item">
                <a href="" class="breadcrumb__link"
                  ><span class="breadcrumb__span">فهرست محصولات</span></a
                >
              </li>
              <li class="breadcrumb__item">
                <a href="" class="breadcrumb__link"
                  ><span class="breadcrumb__span">محصول شماره یک</span></a
                >
              </li>
            </ul>
            <div class="products">
              <router-link
                :to="{ name: 'product', params: { id: product.id } }"
                v-for="product in products"
                :key="product.id"
                class="products__item"
              >
                <div class="card">
                  <div class="card__image">
                    <img
                      :src="require(`../assets/img/slider/${product.id}.jpg`)"
                      alt=""
                      class="card__img"
                    />
                  </div>
                  <div class="card__title">{{ product.name }}</div>
                  <div class="card__price">
                    <span class="card__compare-price">12,200,000</span>
                    <span class="card__total-price"
                      >{{ product.price }} تومان</span
                    >
                  </div>
                  <span class="card__discount">%6</span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapState,mapActions } from "vuex";
export default {
  name: "CategoryView",
  data: () => ({
    isOpenBrandMenu: true,
    isOpenColorMenu: true,
    selectedFilters: [],
  }),
  computed: {
    // this codes for get data from state in store
    // ...mapState({
    //   products: "products",
    //   user: (state) => state.user,
    // }),

    // this codes for get data from getters in store

    // products() {
    //   return this.$store.getters.products;
    // },
    // user() {
    //   return this.$store.getters.userName;
    // },

    ...mapGetters({
      products: "products",
      user: "userName",
    }),
  },
  methods: {
    removeAllFilter() {
      this.selectedFilters = [];
    },
    removeFilter(filter) {
      this.selectedFilters = this.selectedFilters.filter(
        (item) => item !== filter
      );
    },
    ...mapActions(['getProducts'])
  },
  created() {
    this.$store.dispatch("getProducts");

    // this with mapActions from methods
    this.getProducts({token:'myiyraai29'});
  },
};
</script>

<style lang="scss" scoped></style>
