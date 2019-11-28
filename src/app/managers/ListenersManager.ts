export type Direction = 'up' | 'down' | 'left' | 'right'

export default class ListenersManager {
  private isPaused: boolean
  private lastPressedKey: Direction

  constructor() {
    this.isPaused = false
    this.lastPressedKey = 'left'

    addEventListener('keydown', this.addKeyboardListener)
  }

  getIsPaused(): boolean {
    return this.isPaused
  }

  getLastPressedKey() {
    return this.lastPressedKey
  }

  togglePause = () => {
    this.isPaused = !this.isPaused
  }

  addKeyboardListener = (event: KeyboardEvent) => {
    switch (event.which) {
      case 32:
        this.togglePause()
      case 37:
        this.lastPressedKey = 'left'
        break
      case 38:
        this.lastPressedKey = 'up'
        break
      case 39:
        this.lastPressedKey = 'right'
        break
      case 40:
        this.lastPressedKey = 'down'
        break
    }
  }
}
