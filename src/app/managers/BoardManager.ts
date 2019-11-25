import { getInitialBoardData } from './utils'
import { DEFAULT_BOARD_SIZE } from '../constants'

export type Board = Map<string, boolean>
export default class BoardManager {
  private board: Board
  private cells: any[][]

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
}
