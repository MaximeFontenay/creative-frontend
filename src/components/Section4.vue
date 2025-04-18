<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const app = ref<HTMLElement | null>(null);
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

const updateImageStyles = (images: NodeListOf<HTMLImageElement>, activeIndex: number) => {
  images.forEach((image, index) => {
    if (index === activeIndex) {
      image.style.zIndex = '1';
      image.style.opacity = '1';
    } else {
      image.style.zIndex = '0';
      image.style.opacity = '0';
    }
  });
};

onMounted(() => {
  if (!monroes.value || !app.value) return

  ScrollTrigger.create({
    trigger: monroes.value,
    onUpdate: ({ progress }: { progress: number }): void => {
      backgroundHandler(progress);
      slideTextHandler(progress, vividColor.value as HTMLElement, true);
      slideTextHandler(progress, iconReborn.value as HTMLElement, false);
    },
  })

  const images = monroes.value.querySelectorAll('img');

  monroes.value.addEventListener('mousemove', (e: MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const xPercent = (x / rect.width) * 100;

    const sectionWidth = 100 / images.length;
    const activeIndex = Math.floor(xPercent / sectionWidth);

    updateImageStyles(images, activeIndex);
  });

  monroes.value.addEventListener('mouseleave', () => {
    updateImageStyles(images, 0);
  });
})

</script>


<template>
  <section class="mb-[10vw] relative">
    <div class="container">
      <img ref="vividColor" src="img/Vivid-Colors.svg" class="relative z-50 mix-blend-difference pointer-events-none"
        draggable="false" decoding="async" />
      <div ref="monroes" class="monroes aspect-square relative w-[48vw] mt-[-8vh] mb-[-7vh] mx-auto max-lg:w-[80vw]">
        <img src="img/m-0.avif" alt="monroe" draggable="false" decoding="async">
        <img src="img/m-1.avif" alt="monroe" draggable="false" decoding="async">
        <img src="img/m-2.avif" alt="monroe" draggable="false" decoding="async">
        <img src="img/m-3.avif" alt="monroe" draggable="false" decoding="async">
        <img src="img/m-4.avif" alt="monroe" draggable="false" decoding="async">
        <img src="img/m-5.avif" alt="monroe" draggable="false" decoding="async">
        <img src="img/m-6.avif" alt="monroe" draggable="false" decoding="async">
        <img src="img/m-7.avif" alt="monroe" draggable="false" decoding="async">
        <img src="img/m-8.avif" alt="monroe" draggable="false" decoding="async">
        <img src="img/m-9.avif" alt="monroe" draggable="false" decoding="async">
      </div>
      <img ref="iconReborn" src="img/ICON-REBORN.svg"
        class="relative z-50 mix-blend-difference pointer-events-none ml-auto" draggable="false" decoding="async" />
    </div>
  </section>
</template>
