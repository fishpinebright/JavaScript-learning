// 快速排序
function quickSort(arr){
  quick(arr,0,arr.length-1)
}
function quick(arr,left,right){
  if(left<right){
    let index = partition(arr,left,right);
    quick(arr,left,index-1);
    quick(arr,index+1,right);
  }
}
// 划分操作
function partition(arr,left,right){
  let i = left,j=right;
  let p = arr[left]; // 取第一个数作为基准
  while(i<j){
    while(arr[j]>p){
      j--;
    }
    if(i<j){
      [arr[i],arr[j]]=[arr[j],arr[i]];
      i++;
    }
    while(arr[i]<p){
      i++;
    }
    if(i<j){
      [arr[i],arr[j]]=[arr[j],arr[i]];
      j--;
    }
  }
  return i; // 返回基准(一开始选择的最左边的数)的位置，基准左边的所有数比它小，右边的所有数比它大
}
// 测试用
let array = []
for(let i=0;i<10000;i++){
  array.push(Math.floor(Math.random()*10000))
}
console.time('快速排序耗时:');
quickSort(array)
console.timeEnd('快速排序耗时:');
console.log(array)