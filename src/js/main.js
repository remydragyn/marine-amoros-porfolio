import TweenMax from 'gsap'
import $ from 'zepto-webpack'

console.log($)

TweenMax.to('.name.title', 1, {x: 60, delay: 3})
