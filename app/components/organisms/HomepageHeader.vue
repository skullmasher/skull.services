<template>
  <header class="relative grid h-[max(666px,90vh)] grid-rows-3 overflow-hidden">
    <div
      class="
        absolute inset-x-0 top-0 bottom-[60%] -z-10 bg-linear-to-b from-base-300
        to-base-100
      "
    />
    <div class="absolute bottom-0 -left-5">
      <SvgAngineDePoitrinePhones class="w-48 text-base-300" :font-controlled="false" />
    </div>
    <div class="absolute -right-5 bottom-0">
      <SvgAngineDePoitrinePhones class="w-48 rotate-180 text-base-300" :font-controlled="false" />
    </div>
    <div class="relative flex items-center justify-center text-4xl">
      <Icon
        name="solar:planet-broken" class="
          absolute top-[30%] left-[7%] text-warning/50
          motion-safe:animate-[pulse_1800ms_ease-in-out_infinite]
        "
      />
      <Icon
        name="solar:star-ring-broken" class="
          absolute top-[50%] right-[8%] text-warning/50
          motion-safe:animate-[pulse_2s_ease-in-out_infinite]
        "
      />
      <Icon
        name="solar:star-angle-broken" class="
          absolute top-[27%] right-[25%] text-6xl text-warning/50
          motion-safe:animate-[pulse_2500ms_ease-in-out_infinite]
        "
      />
      <Icon
        name="solar:star-fall-minimalistic-broken" class="
          absolute bottom-[30%] left-[14%] -rotate-90 text-warning/50
          motion-safe:animate-[pulse_3s_ease-in-out_infinite]
        "
      />
      <Icon
        name="solar:star-rings-broken" class="
          absolute right-[23%] bottom-[14%] text-warning/50
          motion-safe:animate-[pulse_3s_ease-in-out_infinite]
        "
      />
      <Icon
        name="solar:rocket-2-broken" class="
          relative top-10 -rotate-45 animate-wiggle text-6xl text-warning/80
        "
      />
    </div>
    <div>
      <h1
        class="
          inline-flex size-full flex-col items-center justify-around text-center
          font-permanent-marker text-4xl
        "
      >
        <span>Le dévelopeur</span>
        <span class="relative inline-block">
          <Icon
            name="solar:bolt-broken" class="
              absolute -top-4.5 -left-6 -z-10 rotate-12 text-warning
            "
          />
          <span class="font-metal-mania text-7xl text-error uppercase">rockstar</span>
          <Icon
            name="solar:crown-star-broken" class="
              absolute -top-2 -right-2 rotate-32 text-2xl text-warning
            "
          />
        </span>
        <span>qui va te rendre</span>
        <span class="text-6xl text-primary uppercase">COOL</span>
      </h1>
    </div>
    <div class="flex items-center justify-center">
      <NuxtLink to="#about" title="Aller vers la section à propos">
        <Icon
          name="solar:double-alt-arrow-down-broken" class="
            relative -top-9 animate-pulse text-6xl text-primary
          "
        />
      </NuxtLink>
    </div>
  </header>
</template>
