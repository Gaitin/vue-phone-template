<template>
  <div id="app">
    <header>
      <span>主页</span>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
  @import '~normalize.css/normalize.css';

  html, body {
    margin: 0;
    height: 100%;
    position: relative;
    background: #f0f1f4;
    font-family: PingFangSC-Regular;
  }
#app {
  width: 100%;
  height: 100%;
}


header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
