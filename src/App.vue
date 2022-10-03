<script setup>
  import {useRouter} from 'vue-router'
  let router = useRouter()
</script>

<template>
  <router-view></router-view>
</template>

<style>
*{
    margin: 0;
    padding: 0;
    outline: 0;
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #03c4fa 50%, #0368b0 100%);
  font-family: 宋体;
  height: 100vh;
}
</style>
