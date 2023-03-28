import { expectType } from 'tsd'
/**
 * 并集
 */
type ConcurrenceTest = Concurrence<1 | 2 | 3, 1 | 2> // 123
type ObjectKeyConcurrenceTest = ObjectKeyConcurrence<{ a: 1 }, { b: 2 }> // 'a' | 'b'
/**
 * 交集
 */
type IntersectionTest1 = Intersection<'a' | 'b', 'a'> // a
type IntersectionTest2 = Intersection<'a', 'a' | 'b'> // a
type ObjectKeyIntersectionTest = ObjectKeyIntersection<{ a: string ;b: number}, { a: string }> // a
type ObjectIntersectionTest = ObjectIntersection<{ a: string ;b: number}, { b: number }> // {b:number}
type ObjectIntersectionTest2 = ObjectIntersection<{ a: string ;b: number}, { b: string }>// {b:number} 如果属性名相同，类型不同，取前者类型

/**
 * 差集
 */
type DifferenceTest = Difference<'a' | 'b', 'a'> // b
type DifferenceTest2 = Difference<'a', 'a' | 'b'> // never
type DifferenceTest3 = Difference<'a', 'b'> // a
type ObjectKeyDifferenceTest = ObjectKeyDifference<{ a: 1 }, { b: 2 }> // 'a'

/**
 * 补集
 */
type ComplementTest = Complement<'a' | 'b', 'a'> // b
type ObjectKeyComplementTest = ObjectKeyComplement<{ a: string; b: number }, { a: string }> // 'b'

/**
 * 对象合并
 */
type ObjectMergeTest = ObjectMerge<{ a: string ;b: number}, { b: string; c: boolean }>
expectType<ObjectMergeTest>({ a: 'a', b: 'b', c: true })
type ObjectAssignTest = ObjectAssign<{ a: string ;b: number}, { b: string; c: boolean }>
expectType<ObjectAssignTest>({ a: 'a', b: 1, c: true })
type ObjectOverrideTest = ObjectOverride<{ a: string ;b: number}, { b: string; c: boolean }>
expectType<ObjectOverrideTest>({ a: 'a', b: 'b' })
