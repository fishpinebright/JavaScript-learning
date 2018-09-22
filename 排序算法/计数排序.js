// 使用obj对象
function sortNum(arr) {
  let obj={}
  let newArr=[]
  console.time('计数排序1耗时:');
  for(let i=0;i<arr.length;i++) {
      if(!obj[arr[i]]) {
          obj[arr[i]]=1
      }else{
          obj[arr[i]]++
      }
  }
  for(let key in obj) {
      for(let j=obj[key];j>0;j--) {
          newArr.push(parseInt(key))
      }
  }
  console.timeEnd('计数排序1耗时:');
  return newArr
}

// 使用数组，但时间复杂度是(n+k),k为传入数组的最大值
function countingSort2(arr) {
    let temp=[]
    let newArr=[]
    let len=arr.length
    console.time('计数排序2耗时:');
    for(let i=0;i<arr.length;i++) {
        if(!temp[arr[i]]) {
            temp[arr[i]]=1
        }else{
            temp[arr[i]]++
        }
    }
    for(let j=0;j<temp.length;j++) {
        if(temp[j]){
            for(let k=0;k<temp[j];k++) {
                newArr.push(j)
            }
        }
    }
    console.timeEnd('计数排序2耗时:');
    return newArr
    }