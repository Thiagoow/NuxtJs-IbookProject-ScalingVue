import { Store } from 'vuex'
// Importa todos os módulos já montados do "@/utils/store-accessor":
import { initializeStores } from '@/utils/store-accessor'

const initializer = (store: Store<any>) => initializeStores(store)

// Inicializa o Vuex usando os módulos já montados no initializeStores:
export const plugins = [initializer]
// Exporta nossos módulos já montados para podermos importar nos nosso componentes:
export * from '@/utils/store-accessor'
