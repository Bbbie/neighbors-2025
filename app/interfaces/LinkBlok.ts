import type { Link } from './Link'

export interface LinkBlok {
   _uid: string
   label: string
   link?: Link
   sublinks: LinkBlok[]
}
