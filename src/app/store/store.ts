import BoardStore from '../store/BoardStore/boardStore'

export default class Store {
  public boardStore: BoardStore

  constructor() {
    this.boardStore = new BoardStore()
  }
}
