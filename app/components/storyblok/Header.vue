<template>
   <header
      :class="blok.component"
      class="sticky z-50 inset-x-0 top-0"
      v-editable="blok"
      :id="useID(blok)"
      :data-uid="blok._uid">
      <div class="Desktop lg:hidden">
         <div class="--wide py-16">DESKTOP HEADER</div>
      </div>

      <div class="Mobile hidden lg:block border-b border-neutral-300">
         <div class="--wide py-6 !px-12 flex items-center justify-between">
            <NuxtLink to="/" aria-label="Zur Startseite"> LOGO </NuxtLink>
            <button aria-label="Seitenmenü öffnen" @click="sidebarVisible = !sidebarVisible">
               <XIcon v-if="sidebarVisible"></XIcon>
               <MenuIcon v-else></MenuIcon>
            </button>
         </div>
         <Teleport to="body">
            <MobileSidebar :header="blok" :visible="sidebarVisible" />
         </Teleport>
      </div>
   </header>
</template>

<script setup lang="ts">
import type { Image } from '~/interfaces/Image'
import type { Link } from '~/interfaces/Link'
import type { LinkBlok } from '~/interfaces/LinkBlok'

type Header = {
   _uid: string
   logo: Image
   top_menu: LinkBlok[]
   main_menu: LinkBlok[]
   facebook: Link
   instagram: Link
   [key: string]: any
}

const {
   data: {
      story: { content },
   },
} = await useStoryblokApi().get(`cdn/stories/global-components/header`, {
   version: useSBVersion(),
   resolve_links: 'url',
})
const blok = useState<Header>('header', () => content)

const sidebarVisible = ref<boolean>(false)

onMounted(() => {
   window.innerWidth >= 1200 && initDesktopTimeline()
})

const timeline = ref()
function initDesktopTimeline() {
   const selector = `header`
   const duration = 0.4

   timeline.value = (useNuxtApp() as any).$gsap
      .timeline({
         scrollTrigger: {
            trigger: `main`,
            start: 'top 0%',
            end: 'top 1%',
            toggleActions: 'restart none none reverse',
         },
      })
      // Actions go here
      .pause()
}
</script>

<style lang="scss" scoped>
.Entry {
   ul {
      @apply opacity-0 translate-y-[-4px] pointer-events-none;
      @apply transition-all duration-200;
   }

   &:hover,
   &:focus-within {
      ul {
         @apply opacity-100 translate-y-0 pointer-events-auto;

         li a {
            @apply whitespace-nowrap;
         }
      }
   }
}

.TopMenu {
   &::before {
      content: '';
      @apply absolute inset-y-0 left-[60vw] right-0 z-[-1];
      @apply bg-neutral-300;
   }
}
</style>
