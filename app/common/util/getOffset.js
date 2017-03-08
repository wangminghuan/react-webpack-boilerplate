
// 获得当前元素相对于document的位置与宽高。返回一个对象含有： top, left, width和height

export function getOffset(ele){
  if (!ele) return null;
  // viewpoint
  if (ele == window) return {
    height: window.innerHeight,
    width: window.innerWidth,
  }

  // 普通节点
  var obj = ele.getBoundingClientRect();
  return {
    left: obj.left + window.pageXOffset,
    top: obj.top + window.pageYOffset,
    width: Math.round(obj.width),
    height: Math.round(obj.height)
  }
}

export function getScollTop(ele){
  return ele.scrollTop ? ele.scrollTop : ele.pageYOffset
}
