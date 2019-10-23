import { observable } from 'mobx'
import { getInitialBoardData } from './helpers'

type Cell = {
  isEmpty: boolean
  isMinorPrize: boolean
}

export default class BoardStore {
  @observable
  cells: any[][]

  constructor() {
    this.cells = getInitialBoardData(10)
  }
}
