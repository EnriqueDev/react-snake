import * as React from 'react'
import { Reset } from './styles/global'
import {
  BoardManagerContext,
  FrameManagerContext,
  SnakeManagerContext,
} from './managers/context'
import BoardManager from './managers/BoardManager'
import Board from './components/Board'
import FrameManager from './managers/FrameManager'
import SnakeManager from './managers/SnakeManager'

const boardManager = new BoardManager()
const frameManager = new FrameManager()
const snakeManager = new SnakeManager()

const App: React.FC = () => {
  return (
    <>
      <FrameManagerContext.Provider value={frameManager}>
        <SnakeManagerContext.Provider value={snakeManager}>
          <BoardManagerContext.Provider value={boardManager}>
            <Reset />
            <Board />
          </BoardManagerContext.Provider>
        </SnakeManagerContext.Provider>
      </FrameManagerContext.Provider>
    </>
  )
}

export default App
