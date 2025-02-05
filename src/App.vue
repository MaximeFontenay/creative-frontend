<script setup lang="ts">
import Lenis from 'lenis';

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
  lerp: 0.08,
  // infinite: true,
});

const raf = (time) => {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

</script>

<template>
  <div>
    <header class="hidden xl:flex justify-between items-stretch gap-6 px-10 pt-10 font-sans">
      <p>INDEX<br>4 ELVIS</p>
      <p>Art<br>Tour</p>
      <p>11:00<span>am</span>06:00pm</p>
      <p>hello@warholart.com<br />[+420]912 345 678</p>

      <img src="./assets/images/logo.svg" alt="logo">
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
    <section class="mb-[10vw]">
      <h1 class="font-bold text-[45vw] leading-none tracking-[1px] text-center w-full select-none">
        <span class="warhol--letter warhol--letter__1">W</span>
        <span class="warhol--letter warhol--letter__2">A</span>
        <span class="warhol--letter warhol--letter__3">R</span>
        <span class="warhol--letter warhol--letter__4">H</span>
        <span class="warhol--letter warhol--letter__5">O</span>
        <span class="warhol--letter warhol--letter__6">L</span>
      </h1>

      <div class="grid grid-cols-3 place-items-center gap-3 px-4 -mt-[7.5vw] md:gap-6 lg:gap-10 md:px-8">
        <div class="group w-full relative glue select-none text-base h-fit max-w-[25vw] text-nowrap">
          <img class="w-full" src="./assets/images/glue.png" alt="glue tube" draggable="false" decoding="async" />
          <p
            class="absolute vertical-center left-1/3 -translate-x-1/2 text-primary stroke-dark transition-opacity duration-300 ease-in group-hover:opacity-0">
            DIVE IN</p>
          <p
            class="absolute vertical-center left-1/3 -translate-x-1/2 text-primary stroke-dark transition-opacity duration-300 ease-in opacity-0 group-hover:opacity-100">
            CRUSH ME</p>
        </div>

        <div class="">
          <p class="text-sm align-sub w-fit mx-auto">
            <span class="text-xs block leading-1.5 mb-[.5vw]">∞</span>
            <span class="block">PRAGUE, CZECH REPUBLIC, <span class="text-xs">2025</span></span>
            <span class="text-center block font-extralight">ANDY WARHOL</span>
            <span class="block"><span class="font-extralight">( EXHIBITION )</span> THE MASTER OF POP ART</span>
          </p>
        </div>

        <div class="w-full">
          <img class="w-full" src="./assets/images/andy.svg" alt="Andy" draggable="false" decoding="async" />
        </div>
      </div>
    </section>


    <!-- Section II -->
    <section class="mb-[10vw]">
      <div class="container space-y-[2vw]">
        <div class="grid grid-cols-4 place-items-center">
          <h2 class="text-sm font-light">ELVIS</h2>
          <h2 class="text-sm font-light">ELVIS</h2>
          <h2 class="text-sm font-light">ELVIS</h2>
          <h2 class="text-sm font-light">ELVIS</h2>
        </div>

        <div class="flex items-center justify-center container relative">
          <img class="banana absolute w-[15vw] top-[20%] left-[-10%]" src="./assets/images/banana.svg" alt="elvis"
            draggable="false" decoding="async">

          <img class="can absolute w-[15vw] bottom-[10%] right-[-10%]" src="./assets/images/can.svg" alt="elvis"
            draggable="false" decoding="async">
          <img class="w-full" src="./assets/images/elvis-duo.avif" alt="elvis" draggable="false" decoding="async">
        </div>

        <div class="font-sans text-2xs grid grid-cols-2 place-items-center">
          <div class="w-full flex justify-between items-stretch gap-4">
            <div class="flex flex-col justify-between text-beige">
              <h3>FOUR ELVISES <span class="text-mini">1963</span></h3>
              <p>+</p>
            </div>
            <div class="flex flex-col justify-between">
              <h3>Silkscreen Technique</h3>
              <p class="text-beige">+</p>
            </div>
            <div class="text-beige whitespace-nowrap">
              <ol class="space-y-[0.075vw]">
                <li>Andy Warhol explores</li>
                <li>four images of Elvis.</li>
                <li>Capturing his fame.</li>
                <li>Elvis as a gunslinger</li>
              </ol>
            </div>
          </div>
          <div class="flex flex-col gap-[1.5vw] pl-[4.5vw]">
            <div class="flex justify-between items-center">
              <div class="flex items-center gap-[1vw] text-beige">
                <p>+</p>
                <p>+</p>
                <p>+</p>
              </div>
              <h3>Icon of mass-produced Pop Art</h3>
            </div>
            <p class="text-beige">
              Mass-produced imagery, key to Pop Art, highlights how fame and
              consumerism shapes modern identities.
            </p>
          </div>
        </div>
      </div>
    </section>


    <!-- Section III -->
    <section class="mb-[10vw] relative">
      <img class="absolute right-[-0.2vw] top-1/2 -translate-y-1/2 h-full max-h-[130%]"
        src=" ./assets/images/quote-dots.svg" alt="elvis" draggable="false" decoding="async">
      <img class="absolute left-[-0.2vw] top-1/2 -translate-y-1/2 rotate-180 h-full max-h-[130%]"
        src=" ./assets/images/quote-dots.svg" alt="elvis" draggable="false" decoding="async">

      <div class="relative container space-y-[3vw]">
        <div class="flex items-center justify-between w-full gap-[1.5vw]">
          <img class="w-[3vw]" src="./assets/images/star-orange.svg" alt="orange star" draggable="false"
            decoding="async">
          <div class="w-full h-px bg-beige-200"></div>
          <img class="w-[3vw]" src="./assets/images/star-orange.svg" alt="orange star" draggable="false"
            decoding="async">
        </div>

        <div class="relative pb-[3vw] space-y-[3vw]">
          <img class="w-[3vw] absolute bottom-0 right-0" src="./assets/images/guillemets.svg" alt="guillemets"
            draggable="false" decoding="async">
          <blockquote class="text-beige text-center text-lg uppercase font-bold text-balance"
            cite="https://en.wikipedia.org/wiki/The_Philosophy_of_Andy_Warhol">
            The most exciting attractions are between
            opposites that never meet. People think they’ve
            connected through attraction, but found
            someone to forget themselves. The less
            important a meeting, the more you want it.
          </blockquote>
          <h2 class="text-center text-beige text-lg">
            <span class="italic font-light pr-[1.25vw]">The Philosophy of Andy Wahol</span>
            <span class="text-primary font-bold">(</span>
            <span class="font-extralight">From A to B and Back Again</span>
            <span class="text-primary font-bold">)</span>
          </h2>
        </div>
        <h3 class="text-beige text-lg font-extralight text-center">© <span class="font-bold">1975</span></h3>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
