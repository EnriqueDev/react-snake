import { Position } from './Snake/SnakeNode'
import { MIN_BOARD_SIZE, DEFAULT_SNAKE_SIZE } from '../constants'
import { Direction } from './ListenersManager'

type InitialBoardData = {
  board: Map<string, boolean>
  cells: any[][]
}

export const getInitialBoardData = (rowSize: number): InitialBoardData => {
  const board: Map<string, boolean> = new Map()
  const cells = []

  for (let row = 0; row < rowSize; row++) {
    const cellsRow = []
    for (let cell = 0; cell < rowSize; cell++) {
      cellsRow.push(null)
      board.set(`${row}:${cell}`, false)
    }
    cells.push(cellsRow)
  }

  return { board, cells }
}

export const getInitialSnakeData = (
  boardSize: number,
  snakeSize: number = DEFAULT_SNAKE_SIZE,
): Position[] => {
  if (boardSize < MIN_BOARD_SIZE) {
    throw new Error('Board is not big enough to set the snake')
  }

  let x = Math.round(boardSize / 2)
  const y = x

  const result = []
  for (let i = 0; i < snakeSize; i++) {
    result.push({ x: x++, y })
  }

  return result
}

export const getOppositeDirection = (direction: Direction) => {
  switch (direction) {
    case 'down':
      return 'up'

    case 'up':
      return 'down'

    case 'left':
      return 'right'

    case 'right':
      return 'left'
  }
}
