<template>
  <div>
    <div class="flex justify-center">
      <Navbar />
    </div>
    <slot />
    <div
      class="
        divider my-0 h-0.5 bg-linear-to-r from-primary via-secondary to-accent
      "
    />
    <Footer />
  </div>
</template>
