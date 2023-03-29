import { expectType } from 'tsd'
type IncludeTest = Str.Include<'Zeng Shuai', 'Shuai'> // true
type IncludeTest1 = Str._Include<'', ''> // false
type IncludeTest2 = Str.Include<'', ''> // true

type TrimLeftTest = Str.TrimLeft<' Zeng Shuai '> // 'Zeng Shuai '
type TrimRightTest = Str.TrimRight<' Zeng Shuai '> // ' Zeng Shuai'
type TrimTest = Str.Trim<' Zeng Shuai '> // 'Zeng Shuai'

type StartsWithTest = Str.StartsWith<'Zeng Shuai', 'Zeng'> // true
type StartsWithTest2 = Str.StartsWith<'', ''> // true

type EndsWithTest = Str.EndsWith<'Zeng Shuai', 'Shuai'> // true
type EndsWithTest2 = Str.EndsWith<'', ''> // true

type ReplaceTest = Str.Replace<'Zeng Shuai', 'Shuai', 'Zeng'> // 'Zeng Zeng'

type ReplaceAllTest = Str.ReplaceAll<'Shuai Zeng Shuai Shuai', 'Shuai', 'a'> // 'a Zeng a a'

type SpiltTest = Str.Spilt<'Zeng Shuai Yomuki', ' '> // ['Zeng', 'Shuai', 'Yomuki']
type SpiltTest2 = Str.Spilt<'a', 'a'> // ['', '']
type SpiltTest3 = Str.Spilt<'yomuki', ''> // ['y', 'o', 'm', 'u', 'k', 'i']

type LengthTest = Str.Length<'Zeng Shuai'> // 10
type LengthTest2 = Str.Length<' '> // 1

type CapitalizeStrictTest = Str.CapitalizeStrict<'zeng'> // 'Zeng'
type CapitalizeStrictTest2 = Str.CapitalizeStrict<'yOmuKi'> // 'Yomuki'

type SnakeCase2CamelCaseTest = Str.SnakeCase2CamelCase<'zeng_shuai_aBb'> // 'zengShuaiABb'
type SnakeCase2CamelCaseTest2 = Str.SnakeCase2CamelCase<'Akb'> // 'Akb'
type SnakeCase2CamelCaseTest3 = Str.SnakeCase2CamelCase<'a_1b'> // 'a1b'

type KebabCase2CamelCaseTest = Str.KebabCase2CamelCase<'zeng-shuai-aBb'> // 'zengShuaiABb'

type CapitalizeStrictArray2StringTest = Str.CapitalizeStrictArray2String<['zeng', 'yomuki']> // 'ZengYomuki'
expectType<CapitalizeStrictArray2StringTest>('ZengYomuki')
type CamelCaseStringArrayTest = Str.CamelCaseArray2String<['zeng', 'yomuki', 'xxx']> // zengYomukiXxx
expectType<CamelCaseStringArrayTest>('zengYomukiXxx')
expectType<Str.CamelCase<'zeng_yomuki'> >('zengYomuki')
expectType<Str.CamelCase<'zeng-yomuki'>>('zengYomuki')
expectType<Str.CamelCase<'zeng yomuki'>>('zengYomuki')
expectType<Str.CamelCase<'zeng yoMuki'>>('zengYomuki')
