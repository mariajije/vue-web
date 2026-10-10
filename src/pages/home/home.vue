```vue
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Button from '@/components/ui/button/Button.vue'
</script>

<template>
  <div class="fondo-home">
    <h1>
      <span>Web</span> Design and
      <br />
      Interactive <span>Apps</span>
    </h1>

    <div class="buttons">
      <Button variant="default" as-child>
        <RouterLink to="/batman">Batman</RouterLink>
      </Button>

      <Button variant="default" as-child>
        <RouterLink to="/catwoman">Catwoman</RouterLink>
      </Button>

      <Button variant="default" as-child>
        <RouterLink to="/question">Yes or no</RouterLink>
      </Button>

      <Button variant="default" as-child>
        <a href="https://www.upv.es" target="_blank" rel="noopener noreferrer">
          UPV
        </a>
      </Button>
    </div>
  </div>
</template>

<style scoped>
.fondo-home {
  background-color: rgb(255, 177, 216);
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  padding: 3rem 2rem;
  color: rgb(160, 0, 99);
  text-align: center;
}

.fondo-home h1 {
  margin: 0 0 2rem;
  font-size: 3rem;
  font-weight: 700;
}

.fondo-home h1 span {
  color: rgb(220, 50, 140);
}

.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.buttons > * {
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  background-color: rgba(143, 226, 252, 0.842);
  color: rgb(20, 70, 85);
}

.buttons > *:hover {
  background-color: rgba(71, 139, 160, 0.842);
  color: rgb(18, 62, 75);
}
</style>
```