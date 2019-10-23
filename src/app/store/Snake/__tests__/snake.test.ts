import Snake from '../Snake'

describe('Snake Methods', () => {
  let snake: Snake

  beforeEach(() => {
    snake = new Snake()
  })

  describe('constructor', () => {
    it('should provide empty first and last nodes', () => {
      expect(snake.first).toBeNull()
      expect(snake.last).toBeNull()
    })
  })

  describe('addStart', () => {
    it('should set the value in first and last when both are null', () => {
      const storedPosition = { x: 0, y: 0 }

      snake.addStart({ x: 0, y: 0 })

      expect(snake.first).not.toBeNull()
      expect(snake.last).not.toBeNull()
      expect(snake.first!.position).toEqual(storedPosition)
      expect(snake.last!.position).toEqual(storedPosition)
    })
  })
})
