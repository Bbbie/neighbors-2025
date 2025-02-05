import type { Link } from './Link'

export interface Button {
   _uid: string
   label: string
   link: Link
   appearance: 'primary' | 'secondary' | 'outline'
   component: 'Button'
}
