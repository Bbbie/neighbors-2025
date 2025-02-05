export interface Image {
   id: string
   alt: string
   copyright: string
   fieldtype: 'asset'
   filename: string
   name: string
   title: string
   focus?: string // e.g. "599x181:600x182"
}
