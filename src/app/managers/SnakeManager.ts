import Snake from './Snake/Snake'
import { getInitialSnakeData } from './helpers'
import { DEFAULT_BOARD_SIZE } from '../../constants'

class SnakeManager {
  private snake: Snake

  constructor() {
    const initialSnakeData = getInitialSnakeData(DEFAULT_BOARD_SIZE)
    this.snake = new Snake(initialSnakeData)
  }

  getSnake() {
    return this.snake.toArray()
  }

  moveSnake = () => {
    const first = this.snake.head
    if (first) {
      this.snake.addStart({ x: first.x - 1, y: first.y })
      this.snake.removeEnd()
    }
  }
}

export default SnakeManager
