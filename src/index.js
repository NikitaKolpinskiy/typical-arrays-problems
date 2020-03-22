
exports.min = function min (array) {
  if (array && array.length) {
    array.sort((a,b) => a-b);
    return array[0];
  } else {
    return 0;
  }
}

exports.max = function max (array) {
  if (array && array.length) {
    array.sort((a,b) => a-b);
    return array[array.length -1];
  } else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if (array && array.length) {
    return array.reduce((prev, curr) => prev + curr) / array.length;
  } else {
    return 0;
  }
}
