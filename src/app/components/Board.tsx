import * as React from 'react'
import { Position } from '../managers/Snake/SnakeNode'
import styled, { css } from 'styled-components'
import { includesEqualPosition } from '../helpers/array'

const BoardContainer = styled.div`
  width: 500px;
  height: 500px;
  overflow: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`

const Row = styled.div`
  flex: 1 0 auto;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
`

const Cell = styled.div<{ occupied?: boolean }>`
  flex: 1 0 auto;
  border: 1px solid black;

  ${({ occupied }) =>
    occupied &&
    css`
      background-color: black;
    `}
`

interface IProps {
  cells: any[][]
  snake: Position[]
}

const Board: React.FC<IProps> = ({ cells, snake }) => {
  return (
    <BoardContainer>
      {cells.map((rows, y) => {
        return (
          <Row key={y}>
            {rows.map((_, x) => {
              const isOccupied = includesEqualPosition(snake, { x, y })
              return <Cell key={`${x}:${y}`} occupied={isOccupied} />
            })}
          </Row>
        )
      })}
    </BoardContainer>
  )
}

export default Board
