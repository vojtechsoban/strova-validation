'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var KEYWORD_NOT_NULL = exports.KEYWORD_NOT_NULL = 'notNull';
var KEYWORD_NOT_EMPTY = exports.KEYWORD_NOT_EMPTY = 'notEmpty';
var KEYWORD_NOT_BLANK = exports.KEYWORD_NOT_BLANK = 'notBlank';
var KEYWORD_NULLABLE = exports.KEYWORD_NULLABLE = 'nullable';

var KEYWORDS = exports.KEYWORDS = [KEYWORD_NOT_NULL, KEYWORD_NOT_EMPTY, KEYWORD_NOT_BLANK, KEYWORD_NULLABLE];

var TYPES = exports.TYPES = ['string', 'number', 'function'];

var TYPE_WHITESPACE = exports.TYPE_WHITESPACE = 'whitespace';
var TYPE_NUMBER = exports.TYPE_NUMBER = 'number';
var TYPE_STRING = exports.TYPE_STRING = 'string';
var TYPE_SYMBOLS = exports.TYPE_SYMBOLS = 'symbols';