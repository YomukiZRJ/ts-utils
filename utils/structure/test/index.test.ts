import { expectType } from 'tsd'

type WithoutTest = Without<{ a: string; b: number }, { a: string }>
expectType<WithoutTest>({
  b: undefined
})

type XORTest = XOR<{ a: string; b: number }, { a: string }>
expectType<XORTest>({
  a: 'xxx'
})
