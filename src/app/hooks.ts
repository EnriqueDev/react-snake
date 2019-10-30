import * as React from 'react'

export const useTicker = (
  callBack: () => void,
  tickDurationMS: number = 1000,
) => {
  let globalId: number
  let lastFrameTime: number = 0

  const tick = (currentFrameTime: number) => {
    if (!lastFrameTime || currentFrameTime - lastFrameTime > tickDurationMS) {
      lastFrameTime = currentFrameTime
      callBack()
    }
    globalId = requestAnimationFrame(tick)
  }

  React.useEffect(() => {
    globalId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(globalId)
    }
  }, [])
}
