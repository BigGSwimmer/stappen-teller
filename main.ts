input.onGesture(Gesture.ThreeG, function () {
    teldoos += 1
    basic.showNumber(teldoos)
})
let teldoos = 0
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
    basic.showIcon(IconNames.Heart)
}
