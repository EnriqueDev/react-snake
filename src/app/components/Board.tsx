import * as React from 'react'
import styled, { css } from 'styled-components'

const BoardContainer = styled.div`
  width: 500px;
  max-width: 100vw;
  height: 500px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`

const Row = styled.div`
  flex: 1 0 auto;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
`

const Cell = styled.div<{ occupied: boolean; isFood: boolean }>`
  flex: 1 0 auto;
  border: 1px solid black;
  position: relative;

  ${({ occupied }) =>
    occupied &&
    css`
      background-color: black;
    `}

  ${({ isFood, occupied }) =>
    isFood &&
    !occupied &&
    css`
      ::after {
        position: absolute;
        content: '';
        size: 75%;
        border-radius: 50%;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        border: 1px solid black;
        background-color: black;
        z-index: 10;
      }
    `}
`

interface IProps {
  cells: any[][]
  snake: Map<string, boolean>
  foodPosition: string
}

const Board: React.FC<IProps> = ({ cells, foodPosition, snake }) => {
  return (
    <BoardContainer>
      {cells.map((rows, y) => {
        return (
          <Row key={y}>
            {rows.map((_, x) => {
              const position = `${x}:${y}`
              const isOccupied = snake.has(position)
              const isFood = foodPosition === position
              return (
                <Cell key={position} occupied={isOccupied} isFood={isFood} />
              )
            })}
          </Row>
        )
      })}
    </BoardContainer>
  )
}

export default Board
