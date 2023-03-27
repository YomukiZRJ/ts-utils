import { expectType } from 'tsd'

interface IBase { a: string; b: number; c: boolean;d: () => void ;e?: string; f: 1 | 2 | 3}

type ExpectedPropKeysByTypeTest = ExpectedPropKeysByType<IBase, string>
expectType<ExpectedPropKeysByTypeTest>('a')

type ExpectedFunctionKeysTest = ExpectedFunctionKeys<IBase>
expectType<ExpectedFunctionKeysTest>('d')

type PickByValueTypeTest = PickByValueType<IBase, string>
expectType<PickByValueTypeTest>({ a: 'a' })

type FilteredPropKeysByTypeTest = FilteredPropKeysByType<IBase, string>
expectType<FilteredPropKeysByTypeTest>('b')
expectType<FilteredPropKeysByTypeTest>('c')
expectType<FilteredPropKeysByTypeTest>('d')
expectType<FilteredPropKeysByTypeTest>('e')

type OmitByValueTypeTest = OmitByValueType<IBase, 1 | 2 | 3>
expectType<OmitByValueTypeTest>({ a: 'xx', b: 1, c: true, d: () => {} })
