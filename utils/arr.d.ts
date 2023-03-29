declare namespace Arr {
  /**
   * 将数组按照某个分隔符连接成字符串
   */
  type Join<
  Arr extends Array[string | number],
  Separator extends string
  > =
  Arr extends [infer Head, ...infer Tail]
    ? Tail extends []
      ? Head
      : `${Head}${Separator}${Join<Tail, Separator>}`
    : ''
}
