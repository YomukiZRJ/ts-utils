declare namespace Str{
  /**
   * 判断字符串是否包含某个子串
   */
  type _Include<Str extends string, Search extends string> = Str extends `${infer _R1}${Search}${infer _R2}` ? true : false
  type Include<Str extends string, Search extends string> = Str extends '' ? Search extends '' ? true : false : _Include<Str, Search>

  /**
   * 去除字符串左空格
   */
  type TrimLeft<Str extends string> = Str extends ` ${infer R}` ? TrimLeft<R> : Str
  /**
   * 去除字符串右空格
   */
  type TrimRight<Str extends string> = Str extends `${infer R} ` ? TrimRight<R> : Str
  /**
   * 去除字符串两端空格
   */
  type Trim<Str extends string> = TrimLeft<TrimRight<Str>>
  /**
   * 判断字符串是否以某个子串开头
   */
  type StartsWith<Str extends string, Search extends string> = Str extends `${Search}${infer _R}` ? true : false
  /**
   * 判断字符串是否以某个子串结尾
   */
  type EndsWith<Str extends string, Search extends string> = Str extends `${infer _R}${Search}` ? true : false

  /**
   * 替换字符串中的某个子串
   */
  type Replace<Str extends string, Search extends string, Replacement extends string> = Str extends `${infer Head}${Search}${infer Tail}` ? `${Head}${Replacement}${Tail}` : Str

  /**
   * 替换字符串中的所有某个子串
   */
  type ReplaceAll<Str extends string, Search extends string, Replacement extends string> = Str extends `${infer Head}${Search}${infer Tail}` ? ReplaceAll<`${Head}${Replacement}${Tail}`, Search, Replacement> : Str

  /**
   * 将字符串按照某个分隔符分割成数组
   */
  type Spilt<
    Str extends string,
    Separator extends string
  > =
    Str extends `${infer Head}${Separator}${infer Tail}`
      ? [Head, ...Spilt<Tail, Separator>]
      : Str extends Separator
        ? []
        : [Str]

  /**
   * 获取字符串的长度
   */
  type Length<Str extends string> = Spilt<Str, ''>['length']

  /**
   * 严格的首字母大写（除了首字母大写，其余均为小写）
   */
  type CapitalizeStrict<Str extends string> = Capitalize<Lowercase<Str>>

  /**
   * 将字符串数组转为首字母大写的字符串
   */
  type CapitalizeStrictArray2String<Words extends string[]> = Words extends [infer First, ...infer Rest] ? `${CapitalizeStrict<First>}${CapitalizeStrictArray2String<Rest>}` : ''
  /**
   * 将字符串数组转为小驼峰
   */
  type CamelCaseArray2String<Words extends string[]> = Words extends [infer First, ...infer Rest] ? `${First}${CapitalizeStrictArray2String<Rest>}` : ''
  /**
   * 驼峰分隔符
   */
  type CamelCaseSeparator = '-' | '_' | ' '
  /**
   * 小驼峰
   */
  type CamelCase<Str extends string> = CamelCaseArray2String<Spilt<Str, CamelCaseSeparator>>
  /**
   * 任意分隔符转小驼峰
   */
  type SeparatorCase2CamelCase<Str extends string, Separator extends string> =
    Str extends `${infer Head}${Separator}${infer Rest}`
      ? `${Head}${Capitalize<SeparatorCase2CamelCase<Rest, Separator>>}`
      : Str

  /**
   * 下划线转小驼峰
   */
  type SnakeCase2CamelCase<Str extends string> = SeparatorCase2CamelCase<Str, '_'>

  /**
   * 中划线转小驼峰
  */
  type KebabCase2CamelCase<Str extends string> = SeparatorCase2CamelCase<Str, '-'>

}
