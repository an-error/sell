<template>
    <div class="star" :class="starType">
        <span v-for="(item,index) in classItems" :key="index" :class="item" class="star-item"></span>
    </div>
</template>
<script type="text/javascript">
const LENGTH = 5;
const CLS_ON = 'on';
const CLS_HALF = 'half';
const CLS_OFF = 'off';

export default {

  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  computed: {
    starType() {
      return 'star-' + this.size;
    },
    classItems() {
      var result = [];
      let score = Math.floor(this.score * 2) / 2;
      let decimal = score % 1;
      let interger = score / 1;
      for (let i = 0; i < interger; i++) {
        result.push(CLS_ON);
      }
      if (decimal) {
        result.push(CLS_HALF);
      }
      while (result.length < LENGTH) {
        result.push(CLS_OFF);
      }
      return result;
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .star
    font-size: 0;
    .star-item
      display: inline-block;
      background-repeat: no-repeat;
    &.star-48
      .star-item
        width: 20px;
        height: 20px;
        margin-right: 22px;
        background-size: 20px 20px;
        &:last-child
          margin-right: 0;
        &.on
          bg-image('star48_on');
        &.half
          bg-image('star48_half');
        &.off
          bg-image('star48_off');
    &.star-36
      .star-item
        width: 15px;
        height: 15px;
        margin-right: 6px;
        backgound-size: 15px 15px;
        &:last-child
          margin-right:0;
        &.on
          bg-image('star36_on');
        &.half
          bg-image('star36_half');
        &.off
          bg-image('star36_off');
    &.star-24
      .star-item
        width: 10px;
        height: 10px;
        margin-right: 3px;
        backgound-size: 10px 10px;
        &:last-child
          margin-right:0;
        &.on
          bg-image('star24_on');
        &.half
          bg-image('star24_half');
        &.off
          bg-image('star24_off');

</style>
