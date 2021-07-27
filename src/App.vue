<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div class="top-row">
    <div>
      <img class="left-drizzy tl" :src="imageUrl" alt="sad drake" />
    </div>
    <div>
      <img class="tr" :src="imageUrl" alt="sad drake" />
    </div>
  </div>
  <router-view />
  <div class="bottom-row">
    <div>
      <img class="left-drizzy bl" :src="imageUrl" alt="sad drake" />
    </div>
    <div>
      <img class="br" :src="imageUrl" alt="sad drake" />
    </div>
  </div>
</template>

<script lang="ts">
import sadDrake from "./assets/sad-drake.gif";
import { Options, Vue } from "vue-class-component";

const bingSelector =
  ".dgControl > ul:nth-child(1) > li:nth-child(1) > div > div > a > div > img";

function changeFavicon(src: string) {
  const link = document.createElement("link");
  const oldLink = document.getElementById("dynamic-favicon");

  link.id = "dynamic-favicon";
  link.rel = "shortcut icon";
  link.type = "image/png";
  link.href = src;
  if (oldLink) {
    document.head.removeChild(oldLink);
  }
  document.head.appendChild(link);
}

@Options({})
export default class App extends Vue {
  imageUrl = sadDrake;

  mounted() {
    this.queryImage();
  }

  queryImage() {
    const search = new URL(window.location.href).searchParams;

    const query = search.get("q");
    if (!query || search.get('s')) {
      return;
    }

    const bingUrl = `https://www.bing.com/images/search?q=${query}&qft=+filterui:aspect-square`;

    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
      bingUrl.toString()
    )}`;

    fetch(proxyUrl, {
      mode: "cors",
    })
      .then((res) => res.json())
      .then(({ contents }) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(contents, "text/html");

        const image = doc.querySelector(bingSelector);
        const href = image?.getAttribute("src");
        if (href) {
          this.imageUrl = href;
          fetch(href, { method: "HEAD" }).then((r) => {
            if (r.headers.get("content-type")?.endsWith("png")) {
              changeFavicon(href);
            }
          });
        }
      });
  }
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
