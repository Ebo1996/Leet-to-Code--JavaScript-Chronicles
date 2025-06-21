function checkIfInstanceOf(obj, classFunction) {
  if (obj == null || typeof classFunction !== 'function') {
    return false;
  }


  if (
    (typeof obj === 'number' && classFunction === Number) ||
    (typeof obj === 'string' && classFunction === String) ||
    (typeof obj === 'boolean' && classFunction === Boolean) ||
    (typeof obj === 'symbol' && classFunction === Symbol) ||
    (typeof obj === 'bigint' && classFunction === BigInt)
  ) {
    return true;
  }

  let prototype = Object.getPrototypeOf(obj);
  while (prototype !== null) {
    if (prototype === classFunction.prototype) {
      return true;
    }
    prototype = Object.getPrototypeOf(prototype);
  }

  return false;
}
