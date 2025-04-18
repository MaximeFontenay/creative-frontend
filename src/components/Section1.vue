<script lang="ts" setup>
</script>


<template>
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
        <img class="w-full" src="../assets/images/glue.png" alt="glue tube" draggable="false" decoding="async" />
        <p
          class="absolute vertical-center left-[4vw] text-primary stroke-dark transition-opacity duration-150 ease-in group-hover:opacity-0">
          DIVE IN</p>
        <p
          class="absolute vertical-center left-[4vw] text-primary stroke-dark transition-opacity duration-150 ease-in opacity-0 group-hover:opacity-100">
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
</template>
