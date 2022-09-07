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
input.onButtonPressed(Button.AB, function () {
	
})
