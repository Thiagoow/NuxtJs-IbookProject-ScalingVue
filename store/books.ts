import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { Book } from '@/models'

// A partir daqui temos o Vuex:
@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {
  /* As vars criadas aqui, serão os STATES da nossa aplicação:  */
  private books = [] as Book
  /* Para que os componentes tenham acesso ao estado, 
  usamos os GETTERS (iniciam com $): */
  /* As MUTATIONS são as que realmente alteram um STATE, sendo nomeadas
  SEMPRE, com tudo em letra MAIÚSCULA 😎😉 */
  /* Para alterar um estado, usamos as ACTIONS = Funções que chamam
  as MUTATIONS, que realmente alteram um estado: */
  /* Sendo os estados/states, e mutations da nossa aplicação "private". Ou seja = 
  Alterados apenas pela nossa própria classe de módulo. Não pelos componentes 😎😉 */
}
