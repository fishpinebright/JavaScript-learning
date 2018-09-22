//评测题目: 实现一个计算当年还剩多少时间的倒数计时程序,要求网页上实时动态显示"××年还剩××天××时××分××秒"
function counter(){
  let now = new Date();
  let year = now.getFullYear();
  let final = new Date(year,11,31,23,59,59);
  let time = (final - now)/1000;
  let day = Math.floor(time / (60*60*24));
  let hour = Math.floor(time % (60*60*24) / (60*60))
  let minute = Math.floor(time % (60*60*24) % (60*60) / 60 )
  let second = Math.floor(time % (60*60*24) % (60*60) % 60)
  let str = `${year}年还剩${day}天${hour}时${minute}分${second}秒`
  console.log(str)
}
setInterval(counter,1000)