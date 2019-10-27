import { createContext, useContext } from 'react'
import Store from './store'

export const StoreContext = createContext<Store>({} as Store)

export const useBoard = () => {
  const context = useContext(StoreContext)
  return context.getBoard()
}

export const useSnake = () => {
  const context = useContext(StoreContext)
  return context.getSnake()
}
