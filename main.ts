player.onChat("run", function () {
    for (let index = 0; index < 4; index++) {
        agent.setAssist(PLACE_ON_MOVE, true)
        agent.move(FORWARD, 5)
        agent.turn(LEFT_TURN)
    }
})
