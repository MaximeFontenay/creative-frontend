<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const verticalImages = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!verticalImages.value) return

  const scrollerContent = Array.from(verticalImages.value.children);
  scrollerContent.forEach((item: Element): void => {
    if (item instanceof HTMLElement) {
      const duplicatedItem = item.cloneNode(true) as HTMLElement;
      duplicatedItem.setAttribute("aria-hidden", "true");
      verticalImages.value?.appendChild(duplicatedItem);
    }
  });
})

</script>

<template>

  <section id="section-5" class="h-[60dvh] w-full mb-[10vw]">
    <div ref="verticalImages" class="images-wrapper">
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
    <div class="lines"></div>
  </section>
</template>
