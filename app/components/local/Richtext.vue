<template>
   <div class="Richtext BaseRichtext">
      <div v-for="node in nodes" :key="node.key" :data-is-blok="node.type === 'blok'">
         <component
            :is="node.content.blok.content.component"
            v-if="node.type === 'blok'"
            :blok="node.content.blok.content" />
         <div v-else v-html="node.content" :data-lines="lineClamp" />
      </div>
   </div>
</template>

<script setup lang="ts">
import { parse } from 'node-html-parser'

const props = withDefaults(
   defineProps<{
      text: any
      lineClamp?: 1 | 2 | 3 | 4 | 5
   }>(),
   {},
)

const nodes = computed((): any[] => {
   return parseRichtext()
})

function parseRichtext() {
   const textObject = { ...props.text }
   const nodes: any[] = []

   Object.entries(textObject.content).forEach(([key, node]: any[]) => {
      if (node.type === 'blok') {
         node.attrs?.body.forEach((blok) => {
            nodes.push({
               key,
               type: 'blok',
               content: {
                  blok: {
                     content: blok,
                  },
               },
            })
         })
      } else {
         const _node = {
            key,
            type: 'html',
            content: renderRichText({
               type: 'doc',
               content: [node],
            } as any),
         }

         // add aria-labels to links
         if (_node.content.includes('<a')) {
            const paragraph = parse(_node.content)
            const a = paragraph.querySelector('a')!
            a.setAttribute('aria-label', a.innerText)
         }

         nodes.push(_node)
      }
   })

   return nodes
}
</script>

<style lang="scss">
div.BaseRichtext {
   *:empty {
      @apply h-[20px];
   }

   a {
      @apply text-primary;
   }
}
</style>
