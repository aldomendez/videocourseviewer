<template>
  <div>
    <video ref="videoPlayer" src="static/5Where-is-it-1.m4v" :height="height" :width="width" loop controls v-on:timeupdate="log">
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
      height: '400px',
      width: '400px',
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
  }
}
</script>
