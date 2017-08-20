# strova-validation

Validation library for common use cases like notNull, notEmpty, min, max, ...
Intention of this library is to support user entry validation and to support
 [strova-assert](https://github.com/vojtechsoban/strova-assert/#readme) that supports
 [Defensive programming](https://en.wikipedia.org/wiki/Defensive_programming).

| Function | Description |
| --- | --- |
| isNull(arg) | returns ``true`` when argument is ``null`` or ``undefined`` |
| notNull(arg) | negated ``isNull(arg)`` |
| isBlank(arg) | for ``string`` only: returns ``true`` when argument is ``null``, ``undefined``, an empty ``string`` or ``string`` containing only white spaces.|
| notBlank(arg) | negated ``isBlank(arg)`` |
| isEmpty(arg) | returns ``true`` when tested argument is ``null`` or ``undefined``, empty ``''`` ``string``, zero sized ``Array`` or ``Map``, ``Object`` without properties |
| notEmpty(arg) | negated ``isEmpty(arg)`` |
| isNumber(arg) | ``true`` when argument is ``number`` |
| isInteger(arg) | ``true`` when argument is integer number |
| max(arg, limit) | ``true`` when ``arg`` is ``number`` and is less or equal to ``limit`` |
| min(arg, limit) | ``true`` when ``arg`` is ``number`` and is greater or equal to ``limit`` |

Install
-------

```
npm i --save strova-validation
```

Example
-------

```javascript
import {notNull, isNull, notBlank, min} from 'strova-validation';

const validateUser = (firstName, middleName, lastName, age) => (
  notBlank(firstName)
  && (isNull(middleName) || notBlank(middleName))
  && notBlank(lastName)
  && (notNull(age) && min(age, 1))
);

if (!validateUser('John')) {
  console.error('User is not valid');
}

```

See [example.spec.js](src/__test__/example.spec.js) for more detailed example using tests.

[![Build Status](https://travis-ci.org/vojtechsoban/strova-validation.svg?branch=master)](https://travis-ci.org/vojtechsoban/strova-validation)
