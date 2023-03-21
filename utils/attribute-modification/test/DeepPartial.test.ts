import { expectType } from 'tsd'

type DeepPartialTest = DeepPartial<{
  name: string
  age: number
  lover: {
    name: string
    age: number
  }
}>

expectType<DeepPartialTest>({
  name: 'test',
  age: 18,
  lover: {}
})

expectType<DeepPartialTest>({})

expectType<DeepPartialTest>({
  lover: {
    name: 'test'
  }
})
