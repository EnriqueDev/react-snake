import * as React from 'react'
import { hot } from 'react-hot-loader'
import BoardManager from './managers/BoardManager'
import FrameManager from './managers/FrameManager'
import SnakeManager from './managers/SnakeManager'
import { Position } from './managers/Snake/SnakeNode'
import { addEventListeners } from './utils'
import Board from './components/Board'

import { Reset } from './styles'

const boardManager = new BoardManager()
const frameManager = new FrameManager()
const snakeManager = new SnakeManager()

const App: React.FC = () => {
  const [snake, setSnake] = React.useState<Position[]>([])

  const runFrameUpdate = React.useCallback(() => {
    snakeManager.moveSnake()
    const snake = snakeManager.getSnake()
    setSnake(snake)
  }, [])

  React.useEffect(() => {
    setSnake(snakeManager.getSnake())
    frameManager.init(runFrameUpdate)
    addEventListeners(snakeManager)
  }, [])

  return (
    <>
      <Reset />
      <Board snake={snake} cells={boardManager.getBoard()} />
    </>
  )
}

export default hot(module)(App)
