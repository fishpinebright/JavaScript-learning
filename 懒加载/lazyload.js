var viewHeight = document.documentElement.clientHeight // 获取可视区域高度

function lazyload(){
  var eles = document.querySelectorAll('img[data-origin][lazyload]')
  Array.prototype.forEach.call(eles,function(item, index){
    if(item.dataset.original === ''){
      return
    }
    var rect = item.getBoundingClientRect()

    if(rect.bottom >=0 && rect.top < viewHeight){
      !function(){
        var img = new Image()
        img.src = item.dataset.original
        img.onload = function(){
          item.src = img.src
        }
        item.removeAttribute('data-original')
        item.removeAttribute('lazyload')
      }()
    }
  })
}

lazyload() // 首屏,在scroll之前就加载

document.addEventListener('scroll', lazyload)