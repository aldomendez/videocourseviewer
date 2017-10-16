<template>
  <div>
    <ul>
      <li class="dialog" v-for="(el, i) in dialogList" v-bind:key="i"><a href="#" @click="playLoop({i})">{{el.dialog}}</a></li>
    </ul>
    <pre>{{getRawTranscript}}</pre>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters} from 'vuex'
export default {
  data(){
    return {
      localDialog:''
    }
  },
  computed: {
    randomColor(){
      return "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16)
    },
    ...mapState(['dialogList']),
    ...mapGetters(['getRawTranscript'])
    },
  methods:{
    ...mapMutations(['playLoop'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    margin-left: 0;
    padding-left: 2px;
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
</style>
