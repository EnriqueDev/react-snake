import { Position } from './Snake/SnakeNode'

export const getInitialBoardData = (cells: number): any[][] => {
  const board = []

  for (let row = 0; row < cells; row++) {
    board.push(new Array(cells))
  }

  return board
}

export const getInitialSnakeData = (boardSize: number): Position[] => {
  if (boardSize < 10) {
    throw new Error('Board is not big enough to set the snake')
  }

  let x = Math.round(boardSize / 2)
  const y = x
  return [{ x: x++, y }, { x: x++, y }, { x: x++, y }]
}
