
import Cookies from 'js-cookie'
function deep(obj) {
  //判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
  var objClone = Array.isArray(obj) ? [] : {};
  //进行深拷贝的不能为空，并且是对象或者是
  if (obj && typeof obj === "object") {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === "object") {
          objClone[key] = deep(obj[key]);
        } else {
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
}
function setCookie(name,value) {
  Cookies.set(name, value, { expires: 5 });
}

function getCookie(name) {
  return Cookies.get(name);
}

function isUndefined(value) {
  return typeof value == "undefined" ? true : false;
}

export {
  deep,
  setCookie,
  getCookie,
  isUndefined
}