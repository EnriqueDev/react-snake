export type NullableSnakeNode = SnakeNode | null
export type Position = {
  x: number
  y: number
}

export default class SnakeNode {
  public prev: NullableSnakeNode
  public next: NullableSnakeNode
  public position: Position

  setNext(next: NullableSnakeNode) {
    this.next = next
  }

  setPrev(prev: NullableSnakeNode) {
    this.prev = prev
  }

  setPosition(position: Position) {
    this.position = position
  }

  constructor(
    prev: NullableSnakeNode,
    next: NullableSnakeNode,
    position: Position,
  ) {
    this.next = next
    this.prev = prev
    this.position = position
  }
}
