/**
 * @description 将类型中每个属性添加null，浅层的
 */
declare type PropsNullable<T extends object> = {
  [P in keyof T]: T[P] | null
}
/**
 * @description 深度排除类型中的null和undefined
 */
declare type DeepNonNullable<T extends object> = Flatten<{
  [P in keyof T]: T[P] extends object ? DeepNonNullable<T[P]> : NonNullable<T[P]>
}>

/**
 * @description 深度为类型中每个属性添加null
 */
declare type DeepNullable<T extends object> = Flatten<{
  [P in keyof T]: T[P] extends object ? DeepNullable<T[P]> : Nullable<T[P]>
}>

/**
 * @description 深度的将类型中每个属性转为可选
 */
declare type DeepPartial<T> = Flatten<{
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}>

/**
 * @description 深度的将类型中每个属性转为只读
 */
declare type DeepReadonly<T> = Flatten<{
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]
}>

/**
 * @description 深度的将类型中每个属性转为必选
 */
declare type DeepRequired<T> = Flatten<{
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P]
}>

/**
 * @description 标记部分属性为可选
 */
declare type MarkPropsAsOptional<T, K extends keyof T = keyof T> = Flatten<Partial<Pick<T, K>> & Omit<T, K>>;

/**
 * @description 标记部分属性为只读
 */
declare type MarkPropsAsReadonly<T, K extends keyof T = keyof T> = Flatten<Readonly< Pick<T, K>> & Omit<T, K>>;

/**
 * @description 标记部分属性为必选
 */
declare type MarkPropsAsRequired<T, K extends keyof T = keyof T> = Flatten<Required< Pick<T, K>> & Omit<T, K>>;

/**
 * @description 标记部分属性添加null
 */
declare type MarkPropsAsNullable<T, K extends keyof T = keyof T> = Flatten<PropsNullable< Pick<T, K>> & Omit<T, K>>;

/**
 * @description 标记部分属性剔除nul、undefined
 */
declare type MarkPropsAsNonNullable<T, K extends keyof T = keyof T> = Flatten<NonNullable< Pick<T, K>> & Omit<T, K>>;
