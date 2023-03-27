/**
 * 并集
 */
declare type Concurrence<A, B> = A | B

/**
 * 交集
 */
declare type Intersection<A, B> = A extends B ? A : never

/**
 * 差集
 */
declare type Difference<A, B> = A extends B ? never : A

/**
 * 补集
 */
declare type Complement<A, B extends A> = Difference<A, B>

/**
 * 使用更精确的对象类型描述结构
 */
declare type PlainObject = Record<string, any>

/**
 * 属性名并集
 */
declare type ObjectKeyConcurrence<T extends PlainObject, U extends PlainObject> = Concurrence<keyof T, keyof U>

/**
 * 属性名交集
 *
 */
declare type ObjectKeyIntersection<T extends PlainObject, U extends PlainObject> = Intersection<keyof T, keyof U>

/**
 * 属性名差集
 */
declare type ObjectKeyDifference<T extends PlainObject, U extends PlainObject> = Difference<keyof T, keyof U>

/**
 * 属性名补集
 */
declare type ObjectKeyComplement<T extends PlainObject, U extends PlainObject> = Complement<keyof T, keyof U>
