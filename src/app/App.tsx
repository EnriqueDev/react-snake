import * as React from 'react'
import { hot } from 'react-hot-loader'
import GameManager from './GameManager'
import { Reset } from './styles'
import Game from './Game'

const gameManager = new GameManager()

const App: React.FC = () => {
  const [snake, setSnake] = React.useState<Map<string, boolean>>(new Map())
  const [cells, setCells] = React.useState<any[][]>([])
  const [food, setFood] = React.useState<string>('')
  const [score, setScore] = React.useState<number>(0)

  const runFrameUpdate = React.useCallback(() => {
    gameManager.runSystemFrame()
    const { snake, foodPosition, score: newScore } = gameManager.getState()
    setSnake(snake)
    if (food !== foodPosition) {
      setFood(foodPosition)
    }

    if (newScore !== score) {
      setScore(newScore)
    }
  }, [])

  React.useEffect(() => {
    const { snake, foodPosition, score } = gameManager.getState()
    setSnake(snake)
    setFood(foodPosition)
    setScore(score)
    setCells(gameManager.getCells())
    gameManager.init(runFrameUpdate)
  }, [])

  return (
    <>
      <Reset />
      <Game score={score} foodPosition={food} snake={snake} cells={cells} />
    </>
  )
}

export default hot(module)(App)
