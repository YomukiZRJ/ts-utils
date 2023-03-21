declare type Flatten<T extends object> = {
  [K in keyof T]: T[K]
}

declare type Nullable<T> = T | null

declare type FuncStruct = (...args: any[]) => any;

/**
 * @description 获取类型中所有函数的key
 */
declare type FunctionKeys<T extends object> = {
  [K in keyof T]: T[K] extends FuncStruct ? K : never;
}[keyof T];
