<template>
  <div id="app" class="app">
    <video-player></video-player>
    <editor-controls></editor-controls>
    <dialog-list></dialog-list>
  </div>
</template>

<script>
  import VideoPlayer from './components/VideoPlayer'
  import EditorControls from './components/EditorControls'
  import DialogList from './components/DialogList'
  import './assets/shoelace.css'
  export default {
    name: 'app',
    components: {
      VideoPlayer,
      EditorControls,
      DialogList
    },
    mounted(){
      if(window.localStorage.getItem('dialogList')){
        this.$store.commit('parseDialogs', JSON.parse(window.localStorage.getItem('dialogList')))
      }else{
        this.$http.get('static/6When-1.md').then(response => {
          this.$store.commit('parseDialogs', response.body)
        })
      }
    }
  }
</script>

<style scoped>
  .app {
    display: grid;
    grid-template-columns: [full-start] minmax(1em, 1fr) [main-start] minmax(0, 800px) [main-end] minmax(1em, 1fr) [full-end];
  }

  .app>* {
    grid-column: main;
  }

  .app-splash {
    grid-column: full;
  }
</style>
