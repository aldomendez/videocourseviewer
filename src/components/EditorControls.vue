<template>
  <div>
    <form action="#" id="editor" @submit.prevent="addNewDialog({localDialog})">
      <label for="dialog">Dialog editor</label>
      <div class="input-group">
        <span class="input-addon">Dialog</span>
        <input id="dialog" type="text" v-model.trim="videoCurrentTime" disabled>
        <input id="dialog" type="text" v-model.trim="start">
        <input id="dialog" type="text" v-model.trim="localDialog">
        <input id="dialog" type="text" v-model.trim="finish">
      </div>
      <label for="range">Video Offset {{offset}}</label>
      <div class="input-group">
        <button class="button" type="button" @click="offsetVideoBy(-1)"><i class="fa fa-fast-backward"></i></button>
        <button class="button" type="button" @click="offsetVideoBy(-.1)"><i class="fa fa-backward"></i></button>
        <button class="button" type="button" @click="offsetVideoBy(-.01)"><i class="fa fa-step-backward"></i></button>
        <button class="button" type="button" @click="setTime('start')"><i class="fa fa-chevron-left"></i></button>
        <button class="button" type="button" @click="setTime('finish')"><i class="fa fa-chevron-right"></i></button>
        <button class="button" type="button" @click="offsetVideoBy(.01)"><i class="fa fa-step-forward"></i></button>
        <button class="button" type="button" @click="offsetVideoBy(.1)"><i class="fa fa-forward"></i></button>
        <button class="button" type="button" @click="offsetVideoBy(1)"><i class="fa fa-fast-forward"></i></button>
      </div>
      <div class="input-group">
        <button class="button-secondary" type="button" @click="testLoop" >Test video loop</button>
        <button class="button-success" type="button" @click="addVideo({localDialog})">Add</button>
      </div>
    </form>
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
  computed: {
    start:{
      get(){return this.$store.state.start},
      set(event){return this.$store.commit('setStart',event)}
    },
    finish:{
      get(){return this.$store.state.finish},
      set(event){return this.$store.commit('setFinish',event)}
    },
    ...mapState(['dialog','offset','videoCurrentTime'])
  },
  methods:{
    onTimeUpdateListener(){

    },
    ...mapMutations(['setTime','offsetVideoBy','setDialog','addNewDialog','setStart','setFinish', 'loopVideo', 'addVideo','testLoop'])
  },
  filters:{
    twoDecimals(value){
      if(typeof value === 'Number'){
        return value.toFixed(2)
      } else {
        return value
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
