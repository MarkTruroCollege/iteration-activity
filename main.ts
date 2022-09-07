let countdown = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showArrow(ArrowNames.North)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
        basic.showArrow(ArrowNames.East)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
        basic.showArrow(ArrowNames.South)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
        basic.showArrow(ArrowNames.West)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    countdown = 10
    while (countdown >= 0) {
        basic.showNumber(countdown)
        basic.pause(1000)
        countdown += -1
    }
    basic.showString("Lift Off!")
})
