<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# iterForEach

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an iterator which invokes a function for each iterated value before returning the iterated value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import iterForEach from 'https://cdn.jsdelivr.net/gh/stdlib-js/iter-for-each@esm/index.mjs';
```

#### iterForEach( iterator, fcn\[, thisArg] )

Returns an iterator which invokes a `function` for each iterated value **before** returning the iterated value.

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@esm/index.mjs';

function assert( v ) {
    if ( v !== v ) {
        throw new Error( 'should not be NaN' );
    }
}

var it = iterForEach( array2iterator( [ 1, 2, 3, 4 ] ), assert );
// returns <Object>

var r = it.next().value;
// returns 1

r = it.next().value;
// returns 2

r = it.next().value;
// returns 3

// ...
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

The invoked function is provided two arguments:

-   **value**: iterated value.
-   **index**: iteration index (zero-based).

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@esm/index.mjs';

function assert( v, i ) {
    if ( i < 0 ) {
        throw new Error( 'unexpected Error' );
    }
}

var it = iterForEach( array2iterator( [ 1, 2, 3, 4 ] ), assert );
// returns <Object>

var r = it.next().value;
// returns 1

r = it.next().value;
// returns 2

r = it.next().value;
// returns 3

// ...
```

To set the execution context for `fcn`, provide a `thisArg`.

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@esm/index.mjs';

function assert( v ) {
    this.count += 1;
    if ( v !== v ) {
        throw new Error( 'should not be NaN' );
    }
}

var ctx = {
    'count': 0
};

var it = iterForEach( array2iterator( [ 1, 2, 3, 4 ] ), assert, ctx );
// returns <Object>

var r = it.next().value;
// returns 1

r = it.next().value;
// returns 2

r = it.next().value;
// returns 3

var count = ctx.count;
// returns 3
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-iter-randu@esm/index.mjs';
import isnan from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs';
import iterForEach from 'https://cdn.jsdelivr.net/gh/stdlib-js/iter-for-each@esm/index.mjs';

function assert( v ) {
    if ( isnan( v ) ) {
        throw new Error( 'should not be NaN' );
    }
}

// Create a seeded iterator for generating pseudorandom numbers:
var rand = randu({
    'seed': 1234,
    'iter': 10
});

// Create an iterator which validates generated numbers:
var it = iterForEach( rand, assert );

// Perform manual iteration...
var r;
while ( true ) {
    r = it.next();
    if ( r.done ) {
        break;
    }
    console.log( r.value );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/iter-map`][@stdlib/iter/map]</span><span class="delimiter">: </span><span class="description">create an iterator which invokes a function for each iterated value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/iter-for-each.svg
[npm-url]: https://npmjs.org/package/@stdlib/iter-for-each

[test-image]: https://github.com/stdlib-js/iter-for-each/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/iter-for-each/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/iter-for-each/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/iter-for-each?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/iter-for-each.svg
[dependencies-url]: https://david-dm.org/stdlib-js/iter-for-each/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/iter-for-each/tree/deno
[deno-readme]: https://github.com/stdlib-js/iter-for-each/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/iter-for-each/tree/umd
[umd-readme]: https://github.com/stdlib-js/iter-for-each/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/iter-for-each/tree/esm
[esm-readme]: https://github.com/stdlib-js/iter-for-each/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/iter-for-each/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/iter-for-each/main/LICENSE

<!-- <related-links> -->

[@stdlib/iter/map]: https://github.com/stdlib-js/iter-map/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
