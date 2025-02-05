export const useLog = (...args) => {
   if (useSBVersion() == 'draft') console.log(...args)
}
