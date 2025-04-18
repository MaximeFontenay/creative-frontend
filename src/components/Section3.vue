<script lang="ts" setup>
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref } from 'vue';

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

</script>


<template>
  <section class="mb-[10vw] relative">
    <img class="absolute right-0 vertical-center h-full max-h-[130%]" src="img/quote-dots.svg" alt="dots"
      draggable="false" decoding="async">
    <img class="absolute left-0 vertical-center rotate-180 h-full max-h-[130%]" src="img/quote-dots.svg" alt="dots"
      draggable="false" decoding="async">

    <div class="relative container space-y-[3vw] px-[4vw]">
      <div class="flex items-center justify-between w-full gap-[1.5vw]">
        <img class="w-[3vw]" src="img/star-orange.svg" alt="orange star" draggable="false" decoding="async">
        <div class="w-full h-px bg-beige-200"></div>
        <img class="w-[3vw]" src="img/star-orange.svg" alt="orange star" draggable="false" decoding="async">
      </div>

      <div class="relative pb-[3vw] space-y-[3vw]">
        <img class="w-[2.8vw] absolute bottom-0 right-0 m-0" src="img/guillemets.svg" alt="guillemets" draggable="false"
          decoding="async">

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
        <img class="w-[3vw]" src="img/star-orange.svg" alt="orange star" draggable="false" decoding="async">
        <div class="w-full h-px bg-beige-200"></div>
        <img class="w-[3vw]" src="img/star-orange.svg" alt="orange star" draggable="false" decoding="async">
      </div>
    </div>
  </section>
</template>
