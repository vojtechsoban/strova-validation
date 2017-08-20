export const isNull = arg => arg === null || arg === undefined;

export const notNull = arg => !isNull(arg);

export const isBlank = arg => typeof arg !== 'string' || arg.trim().length === 0;

export const notBlank = arg => !isBlank(arg);

export const isEmpty = arg => {
  if (!notNull(arg)) {
    return true;
  } else if (typeof arg === 'string' && arg.length === 0) {
    return true;
  } else if (typeof arg.length === 'number' && arg.length === 0) {
    return true;
  } else if (typeof arg.size === 'number' && arg.length === 0) {
    return true;
  } else if (arg instanceof Object && Object.keys(arg).length === 0) {
    return true;
  } else {
    return false;
  }
};

export const notEmpty = arg => !isEmpty(arg);

export const isNumber = arg => typeof arg === 'number';

export const isInteger = arg => isNumber(arg) && Number.isInteger(Number(arg));

export const max = (arg, limit) => isNull(arg) || isNumber(arg) && arg <= limit;

export const min = (arg, limit) => isNull(arg) || isNumber(arg) && arg >= limit;






