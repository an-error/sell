<template>
<div class="header">
    <div class="content-wrapper">
        <div v-if="seller.avatar" class="avatar">
            <img width="64" height="64" :src="seller.avatar">
        </div>
        <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
            <div class="decription">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
            <div v-if="seller.supports" class="support">
                <!--<span class="icon" :class="classMap[seller.supports[0].type]"></span>-->
                <icon :type="seller.supports[0].type" :size="1" :iconStyle="smallIcon"></icon>
                <span class="text">{{seller.supports[0].description}}</span>
            </div>
        </div>
        <div v-if="seller.supports" class="support-count" @click="showDetail" >
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background"><img :src="seller.avatar" /></div>
    <div class="detail" v-show="isShow">
        <div class="detail-wrapper">
            <div class="detail-content">
                <h1 class="detail-title">{{seller.name}}</h1>
                <div class="stars-wrapper">
                    <star :size="48" :score="seller.score"></star>
                </div>
                <div class="separate">
                    <div class="line"></div>
                    <div class="message">优惠信息</div>
                    <div class="line"></div>
                </div>
                <div v-if="seller.supports" v-for="(support,index) in seller.supports" :key="index" class="support">
                <!--<span  class="icon" :class="classMap[support.type]"></span>-->
                  <icon :type="support.type" :size="2"></icon>
                <span class="text">{{support.description}}</span>
            </div>
            <div class="separate">
                    <div class="line"></div>
                    <div class="message">优惠信息</div>
                    <div class="line"></div>
            </div>
            <div class="bulletin">
                {{seller.bulletin}}
            </div>
            </div>
            </div>
            <div class="detail-foot" @click="showDetail">
                <i class="icon-close"></i>
            </div>
        </div>
</div>
</template>
<script type="text/javascript">
import star from 'components/star/star';
import icon from 'components/icon/icon';
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data: function() {
    return {
      isShow: false,
      smallIcon: {
        width: '12px',
        height: '12px',
        backgroundSize: '12px 12px',
        marginRight: '4px'
      }
    };
  },
  methods: {
    showDetail() {
      this.isShow = !this.isShow;
    }
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  },
  components: {
    star,
    icon
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin"
    .header
      position: relative;
      background: rgba(7, 17, 27, 0.5);
      color: #fff;
      overflow: hidden;
      .content-wrapper
        padding: 24px 12px 18px 24px;
        .avatar
          display: inline-block;
          vertical-align: top;
          img
            border-radius: 2px;
        .content
          display: inline-block;
          font-size: 0;
          margin-left: 16px;
          .title
            font-size: 16px;
            line-height: 18px;
            margin-bottom: 8px;
            .brand
              display: inline-block;
              width: 30px;
              height: 18px;
              vertical-align: top;
              bg-image("brand");
              background-size: 30px 18px;
              background-repeat: no-repeat;
          .decription
            font-size: 12px;
            line-height: 12px;
            margin-bottom: 10px;
            font-weight: 200;
          .support
            font-size: 10px;
            font-weight: 200;
            line-height: 12px;
        .support-count
          position: absolute;
          right: 12px;
          bottom: 44px;
          padding: 0 8px;
          height: 24px;
          line-height: 24px;
          text-align: center;
          border-radius: 14px;
          background-color: rgba(0,0,0,0.2);
          z-index: 10;
          .count
            font-size: 10px;
            font-weight: 200;
            vertical-align: top;
          .icon-keyboard_arrow_right
            margin-left: 2px;
            line-height: 24px;
            vertical-align: top;
            font-size: 10px;
      .bulletin-wrapper
        position: relative;
        height: 28px;
        line-height: 28px;
        padding: 0 22px 0 12px;
        background-color: rgba(7,17,27,0.2);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        .bulletin-title
          display: inline-block;
          vertical-align: midden;
          margin-right: 8px;
          width: 22px;
          height: 12px;
          bg-image("bulletin");
          background-size: 22px 12px;
          background-repeat: no-repeat;
        .bulletin-text
          vertical-align: top;
          margin: 0 4px;
          font-size: 10px;
        .icon-keyboard_arrow_right
          position: absolute;
          font-size: 10px;
          right: 12px;
          top: 8px;
      .background
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        filter: blur(10px);
        img
          width: 100%;
          height: 100%;
      .detail
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(7, 17, 27, 0.8);
        z-index: 100;
        overflow: auto;
        .detail-wrapper
          display:flex;
          flex-direction: column;
          min-height:100%;
          .detail-content
            flex: 1;
            padding-bottom: 64px;
            .detail-title
              margin-top: 64px;
              font-size: 16px;
              font-weight: 700;
              color: white;
              line-height: 16px;
              text-align: center;
            .stars-wrapper
              margin-top: 16px;
              text-align:center;
            .separate
              display: flex;
              width: 80%;
              margin: 28px auto 24px auto;
              .line
                flex: 1;
                position: relative;
                top: -6px;
                border-bottom: 1px solid white;
              .message
                padding: 0 12px;
                font-weight: 700;
                font-size: 14px;
            .support
              width: 80%;
              margin: 0 auto 12px auto;
              font-size: 12px;
              font-weight: 200;
              line-height: 12px;
            .bulletin
              width: 80%;
              margin: 0 auto;
              font-size: 12px;
              font-weight: 200;
              line-height: 24px;
        .detail-foot
          flex: 0;
          width: 100%;
          height: 32px;
          margin-top: -64px;
          font-size: 32px;
          line-height: 32px;
          text-align: center;

</style>
