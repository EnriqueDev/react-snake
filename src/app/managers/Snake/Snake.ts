import SnakeNode, { NullableSnakeNode, Position } from './SnakeNode'
import { array } from 'prop-types'

export default class Snake {
  private first: NullableSnakeNode = null
  private last: NullableSnakeNode = null
  public length: number = 0

  constructor(positions?: Position[]) {
    if (Boolean(positions) && Array.isArray(positions) && array.length) {
      positions.map(position => this.addEnd(position))
      return
    }
  }

  get head(): Position | undefined {
    return this.first ? this.first.position : undefined
  }

  get tail() {
    return this.last ? this.last.position : undefined
  }

  addStart(position: Position): void {
    const newNode = new SnakeNode(null, null, position)

    if (this.length === 0) {
      this.first = newNode
      this.last = this.first
      this.length++
      return
    }

    newNode.setNext(this.first)
    this.first.setPrev(newNode)
    this.first = newNode
    this.length++
    return
  }

  addEnd(position: Position): void {
    const newNode = new SnakeNode(null, null, position)

    if (this.length === 0) {
      this.first = newNode
      this.last = this.first
      this.length++
      return
    }

    newNode.setPrev(this.last)
    this.last!.setNext(newNode)
    this.last = newNode
    this.length++
  }

  removeEnd() {
    if (!this.last || !this.first) {
      throw new Error('Attemted to remove an element from an empty list')
    }

    if (this.length === 1) {
      this.last = null
      this.first = null
      this.length--
      return
    }
    this.last.prev!.setNext(null)
    this.last = this.last.prev!
    this.length--
  }

  toArray(): Position[] {
    let current = this.first
    const result = []

    while (current) {
      result.push(current.position)
      current = current.next
    }

    return result
  }
}
