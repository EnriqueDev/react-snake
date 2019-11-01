import { getInitialBoardData } from './utils'
import { DEFAULT_BOARD_SIZE } from '../constants'

export default class BoardManager {
  private board: any[][]

  constructor() {
    this.board = getInitialBoardData(DEFAULT_BOARD_SIZE)
  }

  getBoard = (): any[][] => {
    return this.board
  }
}
