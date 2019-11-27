import BoardManager, { Board } from './managers/BoardManager'
import FrameManager from './managers/FrameManager'
import SnakeManager from './managers/SnakeManager'

interface IGameState {
  snake: Map<string, boolean>
  foodPosition: string
}

export default class GameManager {
  private boardManager: BoardManager
  private frameManager: FrameManager
  private snakeManager: SnakeManager

  constructor() {
    this.boardManager = new BoardManager()
    this.frameManager = new FrameManager()
    this.snakeManager = new SnakeManager()

    const snake = this.snakeManager.getSnake().keys()

    for (let position of snake) {
      this.boardManager.occupyPosition(position)
    }

    this.boardManager.calculateNextFoodPosition()
  }

  init(callBack: () => void) {
    this.addEventListeners()
    this.frameManager.init(callBack)
  }

  getState = (): IGameState => {
    return {
      snake: this.snakeManager.getSnake(),
      foodPosition: this.boardManager.getFoodPosition(),
    }
  }

  getCells = (): any[][] => {
    return this.boardManager.getCells()
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
