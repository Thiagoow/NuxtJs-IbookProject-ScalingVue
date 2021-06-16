import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
/* Usando o Axios instalado como módulo do Nuxt:
(Que veio do site = https://modules.nuxtjs.org/) 

E QUE INICIALIZA COM NOSSA APLICAÇÃO GRAÇAS AO
PLUGIN "@/plugins/accessor.ts" */

// A partir daqui temos o Vuex:
@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {
  /* As vars criadas aqui, serão os STATES da nossa aplicação: */
  private count = 0

  /* Para que os componentes tenham acesso ao estado, 
  usamos os GETTERS (iniciam com $): */
  public get $count() {
    return this.count
  }

  /* As MUTATIONS são as que realmente alteram um STATE, sendo nomeadas
  SEMPRE, com tudo em letra MAIÚSCULA 😎😉 */
  @Mutation // 👈🏻 Isso é um decorator 😊
  private INCREMENT(number: number) {
    // Faz incrementar um número:
    this.count += number
  }

  /* Para alterar um estado, usamos as ACTIONS = Funções que chamam
  as MUTATIONS, que realmente alteram um estado: */
  @Action // 👈🏻 Isso é um decorator 😊
  public increment(number: number) {
    // Retorna a mutação + o parâmetro da mutação:
    this.context.commit('INCREMENT', number)
  }

  /* Sendo os estados/states, e mutations da nossa aplicação "private". Ou seja = 
  Alterados apenas pela nossa própria classe de módulo. Não pelos componentes 😎😉 */
}
