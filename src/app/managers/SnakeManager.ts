import Snake from './Snake/Snake'
import { getInitialSnakeData } from './utils'
import { DEFAULT_BOARD_SIZE } from '../constants'
import { Position } from './Snake/SnakeNode'

type Direction = 'up' | 'down' | 'left' | 'right'

class SnakeManager {
  private snake: Snake
  private lastMovement: Direction = 'left'
  private lastPressedKey: Direction = 'left'
  private isPaused = true

  constructor() {
    const initialSnakeData = getInitialSnakeData(DEFAULT_BOARD_SIZE)
    this.snake = new Snake(initialSnakeData)
  }

  setLastPressedKey = (key: Direction) => {
    this.lastPressedKey = key
  }

  getSnake() {
    return this.snake.toMap()
  }

  togglePause() {
    this.isPaused = !this.isPaused
  }

  isCollision(position: Position) {
    if (
      position.x >= DEFAULT_BOARD_SIZE ||
      position.y < 0 ||
      position.y >= DEFAULT_BOARD_SIZE ||
      position.x < 0
    ) {
      return true
    }

    return this.getSnake().has(`${position.x}:${position.y}`)
  }

  moveSnake = () => {
    if (this.isPaused) {
      return
    }
    const first = this.snake.head
    if (first) {
      switch (this.lastPressedKey) {
        case 'up':
          if (this.lastMovement !== 'down') {
            this.move('up')
          } else {
            this.repeatLastMovement()
          }
          break

        case 'down':
          if (this.lastMovement !== 'up') {
            this.move('down')
          } else {
            this.repeatLastMovement()
          }
          break

        case 'right':
          if (this.lastMovement !== 'left') {
            this.move('right')
          } else {
            this.repeatLastMovement()
          }
          break

        case 'left':
          if (this.lastMovement !== 'right') {
            this.move('left')
          } else {
            this.repeatLastMovement()
          }
          break
      }
    }
  }

  repeatLastMovement = () => {
    switch (this.lastMovement) {
      case 'up':
        this.move('up')
        break

      case 'down':
        this.move('down')
        break

      case 'right':
        this.move('right')
        break

      case 'left':
        this.move('left')
        break
    }
  }

  move = (direction: Direction) => {
    const first = this.snake.head
    if (first) {
      const nextPosition = this.getNextPosition(direction)

      if (this.isCollision(nextPosition)) {
        throw new Error('Collision')
      }

      this.snake.addStart(nextPosition)
      this.snake.removeEnd()
      this.lastMovement = direction
    }
  }

  getNextPosition = (direction: Direction): Position => {
    const first = this.snake.head

    if (!first) {
      throw new Error('Tried to update postion with an empty list')
    }

    switch (direction) {
      case 'up':
        return { x: first.x, y: first.y - 1 }

      case 'down':
        return { x: first.x, y: first.y + 1 }

      case 'left':
        return { x: first.x - 1, y: first.y }

      case 'right':
        return { x: first.x + 1, y: first.y }
    }
  }
}

export default SnakeManager
