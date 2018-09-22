var throttle = createThrottle(() => {
  console.log('throttle')
})
window.addEventListener('scroll', throttle) 

function createThrottle(callback, time) {
  var timer
  time = time || 300 // 给个默认值

  return function () {
      if (!timer) {
          timer = setTimeout(() => {
              callback()
              timer = null
          }, time)
      }
  }
}