<template>
  <div>
    <ul ref="dialogContainer" id="dcont">
      <li class="dialog" :class="[currentDialog===i?'active':'']" v-for="(el, i) in dialogList" v-bind:key="i">
        <button @click="removeDialog(i)" v-if="editing" type="button" class="button-xs"><i class="fa fa-minus-square"></i></button>
        <a href="#" @click="playLoop({i})" :ref="i">{{el.dialog}}</a>
      </li>
    </ul>
    <span class="switch  switch-xs">
      <input type="checkbox" v-model="editing" id="editing-control">
      <label for="editing-control">Editing</label>
    </span>
    <textarea v-if="editing" name="" id="" cols="30" rows="10" v-model="getRawTranscript"></textarea>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import { EventBus } from '../event-bus'
export default {
  data() {
    return {
      localDialog: ''
    }
  },
  computed: {
    editing:{
      get(){return this.$store.state.editing},
      set(event){
        return this.$store.commit('setEditing',event)
        }
    },
    ...mapState(['dialogList']),
    ...mapGetters(['getRawTranscript','currentDialog'])
  },
  methods: {
    setScrollHeigth(){
      // console.log(this.$store.getters.currentDialog)
      if(this.$store.getters.currentDialog > 0 ){
        this.$refs['dialogContainer'].scrollTop = this.$refs[this.$store.getters.currentDialog][0].offsetTop - this.$refs['dialogContainer'].offsetTop - 50
        // usefull for testing in the browser
        // document.getElementById('dcont').scrollTop = document.getElementsByTagName('li')[11].offsetTop - document.getElementById('dcont').offsetTop
      }
      return 4
    },
    ...mapMutations(['playLoop','removeDialog'])
  },
  mounted() {
    EventBus.$on('moved-video-time', (payload) => {
      this.setScrollHeigth()
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin-top: 10px;

}
ul {
  margin-left: 0;
  padding-left: 2px;
  height: 140px;
  overflow-y: auto;
  scroll-behavior: smooth;
}

li.dialog {
  list-style-type: none;
  border-left: 3px solid #cccccc;
  padding-left: 5px;
  margin-bottom: 3px;
  margin-left: 0;
  list-style-position: outside;
}

li.dialog:hover {
  list-style-type: none;
  border-left: 3px solid #0189ff;
  padding-left: 5px;
  margin-bottom: 3px;
  background-color: #dddddd;
  list-style-position: outside;
}
li.active.dialog {
  padding-left: 10px;
  background-color: #dddddd;
  
  border-left: 3px solid #0189ff;
}
</style>
