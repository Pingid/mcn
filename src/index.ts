function _cn() {
  const classes: string[] = []
  for (let i = 0, len = arguments.length; i < len; i++) {
    const arg: any = arguments[i]
    if (!arg) continue // skip falsy values immediately

    const type = typeof arg
    if (type === 'string') {
      classes.push(arg)
    } else if (type === 'object') {
      if (Array.isArray(arg)) {
        if (arg[0] && arg[1]) classes.push(arg[1])
        else if (!arg[0] && arg[2]) classes.push(arg[2])
      } else {
        // using Object.keys() can sometimes be a tad faster than for-in
        const keys = Object.keys(arg)
        for (let j = 0, keyLen = keys.length; j < keyLen; j++) {
          const key: any = keys[j]
          if (arg[key]) classes.push(key)
        }
      }
    }
  }
  return classes.join(' ')
}

export type ClassNames =
  | string
  | number
  | null
  | undefined
  | boolean
  | readonly [null | undefined | boolean, string, string?]
  | { readonly [x: string]: null | undefined | boolean }

type TypeofClassName<C> = C extends null | undefined | boolean
  ? ''
  : C extends readonly [any, infer A]
    ? TypeofClassName<A> | ''
    : C extends readonly [any, infer A, infer B]
      ? TypeofClassName<A> | TypeofClassName<B>
      : C extends Record<string, any>
        ? keyof C | ''
        : C

type Join<T> = T extends [infer I, ...infer R] ? `${I & string} ${Join<R>}` : ''

/**
 * @deprecated This package is deprecated. Please use [@lickle/cn](https://github.com/Pingid/lickle-cn)
 *
 * Type-safe class name joiner function.
 * Particularly useful when working with shared class names, as your IDE will display the actual
 * resolved class when you hover over the variable.
 *
 * @example
 * tcn('bg-blue', 'text-white', { 'hover:underline': true }) // "bg-blue text-white hover:underline"
 *
 * tcn('p-6', [darkMode, "text-white", "text-black"]) // Resolves based on darkMode condition
 */
export const tcn: <const T extends ClassNames[]>(...args: T) => Join<{ [K in keyof T]: TypeofClassName<T[K]> }> =
  _cn as any

/**
 * @deprecated This package is deprecated. Please use [@lickle/cn](https://github.com/Pingid/lickle-cn)
 *
 * Generic class name joiner function.
 *
 * @example
 * cn('bg-blue', 'text-white', { 'hover:underline': true }) // "bg-blue text-white hover:underline"
 *
 * cn('p-6', [darkMode, "text-white", "text-black"]) // Resolves based on darkMode condition
 */
export const cn: <T extends ClassNames[]>(...args: T) => string = _cn

export default cn
