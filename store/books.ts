import { Module, VuexModule } from 'vuex-module-decorators'
/* Usando o Axios instalado como módulo do Nuxt:
(Que veio do site = https://modules.nuxtjs.org/) 

E QUE INICIALIZA COM NOSSA APLICAÇÃO GRAÇAS AO
PLUGIN "@/plugins/accessor.ts" */

@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {
  books = ['livro1', 'livro2']
}
