import * as React from 'react'
import styled from 'styled-components'
import Board from './components/Board'

const GameContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Score = styled.span`
  align-self: flex-end;
  padding-right: 10px;
  margin-bottom: 10px;
`

interface IProps {
  cells: any[][]
  snake: Map<string, boolean>
  foodPosition: string
  score: number
}

const Game: React.FC<IProps> = ({ score, cells, snake, foodPosition }) => {
  return (
    <GameContainer>
      <BoardContainer>
        <Score>SCORE: {score}</Score>
        <Board foodPosition={foodPosition} snake={snake} cells={cells} />
      </BoardContainer>
    </GameContainer>
  )
}

export default Game
