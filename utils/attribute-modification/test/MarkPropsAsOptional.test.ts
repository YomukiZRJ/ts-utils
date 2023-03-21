import { expectType } from 'tsd'

interface Base {
  name: string
  age: number
  sex?: string
  readonly job: string
}

type Test = MarkPropsAsOptional<Base, 'name'>

expectType<Test>({
  age: 18,
  job: 'test'
})
