/* Esse plugin faz o axios inicializar junto com a aplicação
(sendo esse plugin, registrado lá na array de plugins, no "@/nuxt.config.ts") */
import { Plugin } from '@nuxt/types'
// Importa a instância do axios:
import { initializeAxios } from '@/utils/nuxt-instance'

const accessor: Plugin = ({ $axios }) => {
  initializeAxios($axios)
}

/* Exporta a instância do axios junto com o 
"@/utils/nuxt-instance.ts": */
export default accessor
