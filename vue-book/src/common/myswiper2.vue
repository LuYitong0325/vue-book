<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in ary" :key="index">
        <img :src="item.src" alt="">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        name: "index",
        props:['ary'],
        /*mounted(){
            this.swiperInit();
            //需要在DOM渲染完毕之后再去初始化swiper
        },*/
        updated(){
            this.swiperInit();
        },
        methods:{
            swiperInit(){
                //自己定义的初始化swiper的方法
                new Swiper('.swiper-container',{
                    autoplay:{
                        disableOnInteraction: false,
                    },
                    pagination:{
                        el:'.swiper-pagination'
                    },
                    loop:true
                })
            }
        }
    }
</script>

<style scoped lang="less">
  .swiper-container{
    height: 100%;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
