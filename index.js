const characters = require("./characters");

function setOptions(options) {
  options = options || {};
  options = {
    dot: options.dot || ".",
    dash: options.dash || "-",
    space: options.space || "/",
    separator: options.separator || " ",
    unknown: options.unknown || "?"
  };

  return options;
}

function encode(str, options) {
  options = setOptions(options);

  let result = str.split("");
  for (let i in result) {
    if (result[i] == " ") {
      result[i] = options.space;
    } else {
      if (typeof characters[result[i].toUpperCase()] != "undefined") {
        result[i] = characters[result[i].toUpperCase()].replace(/0/g, options.dot).replace(/1/g, options.dash);
      } else {
        result[i] = options.unknown;
      }
    }
  }

  return result.join(options.separator);
}

function decode(str, options) {
  options = setOptions(options);

  let result = str.split(options.separator);
  for (let i in result) {
    if (result[i] == options.space) {
      result[i] = " ";
      continue;
    }
    let known = false;
    for (let j in characters) {
      if (characters[j].replace(/0/g, options.dot).replace(/1/g, options.dash) == result[i]) {
        result[i] = j;
        known = true;
      }
    }
    if (!known) result[i] = options.unknown;
  }

  return result.join("");
}

module.exports = {
  encode: encode,
  decode: decode
};
