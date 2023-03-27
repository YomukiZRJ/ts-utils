/**
 * Extracts the keys of the properties of an object that have a given type.
 * 提取具有给定类型的对象属性的键。
 */
declare type ExpectedPropKeysByType<T extends object, ValueType> = {
  [K in keyof T]-?: StrictConditional<ValueType, T[K], K, never, never>
}[keyof T]

/**
 * Extracts the keys of the properties of an object that do not have a given type.
 * 提取不具有给定类型的对象属性的键。
 */
declare type FilteredPropKeysByType<T extends object, ValueType> = {
  [K in keyof T]-?: StrictConditional<ValueType, T[K], never, K, K>
}[keyof T]

/**
 * 提取类型为函数的属性的键。
 */
declare type ExpectedFunctionKeys<T extends object> = ExpectedPropKeysByType<T, FuncStruct>;

/**
 * 选择指定类型的属性
 */
declare type PickByValueType<T extends object, ValueType> = Pick<T, ExpectedPropKeysByType<T, ValueType>>

/**
 * 选择指定类型以外的属性
 */
declare type OmitByValueType<T extends object, ValueType> = Pick<T, FilteredPropKeysByType<T, ValueType>>

type Test = StrictConditional<>
