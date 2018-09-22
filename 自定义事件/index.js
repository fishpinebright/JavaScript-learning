function EventEmitter() {
  this.handlers={},
  this.handlersOnce={}
}
EventEmitter.prototype.on = function(name,callback){
  var handlers = this.handlers;
  if(!handlers[name]){
    handlers[name] = []
  }
  handlers[name].push(callback)
}
EventEmitter.prototype.once = function(name,callback){
  var handlers = this.handlers;
  if(!handlers[name]){
    handlers[name] = []
  }
  handlers[name].push(callback)

  var handlersOnce = this.handlersOnce;
  if(!handlersOnce[name]){
    handlersOnce[name] = []
  }
  handlersOnce[name].push(callback)
}
EventEmitter.prototype.emit = function(name,...data){
  var eventHandlers = this.handlers[name];
  var eventHandlerOnce = this.handlersOnce[name];
  if(eventHandlers){
    for(let i=0;i<eventHandlers.length;i++){
      eventHandlers[i](...data)
    }
  }
  if(eventHandlerOnce){
    for(let i=0;i<eventHandlerOnce.length;i++){
      this.remove(name,eventHandlerOnce[i])
    }
    this.handlersOnce[name] = null;
  }
}
EventEmitter.prototype.remove = function(name,callback){
  var eventHandlers = this.handlers[name];
  if(eventHandlers){
    let index = eventHandlers.indexOf(callback)
    if(index>-1){
      this.handlers[name].splice(index,1)
    }
  }
}

// 新建一个emitter对象

var emitter = new EventEmitter()


var log = console.log

// 注册事件

emitter.on('someTask', log)

// 触发事件

emitter.emit('someTask', 1, 2) // 1 2

// 注册once事件

emitter.once('onceTask', log)

// 触发事件

emitter.emit('onceTask', 1) // 1

// 触发事件

emitter.emit('onceTask', 1) // 不输出

// 移除监听函数

emitter.remove('someTask', log)

// 触发事件

emitter.emit('someTask', 1) // 不输出