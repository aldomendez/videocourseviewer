<template>
  <div id="app" class="app">
    <video-player></video-player>
    <editor-controls></editor-controls>
    <dialog-list></dialog-list>
  </div>
</template>

<script>
  import Hello from './components/Menu'
  import VideoPlayer from './components/VideoPlayer'
  import EditorControls from './components/EditorControls'
  import DialogList from './components/DialogList'
  import './assets/shoelace.css'
  export default {
    name: 'app',
    components: {
      Hello,
      VideoPlayer,
      EditorControls,
      DialogList
    }
  }
</script>

<style scoped>
  .app {
    display: grid;
    grid-template-columns: [full-start] minmax(1em, 1fr) [main-start] minmax(0, 40em) [main-end] minmax(1em, 1fr) [full-end];
  }

  .app>* {
    grid-column: main;
  }

  .app-splash {
    grid-column: full;
  }
</style>
