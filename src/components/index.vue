<template>
  <div class="login">
    <h1>首页</h1>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui'

  export default {
    name: 'hello',
    data () {
      return {
        loginForm: {
          userName: '',
          password: ''
        },
      }
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .login {
    padding: 0 20px;
    .mu-text-field {
      width: 100%;
    }
    h1, h2 {
      text-align: center;
      font-weight: normal;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      display: inline-block;
      margin: 0 10px;
    }

    a {
      color: #35495E;
    }
  }

</style>
