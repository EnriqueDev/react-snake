import Snake from '../Snake'

describe('Snake Methods', () => {
  let snake: Snake

  beforeEach(() => {
    snake = new Snake()
  })

  describe('constructor', () => {
    it('should set empty first and last nodes when no parameters are given', () => {
      expect(snake.head).not.toBeDefined()
      expect(snake.tail).not.toBeDefined()
    })

    it('should have length 0 with no params', () => {
      expect(snake.length).toBe(0)
    })

    it('should set the values given if an array is passed', () => {
      const positions = [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }]
      const snake = new Snake(positions)

      expect(snake.length).toBe(3)
    })
  })

  describe('addStart', () => {
    it('should set the value in first and last when both are null', () => {
      const storedPosition = { x: 0, y: 0 }

      snake.addStart({ x: 0, y: 0 })

      const first = snake.head
      const last = snake.tail

      expect(first).toBeDefined()
      expect(last).toBeDefined()
      expect(last).toEqual(storedPosition)
      expect(first).toEqual(storedPosition)
    })

    it('should append new nodes at the beggining on the list when elements already exist inside', () => {
      const initialPosition = { x: 0, y: 0 }
      const newPosition = { x: 1, y: 0 }

      snake.addStart(initialPosition)
      snake.addStart(newPosition)
      const first = snake.head
      const last = snake.tail
      expect(first).toBeDefined()
      expect(last).toBeDefined()
      expect(first).toEqual(newPosition)
      expect(last).toEqual(initialPosition)
    })
  })

  describe('addEnd', () => {
    it('should set the value in first and last when both are null', () => {
      const storedPosition = { x: 0, y: 0 }

      snake.addEnd({ x: 0, y: 0 })

      const first = snake.head
      const last = snake.tail

      expect(first).toBeDefined()
      expect(last).toBeDefined()
      expect(last).toEqual(storedPosition)
      expect(first).toEqual(storedPosition)
    })

    it('should append new nodes at the end on the list when elements already exist inside', () => {
      const initialPosition = { x: 0, y: 0 }
      const newPosition = { x: 1, y: 0 }

      snake.addEnd(initialPosition)
      snake.addEnd(newPosition)
      const first = snake.head
      const last = snake.tail
      expect(first).toBeDefined()
      expect(last).toBeDefined()
      expect(first).toEqual(initialPosition)
      expect(last).toEqual(newPosition)
    })

    it('should add elements at the end when called multiple times', () => {
      const position0 = { x: 0, y: 0 }
      const position1 = { x: 1, y: 0 }
      const position2 = { x: 2, y: 0 }

      snake.addEnd(position0)
      snake.addEnd(position1)
      snake.addEnd(position2)

      expect(snake.length).toBe(3)
      expect(snake.tail).toEqual(position2)
    })
  })

  describe('removeEnd', () => {
    it('should throw an error if the list is empty', () => {
      expect(() => snake.removeEnd()).toThrow()
    })

    it('should set both node references as empty if there is just one element', () => {
      const position = { x: 0, y: 0 }

      snake.addStart(position)

      expect(snake.tail).toBeDefined()
      expect(snake.head).toBeDefined()
      expect(snake.head).toEqual(position)
      expect(snake.tail).toEqual(position)

      snake.removeEnd()

      expect(snake.head).not.toBeDefined()
      expect(snake.tail).not.toBeDefined()
    })

    it('should set the previous element as last', () => {
      const position0 = { x: 0, y: 0 }
      const position1 = { x: 1, y: 0 }
      const position2 = { x: 2, y: 0 }

      snake.addStart(position0)
      snake.addStart(position1)
      snake.addStart(position2)
      snake.removeEnd()

      expect(snake.length).toBe(2)
      expect(snake.tail).toEqual(position1)
    })
  })

  describe('toArray', () => {
    it('should return an empty array when empty', () => {
      expect(snake.toArray()).toEqual([])
    })

    it('should return all the values contained in an array', () => {
      const position0 = { x: 0, y: 0 }
      const position1 = { x: 1, y: 0 }
      const position2 = { x: 2, y: 0 }
      const position3 = { x: 3, y: 0 }

      const initialData = [position0, position1, position2, position3]

      const snake = new Snake(initialData)
      expect(snake.toArray()).toEqual(initialData)
    })
  })
})
