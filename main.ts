let Billie: Sprite = null
let Rosalia = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f . . . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . . f d d d f . . . . . . . 
    . . . f f d d d f f . . . . . . 
    . . . f f d d d f f . . . . . . 
    . . . f f . d . f f . . . . . . 
    . . . . d d d d d . . . . . . . 
    . . . . d 2 d 2 d . . . . . . . 
    . . . . d 2 2 2 d . . . . . . . 
    . . . . d 2 2 2 d . . . . . . . 
    . . . . d 2 2 2 d . . . . . . . 
    . . . . . 2 . 2 . . . . . . . . 
    . . . . . 2 . 2 . . . . . . . . 
    . . . . . f . f . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Billie)
Billie = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 7 7 7 . . . . . . . . 
    . . . . 7 7 7 7 7 . . . . . . . 
    . . . . f d d d f . . . . . . . 
    . . . . f d d d f . . . . . . . 
    . . . . f d d d f . . . . . . . 
    . . . . f f d f f . . . . . . . 
    . . . . 7 7 7 7 7 . . . . . . . 
    . . . . 7 7 7 7 7 . . . . . . . 
    . . . . 7 7 7 7 7 . . . . . . . 
    . . . . d f f f d . . . . . . . 
    . . . . . 7 . 7 . . . . . . . . 
    . . . . . 7 . 7 . . . . . . . . 
    . . . . . 1 . 1 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let Karol_G = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . f f f . . . . . . . . . . 
    . . . . . . f f f f f . . . . . . . . . 
    . . . . . f f d d d f f . . . . . . . . 
    . . . . . f f d d d f f . . . . . . . . 
    . . . . . d b d d d b d . . . . . . . . 
    . . . . . c b b d b b c . . . . . . . . 
    . . . . . c c d d d c c . . . . . . . . 
    . . . . . . . c c c . . . . . . . . . . 
    . . . . . . . c c c . . . . . . . . . . 
    . . . . . . . d d d . . . . . . . . . . 
    . . . . . . . c c c . . . . . . . . . . 
    . . . . . . . c c c . . . . . . . . . . 
    . . . . . . . d . d . . . . . . . . . . 
    . . . . . . . c . c . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Karol_G.setPosition(30, 26)
Billie.setPosition(70, 83)
scene.cameraFollowSprite(Rosalia)
scene.setBackgroundColor(3)
effects.bubbles.startScreenEffect(90000000)
