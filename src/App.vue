<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from 'lenis';
import { ref } from 'vue';
import Section1 from './components/Section1.vue';
import Section2 from './components/Section2.vue';
import Section3 from './components/Section3.vue';
import { default as Section4, default as Section5 } from './components/Section4.vue';

gsap.registerPlugin(ScrollTrigger);


// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
  lerp: 0.08,
  // infinite: true,
});

const raf = (time: number) => {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


// DOM 
const app = ref<HTMLElement | null>(null);


</script>

<template>
  <div ref="app" class="ease duration-700 bg-dark text-light font-mango">
    <header class="hidden xl:flex justify-between items-stretch gap-6 px-10 pt-10 font-sans">
      <p>INDEX<br>4 ELVIS</p>
      <p>Art<br>Tour</p>
      <p>11:00<span>am</span>06:00pm</p>
      <p>hello@warholart.com<br />[+420]912 345 678</p>

      <img src="img/logo.svg" alt="logo">
      <p>Step into Warhol's iconic universe.<br>Limited tickets are on sale.</p>
      <p>IG</p>
      <ul class="text-right">
        <li><a href="#" class="duration-100 hover:duration-400 hover:opacity-40">QUOTE</a></li>
        <li><a href="#" class="duration-100 hover:duration-400 hover:opacity-40">M. MONROE</a></li>
        <li><a href="#" class="duration-100 hover:duration-400 hover:opacity-40">EXPO</a></li>
        <li><a href="#" class="duration-100 hover:duration-400 hover:opacity-40">TICKETS</a></li>
      </ul>
    </header>

    <!-- Section I -->
    <Section1 />

    <!-- Section II -->
    <Section2 />

    <!-- Section III -->
    <Section3 />

    <!-- Section IV -->
    <Section4 />

    <!-- Section V -->
    <Section5 />


    <div class="footer-divider"></div>
    <footer class="flex flex-col bg-primary text-light h-[55vh] relative font-league text-2xs font-medium">
      <div class="clip-path"></div>
      <div class="px-[2.75vw] mt-auto">
        <div class="flex items-stretch justify-between leading-none">
          <div class="flex flex-col justify-between">
            <ul class="flex flex-col">
              <li>INSTAGRAM</li>
              <li>DRIBBLE</li>
              <li>LINKEDIN</li>
            </ul>

            <ul class="flex flex-col gap-[2vh]">
              <li>+</li>
              <li>+</li>
              <li>+</li>
            </ul>

            <ul class="flex flex-col">
              <li>Curreacted for Art Lovers</li>
              <li>Collection of 80+ Iconic Works</li>
            </ul>

          </div>

          <img class="w-[52.5vw]" src="img/logo-footer-warhol.svg" alt="dots" draggable="false" decoding="async">
        </div>

        <div class="w-full pb-[.5vh] pt-[5.5vh]">
          <img class="" src="img/rule.svg" alt="dots" draggable="false" decoding="async">
        </div>
      </div>
    </footer>
  </div>
</template>
