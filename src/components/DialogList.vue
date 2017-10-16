<template>
  <div>
    <ul ref="dialogContainer">
      <li class="dialog" :class="[currentDialog===i?'active':'']" v-for="(el, i) in dialogList" v-bind:key="i">
        {{scrollHeigth}} <a href="#" @click="playLoop({i})" :ref="i">{{el.dialog}}</a>
      </li>
    </ul>
    <textarea name="" id="" cols="30" rows="10" v-model="getRawTranscript"></textarea>
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
    scrollHeigth(a, b){
      // console.log({a})
      // console.log(this.$store.getters.currentDialog)
      if(this.$store.getters.currentDialog > 0 ){
        console.log(this.$refs['dialogContainer'].scrollTop)
        console.log(this.$refs[this.$store.getters.currentDialog][0].getBoundingClientRect())
        // console.log(this.$refs[this.$store.getters.currentDialog][0].offsetLeft)
        // console.log(this.$refs[this.$store.getters.currentDialog][0].offsetTop)
        // console.log(this.$refs[this.$store.getters.currentDialog][0].offsetWidth)
      }
      return 4
    },
    ...mapState(['dialogList']),
    ...mapGetters(['getRawTranscript','currentDialog'])
  },
  methods: {
    ...mapMutations(['playLoop'])
  },
  mounted() {
    EventBus.$on('set-video-current-time', (payload) => {
      
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  margin-left: 0;
  padding-left: 2px;
  height: 25vh;
  overflow-y: scroll;
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
