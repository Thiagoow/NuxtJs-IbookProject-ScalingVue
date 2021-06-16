import { Store } from 'vuex'
// Monta nosso módulo local para o Vuex Nativo:
import { getModule } from 'vuex-module-decorators'
// Importando aqui embaixo, todos os módulos que fomos usar:
import Books from '@/store/books'

// eslint-disable-next-line import/no-mutable-exports
let books: Books
/* ☝🏻 Var que vai receber nosso módulo montado.
(com comentário pro EsLint ficar quieto nessa linha) */

/* Inicializa nosso módulo, montando ele, para o Vuex Nativo interpretar: */
function initializeStores(store: Store<any>): void {
  // Montando o módulo que vamos utilizar no projeto:
  books = getModule(Books, store)
}

// Exportando os módulos montados para o nosso "@/store/index.ts":
export { initializeStores, books }
