import * as React from 'react'
import { hot } from 'react-hot-loader'
import { Position } from './managers/Snake/SnakeNode'
import Board from './components/Board'
import GameManager from './GameManager'
import { Reset } from './styles'

const gameManager = new GameManager()

const App: React.FC = () => {
  const [snake, setSnake] = React.useState<Position[]>([])

  const runFrameUpdate = React.useCallback(() => {
    gameManager.runSystemFrame()
    const snake = gameManager.getState()
    setSnake(snake)
  }, [])

  React.useEffect(() => {
    setSnake(gameManager.getState())
    gameManager.init(runFrameUpdate)
  }, [])

  return (
    <>
      <Reset />
      <Board snake={snake} cells={gameManager.getBoard()} />
    </>
  )
}

export default hot(module)(App)
