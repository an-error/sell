<template>
<div class="goods">
  <div class="menu-wrapper" ref="menuWrapper">
    <ul class="content">
      <li v-for="(item,index) in goods" :key="index" class="menu-item border-1px" :class="{current:index===currentIndex}" @click="selectMenu(index,$event)">
        <span class="menu-name"><span v-show="item.type>0"><icon :type="item.type" :size="3" :style="smallIcon"></icon></span>{{item.name}}</span>
      </li>
  </ul>
  </div>
  <div class="goods-wrapper" ref="goodsWrapper">
    <div>
      <ul>
        <li  v-for="(item,index) in goods" :key="index" class="foods-item foods-item-hook">
          <div class="title">{{item.name}}</div>
          <ul>
            <li v-for="(food,index) in item.foods" :key="index" class="food-item border-1px">
              <div class="icon">
                <img :src="food.icon" />
              </div>
              <div class="content">
              <p class="name">{{food.name}}</p>
              <p class="description">{{food.description}}</p>
              <div class="extra">
              <span>月售{{food.sellCount}}份</span>
              <span>好评率{{food.rating}}%</span>
              </div>
              <div class="price">
              <span class="new">￥{{food.price}}</span>
              <span v-show="food.oldPrice" class="old">￥{{food.oldPrice}}</span>
              </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <shopping-cart :price="20" :deliver="7" :minPrice="12"></shopping-cart>
</div>
</template>
<script type="text/javascript">
import BScroll from 'better-scroll';
import icon from 'components/icon/icon';
import shoppingCart from 'components/shoppingCart/shoppingCart';
const ERR_OK = 0;
export default {
  data() {
    return {
      goods: [],
      smallIcon: {
        width: '12px',
        height: '12px',
        backgroundSize: '12px 12px',
        marginRight: '4px'
      },
      foodsHeight: [],
      scrollY: 0,
      seller: this.$route.params.seller
    };
  },
  /* props: {
    seller: {
      type: 'Object'
    }
  }, */
  computed: {
    currentIndex() {
      // console.log('scrollY:' + this.scrollY);
      for (let i = 0; i < this.foodsHeight.length; i++) {
        let height0 = this.foodsHeight[i];
        let height1 = this.foodsHeight[i + 1];
        if ((this.scrollY >= height0 && this.scrollY < height1) || height1 === this.foodsHeight.length) {
          // console.log('index:' + i);
          return i;
        }
      }
      return 0;
    }
  },
  created() {
    this.$http.get('/api/goods').then(function(response) {
      response = response.body;
      if (response.errno === ERR_OK) {
        this.goods = response.data;
        this.$nextTick(() => {
          this._initScroll();
          this._calculateHeight();
        });
      }
    });
  },
  methods: {
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      });
      this.goodsScroll = new BScroll(this.$refs.goodsWrapper, {
        probeType: 3
      });
      this.goodsScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y));
      });
      /* this.foodsScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y));
      }); */
    },
    _calculateHeight() {
      let foodsHeight = this.$refs.goodsWrapper.getElementsByClassName('foods-item-hook');
      let height = 0;
      this.foodsHeight.push(height);
      for (let i = 0; i < foodsHeight.length; i++) {
        height += foodsHeight[i].clientHeight;
        this.foodsHeight.push(height);
      }
      // console.log(this.foodsHeight);
    },
    selectMenu(index, event) {
      if (!event._constructed) {
        return;
      }
      console.log(index);
      let foodList = this.$refs.goodsWrapper.getElementsByClassName('foods-item-hook');
      this.goodsScroll.scrollToElement(foodList[index]);
    }
  },
  components: {
    icon,
    shoppingCart
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";
  .goods
    display: flex;
    position: absolute;
    top: 174px;
    bottom: 46px;
    width: 100%;
    overflow: hidden;
    .menu-wrapper
      flex: 0 0 80px;
      width: 80px;
      .menu-item
        display: table;
        height: 54px;
        width: 56px;
        padding: 0 14px;
        background-color: #f3f5f7;
        line-height: 14px;
        &.current
          font-weight: 700;
          background: white;
          margin-top: -1;
          border-none();
        .menu-name
          display: table-cell;
          vertical-align: middle;
          font-size: 12px;
          border-1px(rgba(7,17,27,0.1));
    .goods-wrapper
      flex: 1;
      .title
        height: 26px;
        font-size: 12px;
        font-weight: 700;
        color: rgb(147,153,159);
        line-height: 26px;
        padding-left: 14px;
        background-color: rgba(7,17,27,0.1);
      .food-item
        display: flex;
        margin: 18px;
        border-1px(rgba(7,17,27,0.1));
        &:last-child
          border-none();
          margin-bottom: 0;
        .icon
          flex: 0 0 57px;
          width: 57px;
          margin-right: 10px;
          img
            width: 57px;
            height: 57px;
        .content
          flex: 1;
          margin-right: 10px;
          .name
            font-size: 14px;
            color: rgb(7,17,27);
            line-height: 14px;
            margin: 2px 0 8px 0;
          .description
            font-size: 10px;
            line-height: 12px;
            color: rgb(147,153,159);
            margin-bottom: 8px;
          .extra
            font-size: 10px;
            line-height: 10px;
            color: rgb(147,153,159);
            margin-bottom: 8px;
            span:first-child
              margin-right: 12px;
          .price
            font-size: 10px;
            font-weight: 700;
            line-height: 24px;
            .new
              color: red;
              margin-left: 8px;
            .old
              color: rgb(147,153,159);
              text-decoration: line-through;
</style>
