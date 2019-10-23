import { createContext, useContext } from 'react'
import Store from './store'

export const StoreContext = createContext<Store>({} as Store)

export const useBoardStore = () => {
  const context = useContext(StoreContext)
  return context.boardStore
}
