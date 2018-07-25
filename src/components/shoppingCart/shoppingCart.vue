<template>
  <div class="shopping">
    <div class="left">
      <div class="logo-content">
        <i class="icon-shopping_cart"></i>
      </div>
      <div class="price">￥{{this.price}}</div>
      <div class="deliver">另需配送费￥{{this.deliver}}元</div>
    </div>
    <div class="right"><span class="toAccount">还差{{this.minPrice}}元</span></div>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      goodsCollection: Object
    };
  },
  props: {
    price: {
      type: Number,
      default: 0
    },
    deliver: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.shopping
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 50;
  width: 100%;
  height: 48px;
  display: flex;
  color: rgba(255, 255, 255, 0.4);
  background-color: #141d27;
  font-size: 0;
  .left
    flex: 1;
    .logo-content
      display: inline-block;
      position: relative;
      top: -10px;
      padding: 6px
      width: 56px
      height: 56px
      box-sizing: border-box
      border-radius: 100%;
      margin: 0 10px;
      background-color: #2b343c;
      border: 6px solid #141d27;
      text-align: center;
      .icon-shopping_cart
        font-size: 24px;
    .price
      display: inline-block;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      margin-bottom: 12px;
      padding-right: 12px;
      border-right: 1px solid rgba(255, 255, 255, 0.4);
    .deliver
      display: inline-block;
      font-size: 10px;
      font-weight: 300;
      line-height: 48px;
      color: rgba(255, 255, 255, 0.4);
      margin-left: 12px;
  .right
    flex: 0 0 105px;
    display: table;
    width: 105px;
    height: 100%;
    background-color: #2b333b;
    text-align: center;
    .toAccount
      display: table-cell;
      vertical-align: middle;
      font-size: 12px;
</style>
