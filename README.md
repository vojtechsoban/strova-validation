# strova-validation

Validation functions

| function | description |
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


[![Build Status](https://travis-ci.org/vojtechsoban/strova-validation.svg?branch=master)](https://travis-ci.org/vojtechsoban/strova-validation)
