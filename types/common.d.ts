declare type Flatten<T extends object> = {
  [K in keyof T]: T[K]
}
declare type Nullable<T> = T | null
declare type FuncStrict = (...args: any[]) => any;
declare type PlainObject = Record<string, any>
/**
 * 严格比较A与B的类型是否相同
 */
declare type StrictConditional<
  A,
  B,
  Resolved,
  Reject,
  Fallback = never
> = [A] extends [B]
  ? [B] extends [A]
      ? Resolved
      : Reject
  : Fallback;

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
