import { Position } from './Snake/SnakeNode'
import { MIN_BOARD_SIZE } from '../../constants'

export const getInitialBoardData = (cells: number): any[][] => {
  const board = []

  for (let row = 0; row < cells; row++) {
    const newArray = []
    for (let cell = 0; cell < cells; cell++) {
      newArray.push(null)
    }
    board.push(newArray)
  }

  return board
}

export const getInitialSnakeData = (boardSize: number): Position[] => {
  if (boardSize < MIN_BOARD_SIZE) {
    throw new Error('Board is not big enough to set the snake')
  }

  let x = Math.round(boardSize / 2)
  const y = x
  return [{ x: x++, y }, { x: x++, y }, { x: x++, y }]
}
