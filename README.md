# Set

Set utility in Javascript (and Typescript).

Set are native in Javascript (since ES6). But the supported operations are limited. No union, intersection, include, etc.
This library tries to provide all missing basic functions.

This library covers the concept exposed in the 1972 book from Aho & Ullman, The Theory of Parsing, Translation, and Compiling.

## Install

```
npm i @jlguenego/set
```

This library exposes both:

- **ES2015** module that can be tree-shaked by Webpack for Angular etc.
- **CommonJS** module for traditionnal node way.

It is ready to use for both browsers and node app.

## Usage

```ts
const a = new Set([1, 2, 3]);
const b = new Set([3, 4, 5]);
const c = Sets.union(a, b);
const d = new Set([1, 2, 3, 4, 5]);
assert(Sets.areEquals(c, d));
const e = Sets.intersection(a, b);
const f = new Set([3]);
assert(Sets.areEquals(e, f));
// etc.
```

## API

[See the typedoc documentation](./docs/api/modules.md)

## Examples

[See all examples in the test suite.](./test)

## Participating

Do not hesitate to bring your contribution to this project. Fork and Pull Request are welcome.

## Bibliography

- [Aho & Ullman, The Theory of Parsing, Translation, and Compiling](https://dl.acm.org/doi/book/10.5555/578789)

## License

ISC

## Author

Jean-Louis GUENEGO <jlguenego@gmail.com>

```

```
