export interface Link {
   id?: string
   url?: string
   cached_url: string // e.g. pages/start#
   email?: string
   linktype: 'story' | 'url' | 'email' | 'asset' | 'phone'
   fieldtype?: 'multilink' | string
   target?: '_blank' | '_self'
   anchor?: string

   story?: {
      name: string
      id: string
      uuid: string
      slug: string
      full_slug: string
      url: string
   }
}
