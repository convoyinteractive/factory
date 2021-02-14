import gsap from 'gsap'

export default function(element, { start, speed }) {
    if (typeof element === 'string') {
        element = document.querySelector(element)
    }

    let items = element ? [...element.children] : []

    speed = speed || 0.2
    start = start || 0

    if (start === 'random') {
        start = Math.floor(Math.random() * (items.length - 1)) + speed
    }

    let timeline = gsap.timeline({ paused: true, repeat: -1 })

    items.forEach((item, index) => {
        if (index !== 0) {
            gsap.set(item, { display: 'none' })
        }

        timeline.set(item, { display: 'block' }, index * speed)
        timeline.set(item, { display: 'none' }, index * speed + speed)
    })

    timeline.pause(start * speed)

    let play = function() {
        timeline.play()
    }

    let pause = function() {
        timeline.pause()
    }

    return {
        items,
        play,
        pause,
    }
}
