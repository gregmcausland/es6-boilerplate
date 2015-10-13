
import './polyfills/object.assign';
import './polyfills/array.from';
import './polyfills/array.foreach';
import './polyfills/array.map';
import './polyfills/array.includes';

import es6Promise from 'es6-promise';
es6Promise.polyfill();

import './polyfills/fetch';
