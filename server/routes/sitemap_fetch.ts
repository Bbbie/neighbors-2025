import axios from 'axios'

const excludeFolders = ['global-components', 'settings']

export const getSitemapURLs = async (): Promise<any[]> => {
   // Fetch Sitemap from Storyblok
   const endpoint = `https://api.storyblok.com/v2/cdn/links?token=${process.env.SB_CLIENT_ACCESS_TOKEN}`
   const response = await axios.get(endpoint)

   return Object.entries(response.data.links)
      .map(([uuid, entry]: [string, any]) => ({ uuid, ...entry }))
      .filter((entry) => entry.published) // only Published
      .filter((entry) => !entry.is_folder) // only Pages
      .filter((entry) => excludeFolders.find((folder) => entry.real_path.includes(folder)) == undefined) // Exclude certain Folders
}
