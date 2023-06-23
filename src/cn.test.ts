import { expect, it } from 'vitest'
import { cn } from './index'

it('should conditionally join strings', () => {
  expect(cn('one', [true, 'two'], [false, 'three'])).toBe('one two')
  expect(cn('one', [false, 'two', 'three'])).toBe('one three')
  expect(cn('one', null, undefined, { two: true, three: false })).toBe('one two')
})
