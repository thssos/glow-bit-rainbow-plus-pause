red = 0
blue = 0
strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.set_brightness(50)

def on_forever():
    global blue, red
    blue = Math.constrain(Math.map(input.acceleration(Dimension.Y), -1023, 1023, 0, 255),
        0,
        255)
    red = Math.constrain(Math.map(input.acceleration(Dimension.X), -1023, 1023, 0, 255),
        0,
        255)
    strip.show_color(neopixel.rgb(red, 0, blue))
basic.forever(on_forever)
