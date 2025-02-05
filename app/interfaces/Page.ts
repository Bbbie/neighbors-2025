import type { Image } from './Image'

export interface Page {
   title: string
   description: string
   og_image?: Image
   body: any[]
   _uid: string
   component: string
}
