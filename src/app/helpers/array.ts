import { Position } from '~store/Snake/SnakeNode'

export const includesEqualPosition = (
  list: Position[],
  element: Position,
): boolean => {
  return list.some(value => value.x === element.x && value.y === element.y)
}
