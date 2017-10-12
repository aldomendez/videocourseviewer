<template>
  <div>
    <form action="#" id="editor" @submit.prevent="addNewDialog({localDialog})">
      <label for="dialog">Dialog editor</label>
      <div class="input-group">
        <button class="button" type="button" @click="setListeningMode('start')">{{start}}</button>
        <input id="dialog" type="text" v-model.trim="localDialog">
        <button class="button" type="button" @click="setListeningMode('finish')">{{finish}}</button>
      </div>
      <label for="range">Video Offset {{offset}}</label>
      <div class="input-group">
        <button class="button" type="button" @click="offsetVideoBy(-1)"><<<</button>
        <button class="button" type="button" @click="offsetVideoBy(-.1)"><<</button>
        <button class="button" type="button" @click="offsetVideoBy(-.01)"><</button>
        <button class="button" type="button" @click="setStart({localDialog})"><-]</button>
        <!-- <button class="button" type="button" @click="setEnd({dialog})">[-></button> -->
        <button class="button" type="button" @click="offsetVideoBy(.01)">></button>
        <button class="button" type="button" @click="offsetVideoBy(.1)">>></button>
        <button class="button" type="button" @click="offsetVideoBy(1)">>>></button>
      </div>
      <div class="input-group">
        <button class="button-secondary" type="button" @click="loopVideo" >Test video loop</button>
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
  computed: mapState(['start','finish','dialog','offset']),
  methods:{
    onTimeUpdateListener(){

    },
    ...mapMutations(['setListeningMode','offsetVideoBy','setDialog','addNewDialog','setEnd','setStart', 'loopVideo', 'addVideo'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
