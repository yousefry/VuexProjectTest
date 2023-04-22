<template>
  <div>
    <main class="main">
      <div class="container">
        <div class="cart">
          <h1 class="cart__title">سبد خرید</h1>
          <div v-show="products.length > 0">
            <form action="">
              <CartItem
                v-for="product in products"
                :key="product.id"
                :product="product"
              />
            </form>
            <div class="cart__info">
              <div class="cart__coupon">
                <form action="">
                  <div class="cart__coupon-div">
                    <input
                      type="text"
                      placeholder="کوپن خود را بنویسد"
                      class="cart__coupon-input"
                    />
                    <button class="btn-coupon">اعمال</button>
                  </div>
                </form>
              </div>
              <div class="cart__table">
                <table>
                  <tbody>
                    <tr>
                      <th>جمع کل</th>
                      <td>{{ priceFormat(subTotal) }} تومان</td>
                    </tr>
                    <tr>
                      <th>وزن</th>
                      <td>700 گرم</td>
                    </tr>
                    <tr>
                      <th>مالیات</th>
                      <td>{{ priceFormat(tax) }} تومان</td>
                    </tr>
                    <tr>
                      <th>تخفیف</th>
                      <td class="text-red">0 تومان</td>
                    </tr>
                    <tr>
                      <th>قابل پرداخت</th>
                      <td class="text-blue">{{ priceFormat(total) }} تومان</td>
                    </tr>
                  </tbody>
                </table>
                <button class="btn btn--brand btn--boxshadow">ثبت سفارش</button>
              </div>
            </div>
          </div>
          <div v-show="products.length < 1">
            <h1>سبد خرید شما خالی است</h1>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import CartItem from "../components/cartItem.vue";
export default {
  name: "CartView",
  components: {
    CartItem,
  },
  data: () => ({}),
  computed: {
    // ...mapState("cart", ["productsInCart"]),
    ...mapState("cart", { products: "productsInCart" }),
    ...mapGetters("cart", ["subTotal", "total", "tax"]),
  },
  methods: {
    priceFormat(price) {
      return new Intl.NumberFormat("en-US").format(price);
    },
  },
};
</script>

<style>
</style>
