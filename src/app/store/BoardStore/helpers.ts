export const getInitialBoardData = (cells: number) => {
  const board = []

  for (let row = 0; row < cells; row++) {
    board.push(new Array(cells))
  }

  return board
}
