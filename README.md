# Set

Set utility in Javascript (and Typescript).

Set are native in Javascript (since ES6). But the supported operations are limited. No union, intersection, include, etc.
This library tries to provide all missing basic functions.

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
const c = Setx.union(a, b);
const d = new Set([1, 2, 3, 4, 5]);
const result = Setx.areEquals(c, d);
// result is true
```

## Participating

Do not hesitate to bring your contribution to this project. Fork and Pull Request are welcome.

## License

ISC

## Author

Jean-Louis GUENEGO <jlguenego@gmail.com>

```

```
