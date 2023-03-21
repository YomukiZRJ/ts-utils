import { expectType } from 'tsd'

type DeepRequiredTest = DeepRequired<{
  name?: string
  age: number
  lover: {
    name: string
    age?: number
  }
}>

expectType<DeepRequiredTest>({
  name: 'test',
  age: 18,
  lover: {
    name: 'test',
    age: 18
  }
})
