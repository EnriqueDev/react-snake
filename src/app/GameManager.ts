import BoardManager from './managers/BoardManager'
import FrameManager from './managers/FrameManager'
import SnakeManager from './managers/SnakeManager'
import ListenersManager from './managers/ListenersManager'

interface IGameState {
  snake: Map<string, boolean>
  foodPosition: string
  score: number
}

export default class GameManager {
  private boardManager: BoardManager
  private frameManager: FrameManager
  private listenersManager: ListenersManager
  private snakeManager: SnakeManager

  private score: number

  constructor() {
    this.boardManager = new BoardManager()
    this.frameManager = new FrameManager()
    this.listenersManager = new ListenersManager()
    this.snakeManager = new SnakeManager()

    this.removeSnakeCells()
    this.boardManager.calculateNextFoodPosition()
    this.score = 0
  }

  init(callBack: () => void) {
    this.frameManager.init(callBack)
  }

  private removeSnakeCells() {
    const snake = this.snakeManager.getSnake().keys()

    for (let position of snake) {
      this.boardManager.occupyPosition(position)
    }
  }

  getState = (): IGameState => {
    return {
      snake: this.snakeManager.getSnake(),
      foodPosition: this.boardManager.getFoodPosition(),
      score: this.score,
    }
  }

  getCells = (): any[][] => {
    return this.boardManager.getCells()
  }

  runSystemFrame = () => {
    const nextDirection = this.listenersManager.getLastPressedKey()
    const isPaused = this.listenersManager.getIsPaused()
    if (isPaused) {
      return
    }

    const newState = this.snakeManager.triggerMovement(
      nextDirection,
      this.boardManager.getFoodPosition(),
    )

    if (!newState) {
      return
    }

    if (newState.deletedPosition) {
      this.boardManager.occupyPosition(newState.deletedPosition)
    }
    this.boardManager.freePosition(newState.nextPosition)
    if (newState.hasEatenFood) {
      this.handleEatenFood()
    }
  }

  private handleEatenFood() {
    this.boardManager.calculateNextFoodPosition()
    this.score += 10
  }
}
