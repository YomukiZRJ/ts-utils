import { expectType } from 'tsd'

interface IBase { a: string; b: number; c: boolean;d: () => {} ;e?: string}

type ExpectedPropKeysByTypeTest = ExpectedPropKeysByType<IBase, string>
expectType<ExpectedPropKeysByTypeTest>('a')

type ExpectedFunctionKeysTest = ExpectedFunctionKeys<IBase>
expectType<ExpectedFunctionKeysTest>('d')
