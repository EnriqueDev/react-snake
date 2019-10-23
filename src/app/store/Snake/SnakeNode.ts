import { observable, action } from 'mobx'

export type NullableSnakeNode = SnakeNode | null
export type Position = {
  x: number
  y: number
}

export default class SnakeNode {
  @observable
  public prev?: NullableSnakeNode
  @observable
  public next: NullableSnakeNode

  @observable
  public position: Position

  @action
  setNext(next: NullableSnakeNode) {
    this.next = next
  }

  @action
  setPrev(prev: NullableSnakeNode) {
    this.prev = prev
  }

  @action
  setPosition(position: Position) {
    this.position = position
  }

  constructor(
    prev: NullableSnakeNode,
    next: NullableSnakeNode,
    position: Position,
  ) {
    this.setPrev(prev)
    this.setNext(next)
    this.next = next
    this.position = position
  }
}
