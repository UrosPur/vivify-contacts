<template>
  <div>
    <NavBar />
    <!--<child />-->

    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
// import child from './child.vue'
import { mixin1, mixin2, mixin3, mixin4} from "./mixins";

export default {
  name: 'app',
    mixins:[
      mixin1, mixin2, mixin3, mixin4
    ],
  components: {
      NavBar,
      // child
  },
    created(){

      console.log('component created')

    },

    mounted(){

      console.log('component mounted')

    }
}
</script>

<style>
</style>
