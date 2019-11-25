import BoardManager, { Board } from './managers/BoardManager'
import FrameManager from './managers/FrameManager'
import SnakeManager from './managers/SnakeManager'
import { Position } from './managers/Snake/SnakeNode'

export default class GameManager {
  private boardManager: BoardManager
  private frameManager: FrameManager
  private snakeManager: SnakeManager

  constructor() {
    this.boardManager = new BoardManager()
    this.frameManager = new FrameManager()
    this.snakeManager = new SnakeManager()
  }

  getState = (): Position[] => {
    return this.snakeManager.getSnake()
  }

  getBoard = (): Board => {
    return this.boardManager.getBoard()
  }

  getCells = (): any[][] => {
    return this.boardManager.getCells()
  }

  init(callBack: () => void) {
    this.addEventListeners()
    this.frameManager.init(callBack)
  }

  runSystemFrame = () => {
    this.snakeManager.moveSnake()
  }

  addEventListeners = () => {
    addEventListener('keydown', (event: KeyboardEvent) => {
      switch (event.which) {
        case 80:
          this.snakeManager.togglePause()
          break
        case 37:
          this.snakeManager.setLastPressedKey('left')
          break
        case 38:
          this.snakeManager.setLastPressedKey('up')
          break
        case 39:
          this.snakeManager.setLastPressedKey('right')
          break
        case 40:
          this.snakeManager.setLastPressedKey('down')
          break
      }
    })
  }
}
