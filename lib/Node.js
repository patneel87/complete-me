export default class Node {
  constructor(letter, wordEnd) {
    this.letter = letter;
    this.children = {};
    this.wordEnd = false;
    this.popularity = 0;

  }
}