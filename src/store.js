import {EventBus} from './event-bus'

export default {
  state: {
    videoCurrentTime: 0,
    listeningMode: 'start',
    start: 0,
    finish: 0,
    offset: 0,
    dialog: 'This is program 5',
    dialogList: [{
      start: 21,
      finish: 23,
      dialog: 'Hello welcome back'
    }, {
      start: 23.2,
      finish: 25,
      dialog: 'This is program 5'
    } ]
  },
  mutations: {
    setCurrentTime (state, videoCurrentTime) {
      state.videoCurrentTime = videoCurrentTime
      state[state.listeningMode] = videoCurrentTime
    },
    setListeningMode (state, payload) {
      state.listeningMode = payload
    },
    offsetVideoBy (state, payload) {
      state.videoCurrentTime = state.videoCurrentTime + payload
      state.offset = payload
      EventBus.$emit('set-video-current-time', state.videoCurrentTime)
    },
    setDialog (state, payload) {
      state.dialog = payload
    },
    addNewDialog (state, payload) {
      EventBus.$emit('setVideoCurrentTime', {state})
    },
    setEnd (state, payload) {
      EventBus.$emit('videoCurrentTime', state.videoCurrentTime)
    },
    setStart (state, payload) {
      EventBus.$emit('videoCurrentTime', state.videoCurrentTime)
    },
    addVideo (state, payload) {
      state.dialogList.push({
        start: state.start,
        finish: state.finish,
        dialog: payload.localDialog
      })
    },
    playLoop (state, payload) {
      state.dialog = state.dialogList[payload.i]['dialog']
      EventBus.$emit('play-loop', state.dialogList[payload.i])
    }
  }
}
