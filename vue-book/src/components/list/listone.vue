<template>
  <div class="list_one">
    <div class="pic_box">
      <img :src="item.bookCover" alt="">
    </div>
    <div class="content_box">
      <h3 class="title">{{item.bookName}}</h3>
      <p class="desc">{{item.bookInfo}}</p>
      <div class="price">￥{{item.bookPrice}}</div>
      <button @click="remove">删除</button>
      <button @click="collect">收藏</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "listone",
        props:['item'],
        methods:{
            remove(){
                // this.$store.state.listData
                // console.log(this.item);
                this.$store.commit('removeListOne',this.item);
                //vue推荐使用commit改变store中的数据
            },
            collect(){
                //向收藏列表中添加数据
                this.$store.commit('addCollect',this.item);
                this.$router.push('/collect');
            }
        }
    }
</script>

<style scoped lang="less">
  .list_one{
    display: flex;
    border-bottom: 1px solid #ccc;
    .pic_box{
      flex: 4;
      img{
        width: 100%;
      }
    }
    .content_box{
      flex: 6;
      .title{
        font-size: 0.6rem;
      }
      .desc{
        font-size: 0.5rem;
      }
      .price{
        font-size: 0.5rem;
        color: red;
      }
      button{
        font-size: 0.5rem;
        background: red;
        width: 2rem;
        height: 1rem;
        border-radius: 0.5rem;
        border: none;
        outline: none;
        color: white;
      }
    }
  }
</style>
