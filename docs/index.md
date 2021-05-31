# Documentation

## Variables

### `.ALPHABET` [READ-ONLY]

> Morse code used by the library.  
> **Type:** [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

## Functions

### `.encode(msg, [opts])`

> Encodes the message provided in Morse code.
> | Parameter | Type | Optional | Default | Description |
> |:-:|:-:|:-:|:-:|:-:|
> | msg | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | | | Message to encode |
> | opts | [Options](#options) | ✔ | _none_ | Encoding options |
> 
> **Returns:** [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### `.decode(msg, [opts])`

> Decodes the message provided from Morse code.
> | Parameter | Type | Optional | Default | Description |
> |:-:|:-:|:-:|:-:|:-:|
> | msg | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | | | Message to decode |
> | opts | [Options](#options) | ✔ | _none_ | Decoding options |
> 
> **Returns:** [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## Typedefs

### `Options`

> Options used for both encoding and decoding messages.
> | Key | Type | Optional | Default | Description |
> |:-:|:-:|:-:|:-:|:-:|
> | dot | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ✔ | `"."` | String used as dot |
> | dash | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ✔ | `"-"` | String used as dash |
> | space | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ✔ | `"/"` | String used as space |
> | separator | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ✔ | `" "` | String used to separate characters |
> | unknown | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ✔ | `"?"` | String used to replace unknown characters |
> 
> **Type:** [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
