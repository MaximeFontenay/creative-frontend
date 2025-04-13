<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from 'lenis';
import { onMounted, ref } from 'vue';

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



// Section II



// Section III
const blockquote = ref<HTMLElement | null>(null);

onMounted(() => {
  const blockquoteLines = blockquote.value?.querySelectorAll('p') || [];
  ScrollTrigger.create({
    trigger: blockquote.value,
    onUpdate: (self) => {
      const progress: number = parseFloat(self.progress.toFixed(4));

      const updateLineMask = (
        progress: number,
        lineElement: HTMLElement,
        start: number,
        end: number
      ): void => {
        const mask = lineElement.querySelector('.mask') as HTMLElement;
        if (!mask) return;

        if (progress <= start) {
          mask.style.width = 'calc(100%)';
        } else if (progress >= end) {
          mask.style.width = 'calc(0%)';
        } else {
          const normalizedProgress = (progress - start) / (end - start);
          const linePercentage = normalizedProgress * 100;
          mask.style.width = `calc(100% - ${linePercentage}%)`;
        }
      };

      updateLineMask(progress, blockquoteLines[0], 0.2, 0.3);
      updateLineMask(progress, blockquoteLines[1], 0.29, 0.4);
      updateLineMask(progress, blockquoteLines[2], 0.39, 0.5);
      updateLineMask(progress, blockquoteLines[3], 0.49, 0.6);
      updateLineMask(progress, blockquoteLines[4], 0.59, 0.7);
    }
  })
})



// Section III
const monroes = ref<HTMLElement | null>(null);
const vividColor = ref<HTMLElement | null>(null);
const iconReborn = ref<HTMLElement | null>(null);

const backgroundHandler = (progress: number): void => {
  if (!app.value) return

  const backgroundColor = (progress >= 0.3 && progress <= 0.7)
    ? 'var(--color-light)'
    : 'var(--color-dark)'

  app.value.style.backgroundColor = backgroundColor
}

const slideTextHandler = (progress: number, text: HTMLElement, direction: boolean): void => {
  if (!vividColor.value || !iconReborn.value) return

  const textPosition = direction
    ? `calc(0% + ${progress * 30}%)`
    : `calc(0% - ${progress * 30}%)`

  text.style.transform = `translateX(${textPosition})`
}

onMounted(() => {
  if (!monroes.value || !app.value) return

  ScrollTrigger.create({
    trigger: monroes.value,
    onUpdate: ({ progress }) => {
      backgroundHandler(progress);
      slideTextHandler(progress, vividColor.value as HTMLElement, true);
      slideTextHandler(progress, iconReborn.value as HTMLElement, false);
    },
  })
})



// Section V
const verticalImages = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!verticalImages.value) return
  verticalImages.value.parentNode?.appendChild(verticalImages.value.cloneNode(true))
})


</script>

