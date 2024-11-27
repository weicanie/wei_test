function debounce(fn, delay, immediate = false, ...arg) {
  let id = null 
  let firstDone = false
  const exec = function() {
    //首次无延迟执行
    if(immediate&&!firstDone) {
      exec.result = fn.apply(this, arg)
      firstDone = true
      return
    }
    if(id) clearTimeout(id)
    //通过promise获取结果
    new Promise((resolve, reject) => {
      id = setTimeout(() => {
        resolve( fn.apply(this, arg) )
      }, delay)
    }).then((res) => {
      exec.result = res
    })
  }
  //取消回调的执行
  exec.cancel = function() {
    if(id) {
      clearTimeout(id);
      console.log('取消成功')
      return true;
    } else {
      console.log('当前无回调')
      return false;
    }
  }
  return exec;
}

//其它代码也放到promise里、返回promise，等价，对象是扁平的一张表（不产生作用域）
function debounce2(fn, delay, immediate = false, ...arg) {
  let id = null 
  let firstDone = false

  const exec = function() {
    //通过promise获取结果
    return new Promise((resolve, reject) => {
    //首次无延迟执行
      if(immediate&&!firstDone) {
        exec.result = fn.apply(this, arg)
        firstDone = true
        return
      }

      if(id) clearTimeout(id)
      id = setTimeout(() => {
        resolve( fn.apply(this, arg) )
      }, delay)
    }).then((res) => {
      exec.result = res
    })
  }
  //取消回调的执行
  exec.cancel = function() {
    if(id) {
      clearTimeout(id);
      console.log('取消成功')
      return true;
    } else {
      console.log('当前无回调')
      return false;
    }
  }
  return exec
}

export default debounce