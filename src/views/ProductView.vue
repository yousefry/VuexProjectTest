<template>
  <div>
    <div id="modal__gallery" class="modal" v-show="isShowModal">
      <div class="modal__content" style="width: 50%">
        <span class="modal__close" @click="closeModal">×</span>
        <div class="modal__body" tabindex="0" @focusout="closeModal">
          <img :src="urlImageModal" class="show__gallery" />
        </div>
      </div>
    </div>

    <main class="main">
      <div class="container">
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
        <div class="product">
          <div class="product__header">
            <div class="product__expiration">
              <div
                class="count-down__timer"
                data-countdown="2021-08-07 00:00:00"
                id="count-dowm__timer"
              >
                {{ diff }}
              </div>
            </div>
            <div class="product__row">
              <div class="prodcut__gallery">
                <div class="gallery">
                  <span class="gallery__count">
                    <span class="gallery__number1">{{ slideIndex + 1 }}</span>
                    <span class="gallery__number2">{{
                      slideGallery.length
                    }}</span>
                  </span>
                  <div class="gallery__slides">
                    <div
                      class="gallery__slide"
                      v-for="(slide, index) in slideGallery"
                      :key="index"
                    >
                      <img
                        class="gallery__img"
                        :src="slide.img"
                        @click="showModal(slide.img)"
                        v-show="index === slideIndex"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="next_prev">
                    <a @click="move(-1)" class="gallery__prev">&#10094;</a>
                    <a @click="move(1)" class="gallery__next">&#10095;</a>
                  </div>
                  <div class="gallery__content">
                    <div class="gallery__items">
                      <div
                        class="gallery__item"
                        :class="{
                          'gallery__item--is-acitve': index === slideIndex,
                        }"
                        v-for="(slide, index) in slideGallery"
                        :key="index"
                      >
                        <img
                          :src="slide.img"
                          @click="currentSlide(index)"
                          class="gallery__item-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product__left">
                <div class="product__category">دسته وب</div>
                <div class="product__info">
                  <h1 class="product__title">{{ product?.name }}</h1>

                  <div class="rating">
                    <div class="rating__star">
                      <span
                        v-for="rate in ratings"
                        :key="rate.title"
                        class="rating__rate"
                        :data-width="rate.width"
                        :data-title="rate.title"
                        @click="rateWidth = rate.width"
                        @mouseover="rateShow = false"
                        @mouseleave="rateShow = true"
                      ></span>
                    </div>
                    <div
                      class="rating__fstar"
                      :style="rateShow ? `width: ${rateWidth}%;` : ''"
                    >
                      <span class="rating__frate"></span>
                      <span class="rating__frate"></span>
                      <span class="rating__frate"></span>
                      <span class="rating__frate"></span>
                      <span class="rating__frate"></span>
                    </div>
                  </div>
                  <div class="rating-star">
                    4.5
                    <span class="rating__num">(65)</span>
                  </div>
                </div>
                <div class="controls">
                  <div class="controls__group"></div>
                  <div class="controls__group"></div>
                </div>
                <div class="product__price">
                  <h5 class="product__campare-price">12,200,200</h5>
                  <h5 class="product__total-price">22,200,200 تومان</h5>
                  <div class="product__discount">
                    <span class="product__dicount-value">6%</span>
                    <span class="product__dicount-label">تخفیف</span>
                  </div>
                </div>
                <div class="alert alert--warning d--none">
                  این محصول موجود نمی باشد
                </div>
                <div class="product__buttons">
                  <button class="btn btn--brand btn--boxshadow btn--add-basket">
                    افزدون به سبد خرید
                  </button>
                  <button class="btn btn-transparent btn--fav">
                    افردون به علاقه مندی ها
                  </button>
                  <a href="" class="btn btn-transparent btn--compare">مقایسه</a>
                </div>
              </div>
            </div>
          </div>
          <div class="product__desc">
            <p class="product__desc-content">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. لورم
              ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
              از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
              سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
              کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
          </div>
        </div>
        <SwiperSlider>
          <template v-slot:title> محصولات مرتبط </template>
          <router-link
            :to="{ name: 'product', params: { id: 2 } }"
            class="swiper-slide"
            v-for="item in 6"
            :key="item"
          >
            <div class="slider__box">
              <div class="slider__image">
                <img
                  :src="require(`../assets/img/slider/${item}.jpg`)"
                  alt=""
                  class="slider__img"
                />
              </div>
              <div class="slider__title2">گوشی موبایل سامسونگ مدل نوت 20</div>
              <div class="slider__price">
                <span class="slider__compare-price">12,200,000</span>
                <span class="slider__total-price">12,400,000 تومان</span>
              </div>
              <span class="slider__discount">%6</span>
            </div>
          </router-link>
        </SwiperSlider>
        <div class="product-details">
          <div class="tab">
            <div class="tab__items">
              <span
                class="tab__item tab__item--compare"
                :class="{ 'tab__item--is-active': activeTab === 'compare' }"
                @click="activeTab = 'compare'"
                >نقد و برسی</span
              >
              <span
                class="tab__item tab__item--featrues"
                :class="{ 'tab__item--is-active': activeTab === 'featrue' }"
                @click="activeTab = 'featrue'"
                >ویژیگی ها</span
              >
              <span
                class="tab__item tab__item--comments"
                :class="{ 'tab__item--is-active': activeTab === 'comment' }"
                @click="activeTab = 'comment'"
                >نظرات</span
              >
            </div>
            <div class="tab__sections">
              <section
                class="tab__section tab__section--compare"
                :style="
                  activeTab === 'compare' ? 'display:block;' : 'display:none;'
                "
              >
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و
                  <a href="#" style="user-select: auto"
                    >برای شرایط فعلی تکنولوژی</a
                  >
                  مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                  باشد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                  چاپ و با استفاده از طراحان گرافیک است.
                  <strong>چاپگرها و متون بلکه روزنامه</strong> و مجله در ستون و
                  سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                  <s>مورد نیاز و کاربردهای</s> متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                  از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                  بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                  شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                  <u>هدف بهبود ابزارهای کاربردی می باشد</u>.
                </p>
                <h1>سرتیتر بزرگ از نوع h1</h1>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                  از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                  بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                  شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                  ابزارهای کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید
                  سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                  <em
                    >چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                    لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                    متنوع با هدف بهبود ابزارهای کاربردی می باشد.</em
                  >
                </p>
                <h2>سرتیتر h2</h2>
                <blockquote>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد.
                  </p>
                </blockquote>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.&nbsp;لورم ایپسوم متن ساختگی با تولید سادگی
                  نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها
                  و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                  برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                  بهبود ابزارهای کاربردی می باشد.&nbsp;لورم ایپسوم متن ساختگی با
                  تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                  است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                  لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                  متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </p>
                <hr />
                <p><strong>سرتیتر درشت</strong></p>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
                <ul>
                  <li>گزینه ی اول فهرست بدون شماره</li>
                  <li>گزینه ی دوم برای نمونه</li>
                  <li>گزینه ی سود</li>
                  <li>الی آخر...</li>
                </ul>
                <h3>سرتیتر h3</h3>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                  <span style="color: rgb(226, 80, 65)"
                    >صنعت چاپ و با استفاده</span
                  >
                  از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
                  ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                  نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                  از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                  بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                  شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                  ابزارهای کاربردی می باشد.
                </p>
                <h4>سرتیتر h4</h4>
                <ol>
                  <li>گزینه ی اول از فهرست مرتب</li>
                  <li>گزینه ی دوم برای نمونه</li>
                  <li>گزینه ی سوم</li>
                  <li>الی آخر...</li>
                </ol>
                <p>
                  Est ut equidem facilis nominavi, ei decore menandri salutandi
                  eam, in mei doming recusabo. Detracto deleniti instructior ad
                  pri. Tincidunt maiestatis scribentur id ius, pri ferri brute
                  atqui id. No cum affert euripidis, vix clita molestie an. In
                  eos tempor eripuit consulatu, at probo porro officiis nec,
                  sumo tation persius cu nam. Ad usu ancillae suavitate. Ex suas
                  tamquam ius.
                </p>
                <pre>کد دستوری در این&zwnj;جا قرار می&zwnj;گیرد.</pre>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                  از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                  بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                  شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                  ابزارهای کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید
                  سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                  است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                  هدف بهبود ابزارهای کاربردی می باشد.
                </p>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                  از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                  بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                  شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                  ابزارهای کاربردی می باشد.<img src="img/reactjs.png" />
                </p>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                  از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                  بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                  شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                  ابزارهای کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید
                  سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                  است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                  هدف بهبود ابزارهای کاربردی می باشد.
                </p>
              </section>
              <section
                class="tab__section tab__section--featrues"
                :style="
                  activeTab === 'featrue' ? 'display:block;' : 'display:none;'
                "
              >
                <div class="tab__section-field">
                  <div class="col-3">
                    <h6 class="tab__section-name">ویژیگی 1</h6>
                  </div>
                  <div class="col-9">
                    <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                  </div>
                </div>
                <div class="tab__section-field">
                  <div class="col-3">
                    <h6 class="tab__section-name">ویژیگی 1</h6>
                  </div>
                  <div class="col-9">
                    <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                  </div>
                </div>
                <div class="tab__section-field">
                  <div class="col-3">
                    <h6 class="tab__section-name">ویژیگی 1</h6>
                  </div>
                  <div class="col-9">
                    <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                  </div>
                </div>
                <div class="tab__section-field">
                  <div class="col-3">
                    <h6 class="tab__section-name">ویژیگی 1</h6>
                  </div>
                  <div class="col-9">
                    <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                    <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                    <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                    <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                    <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                    <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                    <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                    <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                  </div>
                </div>
                <div class="tab__section-field">
                  <div class="col-3">
                    <h6 class="tab__section-name">ویژیگی 1</h6>
                  </div>
                  <div class="col-9">
                    <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                  </div>
                </div>
                <div class="tab__section-field">
                  <div class="col-3">
                    <h6 class="tab__section-name">ویژیگی 1</h6>
                  </div>
                  <div class="col-9">
                    <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                  </div>
                </div>
                <div class="tab__section-field">
                  <div class="col-3">
                    <h6 class="tab__section-name">ویژیگی 1</h6>
                  </div>
                  <div class="col-9">
                    <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                  </div>
                </div>
              </section>
              <section
                class="tab__section tab__section--comments"
                :style="
                  activeTab === 'comment' ? 'display:block;' : 'display:none;'
                "
              >
                <div class="comments" id="comments">
                  <div class="comments__send">
                    <div class="comments__title">
                      <h3 class="comments__h3">دیدگاه خود را بنویسد</h3>
                      <span class="comments__count">دیدگاه ها ( 150 )</span>
                    </div>
                    <textarea
                      class="txt txt--textarea"
                      placeholder="بنویسد"
                    ></textarea>
                    <button class="btn btn--brand btn--boxshadow">
                      ارسال نظر
                    </button>
                    <button class="btn btn--cancel btn--boxshadow-cancel">
                      انصراف
                    </button>
                  </div>
                </div>

                <div class="comments__list">
                  <div id="comment__1">
                    <div class="comments__box">
                      <div class="comments__inner">
                        <div class="comments__header">
                          <div class="comments__row">
                            <div class="comments__info">
                              <div class="comments__avatar">
                                <img
                                  src="img/profile.jpg"
                                  class="comments__img"
                                  alt=""
                                />
                              </div>
                              <div class="comments__details">
                                <h5 class="comments__author">
                                  <span class="comments__author-name"
                                    >محمد نیکو</span
                                  >
                                </h5>
                                <span class="comments__date">555 روز پیش</span>
                              </div>
                            </div>
                            <a
                              href="#comments"
                              class="btn btn--brand btn--reply btn--boxshadow"
                              >پاسخ</a
                            >
                          </div>
                        </div>
                        <div class="comments__body">
                          لورم ایپسوم
                          متـــــــــــــــــــــــــــــــــــــــــــــــــــن
                          ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                          مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                          تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                          ابزارهای کاربردی می باشد.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="comment__2">
                    <div class="comments__box">
                      <div class="comments__inner">
                        <div class="comments__header">
                          <div class="comments__row">
                            <div class="comments__info">
                              <div class="comments__avatar">
                                <img
                                  src="img/profile.jpg"
                                  class="comments__img"
                                  alt=""
                                />
                              </div>
                              <div class="comments__details">
                                <h5 class="comments__author">
                                  <span class="comments__author-name"
                                    >محمد نیکو</span
                                  >
                                </h5>
                                <span class="comments__date">555 روز پیش</span>
                              </div>
                            </div>
                            <a
                              href="#comments"
                              class="btn btn--brand btn--reply btn--boxshadow"
                              >پاسخ</a
                            >
                          </div>
                        </div>
                        <div class="comments__body">
                          لورم ایپسوم
                          متـــــــــــــــــــــــــــــــــــــــــــــــــــن
                          ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                          مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                          تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                          ابزارهای کاربردی می باشد.
                        </div>
                      </div>
                      <div class="comments__subset">
                        <div id="comment__3">
                          <div class="comments__box">
                            <div class="comments__inner">
                              <div class="comments__header">
                                <div class="comments__row">
                                  <div class="comments__info">
                                    <div class="comments__avatar">
                                      <img
                                        src="img/profile.jpg"
                                        class="comments__img"
                                        alt=""
                                      />
                                    </div>
                                    <div class="comments__details">
                                      <h5 class="comments__author">
                                        <span class="comments__author-name"
                                          >محمد نیکو</span
                                        >
                                      </h5>
                                      <span class="comments__date"
                                        >555 روز پیش</span
                                      >
                                    </div>
                                  </div>
                                  <a
                                    href="#comments"
                                    class="btn btn--brand btn--reply btn--boxshadow"
                                    >پاسخ</a
                                  >
                                </div>
                              </div>
                              <div class="comments__body">
                                لورم ایپسوم
                                متـــــــــــــــــــــــــــــــــــــــــــــــــــن
                                ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است. چاپگرها و متون
                                بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                                است و برای شرایط فعلی تکنولوژی مورد نیاز و
                                کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                                باشد.
                              </div>
                            </div>
                            <div class="comments__subset">
                              <div id="comment__4">
                                <div class="comments__box">
                                  <div class="comments__inner">
                                    <div class="comments__header">
                                      <div class="comments__row">
                                        <div class="comments__info">
                                          <div class="comments__avatar">
                                            <img
                                              src="img/profile.jpg"
                                              class="comments__img"
                                              alt=""
                                            />
                                          </div>
                                          <div class="comments__details">
                                            <h5 class="comments__author">
                                              <span
                                                class="comments__author-name"
                                                >محمد نیکو</span
                                              >
                                            </h5>
                                            <span class="comments__date"
                                              >555 روز پیش</span
                                            >
                                          </div>
                                        </div>
                                        <a
                                          href="#comments"
                                          class="btn btn--brand btn--reply btn--boxshadow"
                                          >پاسخ</a
                                        >
                                      </div>
                                    </div>
                                    <div class="comments__body">
                                      لورم ایپسوم
                                      متـــــــــــــــــــــــــــــــــــــــــــــــــــن
                                      ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                                      و با استفاده از طراحان گرافیک است. چاپگرها
                                      و متون بلکه روزنامه و مجله در ستون و
                                      سطرآنچنان که لازم است و برای شرایط فعلی
                                      تکنولوژی مورد نیاز و کاربردهای متنوع با
                                      هدف بهبود ابزارهای کاربردی می باشد.
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import moment from "moment";

