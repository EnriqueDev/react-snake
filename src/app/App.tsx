import * as React from 'react'
import { Reset } from './styles/global'
import { StoreContext } from './store/context'
import Store from './store/store'
import Board from './components/Board'

const App: React.FC = () => {
  const store = new Store()

  return (
    <>
      <StoreContext.Provider value={store}>
        <Reset />
        <Board />
      </StoreContext.Provider>
    </>
  )
}

export default App
