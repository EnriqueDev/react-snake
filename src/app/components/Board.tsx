import * as React from 'react'
import { Position } from '../managers/Snake/SnakeNode'
import styled, { css } from 'styled-components'
import { hot } from 'react-hot-loader'
import { useBoard, useFrameManager, useSnakeManager } from '../managers/context'
import { includesEqualPosition } from '../helpers/array'

type AllowedKeys =
  | 'ArrowUp'
  | 'ArrowDown'
  | 'ArrowLeft'
  | 'ArrowRight'
  | 'Pause'
  | null

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

const Board: React.FC = () => {
  const [tick, setTick] = React.useState(0)
  const [snake, setSnake] = React.useState<Position[]>([])
  const [isPaused, setIsPaused] = React.useState<boolean>(true)
  const [lastKey, setLastkey] = React.useState<AllowedKeys>(null)
  const board = useBoard()
  const snakeManager = useSnakeManager()
  const frameManager = useFrameManager()

  React.useEffect(() => {
    setSnake(snakeManager.getSnake())
    setTick(tick => tick + 1)
    frameManager.init(() => setTick(tick => tick + 1))
    addEventListener('keydown', (event: KeyboardEvent) => {
      console.log(event.which)
      switch (event.which) {
        case 80:
          setLastkey('Pause')
          break
        case 37:
          setLastkey('ArrowLeft')
          break
        case 38:
          setLastkey('ArrowUp')
          break
        case 39:
          setLastkey('ArrowRight')
          break
        case 40:
          setLastkey('ArrowDown')
          break
      }
    })
  }, [])

  React.useEffect(() => {
    switch (lastKey) {
      case 'Pause':
        setIsPaused(isPaused => !isPaused)
        break

      default:
        if (!isPaused) {
          snakeManager.moveSnake()
          const snake = snakeManager.getSnake()
          setSnake(snake)
        }
        break
    }
    setLastkey(null)
  }, [tick])

  return (
    <BoardContainer>
      {board.map((rows, y) => {
        return (
          <Row key={y}>
            {rows.map((_, x) => {
              const isOccupied = includesEqualPosition(snake, { x, y })
              return (
                <Cell key={`${x}:${y}:${isOccupied}`} occupied={isOccupied}>
                  {/* {x}:{y} */}
                </Cell>
              )
            })}
          </Row>
        )
      })}
    </BoardContainer>
  )
}

export default hot(module)(Board)
