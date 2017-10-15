import {EventBus} from './event-bus'

export default {
  state: {
    videoCurrentTime: 0,
    start: 0,
    finish: 0,
    offset: 0,
    dialog: 'This is program 5',
    dialogList: [{'start': 21, 'finish': 23, 'dialog': 'Hello welcome back'}, {'start': 23.2, 'finish': 25, 'dialog': 'This is program 5'}, {'start': 50.389249, 'finish': 53.389249, 'dialog': '[where is your car?]'}, {'start': 53.669705, 'finish': 55.038249, 'dialog': 'where is your car?'}, {'start': 55.098775, 'finish': 57.418782, 'dialog': 'My car is in a parking lot'}, {'start': 58.802158, 'finish': 61.632045, 'dialog': 'Where is my car parqued'}, {'start': 67.427768, 'finish': 70.145612, 'dialog': 'Escuse me, Where is the elevator?'}, {'start': 70.297863, 'finish': 73.176293, 'dialog': 'I am sorry there is no elevator'}, {'start': 73.295921, 'finish': 79.295921, 'dialog': 'Oh no. Yeah you have to walk up the stairs'}]
  },
  mutations: {
    setCurrentTime (state, videoCurrentTime) {
      state.videoCurrentTime = videoCurrentTime
    },
    setTime (state, payload) {
      state[payload] = state.videoCurrentTime
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
    setStart (state, payload) {
      state.start = payload.target.value
      EventBus.$emit('videoCurrentTime', state.videoCurrentTime)
    },
    setFinish (state, payload) {
      state.finish = payload.target.value
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
    },
    testLoop (state, payload) {
      EventBus.$emit('play-loop', {
        start: state.start,
        finish: state.finish
      })
    },
    parseDialogs (state, payload) {
      state.dialogList = payload.trim().split('\n').map(function (el, i) {
        if (el === '') { return '' }
        var r = /\d+\..\[(.*)]\((\S*)\)/
        var rescued = r.exec(el)
        return rescued.reduce(function prepareElements (pre, curr, i) {
          if (i === 0) { return {} }
          if (i === 1) { pre.text = curr }
          if (i === 2) {
            pre.start = curr.split('-')[0]
            pre.finish = curr.split('-')[1]
          }
          return pre
        }, {})
      })
    }
  }
}
