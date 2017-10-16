import {EventBus} from './event-bus'

export default {
  state: {
    videoCurrentTime: 0,
    start: 0,
    finish: 0,
    offset: 0,
    dialog: '',
    dialogList: [],
    rawDialog: ``
  },
  getters: {
    getRawTranscript (state, getters) {
      return state.dialogList.map((el, i) => {
        return `${i + 1}. [${el.dialog}](${el.start}-${el.finish})`
      }).join('\n')
    },
    currentDialog (state, getters) {
      return  state.dialogList.findIndex((el,i)=>{
        return el.start >= state.videoCurrentTime
      }) - 1
    }
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
      state.start = payload
      EventBus.$emit('videoCurrentTime', state.start)
    },
    setFinish (state, payload) {
      state.finish = payload
      EventBus.$emit('videoCurrentTime', state.finish)
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
      state.start = state.dialogList[payload.i]['start']
      state.finish = state.dialogList[payload.i]['finish']
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
          if (i === 1) { pre.dialog = curr }
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
