import { createContext, useContext } from 'react'
import BoardManager from './BoardManager'
import FrameManager from './FrameManager'
import SnakeManager from './SnakeManager'

export const BoardManagerContext = createContext<BoardManager>(
  {} as BoardManager,
)
export const FrameManagerContext = createContext<FrameManager>(
  {} as FrameManager,
)
export const SnakeManagerContext = createContext<SnakeManager>(
  {} as SnakeManager,
)

export const useFrameManager = () => {
  return useContext(FrameManagerContext)
}

export const useBoard = () => {
  const context = useContext(BoardManagerContext)
  return context.getBoard()
}

export const useSnakeManager = () => {
  const context = useContext(SnakeManagerContext)
  return context
}
