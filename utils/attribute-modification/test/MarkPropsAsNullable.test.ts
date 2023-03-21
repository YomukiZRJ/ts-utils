import { expectType } from 'tsd'

interface Base {
  name: string
  age: number
  sex?: string
  readonly job: string
}

type Test = MarkPropsAsNullable<Base, 'name'>

expectType<Test>({
  name: null,
  age: 1,
  sex: 'male',
  job: 'teacher'
})
