import SnakeManager from '~managers/SnakeManager'

export const addEventListeners = (snakeManager: SnakeManager) => {
  addEventListener('keydown', (event: KeyboardEvent) => {
    switch (event.which) {
      case 80:
        snakeManager.togglePause()
        break
      case 37:
        snakeManager.setLastPressedKey('left')
        break
      case 38:
        snakeManager.setLastPressedKey('up')
        break
      case 39:
        snakeManager.setLastPressedKey('right')
        break
      case 40:
        snakeManager.setLastPressedKey('down')
        break
    }
  })
}
