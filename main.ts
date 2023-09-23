let pause2 = 0
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
let pp = 1
strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
strip.setBrightness(255)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && pause2 == 0) {
        pause2 = 1
    } else if (input.buttonIsPressed(Button.A) && pause2 == 1) {
        pause2 = 0
    } else if (1 == pause2) {
        basic.pause(1)
    } else {
        strip.showRainbow(pp, pp + 10)
        pp += 1
    }
})
