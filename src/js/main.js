// import TweenMax from 'gsap'
import $ from 'zepto-webpack'

var $subPartName = $('.sub-part-name-js')
var $subNavItem = $('.sub-nav-item-js')

function onMouseEnterSubPartName () {
  var $this = $(this)

  console.log(this)
  $subNavItem.removeClass('hover')
  $this.parents('.sub-nav-item-js').addClass('hover')
}

$(window).on('load', function () {
  $subPartName.on('mouseenter', onMouseEnterSubPartName)
})
