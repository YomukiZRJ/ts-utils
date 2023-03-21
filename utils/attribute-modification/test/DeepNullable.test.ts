import { expectType } from 'tsd'

type Test = DeepNullable<{
  name: string
  lover: {
    name: string
  }
}>

expectType<Test>({
  name: null,
  lover: {
    name: null
  }
})
