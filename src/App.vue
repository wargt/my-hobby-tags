<template>
  <div id="app">
    <IndexPage />
  </div>
</template>

<script>
import IndexPage from './pages/index'

export default {
  name: 'App',
  components: {
    IndexPage
  }
}
</script>

<style lang="scss">
body, html {
  padding: 0;
  margin: 0;
  height: 100%;
}

#app {
  font-family: -apple-system,BlinkMacSystemFont,'Roboto','Helvetica Neue',Geneva,"Noto Sans Armenian","Noto Sans Bengali","Noto Sans Cherokee","Noto Sans Devanagari","Noto Sans Ethiopic","Noto Sans Georgian","Noto Sans Hebrew","Noto Sans Kannada","Noto Sans Khmer","Noto Sans Lao","Noto Sans Osmanya","Noto Sans Tamil","Noto Sans Telugu","Noto Sans Thai",sans-serif,arial,Tahoma,verdana;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
</style>
