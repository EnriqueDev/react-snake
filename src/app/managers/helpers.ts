import { Position } from './Snake/SnakeNode'
import { MIN_BOARD_SIZE, DEFAULT_SNAKE_SIZE } from '../../constants'

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

export const getInitialSnakeData = (
  boardSize: number,
  snakeSize: number = DEFAULT_SNAKE_SIZE,
): Position[] => {
  if (boardSize < MIN_BOARD_SIZE) {
    throw new Error('Board is not big enough to set the snake')
  }

  let x = Math.round(boardSize / 2) - 3
  const y = x

  const result = []
  for (let i = 0; i < snakeSize; i++) {
    result.push({ x: x++, y })
  }

  return result
}
