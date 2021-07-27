<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div class="top-row">
    <div>
      <img class="left-drizzy tl" :src="sadDrake" alt="sad drake" />
    </div>
    <div>
      <img class="tr" :src="sadDrake" alt="sad drake" />
    </div>
  </div>
  <router-view />
  <div class="bottom-row">
    <div>
      <img class="left-drizzy bl" :src="sadDrake" alt="sad drake" />
    </div>
    <div>
      <img class="br" :src="sadDrake" alt="sad drake" />
    </div>
  </div>
</template>

<script lang="ts">
import sadDrake from "./assets/sad-drake.gif";
import { Options, Vue } from "vue-class-component";

@Options({})
export default class App extends Vue {
  sadDrake = sadDrake;
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.top-row,
.bottom-row {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

:is(.top-row, .bottom-row) div {
  padding: 3%;
}

.left-drizzy {
  transform: scaleX(-1);
}

.tl,
.bl {
  animation: clockwise 5s linear infinite;
}

.tr,
.br {
  animation: counter-clockwise 5s linear infinite;
}

@keyframes clockwise {
  from {
    transform: scaleX(-1) rotate(360deg);
  }
  to {
    transform: scaleX(-1) rotate(0deg);
  }
}

@keyframes counter-clockwise {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>
