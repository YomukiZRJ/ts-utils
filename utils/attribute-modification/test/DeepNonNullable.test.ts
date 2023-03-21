import { expectType } from 'tsd'
type DeepNonNullableTest = DeepNonNullable<{
  name: string | null
  lover: {
    name: string | null
  }
}>

expectType<DeepNonNullableTest>({
  name: 'test',
  lover: {
    name: 'test'
  }
})
