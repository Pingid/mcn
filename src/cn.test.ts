import { expect, it } from 'vitest'
import { cn } from './index'

it('should conditionally join strings', () => {
  expect(cn('one', null, undefined, 'two')).toBe('one two')
  expect(cn('one', [true, 'two'], [false, 'three'])).toBe('one two')
  expect(cn('one', [false, 'two', 'three'])).toBe('one three')
  expect(cn([true, 'two', 'three'])).toBe('two')
  expect(cn([false, 'two', 'three'])).toBe('three')
  expect(cn({ two: true, three: false })).toBe('two')
  expect(cn({ two: true, three: true })).toBe('two three')
  expect(cn(null, undefined, 0, 1, 2, {}, NaN)).toBe('')
  expect(cn('one', null, undefined, { two: true, three: false })).toBe('one two')
})
