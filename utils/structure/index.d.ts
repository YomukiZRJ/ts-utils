declare type Without<T, U> = {
  [P in Exclude<keyof T, keyof U>]?: never
}

/**
 * 一个，要么为 T，要么为 U，不可同时满足
 */
declare type XOR<T, U> = (Without<T, U> & U) | (Without<U, T> & T)
