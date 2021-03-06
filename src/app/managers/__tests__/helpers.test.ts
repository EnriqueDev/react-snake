import { getInitialBoardData, getInitialSnakeData } from '../utils'
import { DEFAULT_SNAKE_SIZE } from '../../constants'

describe('Helper Functions', () => {
  describe('getInitialBoardData', () => {
    it('should provide a matrix with the given size', () => {
      const { cells } = getInitialBoardData(3)
      expect(Array.isArray(cells)).toBeTruthy()
      expect(cells).toHaveLength(3)
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
      const expectedResult = [
        { x: 5, y: 5 },
        { x: 6, y: 5 },
        { x: 7, y: 5 },
        { x: 8, y: 5 },
        { x: 9, y: 5 },
      ]
      const initialData = getInitialSnakeData(10)
      expect(initialData).toEqual(expectedResult)
    })
  })
})
