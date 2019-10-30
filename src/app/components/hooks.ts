import { useFrameManager } from '../managers/context'

export const useStartGame = (callBack: () => void) => {
  const frameManager = useFrameManager()
  frameManager.init(callBack)
}
