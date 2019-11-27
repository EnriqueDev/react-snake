import { getInitialBoardData } from './utils'
import { DEFAULT_BOARD_SIZE } from '../constants'

export type Board = Map<string, boolean>
export default class BoardManager {
  private board: Board
  private cells: any[][]
  private foodPosition: string = ''

  constructor() {
    const { board, cells } = getInitialBoardData(DEFAULT_BOARD_SIZE)
    this.board = board
    this.cells = cells
  }

  getBoard = (): Board => {
    return this.board
  }

  getCells = (): any[][] => {
    return this.cells
  }

  freePosition = (position: string) => {
    this.board.delete(position)
  }

  occupyPosition = (position: string) => {
    this.board.set(position, true)
  }

  getFoodPosition = (): string => {
    return this.foodPosition
  }

  calculateNextFoodPosition() {
    const freePositions = Array.from(this.board.keys())
    const nextFoodPosition = Math.floor(Math.random() * (this.board.size - 1))
    this.foodPosition = freePositions[nextFoodPosition]
  }
}
