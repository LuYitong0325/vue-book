<template>
  <div class="hello">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!--加这个keep-alive是为了保证第一次进来加载数据-->
    <Tab></Tab>
  </div>
</template>

<script>
import Tab from '@/common/tabs.vue'
export default {
  name: 'HelloWorld',
  components:{
    //注册本组件需要使用的组件
    Tab
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
