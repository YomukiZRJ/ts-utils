import { expectType } from 'tsd'

type DeepReadonlyTest = DeepReadonly<{
  name?: string
  age: number
  lover: {
    name: string
    age?: number
  }
}>

expectType<DeepReadonlyTest>({
  age: 18,
  lover: {
    name: 'test',
    age: 18
  }
})
