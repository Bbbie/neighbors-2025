type QueryParamType = 'string' | 'string[]' | 'number' | 'number[]'

export const useQueryRef = (key: string, defaultValue = null, type: QueryParamType = 'string'): globalThis.Ref<any> => {
   const loadedValue = loadQueryParamFromURL(key, type)

   const queryRef = ref(loadedValue || defaultValue)

   watch(
      queryRef,
      async (newVal) => {
         updateQueryParamInURL(key, newVal, type)
      },
      { deep: true },
   )

   return queryRef
}

function updateQueryParamInURL(key, value, type: QueryParamType) {
   if (typeof window == 'undefined') return

   if (['number[]', 'string[]'].includes(type)) value = value.join(',')

   const url = new URL(window.location.href)
   url.searchParams.set(key, value)
   url.search = decodeURIComponent(url.search)
   window.history.pushState(null, '', url.toString())
}

function loadQueryParamFromURL(key: string, type: QueryParamType) {
   const loadedString = useRoute()?.query?.[key]?.toString() || ''
   if (!loadedString) return

   if (type == 'number') return +loadedString
   if (type == 'number[]') return loadedString.split(',').map((n) => +n)
   if (type == 'string[]') return loadedString.split(',')
   return loadedString
}
