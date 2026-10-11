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

/* MENÚ DE NAVEGACIÓN */
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

/* PORTADA */
.titulus {
  position: relative;
}

.titulus-img {
  min-height: 100vh;
  background-image: url('/imagines/batman/batman.jpg');
  background-size: cover;
  background-position: center;
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
}

/* SECCIÓN DE VEHÍCULOS */
.vehiculis-section {
  width: 100%;
  padding: 4rem 1rem;
  box-sizing: border-box;
  scroll-margin-top: 5rem;
}


#vehiculis {
  width: 85%;
  max-width: 1200px;
  margin: 0 auto;
}


/* TÍTULO */
.vehiculis-titulus {
  width: 100%;
  min-height: 5.5rem;
  box-sizing: border-box;
  font-size: 1.5rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
}

.vehiculis-titulus h1 {
  margin: 0;
}

/* CONTENEDOR DE LAS TARJETAS */
.vehiculis-arca {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

/* TARJETAS HORIZONTALES */

.item {
  width: 100%;
  max-width: none;
  min-height: 240px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 0;
  box-shadow: none;
}


/* COLORES Y ORDEN */

/* Primera tarjeta: texto a la izquierda, imagen a la derecha */
.unus .notitia {
  order: 1;
}

.unus img {
  order: 2;
}

/* Segunda tarjeta: imagen a la izquierda, texto a la derecha */
.duo .notitia {
  order: 2;
}

.duo img {
  order: 1;
}

/* Tercera tarjeta: texto a la izquierda, imagen a la derecha */
.tribus .notitia {
  order: 1;
}

.tribus img {
  order: 2;
}


/* TEXTO A LA IZQUIERDA */

.notitia {
  width: 50%;
  flex: 0 0 50%;
  min-width: 0;
  padding: 1rem 1.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
}

.notitia h2 {
  width: 100%;
  margin: 0 0 0.75rem;
  padding: 0;
  font-size: 1.7rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
  text-align: center;
}

.notitia p {
  width: 100%;
  margin: 0;
  line-height: 1.5;
  overflow-wrap: break-word;
}

.notitia {
  width: 50%;
  flex: 0 0 50%;
}

.item img {
  display: block;
  width: 50%;
  flex: 0 0 50%;
  min-width: 0;
  min-height: 240px;
  align-self: stretch;
  object-fit: cover;
}

/* GALERÍA */
.imagenes-section,
.contacto-section {
  padding: 4rem 2rem;
  scroll-margin-top: 5rem;
}

.imagenes-section > h1,
.contacto-section > h1 {
  text-align: center;
  margin-bottom: 2rem;
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

/* CONTACTO */
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

/* PORTADA EN PANTALLAS GRANDES */
@media (min-width: 768px) {
  .titulus > p {
    display: block;
  }

  .titulus > h1 {
    color: red;
  }
}

/* MÓVILES */
@media (max-width: 600px) {
  .extra-nav {
    gap: 0.5rem;
    padding: 0.5rem;
  }

  .titulus > h1 {
    font-size: 3rem;
  }

  .titulus > p {
    font-size: 1.2rem;
    padding: 0 1rem;
    box-sizing: border-box;
  }

  .vehiculis-section {
    padding: 3rem 0.5rem;
  }

  .item {
    min-height: 180px;
  }

  .notitia {
    padding: 0.5rem;
  }

  .notitia h2 {
    font-size: 1.3rem;
  }

  @media (max-width: 640px) {
    #vehiculis {
      max-width: 576px;
    }
  }
  
  @media (max-width: 768px) {
    #vehiculis {
      max-width: 900px;
    }
  }

  .notitia p {
    font-size: 0.8rem;
    line-height: 1.4;
  }

  .notitia > small {
    font-size: 0.7rem;
  }

  .item img {
    min-height: 180px;
  }

  .imagenes-section,
  .contacto-section {
    padding: 3rem 1rem;

    .unus 
    >img {
      order: -1;
    }

    @media (max-width: 1024px) {
      #vehiculis {
        max-width: 1280px;
      }
    }

    .item {
      flex-direction: column;
      height: 160px;
    }

    .vehiculis-arca {
      flex-direction: row;
    }
    .notitia {
      width: 90%;
    }

  }
}
</style>


