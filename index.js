class Formatter {

  static capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }

  static sanitize(input) {
    return input.replace(/[^a-zA-Z0-9\s'-]/g, "");
  }

  static titleize(input) {
    const exceptions = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    const words = input.split(" ");
    for (let i = 0; i < words.length; i++) {
      if (i === 0 || !exceptions.includes(words[i])) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      }
    }
    return words.join(" ");
  }
}