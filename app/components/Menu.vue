<script setup lang="ts">
// store the theme value in localstorage
</script>

<template>
  <nav class="flex justify-end">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn m-1">
        Theme
        <svg
          width="12px" height="12px" class="
            inline-block size-2 fill-current opacity-60
          "
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
        </svg>
      </div>
      <ul
        tabindex="-1" class="
          dropdown-content z-1 w-52 rounded-box bg-base-300 p-2 shadow-2xl
        "
      >
        <li>
          <input
            type="radio" name="theme-dropdown"
            class="
              theme-controller btn btn-block w-full justify-start btn-ghost
              btn-sm
            " aria-label="Default"
            value="default"
          >
        </li>
        <li>
          <input
            type="radio" name="theme-dropdown"
            class="
              theme-controller btn btn-block w-full justify-start btn-ghost
              btn-sm
            " aria-label="Retro"
            value="retro"
          >
        </li>
        <li>
          <input
            type="radio" name="theme-dropdown"
            class="
              theme-controller btn btn-block w-full justify-start btn-ghost
              btn-sm
            " aria-label="Cyberpunk"
            value="cyberpunk"
          >
        </li>
        <li>
          <input
            type="radio" name="theme-dropdown"
            class="
              theme-controller btn btn-block w-full justify-start btn-ghost
              btn-sm
            " aria-label="Valentine"
            value="valentine"
          >
        </li>
        <li>
          <input
            type="radio" name="theme-dropdown"
            class="
              theme-controller btn btn-block w-full justify-start btn-ghost
              btn-sm
            " aria-label="Aqua" value="aqua"
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
