import Snake from './Snake/Snake'
import { getInitialSnakeData } from './utils'
import { DEFAULT_BOARD_SIZE } from '../constants'

type Movement = 'up' | 'down' | 'left' | 'right' | 'pause'

class SnakeManager {
  private snake: Snake
  private lastMovement: Movement = 'left'
  private lastPressedKey: Movement = 'left'
  private isPaused = true

  constructor() {
    const initialSnakeData = getInitialSnakeData(DEFAULT_BOARD_SIZE)
    this.snake = new Snake(initialSnakeData)
  }

  setLastPressedKey = (key: Movement) => {
    this.lastPressedKey = key
  }

  getSnake() {
    return this.snake.toArray()
  }

  togglePause() {
    this.isPaused = !this.isPaused
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
            this.moveUp()
          } else {
            this.repeatLastMovement()
          }
          break

        case 'down':
          if (this.lastMovement !== 'up') {
            this.moveDown()
          } else {
            this.repeatLastMovement()
          }
          break

        case 'right':
          if (this.lastMovement !== 'left') {
            this.moveRight()
          } else {
            this.repeatLastMovement()
          }
          break

        case 'left':
          if (this.lastMovement !== 'right') {
            this.moveLeft()
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
        this.moveUp()
        break

      case 'down':
        this.moveDown()
        break

      case 'right':
        this.moveRight()
        break

      case 'left':
        this.moveLeft()
        break
    }
  }

  moveUp = () => {
    const first = this.snake.head

    if (first) {
      this.snake.addStart({ x: first.x, y: first.y - 1 })
      this.snake.removeEnd()
      this.lastMovement = 'up'
    }
  }

  moveDown = () => {
    const first = this.snake.head
    if (first) {
      this.snake.addStart({ x: first.x, y: first.y + 1 })
      this.snake.removeEnd()
      this.lastMovement = 'down'
    }
  }

  moveLeft = () => {
    const first = this.snake.head
    if (first) {
      this.snake.addStart({ x: first.x - 1, y: first.y })
      this.snake.removeEnd()
      this.lastMovement = 'left'
    }
  }

  moveRight = () => {
    const first = this.snake.head
    if (first) {
      this.snake.addStart({ x: first.x + 1, y: first.y })
      this.snake.removeEnd()
      this.lastMovement = 'right'
    }
  }
}

export default SnakeManager
