<template>
  <div class="relative flex h-104 w-full max-w-sm items-center justify-center">
    <div
      class="
        absolute inset-0 -z-10 bg-radial-[at_70%_30%] from-accent/75 to-base-100
        blur-3xl
        sm:-inset-10 sm:-inset-x-32 sm:bg-radial-[at_60%_60%] sm:from-accent/60
        md:-inset-x-90 md:rounded-full md:from-accent/50
      "
    />
    <img class="absolute top-0 left-5 -z-10 w-42 -rotate-6 shadow-lg/50" src="/florian-ledru-skate-1.avif" alt="Florian Ledru souriant sur un skate éffectuant un virage a gauche">
    <img class="absolute top-0 right-5 -z-10 w-42 rotate-2 shadow-lg/50" src="/florian-ledru-skate-2.avif" alt="Florian Ledru souriant sur un skate éffectuant un virage a droite">
    <img class="absolute bottom-0 -z-10 w-42 -rotate-6 shadow-lg/50" src="/florian-ledru-skate-3.avif" alt="Florian Ledru souriant les cheveux aux vents">
    <SvgSkullmasher
      class="
        relative -top-6 size-18 rotate-12 drop-shadow-xl transition-transform
        duration-300
      "
      :font-controlled="false" filled
    />
  </div>
</template>
