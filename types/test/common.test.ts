import { expectType } from 'tsd'

type StrictConditionalTest = StrictConditional<1 | 2, 1 | 2 | 3, true, false>
expectType<StrictConditionalTest>(false)

type ConcurrenceTest = Concurrence<1 | 2 | 3, 1 | 2> // 123

type IntersectionTest1 = Intersection<'a' | 'b', 'a'> // a
type IntersectionTest2 = Intersection<'a', 'a' | 'b'> // a

type DifferenceTest = Difference<'a' | 'b', 'a'> // b
type DifferenceTest2 = Difference<'a', 'a' | 'b'> // never
type DifferenceTest3 = Difference<'a', 'b'> // a
type Brand = 'iphone' | 'xiaomi' | 'honor';
type Memory = '16G' | '64G';
type ItemType = 'official' | 'second-hand';
type SKU = `${Brand}-${Memory}-${ItemType}`;
type SKU1 = Difference<SKU, 'iphone-16G-official'>
// expectType<SKU1>('iphone-16G-official')

type ComplementTest = Complement<'a' | 'b', 'a'> // b
