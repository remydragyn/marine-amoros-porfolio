// import TweenMax from 'gsap'
import $ from 'zepto-webpack'

$(document).ready(function () {
  var page = $('body').attr('data-page')
  var $subNavWorkList = $('.sub-nav-work-list-js')
  var $subNavItem = $('.sub-nav-work-item-js')
  var $projectItem = $('.project-item-js')

  initCurrentPage(page)

  // @page : string -- $('body').attr('data-page')
  function initCurrentPage (page) {
    var index

    switch (page) {
      case 'home':
        index = getHoverSubNavItemIndex()

        $subNavWorkList.on('mouseenter', '.sub-part-name-js', onMouseEnterSubPartName)
        $('.index-arrow-js').on('click', onClickIndexArrow)

        setHoverSubNavItem(index)
        setActiveProjectItem(index)
        break
      case 'project':
        index = getHoverSubNavItemIndex()
        break
      default:
        console.log('default anim here ?')
        break
    }
  }

  function onMouseEnterSubPartName () {
    var $this = $(this)
    var index = $this.parents('.sub-nav-work-item-js').index()

    setHoverSubNavItem(index)
    setActiveProjectItem(index)
  }

  function onClickIndexArrow (e) {
    var $arrow = $(e.currentTarget)
    var $list = $('.projects-list-js')
    var $items = $list.children()
    var length = $items.length - 1
    var currentIndex = $list.find('.active').index()
    var index = currentIndex
    // var direction = 'next'

    if ($arrow.attr('data-direction') === 'prev') {
      // direction = 'prev'
      index = index - 1
      if (index < 0) {
        index = length
      }
    } else {
      index = index + 1
      if (index > length) {
        index = 0
      }
    }

    setHoverSubNavItem(index)
    setActiveProjectItem(index)
  }

  function getHoverSubNavItemIndex () {
    var $hoverItem = $subNavWorkList.children('.hover')
    var index = 0

    if ($hoverItem.length > 0) {
      index = $hoverItem.index()
    }

    return index
  }

  function setHoverSubNavItem (index) {
    var hoverSubNav = $subNavItem[index]

    $subNavItem.removeClass('hover')
    $(hoverSubNav).addClass('hover')
  }

  function setActiveProjectItem (index) {
    var activeProject = $projectItem[index]

    $projectItem.removeClass('active').addClass('hidden')
    $(activeProject).addClass('active').removeClass('hidden')
  }
})
