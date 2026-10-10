```vue
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { House } from '@lucide/vue'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const scrollToSection = (sectionId: string) => {
  if (sectionId === '#') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    return
  }

  const element = document.getElementById(sectionId)

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}
</script>

<template>
  <div class="batman">
    <!-- MENÚ DE NAVEGACIÓN -->
    <nav class="extra-nav">
      <RouterLink to="/" aria-label="Volver a inicio">
        <House class="icon-home" />
      </RouterLink>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#"
              :class="navigationMenuTriggerStyle()"
              @click.prevent="scrollToSection('#')"
            >
              Portada
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#vehiculis"
              :class="navigationMenuTriggerStyle()"
              @click.prevent="scrollToSection('vehiculis')"
            >
              Vehículos Batman
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#videre"
              :class="navigationMenuTriggerStyle()"
              @click.prevent="scrollToSection('videre')"
            >
              Imágenes
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#contactus"
              :class="navigationMenuTriggerStyle()"
              @click.prevent="scrollToSection('contactus')"
            >
              Contacto
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>

    <!-- PORTADA -->
    <header id="portada" class="titulus">
      <h1>Batman</h1>

      <div
        id="titulus-batman"
        class="titulus-img"
      ></div>

      <p>
        Él puede tomar la decisión que nadie más podría tomar,
        la decisión correcta.
      </p>
    </header>

    <!-- VEHÍCULOS -->
    <section id="vehiculis" class="vehiculis-section">
      <div class="vehiculis-titulus">
        <h1>Vehículos de Batman</h1>
      </div>

      <div class="vehiculis-arca">
        <article class="item unus">
          <div class="notitia">
            <h2>Avión</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed vehicula vulputate elit eget fermentum. Ut laoreet
              ante lacus. Quisque ut tincidunt metus. Curabitur congue,
              arcu nec tempus sodales, neque sem ultrices mauris, eu
              tincidunt nibh nibh eu massa. Aenean rhoncus quis nibh
              ac facilisis.
            </p>
            <small>Fabricado en 2005</small>
          </div>

          <img
            src="/imagines/batman/avion.jpg"
            alt="Avión de Batman"
          />
        </article>

        <article class="item duo">
          <div class="notitia">
            <h2>Moto</h2>
            <p>
              Nulla aliquip cupidatat voluptate veniam nostrud aliquip
              sit enim officia. Sit eu pariatur officia qui dolor
              adipisicing cupidatat. Sit consectetur et eu ut esse
              laboris nulla.
            </p>
            <small>Fabricado en 2006</small>
          </div>

          <img
            src="/imagines/batman/moto.jpg"
            alt="Moto de Batman"
          />
        </article>

        <article class="item tribus">
          <div class="notitia">
            <h2>Coche</h2>
            <p>
              Irure adipisicing est minim eu ad dolor. Eu ea commodo
              pariatur ut occaecat in cupidatat reprehenderit ut
              laborum duis. Sunt minim ex fugiat reprehenderit.
              Lorem consectetur reprehenderit commodo non.
            </p>
            <small>Fabricado en 2007</small>
          </div>

          <img
            src="/imagines/batman/car.jpg"
            alt="Coche de Batman"
          />
        </article>
      </div>
    </section>

    <!-- IMÁGENES -->
    <section id="videre" class="imagenes-section">
      <h1>Imágenes de Batman</h1>

      <div class="imagenes-arca">
        <img
          src="/imagines/batman/batman.jpg"
          alt="Batman"
        />

        <img
          src="/imagines/batman/avion.jpg"
          alt="Avión de Batman"
        />

        <img
          src="/imagines/batman/moto.jpg"
          alt="Moto de Batman"
        />

        <img
          src="/imagines/batman/car.jpg"
          alt="Coche de Batman"
        />
      </div>
    </section>

    <!-- CONTACTO -->
    <section id="contactus" class="contacto-section">
      <h1>Contacto</h1>
      <p>
        ¿Quieres saber más sobre Batman? Explora el universo del
        Caballero Oscuro.
      </p>

      <a
        href="https://www.dc.com/characters/batman"
        target="_blank"
        rel="noopener noreferrer"
      >
        Más información sobre Batman
      </a>
    </section>
  </div>
</template>

<style scoped>
.batman {
  font-family: Arial, Helvetica, sans-serif;
  color: #171717;
}

.extra-nav {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  width: 100%;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  z-index: 10;
}

.icon-home {
  color: black;
  width: 2rem;
  height: 2rem;
}

.icon-home:hover {
  color: rgb(255, 0, 179);
}

.extra-nav :deep(a) {
  cursor: pointer;
}

.titulus {
  position: relative;
}

.titulus-img {
  background-size: cover;
  background-position: center;
  background-image: url('/imagines/batman/batman.jpg');
  min-height: 100vh;
}

.titulus > h1 {
  position: absolute;
  top: 63%;
  left: 0;
  width: 100%;
  margin: 0;
  text-align: center;
  font-size: 5rem;
  color: white;
  pointer-events: none;
  font-family: batman, Arial, sans-serif;
}

.titulus > p {
  position: absolute;
  top: 36%;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 2rem;
  color: white;
  pointer-events: none;
  font-family: batman, Arial, sans-serif;
  display: none;
}

.vehiculis-section,
.imagenes-section,
.contacto-section {
  padding: 4rem 2rem;
  scroll-margin-top: 5rem;
}

.vehiculis-titulus,
.imagenes-section > h1,
.contacto-section > h1 {
  text-align: center;
  margin-bottom: 2rem;
}

.vehiculis-arca {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.item {
  flex: 1 1 280px;
  max-width: 400px;
  overflow: hidden;
  border-radius: 0.75rem;
  background-color: #f3f3f3;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.item img {
  display: block;
  width: 100%;
  height: 240px;
  object-fit: cover;
}

.notitia {
  padding: 1.25rem;
}

.notitia h2 {
  margin-top: 0;
}

.notitia p {
  line-height: 1.6;
}

.imagenes-arca {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.imagenes-arca img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 0.75rem;
}

.contacto-section {
  text-align: center;
  background-color: #171717;
  color: white;
}

.contacto-section a {
  display: inline-block;
  margin-top: 1rem;
  color: white;
  background-color: #b80025;
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  text-decoration: none;
}

.contacto-section a:hover {
  background-color: #e00030;
}

@media (min-width: 768px) {
  .titulus > p {
    display: block;
  }

  .titulus > h1 {
    color: red;
  }
}

@media (max-width: 600px) {
  .extra-nav {
    gap: 0.5rem;
    padding: 0.5rem;
  }

  .titulus > h1 {
    font-size: 3rem;
  }

  .vehiculis-section,
  .imagenes-section,
  .contacto-section {
    padding: 3rem 1rem;
  }
}

#vehiculis {
  max-width: 510px;
  margin: 0 auto;
  padding: 4rem 0;
}

.vehiculis-titulus {
  height: 5.5rem; /* 88px */
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
}

.item {
  padding: 1.5rem 0;
  height: 500px;
}

.unus {
  background-color: rgba(220, 220, 220, 0.2) ; 
}

.duo {
  background-color: rgba(220, 220, 220, 0.8);
}

.tribus {
  background-color: rgba(220, 220, 220, 0.8);
}
 
.notitia > small {
  font-weight: bold;
  padding: 1rem;
}
 
.notitia > h2 {
 font-size: 1.7rem; 
 font-weight: 600;
 color: rgba(0, 0, 0, 0.7);
 padding-bottom: 1rem;
} 
</style>
```