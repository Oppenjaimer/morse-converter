import chars from "./chars";

type Options = {
  dot?: string;
  dash?: string;
  space?: string;
  separator?: string;
  unknown?: string;
};

type MorseChar = keyof typeof chars;

function setOptions(options?: Options): Options {
  options = options || {};

  return {
    dot: options.dot || ".",
    dash: options.dash || "-",
    space: options.space || "/",
    separator: options.separator || " ",
    unknown: options.unknown || "?"
  };
}

function getChar(char: string, options: Options): string | undefined {
  return chars[char.toUpperCase() as MorseChar]?.replace(/0/g, options.dot!).replace(/1/g, options.dash!);
}

export function encode(msg: string, opts?: Options): string {
  const options = setOptions(opts);

  return msg
    .replace(/ +/, " ")
    .split("")
    .map(c => (c === " " ? options.space : getChar(c, options) || options.unknown))
    .join(options.separator);
}

export function decode(msg: string, opts?: Options): string {
  const options = setOptions(opts);

  return msg
    .split(options.separator!)
    .map(c => (c === options.space ? " " : Object.keys(chars).filter(k => getChar(k, options) === c)[0] || options.unknown))
    .join("");
}
