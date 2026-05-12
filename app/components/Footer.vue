<template>
  <footer class="bg-base-300 px-2 pt-12 pb-32">
    <div class="mx-auto max-w-xl">
      <nav class="mb-4 grid grid-cols-2">
        <NuxtLink to="/mentions-legales" class="link link-primary">
          Mentions légales
        </NuxtLink>
        <p class="justify-self-end">
          SIREN: <NuxtLink class="link link-primary" external to="https://annuaire-entreprises.data.gouv.fr/entreprise/florian-ledru-793553488">
            793553488
          </NuxtLink>
        </p>
      </nav>
      <div class="grid gap-y-2">
        <p>
          Je n'ai pas de réseaux sociaux mais parfois <NuxtLink
            class="link link-primary" external to="https://youtu.be/nF40HTXmYtQ"
          >
            je fais des vidéos sur youtube
          </NuxtLink>.
        </p>
        <p>Ce site fait attention à sa ligne alors il n'utilise pas de cookie 🍪</p>
        <p>
          Si vous regardez<NuxtLink class="link link-primary" external to="https://github.com/SkullMasher/skull.services">
            le code source de ce site
          </NuxtLink>, vous remarquerez que je n'ai pas utilisé Wordpress.
        </p>
      </div>
    </div>
  </footer>
</template>
