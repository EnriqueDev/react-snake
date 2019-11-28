import Snake from './Snake/Snake'
import { getInitialSnakeData, getOppositeDirection } from './utils'
import { DEFAULT_BOARD_SIZE } from '../constants'
import { Position } from './Snake/SnakeNode'
import { Direction } from './ListenersManager'

class SnakeManager {
  private snake: Snake
  private lastMovement: Direction = 'left'

  constructor() {
    const initialSnakeData = getInitialSnakeData(DEFAULT_BOARD_SIZE)
    this.snake = new Snake(initialSnakeData)
  }

  getSnake() {
    return this.snake.toMap()
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

  triggerMovement = (nextDirection: Direction) => {
    if (!this.snake.head) {
      return
    }
    const isOppositeDirecton =
      nextDirection === getOppositeDirection(this.lastMovement)

    if (isOppositeDirecton) {
      this.move(this.lastMovement)
    }

    this.move(nextDirection)
  }

  move = (direction: Direction) => {
    if (!this.snake.head) {
      return
    }

    const nextPosition = this.getNextPosition(direction)

    if (this.isCollision(nextPosition)) {
      throw new Error('Collision')
    }

    this.snake.addStart(nextPosition)
    this.snake.removeEnd()
    this.lastMovement = direction
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
