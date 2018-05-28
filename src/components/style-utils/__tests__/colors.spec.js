import { createColor } from '../colors'

describe('createColor', () => {
  const limeGreen = createColor(75, 50, 50)
  it('should return a function', () => {
    expect(limeGreen()).toBe('hsl(75, 50%, 50%)')
    expect(limeGreen(100)).toBe('hsl(75, 50%, 100%)')
    expect(limeGreen(-100)).toBe('hsl(75, 50%, 0%)')
    expect(limeGreen(50)).toBe('hsl(75, 50%, 75%)')
    expect(limeGreen(-50)).toBe('hsl(75, 50%, 25%)')
  })
})
