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

  type _StartsWith<Str extends string, Search extends string> = Str extends `${Search}${infer _R}` ? true : false
  /**
   * 判断字符串是否以某个子串开头
   */
  type StartsWith<Str extends string, Search extends string> = Str extends '' ? Search extends '' ? true : false : _StartsWith<Str, Search>

  type _EndsWith<Str extends string, Search extends string> = Str extends `${infer _R}${Search}` ? true : false
  /**
   * 判断字符串是否以某个子串结尾
   */
  type EndsWith<Str extends string, Search extends string> = Str extends '' ? Search extends '' ? true : false : _EndsWith<Str, Search>
}
