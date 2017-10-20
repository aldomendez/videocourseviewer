<template>
  <div>
    <video ref="videoPlayer" src="static/6When-1.m4v" :height="height" :width="width" loop controls v-on:timeupdate="log">
    </video>
    <br>
    <mark class="dialog">{{dialog}}</mark>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import { EventBus } from '../event-bus'
export default {
  data() {
    return {
      player: null,
      height: '300',
      width: '400',
      start: 0,
      finish: 0
    }
  },
  computed: mapState(['dialog']),
  methods: {
    log(e) {
      this.$store.commit('setCurrentTime', this.player.currentTime)
    },
    ontimeupdatelistener(e) {
      if (this.player.currentTime >= this.finish) {
        this.player.pause()
        this.player.removeEventListener('timeupdate', this.ontimeupdatelistener)
      }
    }
  },
  mounted() {
    this.player = this.$refs.videoPlayer
    EventBus.$on('changed-current-dialog', (payload) => {
      this.player.currentTime = payload
      // console.log(payload)
    })
    EventBus.$on('play-loop', (payload) => {
      // console.log(this.ontimeupdatelistener)
      this.player.currentTime = payload.start
      this.finish = payload.finish
      this.player.addEventListener('timeupdate', this.ontimeupdatelistener)
      this.player.play()
    })
    EventBus.$on('set-video-current-time',(payload)=>{
      this.player.currentTime = payload
    })
  }
}
</script>
