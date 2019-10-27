import { getInitialBoardData, getInitialSnakeData } from './helpers'
import Snake from './Snake/Snake'
import { Position } from './Snake/SnakeNode'

const BOARD_SIZE = 50

export default class Store {
  private board: any[][]
  private snake: Snake

  constructor() {
    this.board = getInitialBoardData(BOARD_SIZE)
    const initialSnakeData = getInitialSnakeData(BOARD_SIZE)
    this.snake = new Snake(initialSnakeData)
  }

  getBoard = (): any[][] => {
    return this.board
  }

  getSnake = (): Position[] => {
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