import SwiperSlider from "@/components/SwiperSlider.vue";
import "../assets/css/modal.css";
import { mapGetters, mapMutations } from "vuex";
import axios from "axios";
import {SET_PRODUCTS_MUTATIONS} from '@/store/types.js'
export default {
  name: "ProductView",
  components: {
    SwiperSlider,
  },
  data: () => ({
    diff: null,
    dateCoutDown: moment("2023-04-10 00:00:00"),
    slides: [
      { img: require("../assets/img/slideshow/1.png") },
      { img: require("../assets/img/slideshow/2.png") },
      { img: require("../assets/img/slideshow/3.png") },
      { img: require("../assets/img/slideshow/4.png") },
    ],
    indexSlider: 0,
    slideGallery: [
      { img: require("../assets/img/gallery/1.jpg") },
      { img: require("../assets/img/gallery/2.jpg") },
      { img: require("../assets/img/gallery/3.jpg") },
      { img: require("../assets/img/gallery/4.jpg") },
      { img: require("../assets/img/gallery/5.jpg") },
      { img: require("../assets/img/gallery/6.jpg") },
      { img: require("../assets/img/gallery/7.jpg") },
      { img: require("../assets/img/gallery/8.jpg") },
    ],
    slideIndex: 0,
    isShowModal: false,
    urlImageModal: null,
    ratings: [
      { width: 100, title: "عالی" },
      { width: 80, title: "خوب" },
      { width: 60, title: "معمولی" },
      { width: 40, title: "ضعیف" },
      { width: 20, title: "بد" },
    ],
    rateWidth: null,
    rateShow: false,
    colorSelected: null,
    colorOptions: ["صورتی", "قرمز", "قهوه ای", "زرد"],
    languageSelected: [],
    languageOptions: [
      { name: "Vue.js", language: "JavaScript" },
      { name: "Adonis", language: "JavaScript" },
      { name: "Rails", language: "Ruby" },
      { name: "Sinatra", language: "Ruby" },
      { name: "Laravel", language: "PHP" },
      { name: "Phoenix", language: "Elixir" },
    ],
    activeTab: "compare",
    product: {},
  }),
  methods: {
    move(n) {
      if (this.slideIndex + n >= this.slideGallery.length) {
        this.slideIndex = 0;
      } else if (this.slideIndex + n < 0) {
        this.slideIndex = this.slideGallery.length - 1;
      } else {
        this.slideIndex += n;
      }
    },
    currentSlide(index) {
      this.slideIndex = index;
    },
    showModal(image) {
      this.isShowModal = true;
      this.urlImageModal = image;
      document.body.style.overflow = "hidden";
    },
    closeModal() {
      this.isShowModal = false;
      document.body.style.overflow = "unset";
      this.urlImageModal = "";
    },
    rateProduct() {
      console.log("its ok");
    },
    ...mapMutations([SET_PRODUCTS_MUTATIONS])
  },
  async created() {
    setInterval(() => {
      let timeDiff = this.dateCoutDown.diff(moment());
      let duration = moment.duration(timeDiff);
      this.diff = `${Math.floor(
        duration.asDays()
      )}:${duration.days()}:${duration.minutes()}:${duration.seconds()}`;
    }, 1000);
    this.product = this.$store.getters.getProductById(
      parseInt(this.$route.params.id)
    );

    // if (!this.product) {
    //   this.$store.dispatch("getProducts").then(() => {
    //     this.product = this.$store.getters.getProductById(
    //       parseInt(this.$route.params.id)
    //     );
    //   });
    // }

    // with mutation
    if (!this.product) {
      const { data } = await axios.get(
        "https://gist.githubusercontent.com/yousefry/1a28a4feaccedd6ddab3746899645555/raw/2ee20ef04b7fd62525ba7970c41facab9444da02/products.json"
      );

      // this.$store.commit(SET_PRODUCTS_MUTATIONS, data);
      
      // this with mapMutations from methods
      this.SET_PRODUCTS(data)

      this.product = this.$store.getters.getProductById(
        parseInt(this.$route.params.id)
      );
    }
  },
};
</script>

<style scoped>
.gallery {
  position: relative;
}
</style>
