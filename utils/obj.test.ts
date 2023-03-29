import { expectType } from 'tsd'
type CamelCasedPropertiesTest = Obj.CamelCasedProperties<{
  foo_bar: string
  foo_bar_baz: string
  person: {
    first_name: string
  }
}>
expectType<CamelCasedPropertiesTest>({
  fooBar: '',
  fooBarBaz: '',
  person: {
    firstName: ''
  }
})

type ExpectedKeysByTypeTest = Obj.ExpectedKeysByType<{
  a: string
  b: number
  c: boolean
  d: () => void
  e?: string
  f: 1 | 2 | 3
}, string>
expectType<ExpectedKeysByTypeTest>('a')

type FilteredKeysByTypeTest = Obj.FilteredKeysByType<{
  a: string
  b: number
  c: boolean
  d: () => void
  e?: string
  f: 1 | 2 | 3
}, string> // "b" | "c" | "d" | "e" | "f"
expectType<FilteredKeysByTypeTest>('b')

type PickByValueTypeTest = Obj.PickByValueType<{
  a: string
  b: number
  c: boolean
  d: () => void
  e?: string
  f: 1 | 2 | 3
}, string>
expectType<PickByValueTypeTest>({ a: 'a' })

type OmitByValueTypeTest = Obj.OmitByValueType<{
  a: string
  b: number
  c: boolean
  d: () => void
  e?: string
  f: 1 | 2 | 3
}, 1 | 2 | 3>
expectType<OmitByValueTypeTest>({ a: 'xx', b: 1, c: true, d: () => {} })

type ObjectKeyConcurrenceTest = Obj.KeysConcurrence<{ a: 1 }, { b: 2 }> // 'a' | 'b'

type ObjectKeyIntersectionTest = Obj.KeysIntersection<{ a: string ;b: number}, { a: string }> // a
type ObjectIntersectionTest = Obj.ObjectIntersection<{ a: string ;b: number}, { b: number }> // {b:number}
type ObjectIntersectionTest2 = Obj.ObjectIntersection<{ a: string ;b: number}, { b: string }>// {b:number} 如果属性名相同，类型不同，取前者类型

type ObjectKeyDifferenceTest = Obj.KeysDifference<{ a: 1 }, { b: 2 }> // 'a'

type ObjectKeyComplementTest = Obj.KeysComplement<{ a: string; b: number }, { a: string }> // 'b'
/**
 * 对象合并
 */
type ObjectMergeTest = Obj.Merge<{ a: string ;b: number}, { b: string; c: boolean }>
expectType<ObjectMergeTest>({ a: 'a', b: 'b', c: true })
type ObjectAssignTest = Obj.Assign<{ a: string ;b: number}, { b: string; c: boolean }>
expectType<ObjectAssignTest>({ a: 'a', b: 1, c: true })
type ObjectOverrideTest = Obj.Override<{ a: string ;b: number}, { b: string; c: boolean }>
expectType<ObjectOverrideTest>({ a: 'a', b: 'b' })

type WithoutTest = Obj.Without<{ a: string; b: number }, { a: string }>
expectType<WithoutTest>({
  b: undefined
})
type XORTest = Obj.XOR<{ a: string; b: number }, { a: string }>
expectType<XORTest>({
  a: 'xxx'
})
