/* É aqui que iremos consumir nossa API. Ou seja os dados dos livros, 
que serão injetados na nossa aplicação via SSR 😉 */

// *¹ -> (VEM ANTES POIS É USADA ALI EMBAIXO):
interface Category {
  id: number
  name: string
}

// *¹
interface Page {
  id: number
  text: string
  pageNumber: number
}

// Sendo essa, a entidade Book:
export interface Book {
  id: number
  author: string
  releaseDate: string
  title: string
  description: string
  bookCover: string
  categories: Category[]
  pages: Page[]
}
