<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const verticalImages = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!verticalImages.value) return
  verticalImages.value.parentNode?.appendChild(verticalImages.value.cloneNode(true))
})

</script>


<template>

  <section class="m-[1px] h-[99dvh] w-[99dvw] mb-[10vw] mx-auto relative border border-beige-200">
    <div class="relative overflow-y-scroll scrollbar-hide w-full h-full">
      <div class="images-wrapper will-change-transform flex flex-col gap-[5vw] items-center w-1/2 mx-auto">
        <div ref="verticalImages" class="flex flex-col gap-[5vw]">
          <img src="img/warhol__1.avif" alt="decorative image - warhol art" draggable="false" decoding="async">
          <img src="img/warhol__3.avif" alt="decorative image - warhol art" draggable="false" decoding="async">
          <img src="img/warhol__4.avif" alt="decorative image - warhol art" draggable="false" decoding="async">
          <img src="img/scroll-image-0.avif" alt="decorative image - warhol art" draggable="false" decoding="async">
          <img src="img/warhol__2.avif" alt="decorative image - warhol art" draggable="false" decoding="async">
          <img src="img/scroll-image-1.avif" alt="decorative image - warhol art" draggable="false" decoding="async">
          <img src="img/scroll-image-2.avif" alt="decorative image - warhol art" draggable="false" decoding="async">
          <img src="img/scroll-image-5.avif" alt="decorative image - warhol art" draggable="false" decoding="async">
          <img src="img/scroll-image-6.avif" alt="decorative image - warhol art" draggable="false" decoding="async">
          <img src="img/scroll-image-7.avif" alt="decorative image - warhol art" draggable="false" decoding="async">
          <img src="img/scroll-image-8.avif" alt="decorative image - warhol art" draggable="false" decoding="async">
          <img src="img/scroll-image-9.avif" alt="decorative image - warhol art" draggable="false" decoding="async">
        </div>
      </div>
    </div>
  </section>
</template>
