import { getInitialBoardData, getInitialSnakeData } from '../helpers'
import { DEFAULT_SNAKE_SIZE } from '../../../constants'

describe('Helper Functions', () => {
  describe('getInitialBoardData', () => {
    it('should provide a matrix with the given size', () => {
      const initialData = getInitialBoardData(3)
      expect(Array.isArray(initialData)).toBe(true)
      expect(initialData).toHaveLength(3)
      initialData.forEach(() => {})
    })
  })

  describe('getInitialSnakeData', () => {
    it('should throw if the board is less than 10', () => {
      expect(() => getInitialSnakeData(4)).toThrow()
      expect(() => getInitialSnakeData(7)).toThrow()
      expect(() => getInitialSnakeData(9)).toThrow()
      expect(() => getInitialSnakeData(0)).toThrow()
      expect(() => getInitialSnakeData(10)).not.toThrow()
    })

    it('should provide an array with three elements', () => {
      const initialData = getInitialSnakeData(10)
      expect(initialData).toHaveLength(DEFAULT_SNAKE_SIZE)
    })

    it('should provide the correct positions', () => {
      const expectedResult = [{ x: 5, y: 5 }, { x: 6, y: 5 }, { x: 7, y: 5 }]
      const initialData = getInitialSnakeData(10)
      expect(initialData).toEqual(expectedResult)
    })
  })
})
