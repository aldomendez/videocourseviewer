<template>
  <div v-if="editing">
    <form action="#" id="editor" @submit.prevent="addNewDialog({localDialog})">
      <label for="dialog">Dialog editor</label>
      <div class="input-group">
        <span class="input-addon">Dialog</span>
        <input id="dialog" type="text" v-model.trim="videoCurrentTime" disabled>
        <input id="dialog" type="text" v-model.trim="start">
        <input id="dialog" type="text" v-model.trim="finish">
      </div>
      <div class="input-group">
        <label for="dialog"></label>
        <textarea id="dialog" type="text" v-model.trim="dialog"></textarea>
      </div>
      <div class="input-field">
        <label for="heightSlider">Video size</label>
        <input type="range" id="heightSlider" v-model="height" min="100" max="1000" step="50">
      </div>
      <div class="input-group">
        <button class="button" type="button" @click="offsetVideoBy(-1)"><i class="fa fa-fast-backward"></i></button>
        <button class="button" type="button" @click="offsetVideoBy(-.1)"><i class="fa fa-backward"></i></button>
        <button class="button" type="button" @click="offsetVideoBy(-.01)"><i class="fa fa-step-backward"></i></button>
        <button class="button" type="button" @click="setTime('start')"><i class="fa fa-chevron-left"></i></button>
        <button class="button" type="button" @click="setTime('finish')"><i class="fa fa-chevron-right"></i></button>
        <button class="button" type="button" @click="offsetVideoBy(.01)"><i class="fa fa-step-forward"></i></button>
        <button class="button" type="button" @click="offsetVideoBy(.1)"><i class="fa fa-forward"></i></button>
        <button class="button" type="button" @click="offsetVideoBy(1)"><i class="fa fa-fast-forward"></i></button>
        <button class="button button-light" type="button" @click="playVideo()"><i class="fa fa-play"></i></button>
      </div>
      <div class="input-group">
        <button class="button-secondary" type="button" @click="testLoop" >Test video loop</button>
        <button class="button-success" type="button" @click="addVideo()">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  computed: {
    dialog:{
      get(){return this.$store.state.dialog},
      set(event){return this.$store.commit('setDialog',event)}
    },
    height:{
      get(){return this.$store.state.height},
      set(event){return this.$store.commit('setHeight',event)}
    },
    start:{
      get(){
        // TODO: move mintommss and used here to prettify the output
        return this.$store.state.start
        },
      set(event){
        // TODO: use the inverse to store it again in the model as it should be
        return this.$store.commit('setStart',event)
        }
    },
    finish:{
      get(){return this.$store.state.finish},
      set(event){return this.$store.commit('setFinish',event)}
    },
    ...mapState(['offset','videoCurrentTime','editing'])
  },
  methods:{
    onTimeUpdateListener(){

    },
    ...mapMutations(['setTime','offsetVideoBy','setDialog','addNewDialog','setFinish', 'loopVideo', 'addVideo','testLoop','playVideo'])
  },
  filters:{
    twoDecimals(value){
      if(typeof value === 'Number'){
        return value.toFixed(2)
      } else {
        return value
      }
    },
    minTommss(minutes){
      var sign = minutes < 0 ? "-" : "";
      var min = Math.floor(Math.abs(minutes));
      var sec = Math.floor((Math.abs(minutes) * 60) % 60);
      return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
