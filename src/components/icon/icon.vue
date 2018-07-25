<template>
  <span class="icon" :class="className" :style="iconStyle"></span>
</template>
<script type="text/javascript">
export default {
  props: {
    type: {
      type: Number
    },
    iconStyle: {
      type: Object
    },
    size: {
      type: Number
    }
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  },
  computed: {
    className() {
      // console.log(this.classMap[this.type] + '_' + this.size);
      return this.classMap[this.type] + '_' + this.size;
    }
  }
};
/* style期待style的值
   width: px;
   height: px;
   margin-right: px;
   background-size: px px;
   size期待的值诸如decrease_1、decrease_2中的1，2 */

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin"
  .icon
    display: inline-block;
    vertical-align: top;
    width: 16px;
    height: 16px;
    margin-right: 6px;
    background-size: 16px 16px;
    background-repeat: no-repeat;
    &.decrease_1
      bg-image('decrease_1');
    &.discount_1
      bg-image('discount_1');
    &.guarantee_1
      bg-image('guarantee_1');
    &.invoice_1
      bg-image('invoice_1');
    &.special_1
      bg-image('special_1');
    &.decrease_2
      bg-image('decrease_2');
    &.discount_2
      bg-image('discount_2');
    &.guarantee_2
      bg-image('guarantee_2');
    &.invoice_2
      bg-image('invoice_2');
    &.special_2
      bg-image('special_2');
    &.decrease_3
      bg-image('decrease_3');
    &.discount_3
      bg-image('discount_3');
    &.guarantee_3
      bg-image('guarantee_3');
    &.invoice_3
      bg-image('invoice_3');
    &.special_3
      bg-image('special_3');
</style>
