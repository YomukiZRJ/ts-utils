type IncludeTest = Str.Include<'Zeng Shuai', 'Shuai'> // true
type IncludeTest1 = Str._Include<'', ''> // false
type IncludeTest2 = Str.Include<'', ''> // true

type TrimLeftTest = Str.TrimLeft<' Zeng Shuai '> // 'Zeng Shuai '
type TrimRightTest = Str.TrimRight<' Zeng Shuai '> // ' Zeng Shuai'
type TrimTest = Str.Trim<' Zeng Shuai '> // 'Zeng Shuai'

type StartsWithTest = Str.StartsWith<'Zeng Shuai', 'Zeng'> // true
type StartsWithTest1 = Str._StartsWith<'', ''> // true
type StartsWithTest2 = Str.StartsWith<' ', ''> // true

type EndsWithTest = Str.EndsWith<'Zeng Shuai', 'Shuai'> // true
type EndsWithTest1 = Str._EndsWith<'', ''> // false
type EndsWithTest2 = Str.EndsWith<'', ''> // true
