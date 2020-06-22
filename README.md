# morse-converter

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

## Options

Both `encode()` and `decode()` methods use the same options, which by default are:

```
{
  dot: ".",
  dash: "-",
  space: "/",
  separator: " ",
  unknown: "?"
}
```

* *dot*: the string used as dot
* *dash*: the string used as dash
* *space*: the string used as space between words
* *separator*: the string used as separator between characters
* *unknown*: the string used to replace unsupported characters (supported characters in `characters.js`)
