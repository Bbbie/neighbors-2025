import Languages from '~/enums/Languages'

export const useGetLanguage = (): Languages => {
   const path = useRoute()
      .fullPath.split('/')
      .filter((path) => !!path.length)
   return (
      Object.values(Languages)
         .filter((lang) => lang != 'default')
         .find((lang: string) => path[0]?.toLowerCase() == lang.toLowerCase()) || Languages.GERMAN
   )
}

export const useSetLanguage = (lang: Languages) => {
   if (!Object.values(Languages).includes(lang)) return console.error('[setLanguage()] Language not found')

   const path = useRoute()
      .fullPath.split('/')
      .filter((path) => !!path.length)
   const currentLanguage = useGetLanguage()

   if (currentLanguage == Languages.GERMAN) {
      window.location.href = `${window.location.origin}/${lang}/${path.join('/')}`
   } else {
      if (lang == Languages.GERMAN) {
         window.location.href = `${window.location.origin}/${path.filter((_path: string) => !(Object.values(Languages) as string[]).includes(_path)).join('/')}`
      } else {
         window.location.href = window.location.href.replace(path[0], lang)
      }
   }
}
