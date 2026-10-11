```vue
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Button from '@/components/ui/button/Button.vue'
</script>

<template>
  <div class="bg-pink-200 h-screen text-red-950 font-sans text-center flex flex-col items-center justify-center gap-12 fixed w-screen overflow-hidden">

    <img class="absolute opacity-20" src="/imagines/tonitrui.png"/>

    <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold pb-5 md:pb-20 z-10 transition-all">
      <span>Web</span> Design and
      <br />
      Interactive <span>Apps</span>
    </h1>

    <p class="text-lg md:text-2xl transition-all">
    Aprendiendo a crear aplicaciones web
    </p>

    <div class="scale-z-10">
      <Button class="bg-red-950 text-white hover:bg-red-800 md:py-5 md:px-6 md:text-lg mr-2">
        <RouterLink to="/batman">Batman</RouterLink>
      </Button>

      <Button class="bg-red-950 text-white hover:bg-red-800 md:py-5 md:px-6 md:text-lg mr-2">
        <RouterLink to="/catwoman">Catwoman</RouterLink>
      </Button>

      <Button class="bg-red-950 text-white hover:bg-red-800 md:py-5 md:px-6 md:text-lg mr-2">
        <RouterLink to="/question">Yes or no</RouterLink>
      </Button>

      <Button class="bg-red-950 text-white hover:bg-red-800 md:py-5 md:px-6 md:text-lg mr-2">
        <a href="https://www.upv.es" target="_blank" rel="noopener noreferrer">
          UPV
        </a>
      </Button>
    </div>
  </div>
</template>

