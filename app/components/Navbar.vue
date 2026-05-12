<template>
  <nav
    class="
      fixed bottom-4 z-10 mx-auto w-fit rounded-box bg-neutral/20 shadow-sm
      shadow-neutral/60 backdrop-blur-lg
      sm:top-8 sm:bottom-auto
    "
  >
    <ul class="menu menu-horizontal items-center gap-2 text-base">
      <li>
        <NuxtLink to="/" class="group" title="Revenir à la page d'accueil">
          <SvgSkullmasher
            class="
              size-6 transition-transform duration-300
              group-hover:-rotate-12
              group-focus:-rotate-12
            "
            :font-controlled="false" filled
          />
        </NuxtLink>
      </li>
      <li>
        <ThemeDropdown />
      </li>
      <li>
        <NuxtLink to="#contact" class="group font-semibold">
          <Icon
            name="solar:user-hand-up-broken" size="1.5em" class="
              transition-transform duration-300
              group-hover:rotate-6
              group-focus:rotate-6
            "
          />
          Contact
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
