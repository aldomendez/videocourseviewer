import {EventBus} from './event-bus'

export default {
  state: {
    videoCurrentTime: 0,
    start: 0,
    finish: 0,
    offset: 0,
    dialog: 'This is program 5',
    dialogList: [{'start': 21, 'finish': 23, 'dialog': 'Hello welcome back'}, {'start': 23.2, 'finish': 25, 'dialog': 'This is program 5'}, {'start': 50.389249, 'finish': 53.389249, 'dialog': '[where is your car?]'}, {'start': 53.669705, 'finish': 55.038249, 'dialog': 'where is your car?'}, {'start': 55.098775, 'finish': 57.418782, 'dialog': 'My car is in a parking lot'}, {'start': 58.802158, 'finish': 61.632045, 'dialog': 'Where is my car parqued'}, {'start': 67.427768, 'finish': 70.145612, 'dialog': 'Escuse me, Where is the elevator?'}, {'start': 70.297863, 'finish': 73.176293, 'dialog': 'I am sorry there is no elevator'}, {'start': 73.295921, 'finish': 79.295921, 'dialog': 'Oh no. Yeah you have to walk up the stairs'}, {'start': 87.322388, 'finish': 89.46576, 'dialog': 'Where is my book'}, {'start': 89.474416, 'finish': 104.129513, 'dialog': "I don't have any book, I looked for your book in the bookshelf, under your bed, around the house, and I still could'nt find it. I even look for your book on top of the refrigerator"}],
    rawDialog: `1.[Hello welcome back] (21-23)
    2.[This is program 5] (23.2-25)
    3.[[where is your car?]] (50.389249-53.389249)
    4.[where is your car?] (53.669705-55.038249)
    5.[My car is in a parking lot] (55.098775-57.418782)
    6.[Where is my car parqued] (58.802158-61.632045)
    7.[Escuse me, Where is the elevator?] (67.427768-70.145612)
    8.[I am sorry there is no elevator] (70.297863-73.176293)
    9.[Oh no. Yeah you have to walk up the stairs] (73.295921-79.295921)
    10.[Where is my book] (87.322388-89.46576)
    11.[I don't have any book, I looked for your book in the bookshelf, under your bed, around the house, and I still could'nt find it. I even look for your book on top of the refrigerator] (89.474416-104.129513)`
  },
  getters: {
    getRawTranscript (state, getters) {
      return state.dialogList.map((el, i) => {
        return `${i + 1}.[${el.dialog}] (${el.start}-${el.finish})`
      }).join('\n')
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
