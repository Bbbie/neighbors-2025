<template>
   <footer
      :class="blok.component"
      class="bg-neutral-400 text-white"
      v-editable="blok"
      :id="useID(blok)"
      :data-uid="blok._uid">
      <div class="--narrow Content py-32">FOOTER</div>
   </footer>
</template>

<script setup lang="ts">
import type { Image } from '~/interfaces/Image'
import type { Link } from '~/interfaces/Link'
import type { MenuEntry } from '~/interfaces/MenuEntry'

type Footer = {
   _uid: string
   logo: Image
   company_text: any
   menu: MenuEntry[]
   imprint: Link
   privacy: Link
   [key: string]: any
}

const {
   data: {
      story: { content },
   },
} = await useStoryblokApi().get(`cdn/stories/global-components/footer`, {
   version: useSBVersion(),
   resolve_links: 'url',
})
const blok = useState<Footer>('header', () => content)
</script>

<style lang="scss" scoped>
footer {
   * {
      @apply text-[1.4rem] leading-[128%];
   }
}
</style>
