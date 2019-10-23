import * as React from 'react'
import styled from 'styled-components'
import { useBoardStore } from '../store/context'

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

const Cell = styled.div`
  flex: 1 0 auto;
  border: 1px solid black;
`

const Board: React.FC = () => {
  const boardStore = useBoardStore()

  return (
    <BoardContainer>
      {boardStore.cells.map((rows, y) => {
        return (
          <Row>
            {rows.map((_, x) => (
              <Cell>
                {x}:{y}
              </Cell>
            ))}
          </Row>
        )
      })}
    </BoardContainer>
  )
}

export default Board
