<script setup>
const isSending = ref(false)
const isDirty = ref(false)
const isSuccess = ref(false)
const isError = ref(false)

async function sendMessage(event) {
  const formData = new FormData(event.srcElement)

  isSending.value = true
  isDirty.value = true

  const { error } = await $fetch('/api/send-message', {
    method: 'POST',
    body: formData,
  })
  console.error(error)

  if (error) {
    isError.value = true
    isSending.value = false
    return
  }

  isSuccess.value = true
  isSending.value = false
}
</script>

<template>
  <section class="px-2">
    <form id="contact" class="mx-auto max-w-xl" @submit.prevent="sendMessage">
      <fieldset class="fieldset rounded-box border-4 border-base-300 p-4" :disabled="isSuccess">
        <legend class="mx-auto fieldset-legend px-8 text-xl">
          Me contacter
        </legend>
        <p class="plz-no-spamerino text-center text-base" data-user="nairolf" data-website="oi.rehsamlluks" />
        <fieldset class="fieldset">
          <legend class="fieldset-legend">
            Votre email
          </legend>
          <input name="email" class="validator input w-full" type="email" required placeholder="elisa@monsite.com">
          <div class="validator-hint">
            Veuillez entrer un email valide
          </div>
        </fieldset>
        <fieldset class="fieldset">
          <legend class="fieldset-legend">
            Votre message
          </legend>
          <textarea
            name="message" class="validator textarea h-44 w-full"
            placeholder="Bonjour, je m'appelle Elisa, j'ai un projet de site e-commerce. Pouvez-vous me rappeler au 06 ** ** ** ** ?"
            required
          />
          <div class="validator-hint">
            Veuillez ajouter un message
          </div>
        </fieldset>
        <fieldset class="fieldset">
          <legend class="fieldset-legend">
            Consentement au traitement des données
          </legend>
          <label class="label whitespace-normal">
            <input type="checkbox" class="checkbox checkbox-primary" required>
            <div>
              <p>J'accepte que les informations récoltées dans ce formulaire soient traitées dans le but d'établir une
                communication professionnelle. Les données ne sont pas revendues à une société tierce.</p>
              <p>Plus d'infos disponibles en consultant nos <NuxtLink
                class="link link-primary" to="/mentions-legales"
                target="_blank"
              >mentions légales</NuxtLink>.</p>
            </div>
          </label>
        </fieldset>
        <Button class="mt-4 btn-primary">
          <span v-show="isSending" class="loading loading-spinner" />
          Envoyer le message
        </Button>
        <span class="validator-hint" :class="{ visible: isDirty }">
          <span v-show="isSuccess" class="text-success">Votre message a été envoyé avec succès</span>
          <span v-show="isError" class="text-error">Erreur lors de l'envoi de votre message</span>
        </span>
      </fieldset>
    </form>
  </section>
</template>
