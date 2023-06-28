export type ClassNames =
  | string
  | number
  | null
  | undefined
  | boolean
  | readonly [null | undefined | boolean, ClassNames, ClassNames?]
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

// -----------------------------------------------------------------
// Join className variants
// -----------------------------------------------------------------
export const cn: <T extends ClassNames[]>(...args: T) => Join<{ [K in keyof T]: TypeofClassName<T[K]> }> =
  function cn() {
    let a = ''
    for (let i = 0; i < arguments.length; i++) {
      const b = arguments[i]
      if (typeof b === 'string') a = a + ' ' + b
      if (typeof b === 'object' && b !== null) {
        if (Array.isArray(b)) a = a + ' ' + ((b[0] ? b[1] : b[2]) || '')
        else {
          for (let key in b) {
            a = a + (b[key] ? ' ' + key : '')
          }
        }
      }
    }
    return a.trim()
  } as any

export default cn
