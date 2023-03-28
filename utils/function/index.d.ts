/**
 * 提取函数的首个参数类型
 */
type FunctionFirstArgument<T extends FuncStruct> = T extends (arg: infer P, ...args: any[]) => any ? P : never;

/**
 * 提取函数的最后一个参数类型
 */
type FunctionLastArgument<T extends FuncStruct> = T extends (arg: infer P) => any
  ? P
  : T extends (...args: infer R) => any
    ? R extends [...any, infer Q]
      ? Q
      : never
    : never;
