<template>
  <div class="home">
    <h1 class="rainbow rainbow-text-animated">
      I guess that's just the
      <a
        class="notion-link"
        v-bind:href="notionLink"
        target="_blank"
        title="The notion"
        >notion</a
      >
    </h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  notionLink =
    "https://juniper-laundry-d0c.notion.site/The-notion-e3a037db2d20451085f48cd18027b461";
}
</script>

<style scoped>
.home {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}

.notion-link {
  text-decoration: none;
  color: unset;
}

.rainbow {
  text-align: center;
  text-decoration: underline;
  font-size: 32px;
  letter-spacing: 3px;
}
.rainbow-text-animated {
  background: linear-gradient(
    to right,
    #6666ff,
    #0099ff,
    #00ff00,
    #ff3399,
    #6666ff
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: rainbow_animation 6s ease-in-out infinite;
  background-size: 400% 100%;
}

@keyframes rainbow_animation {
  0%,
  100% {
    background-position: 0 0;
  }

  50% {
    background-position: 100% 0;
  }
}
</style>
