declare namespace Obj {
  /**
   * 将对象的属性名转换为小驼峰式
   */
  type CamelCasedProperties<T extends PlainObject> = {
    [K in keyof T as Str.CamelCase<string & K> ]: T[K] extends object
      ? CamelCasedProperties<T[K]>
      : T[K]
  }
  /**
   * 提取指定类型的键名们，以联合类型的方式返回
   */
  type ExpectedKeysByType<T extends object, ValueType> = {
    [K in keyof T]-?: StrictConditional<ValueType, T[K], K, never, never>
  }[keyof T]

  /**
   * 提取指定类型以外的键名们，以联合类型的方式返回
   */
  type FilteredKeysByType<T extends object, ValueType> = {
    [K in keyof T]-?: StrictConditional<ValueType, T[K], never, K, K>
  }[keyof T]

  /**
   * 选择指定类型的属性，返回新对象
   */
  type PickByValueType<T extends object, ValueType> = Pick<T, ExpectedKeysByType<T, ValueType>>

  /**
   * 剔除指定类型的属性，返回新对象
   */
  type OmitByValueType<T extends object, ValueType> = Pick<T, FilteredKeysByType<T, ValueType>>
  /**
   * @description 将类型中每个属性添加null，浅层的
   */
  type PropsNullable<T extends object> = {
    [P in keyof T]: T[P] | null
  }
  /**
   * @description 深度排除类型中的null和undefined
   */
  type DeepNonNullable<T extends object> = Flatten<{
    [P in keyof T]: T[P] extends object ? DeepNonNullable<T[P]> : NonNullable<T[P]>
  }>

  /**
   * @description 深度为类型中每个属性添加null
   */
  type DeepNullable<T extends object> = Flatten<{
    [P in keyof T]: T[P] extends object ? DeepNullable<T[P]> : Nullable<T[P]>
  }>

  /**
   * @description 深度的将类型中每个属性转为可选
   */
  type DeepPartial<T> = Flatten<{
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
  }>

  /**
   * @description 深度的将类型中每个属性转为只读
   */
  type DeepReadonly<T> = Flatten<{
    readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]
  }>

  /**
   * @description 深度的将类型中每个属性转为必选
   */
  type DeepRequired<T> = Flatten<{
    [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P]
  }>

  /**
   * @description 标记部分属性为可选
   */
  type MarkPropsAsOptional<T, K extends keyof T = keyof T> = Flatten<Partial<Pick<T, K>> & Omit<T, K>>;

  /**
   * @description 标记部分属性为只读
   */
  type MarkPropsAsReadonly<T, K extends keyof T = keyof T> = Flatten<Readonly< Pick<T, K>> & Omit<T, K>>;

  /**
   * @description 标记部分属性为必选
   */
  type MarkPropsAsRequired<T, K extends keyof T = keyof T> = Flatten<Required< Pick<T, K>> & Omit<T, K>>;

  /**
   * @description 标记部分属性添加null
   */
  type MarkPropsAsNullable<T, K extends keyof T = keyof T> = Flatten<PropsNullable< Pick<T, K>> & Omit<T, K>>;

  /**
   * @description 标记部分属性剔除nul、undefined
   */
  type MarkPropsAsNonNullable<T, K extends keyof T = keyof T> = Flatten<NonNullable< Pick<T, K>> & Omit<T, K>>;
  /**
   * 属性名并集
   */
  type KeysConcurrence<T extends PlainObject, U extends PlainObject> = Concurrence<keyof T, keyof U>

  /**
   * 属性名交集
   */
  type KeysIntersection<T extends PlainObject, U extends PlainObject> = Intersection<keyof T, keyof U>

  /**
   * 属性名差集
   */
  type KeysDifference<T extends PlainObject, U extends PlainObject> = Difference<keyof T, keyof U>

  /**
   * 属性名补集
   */
  type KeysComplement<T extends U, U extends PlainObject> = Complement<keyof T, keyof U>

  /**
   * 对象交集
   */
  type ObjectIntersection<T extends PlainObject, U extends PlainObject> = Pick<T, KeysIntersection<T, U>>

  /**
   * 对象差集
   * 返回T比U多的部分
   */
  type ObjectDifference<T extends PlainObject, U extends PlainObject> = Pick<T, KeysDifference<T, U>>

  /**
   * 对象补集
   */
  type ObjectComplement<T extends U, U extends PlainObject> = Pick<T, KeysComplement<T, U>>

  /**
   * 对象并集
   * T比U多的部分 +  T与U的交集 + U比T多的部分
   * U的优先级比T高
   */
  type Merge<T extends PlainObject, U extends PlainObject> = ObjectDifference<T, U> & ObjectIntersection<U, T> & ObjectDifference<U, T>

  /**
   * 对象合并
   * T的优先级比U高
   */
  type Assign<T extends PlainObject, U extends PlainObject> = ObjectDifference<T, U> & ObjectIntersection<T, U> & ObjectDifference<U, T>

  /**
   * 对象重写
   * 将U的属性覆盖T的属性,但U中独有的属性不会被添加
   */
  type Override<T extends PlainObject, U extends PlainObject> = ObjectDifference<T, U> & ObjectIntersection<U, T>

  type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never
  }
  /**
   * 一个对象，要么为T 要么为U
   */
  type XOR<T, U> = (Without<T, U> & U) | (Without<U, T> & T)
}
