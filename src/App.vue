<template>
  <div id="app">
    <nav-bar v-if="!isLoginRoute" />
    <router-view />
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/NavBar.vue';

@Component({
  components: {
    NavBar
  },
})
export default class App extends Vue { 
  get isLoginRoute() {
    return this.$route.path === '/login';
  }
}
</script>

<style></style>
