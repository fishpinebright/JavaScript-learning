var x = 1;
var obj = {
    x:2
}
function fn(){
    console.log(this.x)
    console.log('arguments',...arguments)
}
fn.__proto__.bind2 = function(p){
    return function(){
      return  fn.apply(p,arguments)
    }
}

console.log(fn(1,3))
var fn2 = fn.bind2(obj)
console.log(fn2(1,3))