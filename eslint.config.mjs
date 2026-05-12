// @ts-check
import antfu from '@antfu/eslint-config'
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'
import eslintParserVue from 'vue-eslint-parser'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    typescript: true,
    vue: true,
  }),
)
  .append(
    {
      extends: [
        eslintPluginBetterTailwindcss.configs.recommended,
      ],

      // if needed, override rules to configure them individually
      // rules: {
      //   "better-tailwindcss/enforce-consistent-line-wrapping": ["warn", { printWidth: 100 }]
      // },

      settings: {
        'better-tailwindcss': {
          // tailwindcss 4: the path to the entry file of the css based tailwind config (eg: `src/global.css`)
          entryPoint: 'app/assets/app.css',
        },
      },

      files: ['**/*.vue'],

      languageOptions: {
        parser: eslintParserVue,
      },
    },
  )
