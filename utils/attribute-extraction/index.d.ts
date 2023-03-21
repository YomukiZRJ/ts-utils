/**
 * Extracts the keys of the properties of an object that have a given type.
 * 提取具有给定类型的对象属性的键。
 */
declare type ExpectedPropKeysByType<T extends object, ValueType> = {
  [K in keyof T]-?: T[K] extends ValueType ? K : never
}[keyof T]

/**
 * 提取类型为函数的属性的键。
 */
declare type ExpectedFunctionKeys<T extends object> = ExpectedPropKeysByType<T, FuncStruct>;
