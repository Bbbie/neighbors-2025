export default defineNuxtPlugin((nuxtApp) => {
   nuxtApp.vueApp.directive('magic-transition', {
      mounted(el, binding) {
         el.style['view-transition-name'] = binding.value
      },
   })
})
