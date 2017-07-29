export const notNull = (arg) => (!!arg || arg === 0 || arg === '' || arg === false);

export const notBlank = (arg) => (typeof arg === 'string' && arg.trim().length > 0);

export const notEmpty = (arg) => (!!arg);
