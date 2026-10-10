<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';

</script>

<template> 
  <div class="fondo-home"> 
   <h1>  
   <span>Web</span> Design and
   <br />
    Interactive <span>Apps</span>
   </h1>

   <div class="buttons">
     <Button variant="default"> 
     <RouterLink to="/batman">Batman</RouterLink>
     </Button>

     <Button variant="default"> 
     <RouterLink to="/catwoman">Catwoman</RouterLink>
     </Button>

     <Button variant="default"> 
     <RouterLink to="/question">Yes or no</RouterLink>
     </Button>

      <Button variant="default"> 
     <a href="https://www.upv.es">UPV</a>
     </Button>
     
   </div>
  </div>
</template>

<style scoped> 

.fondo-home { 
    background-color:rgb(255, 177, 216);
    height: 100vh;
    color: rgb(160, 0, 99)
}

.buttons > Button { 
    margin: 1rem;
    padding: 1rem;
    font-size: 1.5rem;
    border-radius: 0.5rem;
    background-color: rgba(143, 226, 252, 0.842);
    color:  rgb(20, 70, 85, 0.842);
}

.buttons > Button:hover { 
    background-color:  rgba(71, 139, 160, 0.842);
    color: rgba(18, 62, 75, 0.842);
}
</style>

