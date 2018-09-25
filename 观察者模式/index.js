// 发布者，保存状态，状态变化之后触发所有观察者对象
class Subject {
  constructor(){
    this.state = 0
    this.obserbers = []
  }
  getState(){
    return this.state
  }
  setState(state){
    this.state = state
    this.notifyAllObservers()
  }
  notifyAllObservers(){
    this.obserbers.forEach(observer =>{
      observer.update()
    })
  }
  attach(observer){
    this.obserbers.push(observer)
  }
}

// 观察者
class Observer {
  constructor(name, subject){
    this.name = name
    this.subject = subject
    this.subject.attach(this)
  }
  update(){
    console.log(`${this.name} updata,state: ${this.subject.getState()}`)
  }
}

// 测试
let s = new Subject();
let o1 = new Observer('o1',s)
let o2 = new Observer('o2',s)
let o3 = new Observer('o3',s)

s.setState(1)