export const useID = (blok: any): string => {
   return `${blok?.component || blok?.content?.component || ''}::${blok?._uid || blok?.content?._uid || ''}`
}

export const useRichtextExists = (text: any) => {
   return !!text?.content?.[0]?.content || false
}

export const useDeveloperCreditInConsole = () => {
   console.log(
      `%c     Designed and Developed by 5AM (https://five-am.com)     `,
      'font-size:14px; background:black; color:white;',
   )
}

export const useRandomString = (length = 8) => {
   // Declare all characters
   let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

   // Pick characers randomly
   let str = ''
   for (let i = 0; i < length; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length))
   }

   return str
}

export const useSleep = async (milliseconds: number) => {
   await new Promise((r) => setTimeout(r, milliseconds))
}
