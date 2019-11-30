import SnakeManager from '../SnakeManager'

describe('SnakeManager', () => {
  let snakeManager: SnakeManager
  beforeEach(() => {
    snakeManager = new SnakeManager()
  })

  it('should not allow opposite direction movements', () => {
    snakeManager.triggerMovement('left', '0:0')
    expect(snakeManager.getSnake().has('9:10'))
    snakeManager.triggerMovement('right', '0:0')
    expect(snakeManager.getSnake().has('8:10'))
    snakeManager.triggerMovement('right', '0:0')
    expect(snakeManager.getSnake().has('7:10'))
  })
})
