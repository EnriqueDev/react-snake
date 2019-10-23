import { observable, action } from 'mobx'
import SnakeNode, { NullableSnakeNode, Position } from './SnakeNode'

export default class Snake {
  @observable
  public first: NullableSnakeNode
  @observable
  public last: NullableSnakeNode

  constructor() {
    this.first = null
    this.last = null
  }

  @action
  addStart(position: Position): void {
    const newNode = new SnakeNode(null, null, position)

    if (!this.first || !this.last) {
      this.first = newNode
      this.last = this.first
      return
    }
  }
}
