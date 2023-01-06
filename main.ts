input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("The logo is pressed.")
})
function show_stringwave (list: any[]) {
    basic.showString("" + (list))
}
let ww = 0
let list = 8
let myImage = images.createBigImage(`
    . . . . . . . . . .
    . # . # . . . . . .
    . . . . . . . . . .
    # . . . # . . . . .
    . # # # . . . . . .
    `)
basic.forever(function () {
    ww = 0
    if (input.buttonIsPressed(Button.A)) {
        myImage.scrollImage(1, 200)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("bool:" + !(!(!(false))))
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
