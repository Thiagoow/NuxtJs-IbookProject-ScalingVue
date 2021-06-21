import { Module, MutationAction, VuexModule } from 'vuex-module-decorators'
import { $axios } from '~/utils/nuxt-instance'

@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {
  /* As vars criadas aqui, serão os STATES da nossa aplicação: */
  public count = 0

  /* Para que os componentes tenham acesso ao estado, 
  usamos os GETTERS (iniciam com $): */
  public get $count() {
    return this.count
  }

  /* As MutationsActions são as mutações que alteram diretamente um estado,
  sendo assim, transformam a mutation e a action em uma só. Sendo a sintaxe
  delas = @MutationAction({mutate: ["varQueSofreráMutation"]}) */
  @MutationAction({ mutate: ['count'] }) // 👈🏻 Isso é um decorator 😊
  async increment(number: number) {
    // Faz incrementar um número:
    await $axios.get('/')
    return { count: number }
  }
  /* Para as MutationsActions funcionarem, os states, e getter precisam ser públicos.
  Além disso, toda MutationAction é assíncrona (async&await). E isso é uma característica
  OBRIGATÓRIA, e IMUTÁVEL, de toda MutationAction. SENDO ASSIM, SÓ USAMOS ESSE DECORATOR QUANDO
  FORMOS FAZER UMA REQUISIÇÃO!! 😉 */
}
