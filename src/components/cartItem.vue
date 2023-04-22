<template>
  <div class="cart__item">
    <div class="cart__row">
      <div class="cart__image">
        <a href="" class="cart__image-link"
          ><img
            :src="require(`../assets/img/slider/${product.id}.jpg`)"
            alt=""
            class="cart__image-img"
        /></a>
      </div>
      <div class="cart__details">
        <h5 class="cart__details-h5">
          <a href="" target="_blank" class="cart__details-link">{{
            product.name
          }}</a>
        </h5>
        <div class="cart__deatils-features">
          {{ priceFormat(product.price) }} تومان
        </div>
        <div class="cart__deatils-code">تعداد :{{ product.quantity }}</div>
      </div>
      <div class="cart__amounts">
        <div class="cart__amounts-div">
          <input
            type="number"
            class="txt"
            placeholder="تعداد"
            max="1000"
            min="1"
            @change="changQuantityProduct"
            v-model.number="quantity"
          />
          <button
            type="button"
            class="router-link-active router-link-exact-active btn btn--boxshadow btn--brand w--100"
            @click="chngQuantitiy({ product, quantity })"
          >
            افزودن
          </button>

          <button
            type="button"
            @click="removeProduct({ product })"
            class="cart__amounts-remove"
          >
            حذف
          </button>
        </div>
      </div>
      <div class="cart__total">
        <div class="cart__total-div">
          <h6 class="cart__total-title">جمع</h6>
          {{ priceFormat(product.quantity * product.price) }} تومان
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CartItem",
  props: {
    product: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      quantity: this.product.quantity,
    };
  },
  methods: {
    priceFormat(price) {
      return new Intl.NumberFormat("en-US").format(price);
    },
    ...mapActions("cart", ["chngQuantitiy", "removeProduct"]),
    changQuantityProduct() {
      this.chngQuantitiy({
        product: this.product,
        quantity: this.quantity,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>