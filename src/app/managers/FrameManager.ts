class FrameManager {
  private animationFrameRequest: number = NaN
  private lastFrameTime: number = 0

  init(callBack: () => void) {
    this.start(callBack, 200)
  }

  start(callBack: () => void, tickDuration: number) {
    const tick = (currentFrameTime: number) => {
      if (
        !this.lastFrameTime ||
        currentFrameTime - this.lastFrameTime > tickDuration
      ) {
        this.lastFrameTime = currentFrameTime
        callBack()
      }
      this.animationFrameRequest = requestAnimationFrame(tick)
    }

    this.animationFrameRequest = requestAnimationFrame(tick)
  }

  stop() {
    cancelAnimationFrame(this.animationFrameRequest)
    this.animationFrameRequest = NaN
  }

  update(callBack: () => void, tickDuration: number) {
    cancelAnimationFrame(this.animationFrameRequest)
    this.start(callBack, tickDuration)
  }

  getIsPaused() {
    return this.animationFrameRequest === NaN
  }
}

export default FrameManager
