<template>
  <div class="home">
    <div>
      <topNavBar title="首页"></topNavBar>
    </div>
    <div class="swipeWrapper">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item,index) in list" :key=index>
          <img v-lazy="item.imgsrc" />
          <van-row type="flex" justify="center" class="title">
            <van-col span="20">{{item.title | titleslice(20)}}</van-col>
          </van-row>
        </van-swipe-item>
      </van-swipe>
    </div>
    <van-loading type="spinner" v-show="loadshow"/>
    <div class="awesomeWrapper">
      <div class="awesomeTitle">热门商品</div>
      <swiper :options="swiperOption">
        <swiper-slide v-for="slide in awesomeData" :key="slide.uniquekey" class="slide">
          <img :src="slide.thumbnail_pic_s" />
          <div class="slidetitle">{{slide.title | titleslice(18)}}</div>
        </swiper-slide>
      </swiper>
    </div>   
      
  </div>
</template>

<script>
import topNavBar from "@/components/topNavBar"
export default {
  name: 'home',
  components: {
    topNavBar
  },
  data() {
    return {
      list:[],
      loadshow:true,
      awesomeData:[],
      swiperOption: {
          slidesPerView: 3,
          spaceBetween : 10,
          loop : true,
      },
    }
  },
  created() {
    let url="https://www.easy-mock.com/mock/5c52a8621c33cd20fb0ad1d3/zyw/vant";
    console.log(url);
    this.axios.get(url)
      .then(res=>{
        this.list=res.data.scrolldata;
        this.loadshow=false;
      });
    
    this.axios.get(url)
    .then(resb=>{
      this.awesomeData=resb.data.awesome;
      console.log(this.awesomeData)
    });
  },
  filters:{
    titleslice(val,num){
      return val.slice(0,num);
    }
  }
}
</script>

<style lang="less" scoped>
  .swipeWrapper{
    position: relative;
    img{
      width:100%;
      height: 270px;
    }
    .title{
      position: absolute;
      bottom:20px;
      width: 100%;
      text-align: center;
      color:#fff;
      font-weight: 700;
    }
  }
  .awesomeWrapper{
    padding: 5px;
    .awesomeTitle{
      width: 100%;
      height: 20px;
      line-height: 20px;
      font-size: 16px;
      margin-bottom: 5px;
    }
    .slide{
      img{
        width: 100%;
        height: 190px;
      }
      .slidetitle{
        margin-top: 3px;
        background-color: rgba(9,9,9,0.1);
      }
    }
  }
</style>
