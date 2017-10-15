<template>
  <div>
    <ul>
      <li v-for="(el, i) in dialogList" v-bind:key="i"><a href="#" @click="playLoop({i})">{{el.dialog}}</a></li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  data(){
    return {
      localDialog:''
    }
  },
  computed: mapState(['dialogList']),
  methods:{
    ...mapMutations(['playLoop'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
