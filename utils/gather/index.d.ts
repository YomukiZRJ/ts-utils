/**
 * 并集
 */
declare type Concurrence<A, B> = A | B

/**
 * 交集
 * 分布式条件类型
 */
declare type Intersection<A, B> = A extends B ? A : never

/**
 * 差集
 * 返回的为A的子集
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
declare type ObjectKeyComplement<T extends U, U extends PlainObject> = Complement<keyof T, keyof U>

/**
 * 对象交集
 */
declare type ObjectIntersection<T extends PlainObject, U extends PlainObject> = Pick<T, ObjectKeyIntersection<T, U>>

/**
 * 对象差集
 * 返回T比U多的部分
 */
declare type ObjectDifference<T extends PlainObject, U extends PlainObject> = Pick<T, ObjectKeyDifference<T, U>>

/**
 * 对象补集
 */
declare type ObjectComplement<T extends U, U extends PlainObject> = Pick<T, ObjectKeyComplement<T, U>>

/**
 * 对象并集
 * T比U多的部分 +  T与U的交集 + U比T多的部分
 * U的优先级比T高
 */
declare type ObjectMerge<T extends PlainObject, U extends PlainObject> = ObjectDifference<T, U> & ObjectIntersection<U, T> & ObjectDifference<U, T>

/**
 * 对象合并
 * T的优先级比U高
 */
declare type ObjectAssign<T extends PlainObject, U extends PlainObject> = ObjectDifference<T, U> & ObjectIntersection<T, U> & ObjectDifference<U, T>

/**
 * 对象重写
 * 将U的属性覆盖T的属性,但U中独有的属性不会被添加
 */
declare type ObjectOverride<T extends PlainObject, U extends PlainObject> = ObjectDifference<T, U> & ObjectIntersection<U, T>
