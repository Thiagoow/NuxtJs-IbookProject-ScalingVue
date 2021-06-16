// Importamos da Instância do Nuxt o axios:
import { NuxtAxiosInstance } from '@nuxtjs/axios'

// eslint-disable-next-line import/no-mutable-exports
let $axios: NuxtAxiosInstance

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance
}

/* Exportando o módulo da biblioteca axios, instalado no Nuxt:
(juntamente com o plugin "@/plugins/accessor.ts") */
export { $axios }
