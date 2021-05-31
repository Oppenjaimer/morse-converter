# morse-converter

[![NPM](https://nodei.co/npm/morse-converter.png)](https://nodei.co/npm/morse-converter/)

A Morse code encoding and decoding library with support for Latin characters, numbers and punctuation.

## Installation

```bash
$ npm install morse-converter
```

## Usage

```javascript
const morse = require("morse-converter");

const encoded = morse.encode("Morse");
// -- --- .-. ... .

const decoded = morse.decode("-.-. --- -.. .");
// CODE

const custom = morse.encode("is great! ñ", {
  dot: "o",
  dash: "a",
  space: "_",
  separator: "|",
  unknown: "#"
});
// oo|ooo|_|aao|oao|o|oa|a|aoaoaa|_|#
```

## Documentation

Check out the documentation [here](https://github.com/JaimermXD/morse-converter/tree/master/docs/index.md).

## Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you would like to change.

## License

Released under the [MIT](https://github.com/JaimermXD/morse-converter/blob/master/LICENSE) license.
