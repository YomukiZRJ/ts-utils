import { expectType } from 'tsd'

type ConcurrenceTest = Concurrence<1 | 2 | 3, 1 | 2> // 123

type IntersectionTest = Intersection<1 | 2 | 3, 1 | 2> // 12

type DifferenceTest = Difference<1 | 2 | 3, 1 | 2> // 3

type ComplementTest = Complement<1 | 2 | 3, 1 | 2> // 3

type ObjectKeyConcurrenceTest = ObjectKeyConcurrence<{ a: 1 }, { b: 2 }> // 'a' | 'b'

type ObjectKeyIntersectionTest = ObjectKeyIntersection<{ a: 1 }, { b: 2 }> // never

type ObjectKeyDifferenceTest = ObjectKeyDifference<{ a: 1 }, { b: 2 }> // 'a'

type ObjectKeyComplementTest = ObjectKeyComplement<{ a: 1 }, { b: 2 }> // 'a'