<template>
  <div ref="app" class="ease duration-700 bg-dark text-light font-mango">
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


    <!-- Section II -->
    <section class="mb-[10vw]">
      <div class="container space-y-[2vw] px-[4vw]">
        <div class="grid grid-cols-4 place-items-center">
          <h2 class="text-sm font-light">ELVIS</h2>
          <h2 class="text-sm font-light">ELVIS</h2>
          <h2 class="text-sm font-light">ELVIS</h2>
          <h2 class="text-sm font-light">ELVIS</h2>
        </div>

        <div class="flex items-center justify-center relative">
          <img class="banana absolute w-[12vw] top-[20%] left-[-10%] z-50" src="./assets/images/banana.svg" alt="elvis"
            draggable="false" decoding="async">

          <img class="can absolute w-[13vw] bottom-[10%] right-[-10%] z-50" src="./assets/images/can.svg" alt="elvis"
            draggable="false" decoding="async">

          <div class="elvis-duo w-full">
            <img class="w-full relative z-10" src="./assets/images/elvis-duo.avif" alt="elvis" draggable="false"
              decoding="async">
            <div class="hover-imgs">
              <img src="./assets/images/elvis-duo.avif" alt="elvis" draggable="false" decoding="async">
              <img src="./assets/images/elvis-duo.avif" alt="elvis" draggable="false" decoding="async">
              <img src="./assets/images/elvis-duo.avif" alt="elvis" draggable="false" decoding="async">
              <img src="./assets/images/elvis-duo.avif" alt="elvis" draggable="false" decoding="async">
              <img src="./assets/images/elvis-duo.avif" alt="elvis" draggable="false" decoding="async">
              <img src="./assets/images/elvis-duo.avif" alt="elvis" draggable="false" decoding="async">
              <img src="./assets/images/elvis-duo.avif" alt="elvis" draggable="false" decoding="async">
              <img src="./assets/images/elvis-duo.avif" alt="elvis" draggable="false" decoding="async">
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


    <!-- Section III -->
    <section class="mb-[10vw] relative">
      <img class="absolute right-0 vertical-center h-full max-h-[130%]" src=" ./assets/images/quote-dots.svg" alt="dots"
        draggable="false" decoding="async">
      <img class="absolute left-0 vertical-center rotate-180 h-full max-h-[130%]" src=" ./assets/images/quote-dots.svg"
        alt="dots" draggable="false" decoding="async">

      <div class="relative container space-y-[3vw] px-[4vw]">
        <div class="flex items-center justify-between w-full gap-[1.5vw]">
          <img class="w-[3vw]" src="./assets/images/star-orange.svg" alt="orange star" draggable="false"
            decoding="async">
          <div class="w-full h-px bg-beige-200"></div>
          <img class="w-[3vw]" src="./assets/images/star-orange.svg" alt="orange star" draggable="false"
            decoding="async">
        </div>

        <div class="relative pb-[3vw] space-y-[3vw]">
          <img class="w-[2.8vw] absolute bottom-0 right-0 m-0" src="./assets/images/guillemets.svg" alt="guillemets"
            draggable="false" decoding="async">

          <div class="relative">
            <p class="font-sans text-beige text-2xs absolute left-0 bottom-0 top-full w-fit h-fit">WARHOL™<br>POP∆
            </p>
            <blockquote ref="blockquote"
              class="text-light text-center text-lg uppercase font-bold text-balance w-[80%] mx-auto flex flex-col gap-[.5vw]"
              cite="https://en.wikipedia.org/wiki/The_Philosophy_of_Andy_Warhol">
              <p>The most exciting attractions are between<span class="mask"></span></p>
              <p>opposites that never meet. People think they’ve<span class="mask"></span></p>
              <p>connected through attraction, but found<span class="mask"></span></p>
              <p>someone to forget themselves. The less<span class="mask"></span></p>
              <p>important a meeting, the more you want it.<span class="mask"></span></p>
            </blockquote>
          </div>

          <h2 class="text-center text-beige text-base">
            <span class="italic font-light pr-[1.25vw]">The Philosophy of Andy Wahol</span>
            <span class="text-primary font-bold">(</span>
            <span class="font-extralight px-[.75vw]">From A to B and Back Again</span>
            <span class="text-primary font-bold">)</span>
          </h2>
        </div>
        <h3 class="text-beige text-lg font-extralight text-center">© <span class="font-bold">1975</span></h3>

        <div class="flex items-center justify-between w-full gap-[1.5vw]">
          <img class="w-[3vw]" src="./assets/images/star-orange.svg" alt="orange star" draggable="false"
            decoding="async">
          <div class="w-full h-px bg-beige-200"></div>
          <img class="w-[3vw]" src="./assets/images/star-orange.svg" alt="orange star" draggable="false"
            decoding="async">
        </div>
      </div>
    </section>


    <!-- Section IV -->
    <section class="mb-[10vw] relative">
      <div class="container">
        <img ref="vividColor" src="./assets/images/Vivid-Colors.svg"
          class="uppercase text-xl font-medium relative z-50 text-dark mix-blend-difference" draggable="false"
          decoding="async" />
        <div ref="monroes" class="monroes aspect-square relative w-[48vw] mt-[-8vh] mb-[-7vh] mx-auto max-lg:w-[80vw]">
          <img src="./assets/images/m-0.avif" alt="monroe" draggable="false" decoding="async">
          <img src="./assets/images/m-1.avif" alt="monroe" draggable="false" decoding="async">
          <img src="./assets/images/m-2.avif" alt="monroe" draggable="false" decoding="async">
          <img src="./assets/images/m-3.avif" alt="monroe" draggable="false" decoding="async">
          <img src="./assets/images/m-4.avif" alt="monroe" draggable="false" decoding="async">
          <img src="./assets/images/m-5.avif" alt="monroe" draggable="false" decoding="async">
          <img src="./assets/images/m-6.avif" alt="monroe" draggable="false" decoding="async">
          <img src="./assets/images/m-7.avif" alt="monroe" draggable="false" decoding="async">
          <img src="./assets/images/m-8.avif" alt="monroe" draggable="false" decoding="async">
          <img src="./assets/images/m-9.avif" alt="monroe" draggable="false" decoding="async">
        </div>
        <img ref="iconReborn" src="./assets/images/ICON-REBORN.svg"
          class="uppercase text-xl font-medium relative z-50 text-dark mix-blend-difference ml-auto" draggable="false"
          decoding="async" />
      </div>
    </section>


    <!-- Section V -->
    <section class="m-[1px] h-[99dvh] w-[99dvw] mb-[10vw] mx-auto relative border border-beige-200">
      <div class="relative overflow-y-scroll scrollbar-hide w-full h-full">
        <div class="images-wrapper will-change-transform flex flex-col gap-[5vw] items-center w-1/2 mx-auto">
          <div ref="verticalImages" class="flex flex-col gap-[5vw]">
            <img src="./assets/images/warhol__1.avif" alt="monroe" draggable="false" decoding="async">
            <img src="./assets/images/warhol__3.avif" alt="monroe" draggable="false" decoding="async">
            <img src="./assets/images/warhol__4.avif" alt="monroe" draggable="false" decoding="async">
            <img src="./assets/images/scroll-image-0.avif" alt="monroe" draggable="false" decoding="async">
            <img src="./assets/images/warhol__2.avif" alt="monroe" draggable="false" decoding="async">
            <img src="./assets/images/scroll-image-1.avif" alt="monroe" draggable="false" decoding="async">
            <img src="./assets/images/scroll-image-2.avif" alt="monroe" draggable="false" decoding="async">
            <img src="./assets/images/scroll-image-5.avif" alt="monroe" draggable="false" decoding="async">
            <img src="./assets/images/scroll-image-6.avif" alt="monroe" draggable="false" decoding="async">
            <img src="./assets/images/scroll-image-7.avif" alt="monroe" draggable="false" decoding="async">
            <img src="./assets/images/scroll-image-8.avif" alt="monroe" draggable="false" decoding="async">
            <img src="./assets/images/scroll-image-9.avif" alt="monroe" draggable="false" decoding="async">
          </div>
        </div>
      </div>
    </section>

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

          <img class="w-[52.5vw]" src=" ./assets/images/logo-footer-warhol.svg" alt="dots" draggable="false"
            decoding="async">
        </div>

        <div class="w-full pb-[.5vh] pt-[5.5vh]">
          <img class="" src=" ./assets/images/rule.svg" alt="dots" draggable="false" decoding="async">
        </div>
      </div>
    </footer>
  </div>
</template>
