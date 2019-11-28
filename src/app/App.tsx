import * as React from 'react'
import { hot } from 'react-hot-loader'
import Board from './components/Board'
import GameManager from './GameManager'
import { Reset } from './styles'

const gameManager = new GameManager()

const App: React.FC = () => {
  const [snake, setSnake] = React.useState<Map<string, boolean>>(new Map())
  const [cells, setCells] = React.useState<any[][]>([])
  const [food, setFood] = React.useState<string>('')

  const runFrameUpdate = React.useCallback(() => {
    gameManager.runSystemFrame()
    const { snake, foodPosition } = gameManager.getState()
    setSnake(snake)
    if (food !== foodPosition) {
      setFood(foodPosition)
    }
  }, [])

  React.useEffect(() => {
    const { snake, foodPosition } = gameManager.getState()
    setSnake(snake)
    setFood(foodPosition)
    setCells(gameManager.getCells())
    gameManager.init(runFrameUpdate)
  }, [])

  return (
    <>
      <Reset />
      <Board foodPosition={food} snake={snake} cells={cells} />
    </>
  )
}

export default hot(module)(App)
