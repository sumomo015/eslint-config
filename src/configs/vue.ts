import eslintVue from 'eslint-plugin-vue'

import { cleanConfigs } from '../utils/clean'

import type { Config } from '../types'

function getVueConfigs(): Config[] {
  return cleanConfigs([
    ...eslintVue.configs['flat/recommended'],
    {
      rules: {
        'vue/component-name-in-template-casing': ['warn', 'PascalCase'],
        'vue/custom-event-name-casing': ['warn', 'camelCase'],
        'vue/define-emits-declaration': ['warn', 'type-literal'],
        'vue/define-macros-order': ['warn', {
          order: ['defineModel', 'defineProps', 'defineEmits', 'defineSlots'],
        }],
        'vue/define-props-declaration': 'warn',
        'vue/html-button-has-type': 'warn',
        'vue/no-ref-object-reactivity-loss': 'warn',
        'vue/no-required-prop-with-default': 'warn',
        'vue/no-root-v-if': 'warn',
        'vue/no-setup-props-reactivity-loss': 'warn',
        'vue/no-template-target-blank': 'warn',
        'vue/no-undef-components': 'warn',
        'vue/no-use-v-else-with-v-for': 'warn',
        'vue/no-useless-mustaches': 'warn',
        'vue/no-useless-v-bind': 'warn',
        'vue/no-v-text': 'warn',
        'vue/padding-line-between-blocks': 'warn',
        'vue/prefer-define-options': 'warn',
        'vue/prefer-true-attribute-shorthand': 'warn',
        'vue/prefer-use-template-ref': 'warn',
        'vue/require-explicit-slots': 'warn',
        'vue/require-macro-variable-name': 'warn',
        'vue/require-typed-ref': 'warn',
        'vue/v-on-handler-style': 'warn',
        'vue/valid-define-options': 'warn',
        'vue/eqeqeq': 'warn',
        'vue/prefer-template': 'warn',
      },
    },
  ])
}

export {
  getVueConfigs,
}
