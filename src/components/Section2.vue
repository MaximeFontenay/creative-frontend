<script lang="ts" setup>

</script>


<template>
  <section class="mb-[10vw]">
    <div class="container space-y-[2vw] px-[4vw]">
      <div class="grid grid-cols-4 place-items-center">
        <h2 class="text-sm font-light">ELVIS</h2>
        <h2 class="text-sm font-light">ELVIS</h2>
        <h2 class="text-sm font-light">ELVIS</h2>
        <h2 class="text-sm font-light">ELVIS</h2>
      </div>

      <div class="flex items-center justify-center relative">
        <img class="banana absolute w-[12vw] top-[20%] left-[-10%] z-50" src="img/banana.svg" alt="elvis"
          draggable="false" decoding="async">

        <img class="can absolute w-[13vw] bottom-[10%] right-[-10%] z-50" src="img/can.svg" alt="elvis"
          draggable="false" decoding="async">

        <div class="elvis-duo w-full">
          <img class="w-full relative z-10" src="img/elvis-duo.avif" alt="elvis" draggable="false" decoding="async">
          <div class="hover-imgs">
            <img src="img/elvis-duo.avif" alt="elvis" draggable="false" decoding="async">
            <img src="img/elvis-duo.avif" alt="elvis" draggable="false" decoding="async">
            <img src="img/elvis-duo.avif" alt="elvis" draggable="false" decoding="async">
            <img src="img/elvis-duo.avif" alt="elvis" draggable="false" decoding="async">
            <img src="img/elvis-duo.avif" alt="elvis" draggable="false" decoding="async">
            <img src="img/elvis-duo.avif" alt="elvis" draggable="false" decoding="async">
            <img src="img/elvis-duo.avif" alt="elvis" draggable="false" decoding="async">
            <img src="img/elvis-duo.avif" alt="elvis" draggable="false" decoding="async">
          </div>
        </div>

      </div>

      <div class="text-2xs grid grid-cols-2 place-items-center font-league">
        <div class="w-full flex justify-between items-stretch gap-4">
          <div class="flex flex-col justify-between text-beige">
            <h3>FOUR ELVISES <span class="text-mini">1963</span></h3>
            <p>+</p>
          </div>
          <div class="flex flex-col justify-between">
            <h3 class="">Silkscreen Technique</h3>
            <p class="text-beige">+</p>
          </div>
          <div class="text-beige whitespace-nowrap text-3xs">
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
          <p class="text-beige text-3xs">
            Mass-produced imagery, key to Pop Art, highlights how fame and
            consumerism shapes modern identities.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
